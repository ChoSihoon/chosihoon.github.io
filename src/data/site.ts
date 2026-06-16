// ─────────────────────────────────────────────────────────────
// 사이트 콘텐츠 — 이 파일만 수정하면 사이트 전체가 바뀝니다.
// ⚠️ 공개 저장소입니다. 공개해도 되는 정보만 입력하세요.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Sihoon Cho',
  nameKo: '조시훈',
  role: 'Backend · Cloud · DevOps',
  tagline: '안정적인 서버를 만들고 클라우드에서 운영하는 백엔드 개발자입니다.',
  taglineEn: 'A backend developer who builds reliable servers and runs them in the cloud.',
  description:
    'Sihoon Cho (조시훈) — Backend / Cloud / DevOps Engineer. Java·Spring, Python, AWS·GCP.',
  url: 'https://chosihoon.github.io',
  githubUsername: 'ChoSihoon',
  email: 'sihoon.cho.business@gmail.com',
  links: {
    github: 'https://github.com/ChoSihoon',
    linkedin: 'https://www.linkedin.com/in/sihoon-cho-653929312/',
    velog: 'https://velog.io/@sihoon_cho/series',
  },
};

export const about = {
  lead: 'Java/Spring과 Python을 주로 다루며, API 설계부터 클라우드 배포와 운영까지 서비스를 끝까지 책임집니다.',
  highlights: [
    '깔끔하고 테스트 가능한 API와 유지보수하기 좋은 구조를 고민합니다.',
    'AWS/GCP 위에서 Docker 기반의 클라우드 네이티브 인프라를 구축합니다.',
    'CI/CD 파이프라인과 모니터링, 자동화로 안정적인 운영 환경을 만듭니다.',
    '새로운 기술도 빠르게 익혀 현장에 적용합니다.',
  ],
};

export type SkillGroup = { category: string; items: string[] };

// 주력 기술
export const stack: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'SQL', 'C#', 'Bash', 'Shell', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Spring', 'Spring Boot', 'Spring Security', 'REST API', 'WebSocket', 'Gradle', 'Maven', 'JPA', 'Hibernate', 'MyBatis', 'Node.js', 'Express', 'NestJS', 'Django', 'Flask', 'FastAPI'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'Next.js', 'Vue.js', 'Bootstrap', 'Tailwind CSS', 'MUI', 'Three.js'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Infra & DevOps',
    items: ['AWS', 'GCP', 'Linux', 'Ubuntu', 'NGINX', 'Apache Tomcat', 'Docker', 'Docker Compose', 'GitHub Actions', 'Jenkins', 'Grafana', 'Prometheus'],
  },
  {
    category: 'AI / ML / Vision',
    items: ['Ollama', 'Hugging Face', 'OpenCV', 'ComfyUI', 'AUTOMATIC1111', 'Stable Diffusion', 'PyTorch', 'Keras', 'TensorFlow', 'scikit-learn'],
  },
  {
    category: 'Data Analysis',
    items: ['NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Figma', 'Notion', 'Slack', 'Discord', 'IntelliJ IDEA', 'PyCharm', 'DataGrip', 'VS Code', 'Eclipse', 'Vim', 'Postman', 'Swagger', 'Unity', 'Anaconda', 'Jupyter', 'Google Colab'],
  },
];

// 학습 중 · 탐색 중 · 복습 중
export const learning: SkillGroup[] = [
  { category: 'Languages', items: ['C', 'C++', 'Go', 'Kotlin', 'Rust', 'PHP'] },
  { category: 'Backend', items: ['gRPC', 'GraphQL', 'RabbitMQ', 'Apache Kafka'] },
  { category: 'Frontend', items: ['Flutter', 'Sass / SCSS', 'Redux', 'Zustand', 'TanStack Query'] },
  { category: 'Database & Infra', items: ['InfluxDB', 'Elasticsearch', 'Terraform', 'Kubernetes', 'Vercel', 'Netlify'] },
  { category: 'Tools', items: ['Bitbucket', 'Confluence'] },
  { category: 'AI / ML', items: ['RAG', 'LangChain', 'OpenAI API', 'Anthropic API'] },
];
