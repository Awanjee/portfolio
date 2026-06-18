const PROJECTS = [
  {
    number: '01',
    name: 'iStatis / Arco Papers',
    description:
      'AI invoice extraction for a paper trading business. Photos of handwritten documents become structured financial records via GPT-4o vision and a LangChain agent. Live in production.',
    tech: ['Python', 'FastAPI', 'LangChain', 'GPT-4o', 'Flutter', 'Supabase'],
    href: '/istatis',
    external: false,
    live: true,
  },
  {
    number: '02',
    name: 'Travel Buddy',
    description:
      'Trip planning app with AI-assisted itinerary building. Flutter mobile and web client backed by an ASP.NET Core API.',
    tech: ['Flutter', 'ASP.NET Core', 'Azure', 'OpenAI'],
    href: '#',
    external: false,
    live: false,
  },
  {
    number: '03',
    name: 'Tashkeel',
    description:
      'Windows desktop app for AI-powered task decomposition. Type a goal, get a structured action plan.',
    tech: ['Flutter Desktop', 'OpenAI', 'Windows'],
    href: 'https://github.com/Awanjee/tashkeel',
    external: true,
    live: false,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line-subtle bg-canvas/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-mono text-small font-semibold text-accent tracking-tight">
            awanjee.dev
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Awanjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-ink-3 hover:text-ink-1 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usama-awan-a97743138/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-ink-3 hover:text-ink-1 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:usamaawan925@gmail.com"
              className="text-small text-ink-3 hover:text-ink-1 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="mx-auto max-w-5xl px-6 py-32">
          <p className="font-mono text-small text-ink-3 mb-4 tracking-wider uppercase">
            Full-stack engineer
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-5 text-ink-1">
            I build production<br />
            <span className="text-accent">AI features.</span>
          </h1>
          <p className="text-body-lg text-ink-2 mb-12 max-w-md">
            .NET, Flutter, LangChain. Seven years shipping systems that work, not just demo well.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-accent text-accent-contrast font-semibold text-small hover:bg-accent-hover active:bg-accent-press transition-colors"
            >
              View Projects
            </a>
            <a
              href="mailto:usamaawan925@gmail.com"
              className="inline-flex items-center h-11 px-4 text-small font-semibold text-ink-2 hover:text-ink-1 transition-colors"
            >
              Email Me →
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6">
          <div className="py-8 flex items-center gap-3">
            <span className="font-mono text-small text-ink-3">01 /</span>
            <span className="text-small text-ink-3">Projects</span>
          </div>
          {PROJECTS.map((project) => (
            <div key={project.name} className="py-10 border-t border-line-subtle">
              <div className="flex gap-8 sm:gap-16">
                <span className="font-mono text-small text-ink-3 mt-1.5 w-5 flex-shrink-0">
                  {project.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <a
                      href={project.href}
                      target={project.external ? '_blank' : undefined}
                      rel={project.external ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-2"
                    >
                      <h3 className="text-h3 text-ink-1 group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-ink-3 group-hover:text-accent transition-colors text-small">
                        →
                      </span>
                    </a>
                    {project.live && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-pill border bg-success/10 text-success border-success/30">
                        <span className="w-[7px] h-[7px] rounded-full bg-current" />
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-body text-ink-2 leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-small text-ink-3">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-small text-ink-3">02 /</span>
            <span className="text-small text-ink-3">About</span>
          </div>
          <p className="max-w-lg text-body text-ink-2 leading-relaxed border-l-2 border-accent/30 pl-5">
            Full-stack engineer based in Islamabad, Pakistan. Seven years building production
            systems across enterprise software and fintech. Currently focused on AI integration:
            connecting LLMs to real business workflows using .NET, Python, and Flutter. I care
            about shipping things that work, not just things that demo well.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-small text-ink-3">03 /</span>
            <span className="text-small text-ink-3">Contact</span>
          </div>
          <div className="flex gap-6 flex-wrap">
            <a
              href="mailto:usamaawan925@gmail.com"
              className="text-small font-medium text-ink-1 hover:text-accent transition-colors"
            >
              usamaawan925@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usama-awan-a97743138/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-ink-2 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Awanjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-ink-2 hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line-subtle py-8">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-small text-ink-3">
            © 2026 Usama Awan
          </p>
        </div>
      </footer>

    </div>
  )
}
