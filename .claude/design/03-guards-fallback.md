# 03 · 가드 & 폴백 (성능 · 접근성)

> 배경은 "있으면 좋은 연출"이다. 성능·접근성·저사양에서 **깨지지 않고 우아하게 후퇴**해야 한다.
> 아래는 디자인 수용 기준이기도 하다(미충족 = 머지 불가, `04` 참조).

## 성능 가드
| 가드 | 규칙 | 이유 |
| --- | --- | --- |
| **DPR 캡** | `uPixelRatio = min(devicePixelRatio, 1.75)` | 레티나에서 픽셀 4배 → FBM은 픽셀당 비쌈 |
| **탭 숨김 정지** | `visibilitychange`로 hidden 시 rAF 루프 정지, 복귀 시 재개 | 백그라운드 GPU/배터리 낭비 방지 |
| **오프스크린 정지(선택)** | 배경이 뷰포트 밖이면 정지 — 단 fixed 전면 배경이라 보통 항상 보임 | — |
| **모바일 다운스케일** | 뷰포트 폭 ≤ 640 또는 저성능 힌트 시: 렌더 스케일 `0.6`–`0.75`, FBM octaves `5→3`, `uGrain 0.04` | 모바일 GPU 여력 |
| **캔버스 alpha/antialias** | `antialias:false`, `powerPreference:'high-performance'`, `alpha:true` | AA는 노이즈 배경에 불필요, 비용만 |

## 접근성 가드
| 상황 | 동작 |
| --- | --- |
| `prefers-reduced-motion: reduce` | **애니메이션 정지.** WebGL을 정지 프레임 1장으로 렌더 후 rAF 중단, 또는 아예 CSS 폴백으로. 색·구도는 유지, 움직임만 제거 |
| 포인터 패럴랙스 | reduced-motion 시 비활성 |
| 스크롤 구동 | reduced-motion 시 스크롤로 인한 왜곡/색 변화도 정지(정물 상태 고정) |

## WebGL 폴백 (미지원 · 컨텍스트 실패 · reduced-motion 정적 대안)
WebGL 컨텍스트 생성 실패, `webglcontextlost`, 또는 저사양/motion-off 시 **순수 CSS 배경**으로 대체.
목표: 움직이지 않아도 같은 팔레트의 "마블 정물화"로서 프리미엄 유지.

폴백 구성(예시 방향 — 값은 `01-tokens.md` 팔레트):
- 다중 `radial-gradient` 레이어로 잉크 번짐 은유(`accent` 저채도 + `sand` 웜점 + `paper` 하이라이트).
- 미세 그레인은 인라인 SVG feTurbulence 또는 저용량 노이즈 PNG(≤ 8KB) `background-blend: overlay`.
- 비네트는 `radial-gradient`로 에지 감광.
- **현재 `premium-bg`의 orb/grid 구조를 폴백의 출발점으로 재사용** 가능(이미 유사한 방향).

폴백 판정 순서:
```
if (reduced-motion) → 정적(움직임 없는 WebGL 1프레임 or CSS)
else if (!webglAvailable) → CSS 폴백
else → WebGL 풀 동작 (+ 모바일 다운스케일)
```

## 레이어링 / 가독성
- 캔버스는 콘텐츠 아래(`z-index:-1`), `aria-hidden="true"`, `pointer-events:none`.
- 텍스트가 얹히는 영역은 배경이 과하게 어두워지지 않도록 `uVignette`·`uContrast` 상한 준수.
- 필요 시 콘텐츠 뒤 얇은 `paper` 반투명 판(≤ 8% 알파)으로 대비 보강 — 단 배경을 죽이지 않게.

## 계측 목표 (CWV, `04`에서 검증)
LCP < 2.5s · CLS < 0.1(캔버스는 레이아웃 시프트 0) · INP < 200ms · 배경 유휴 시 메인스레드 blocking 최소.
캔버스는 CLS에 잡히지 않도록 첫 페인트부터 고정 크기 확보.
