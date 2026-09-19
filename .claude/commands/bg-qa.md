---
description: 프리미엄 WebGL 배경을 04-qa-acceptance.md 게이트(아트디렉션·스크롤 연출·접근성·폴백·성능·반응형·크로스브라우저)로 점검하고 심각도별 리포트를 낸다.
---

# /bg-qa — 배경 QA 게이트 실행

프리미엄 테마의 도메인-워프 FBM 배경을 릴리즈 게이트로 점검한다.

## 절차
1. 기준 문서를 읽는다: `.claude/design/04-qa-acceptance.md`(체크리스트)와 근거 `00`~`03`.
2. 대상 코드를 확인한다: `src/pages/designs/premium.astro` 배경/캔버스/셰이더/폴백/가드 관련부.
   변경분이 있으면 `git diff`도 함께 본다.
3. 정적으로 검증 가능한 항목(§A~G)을 코드에서 확인한다:
   - §A 아트디렉션: 파티클 부재, 팔레트 정합, 그레인/비네트 존재.
   - §B 스크롤 연출: `uWarp/uColorTemp/uContrast/uZoom` 매핑·커브·damping.
   - §C 접근성: `prefers-reduced-motion` 정지 분기, 캔버스 aria/pointer-events, 본문 대비.
   - §D 폴백: WebGL 미지원·contextlost·motion-off 경로.
   - §E 성능: DPR 캡(≤1.75), 탭숨김 정지, 모바일 다운스케일, CWV 리스크.
   - §F 반응형: 320/375/768/1024/1440/1920 오버플로, dvh/fixed 하단 처리.
   - §G 크로스브라우저: Safari 색공간/그레인 밴딩 리스크.
4. 시각 확인이 필요한 항목은 스크린샷 매트릭스로 무엇을 봐야 하는지 지시한다:
   `{320,768,1024,1440} × {s=0,0.5,1} × {정상, reduced-motion, WebGL-off}`.
   (가능하면 `npm run dev` 후 Playwright/브라우저로 캡처, `.claude/design/qa/<날짜>/`에 저장.)

## 출력
- 체크리스트 A~G를 통과/실패/보류로 표기.
- 실패·보류는 `[심각도] 파일:라인 — 문제 → 제안`.
- 마지막에 **머지 판정**(Approve / Warning / Block).

세부·독립 리뷰가 필요하면 `bg-design-reviewer` 에이전트에 위임한다.

$ARGUMENTS
