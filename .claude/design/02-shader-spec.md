# 02 · 셰이더 스펙 (도메인-워프 FBM)

> 개발자 구현 근거. 디자인 의도를 유니폼·범위·커브로 옮긴 문서. 시각 값의 출처는 `01-tokens.md`.
> 설계 §11: **셰이더(색온도·왜곡·카메라)로만 표현. 파티클/지오메트리 인스턴싱 금지.**

## 렌더 형태
- three.js 풀스크린 쿼드(단일 plane) + 프래그먼트 셰이더. 3D 씬/카메라 이동 없음.
- "카메라" = 프래그먼트 uv의 **줌/드리프트**로 은유(`uZoom`, `uTime` 드리프트).
- 페이지 전체 고정: 캔버스는 `position: fixed; inset: 0; z-index:-1`(콘텐츠 아래).

## 노이즈 파이프라인 (Inigo Quilez 도메인 워핑)
```
// p = 화면비 보정된 uv * scale + time drift
q = vec2( fbm(p + 0.0), fbm(p + vec2(5.2,1.3)) );
r = vec2( fbm(p + uWarp*q + vec2(1.7,9.2) + 0.15*uTime),
          fbm(p + uWarp*q + vec2(8.3,2.8)) );
f = fbm(p + uWarp*r);          // 최종 필드 [0,1]
```
- `f` 로 듀오톤 보간, `r`/`q` 경계에 `sand` 정맥을 얇게 얹어 마블감.
- **FBM 파라미터**: octaves `5`, lacunarity `2.0`, gain `0.5`, 기본 scale `2.6`.
  - 모바일/다운스케일 시 octaves `3`로. (`03-guards-fallback.md`)

## 유니폼 계약
| 유니폼 | 타입 | 소스 | 범위 | 비고 |
| --- | --- | --- | --- | --- |
| `uTime` | float | rAF 경과초 | — | 드리프트 속도 `0.03`u/s (`01` 모션 상수) |
| `uScroll` | float | `--scroll`(페이지 진행도) | `0`–`1` | damping 후 전달 |
| `uWarp` | float | `uScroll` 매핑 | `0.35`→`0.85` (`s²`) | 왜곡량 |
| `uColorTemp` | float | `uScroll` 매핑 | `0.72`→`0.18` | 1=warm, 0=cool |
| `uContrast` | float | `uScroll` 매핑 | `0.92`→`1.25` | 듀오톤 분리 |
| `uZoom` | float | `uScroll` 매핑 | `1.00`→`1.08` | uv 줌 |
| `uPointer` | vec2 | 포인터 정규화 | `±0.015` | 미세 패럴랙스(uv 오프셋) |
| `uGrain` | float | 상수/디바이스 | `0.05`(모바일 `0.04`) | 필름 그레인 |
| `uVignette` | float | 상수 | `0.32` | 에지 감광 |
| `uPixelRatio` | float | `min(DPR, cap)` | ≤ `1.75` | DPR 캡(`03`) |
| `uResolution` | vec2 | 캔버스 px | — | 화면비 보정용 |

## 컬러 합성 순서 (프래그먼트 말미)
```
col = mix(BG_LIGHT, ACCENT_COOL, contrastCurve(f, uContrast));   // 듀오톤
col = mix(col, SAND, sandVein(r) * 0.12);                        // 마블 정맥 ≤12%
col = temperature(col, uColorTemp);                              // warm↔cool 이동
col = applyGrain(col, uGrain, uv, uTime);                        // 필름 결
col = applyVignette(col, uv, uVignette);                         // 에지 감광
```
색상 상수(`BG_LIGHT`,`ACCENT_COOL`,`SAND`,`INK`)는 `01-tokens.md` HEX를 linear로 변환해 주입.

## 스무딩(damping) — 필수
- `uScroll`·`uPointer`는 프레임마다 `lerp(current, target, 0.06)` 로 감쇠.
- 스크롤 점프(앵커 이동, 휠 튐) 시 값이 튀면 "영상 스크럽" 환상이 깨진다.

## 하지 말 것
- 파티클/스프라이트/인스턴스드 메쉬로 점·별·먼지 표현 → **금지**(§11).
- 프레임마다 완전 랜덤 그레인(치직거림), 채도 높은 무지개 그라디언트(AI 룩).
- `uWarp`/포인터 과다로 인한 멀미 유발 움직임. 절제가 프리미엄.
