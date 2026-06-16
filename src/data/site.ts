// ─────────────────────────────────────────────────────────────
// 사이트 콘텐츠 — 이 파일만 수정하면 사이트 전체가 바뀝니다.
// ⚠️ 공개 저장소입니다. 공개해도 되는 정보만 입력하세요.
//    (이메일/SNS는 노출을 원하는 것만, 전화번호·상세주소는 권장하지 않음)
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Sihoon Cho',
  nameKo: '조시훈',
  role: 'Software Engineer',
  // 한 줄 소개 (히어로 영역)
  tagline: '문제를 코드로 풀어내는 개발자입니다.',
  // SEO / 메타
  description: 'Sihoon Cho — Software Engineer. Portfolio & projects.',
  url: 'https://chosihoon.github.io',
  // 연락 — 비워두면 해당 버튼이 표시되지 않습니다.
  email: '', // 예: 'you@example.com'
  links: {
    github: 'https://github.com/ChoSihoon',
    linkedin: '', // 예: 'https://www.linkedin.com/in/...'
    blog: '',
  },
};

export const about = {
  heading: 'About',
  // 자기소개 문단 (원하는 만큼 추가)
  paragraphs: [
    '안녕하세요. 사용자에게 가치를 주는 제품을 만드는 데 관심이 많은 소프트웨어 엔지니어입니다.',
    '이 영역의 내용은 src/data/site.ts에서 자유롭게 수정하세요.',
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Java'] },
  { group: 'Frontend', items: ['React', 'Astro', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'PostgreSQL', 'Docker'] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    description: '프로젝트에 대한 한두 문장 설명을 적습니다. 무엇을, 왜, 어떻게 만들었는지.',
    tags: ['TypeScript', 'React'],
    link: '',
    repo: '',
  },
  {
    title: 'Project Two',
    description: '프로젝트 설명. src/data/site.ts의 projects 배열을 수정하세요.',
    tags: ['Python', 'FastAPI'],
    link: '',
    repo: '',
  },
];
