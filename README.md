# chosihoon.github.io

조시훈(Sihoon Cho)의 개인 포트폴리오. **Astro + Tailwind CSS**로 제작한 정적 사이트이며 GitHub Pages로 호스팅됩니다.

🔗 https://chosihoon.github.io

## 기술 스택

- [Astro](https://astro.build/) — 정적 사이트 빌드
- [Tailwind CSS v4](https://tailwindcss.com/) — 스타일링
- GitHub Actions + GitHub Pages — 자동 배포

## 콘텐츠 수정

사이트의 모든 텍스트·프로젝트·링크는 한 파일에서 관리됩니다.

```
src/data/site.ts
```

> ⚠️ 공개 저장소입니다. 공개해도 되는 정보만 입력하세요.
> 전화번호·상세 주소 등 민감정보는 넣지 않는 것을 권장합니다.

## 로컬 개발

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 (http://localhost:4321)
npm run build    # 프로덕션 빌드 (./dist)
npm run preview  # 빌드 결과 미리보기
```

## 브랜치 전략

| 브랜치 | 용도 |
| --- | --- |
| `develop` | 기본 작업 브랜치 (개발/수정) |
| `master` | 배포 브랜치 — push 시 자동으로 GitHub Pages 배포 |

작업은 `develop`에서, 배포는 `develop` → `master` 머지로 진행합니다.

## 배포

`master` 브랜치에 푸시하면 `.github/workflows/deploy.yml`가 자동으로 빌드·배포합니다.

최초 1회 설정: GitHub 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정하세요.
