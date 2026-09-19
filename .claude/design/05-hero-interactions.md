# 05 · 히어로 인터랙션 스펙 (스크롤 앤 액션)

> 대상: 프리미엄 테마의 히어로/섹션 **콘텐츠 레이어** 스크롤 인터랙션.
> `02-shader-spec.md`가 "배경(WebGL)"이면, 이 문서는 "그 위에 흐르는 콘텐츠"의 움직임을 정의한다.
> 상당수는 이미 `premium.astro`·`Base.astro`에 구현돼 있다 — 여기서 값을 정본화하고 빠진 정책을 확정한다.

## 공통 원칙 (타협 불가)
- **컴포지터 속성만 애니메이션**: `transform`·`opacity`만. `top/left/width/height/margin` 금지.
- **단일 rAF 게이트**: 스크롤 구동은 리스너 1개 + `requestAnimationFrame` 1틱(현재 `premium.astro:1185` 패턴 유지). `passive:true`.
- **`--scroll` 단일 소스**: 페이지 진행도 `0→1`. 배경·콘텐츠·진행바가 같은 변수를 공유(배경 `uScroll`과 동일 소스).
- **점진적 향상**: JS 실패/미로드 시 콘텐츠는 **보이는 상태**여야 한다(영구 `opacity:0` 금지).
- **접근성 우선**: `prefers-reduced-motion:reduce` → 모든 시차·틸트·진입 이동 정지, 콘텐츠는 즉시 최종 상태. 스크롤을 **가두지 않는다**(키보드/스크롤 탈출 항상 가능).

## ① 콘텐츠 다속도 패럴랙스
서로 다른 깊이 레이어를 다른 속도로 이동시켜 입체감. 배경 위 콘텐츠에 적용.

| 레이어 | 스크롤 이동 계수 | 방향 | 현재 코드 |
| --- | --- | --- | --- |
| 배경 필드(WebGL/폴백) | `0` (fixed) | — | `position:fixed` (`03`) |
| 심부 장식 레이어 | `0.15`–`0.25×` | 카운터(반대) | orb `-16vh / 22vh / -8vh` |
| 히어로 타이틀 | `0.08×` down | 순방향 | `heroTitle translateY = min(y,600)*0.08` |
| 본문 콘텐츠 | `1×` (일반 흐름) | — | 정상 스크롤 |

- 변위 상한: 레이어 겹침/빈틈이 생기지 않도록 캡(타이틀 ≤ 600px 소스 기준, 계수 고정).
- 구현: `translate3d`/`translateY`만. `will-change:transform`은 활성 구간에만, 끝나면 해제.
- 모바일(≤640): 계수 60%로 축소(멀미·성능).

## ② 스크롤 진입 애니메이션 (Scroll Trigger)
요소가 뷰포트 진입 시 페이드+상승. 현재 `.reveal` + `IntersectionObserver`(`Base.astro`).

| 토큰 | 값 | 비고 |
| --- | --- | --- |
| 진입 거리 | `translateY(24px) → 0` | 과하지 않게 |
| 지속/ease | `0.8s` · `cubic-bezier(0.16,1,0.3,1)` | 테마 공통 ease |
| stagger 스텝 | `80ms` (0/80/160/240…) | `transition-delay`로 순차 등장 |
| threshold / rootMargin | `0.15` / `0px 0px -10% 0px` | 살짝 일찍 트리거 |
| 재생 | **once**(1회) | 스크롤 역방향 반복 금지(피로) |

- 가드: reduced-motion → 즉시 `is-visible`(전역 CSS가 transition 0으로). no-JS → 요소 기본 노출.

## ③ 스크롤 락 / 스냅 / 핀 (100vh)
**정책 결정** (에디토리얼 가독성 우선):
- 히어로: **풀뷰포트** `min-height:100dvh`(모바일 주소창 대응 — `100vh` 아님). 현재 `100vh` → `dvh`로 교정 권장.
- **전역 mandatory scroll-snap 금지**: 긴 읽기 콘텐츠에서 강제 스냅은 UX 해악. 필요 시 `scroll-snap-type: y proximity`(근접, 강제 아님)만.
- **핀(pin)**: 특정 스토리텔링 순간 한정으로 `position:sticky`(현재 457행 사용). 스크롤을 **잡아두는(scroll-jack) 방식 금지** — sticky 기반만.
- `scroll-snap-align:start` · `scroll-snap-stop:normal`(강제 정지 금지).
- 가드: reduced-motion에서도 스냅 위치는 유효하되 애니메이션은 즉시. 키보드 탭 포커스가 핀 구간에 갇히지 않을 것.

## ④ 마우스무브 + 스크롤 연동 (콘텐츠)
포인터 이동 + 스크롤을 결합해 미세 3D/틸트. 현재 마그네틱 CTA(`pointermove`, strength `0.3`).

| 파라미터 | 값 | 비고 |
| --- | --- | --- |
| 마그네틱 강도 | 버튼 `0.3`, inner `0.12`(0.3×0.4) | 현행 유지 |
| 히어로 틸트 최대 | `±6px` 또는 `±1.5°` | 초과 금지(어지러움) |
| 결합 방식 | 포인터 오프셋 + 스크롤 오프셋을 **한 rAF에서 합산** | 배경 `uPointer`와 일관 |
| damping | `lerp 0.08`/frame | 잔상·부드러움 |

- **터치/coarse 포인터 비활성**: `@media (hover:hover) and (pointer:fine)`에서만 포인터 효과. 모바일 hover 흉내 금지.
- 가드: reduced-motion → 포인터 효과 전면 off.

## 성능 목표 (`04` §H에서 검증)
스크롤 리스너 1개(rAF 게이트) · 레이아웃 읽기/쓰기 프레임당 1회 · transform/opacity만 ·
`will-change` 국소·해제 · INP < 200ms · 스크롤 중 long task 없음.
