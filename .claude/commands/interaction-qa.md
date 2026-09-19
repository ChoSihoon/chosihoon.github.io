---
description: 히어로/섹션 콘텐츠 스크롤 인터랙션(패럴랙스·진입 애니메이션·스냅/핀·포인터+스크롤)을 04-qa-acceptance.md §H 게이트로 점검하고 심각도별 리포트를 낸다.
---

# /interaction-qa — 히어로 인터랙션 QA 게이트

배경 위 콘텐츠의 스크롤 앤 액션을 릴리즈 게이트로 점검한다. (배경 셰이더 자체는 `/bg-qa`.)

## 절차
1. 기준 문서를 읽는다: `.claude/design/05-hero-interactions.md`(스펙)와 `04-qa-acceptance.md` §H(게이트).
2. 대상 코드를 확인한다: `src/pages/designs/premium.astro`(스크롤 rAF·패럴랙스·마그네틱),
   `src/layouts/Base.astro`(`.reveal` IntersectionObserver), `src/styles/global.css`. 변경분은 `git diff`.
3. §H 항목을 정적으로 검증한다:
   - ① 콘텐츠 패럴랙스: 레이어 계수(`05` 표)·겹침/빈틈·transform 사용.
   - ② 스크롤 진입: 진입 거리 24px·ease·stagger 80ms·once 재생.
   - ③ 스냅/핀: `100dvh`·전역 강제 스냅 부재·sticky 기반 핀·스크롤 미차단.
   - ④ 포인터+스크롤: 틸트 상한(±6px/±1.5°)·한 rAF 합산·damping·터치 비활성.
   - 접근성: reduced-motion 정지, no-JS 콘텐츠 노출(점진 향상).
   - 성능: 스크롤 리스너 1개·rAF 게이트·transform/opacity만·long task 없음.
4. 시각/동작 확인이 필요한 항목은 매트릭스로 지시한다:
   `{320,768,1440} × {s=0,0.5,1} × {정상, reduced-motion}` + 터치 디바이스에서 포인터 효과 무효 확인.
   (가능하면 `npm run dev` 후 Playwright로 캡처, `.claude/design/qa/<날짜>/`에 저장.)

## 출력
- §H 항목을 통과/실패/보류로 표기.
- 실패·보류는 `[심각도] 파일:라인 — 문제 → 제안`.
- 마지막에 **머지 판정**(Approve / Warning / Block).

세부·독립 리뷰가 필요하면 `hero-interaction-reviewer` 에이전트에 위임한다.

$ARGUMENTS
