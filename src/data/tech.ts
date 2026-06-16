// ─────────────────────────────────────────────────────────────
// 기술별 브랜드 메타데이터: Simple Icons 슬러그 + 브랜드 컬러(hex)
// 로고: https://cdn.simpleicons.org/<slug>/<hex(without #)>
// slug 가 null 이면 로고 없는 텍스트 배지. (로고 누락 시 클라이언트에서 제거 처리)
// ─────────────────────────────────────────────────────────────

export type TechMeta = { slug: string | null; color: string };

const MAP: Record<string, TechMeta> = {
  // Languages
  Java: { slug: 'openjdk', color: '#007396' },
  Python: { slug: 'python', color: '#3776AB' },
  SQL: { slug: null, color: '#336791' },
  'C#': { slug: null, color: '#239120' },
  Bash: { slug: 'gnubash', color: '#4EAA25' },
  Shell: { slug: null, color: '#89E051' },
  JavaScript: { slug: 'javascript', color: '#F7DF1E' },
  TypeScript: { slug: 'typescript', color: '#3178C6' },
  HTML5: { slug: 'html5', color: '#E34F26' },
  CSS3: { slug: 'css3', color: '#1572B6' },

  // Backend
  Spring: { slug: 'spring', color: '#6DB33F' },
  'Spring Boot': { slug: 'springboot', color: '#6DB33F' },
  'Spring Security': { slug: 'springsecurity', color: '#6DB33F' },
  'REST API': { slug: null, color: '#005571' },
  WebSocket: { slug: null, color: '#4B5563' },
  Gradle: { slug: 'gradle', color: '#02303A' },
  Maven: { slug: 'apachemaven', color: '#C71A36' },
  JPA: { slug: null, color: '#59666C' },
  Hibernate: { slug: 'hibernate', color: '#59666C' },
  MyBatis: { slug: null, color: '#DC382D' },
  'Node.js': { slug: 'nodedotjs', color: '#5FA04E' },
  Express: { slug: 'express', color: '#000000' },
  NestJS: { slug: 'nestjs', color: '#E0234E' },
  Django: { slug: 'django', color: '#092E20' },
  Flask: { slug: 'flask', color: '#000000' },
  FastAPI: { slug: 'fastapi', color: '#009688' },

  // Frontend
  React: { slug: 'react', color: '#61DAFB' },
  Vite: { slug: 'vite', color: '#646CFF' },
  'Next.js': { slug: 'nextdotjs', color: '#000000' },
  'Vue.js': { slug: 'vuedotjs', color: '#4FC08D' },
  Bootstrap: { slug: 'bootstrap', color: '#7952B3' },
  'Tailwind CSS': { slug: 'tailwindcss', color: '#06B6D4' },
  MUI: { slug: 'mui', color: '#007FFF' },
  'Three.js': { slug: 'threedotjs', color: '#000000' },

  // Database
  MySQL: { slug: 'mysql', color: '#4479A1' },
  PostgreSQL: { slug: 'postgresql', color: '#4169E1' },
  Redis: { slug: 'redis', color: '#FF4438' },
  MongoDB: { slug: 'mongodb', color: '#47A248' },
  SQLite: { slug: 'sqlite', color: '#003B57' },

  // Infra & DevOps
  AWS: { slug: 'amazonwebservices', color: '#FF9900' },
  GCP: { slug: 'googlecloud', color: '#4285F4' },
  Linux: { slug: 'linux', color: '#FCC624' },
  Ubuntu: { slug: 'ubuntu', color: '#E95420' },
  NGINX: { slug: 'nginx', color: '#009639' },
  'Apache Tomcat': { slug: 'apachetomcat', color: '#F8DC75' },
  Docker: { slug: 'docker', color: '#2496ED' },
  'Docker Compose': { slug: 'docker', color: '#2496ED' },
  'GitHub Actions': { slug: 'githubactions', color: '#2088FF' },
  Jenkins: { slug: 'jenkins', color: '#D24939' },
  Grafana: { slug: 'grafana', color: '#F46800' },
  Prometheus: { slug: 'prometheus', color: '#E6522C' },

  // AI / ML / Vision
  Ollama: { slug: 'ollama', color: '#000000' },
  'Hugging Face': { slug: 'huggingface', color: '#FFD21E' },
  OpenCV: { slug: 'opencv', color: '#5C3EE8' },
  ComfyUI: { slug: null, color: '#7B2FBE' },
  AUTOMATIC1111: { slug: null, color: '#FF7C00' },
  'Stable Diffusion': { slug: null, color: '#4B0082' },
  PyTorch: { slug: 'pytorch', color: '#EE4C2C' },
  Keras: { slug: 'keras', color: '#D00000' },
  TensorFlow: { slug: 'tensorflow', color: '#FF6F00' },
  'scikit-learn': { slug: 'scikitlearn', color: '#F7931E' },

  // Data Analysis
  NumPy: { slug: 'numpy', color: '#4D77CF' },
  Pandas: { slug: 'pandas', color: '#150458' },
  Matplotlib: { slug: null, color: '#11557C' },

  // Tools
  Git: { slug: 'git', color: '#F05032' },
  GitHub: { slug: 'github', color: '#181717' },
  GitLab: { slug: 'gitlab', color: '#FC6D26' },
  Jira: { slug: 'jira', color: '#0052CC' },
  Figma: { slug: 'figma', color: '#F24E1E' },
  Notion: { slug: 'notion', color: '#000000' },
  Slack: { slug: 'slack', color: '#4A154B' },
  Discord: { slug: 'discord', color: '#5865F2' },
  'IntelliJ IDEA': { slug: 'intellijidea', color: '#000000' },
  PyCharm: { slug: 'pycharm', color: '#000000' },
  DataGrip: { slug: 'datagrip', color: '#000000' },
  'VS Code': { slug: 'visualstudiocode', color: '#007ACC' },
  Eclipse: { slug: 'eclipseide', color: '#2C2255' },
  Vim: { slug: 'vim', color: '#019733' },
  Postman: { slug: 'postman', color: '#FF6C37' },
  Swagger: { slug: 'swagger', color: '#85EA2D' },
  Unity: { slug: 'unity', color: '#000000' },
  Anaconda: { slug: 'anaconda', color: '#44A833' },
  Jupyter: { slug: 'jupyter', color: '#F37726' },
  'Google Colab': { slug: 'googlecolab', color: '#F9AB00' },

  // Learning — Languages
  C: { slug: 'c', color: '#A8B9CC' },
  'C++': { slug: 'cplusplus', color: '#00599C' },
  Go: { slug: 'go', color: '#00ADD8' },
  Kotlin: { slug: 'kotlin', color: '#7F52FF' },
  Rust: { slug: 'rust', color: '#000000' },
  PHP: { slug: 'php', color: '#777BB4' },

  // Learning — Backend
  gRPC: { slug: null, color: '#244C5A' },
  GraphQL: { slug: 'graphql', color: '#E10098' },
  RabbitMQ: { slug: 'rabbitmq', color: '#FF6600' },
  'Apache Kafka': { slug: 'apachekafka', color: '#231F20' },

  // Learning — Frontend
  Flutter: { slug: 'flutter', color: '#02569B' },
  'Sass / SCSS': { slug: 'sass', color: '#CC6699' },
  Redux: { slug: 'redux', color: '#764ABC' },
  Zustand: { slug: null, color: '#433E38' },
  'TanStack Query': { slug: 'reactquery', color: '#FF4154' },

  // Learning — Database & Infra
  InfluxDB: { slug: 'influxdb', color: '#22ADF6' },
  Elasticsearch: { slug: 'elasticsearch', color: '#005571' },
  Terraform: { slug: 'terraform', color: '#7B42BC' },
  Kubernetes: { slug: 'kubernetes', color: '#326CE5' },
  Vercel: { slug: 'vercel', color: '#000000' },
  Netlify: { slug: 'netlify', color: '#00C7B7' },

  // Learning — Tools
  Bitbucket: { slug: 'bitbucket', color: '#0052CC' },
  Confluence: { slug: 'confluence', color: '#172B4D' },

  // Learning — AI / ML
  RAG: { slug: null, color: '#008080' },
  LangChain: { slug: 'langchain', color: '#1C3C3C' },
  'OpenAI API': { slug: 'openai', color: '#412991' },
  'Anthropic API': { slug: 'anthropic', color: '#D97757' },
};

const FALLBACK: TechMeta = { slug: null, color: '#888888' };

export function getTech(name: string): TechMeta {
  return MAP[name] ?? FALLBACK;
}

/** Simple Icons CDN 로고 URL (브랜드 컬러로 렌더). slug 없으면 null. */
export function techLogo(name: string, colorOverride?: string): string | null {
  const t = getTech(name);
  if (!t.slug) return null;
  const hex = (colorOverride ?? t.color).replace('#', '');
  return `https://cdn.simpleicons.org/${t.slug}/${hex}`;
}
