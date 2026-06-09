const PROJECTS = [
  {
    number: '01',
    name: 'iStatis',
    description:
      'AI invoice extraction for a paper trading business. Photographs of handwritten documents become structured financial records via GPT-4o vision and a LangChain agent.',
    tech: ['Python', 'FastAPI', 'LangChain', 'GPT-4o', 'Flutter', 'Supabase'],
    href: 'https://github.com/Awanjee/arco-papers-api',
  },
  {
    number: '02',
    name: 'Travel Buddy',
    description:
      'Trip planning app with AI-assisted itinerary building. Flutter mobile and web client backed by an ASP.NET Core API.',
    tech: ['Flutter', 'ASP.NET Core', 'Azure', 'OpenAI'],
    href: '#', // repo not yet public
  },
  {
    number: '03',
    name: 'Tashkeel',
    description:
      'Windows desktop app for AI-powered task decomposition. Type a goal, get a structured action plan.',
    tech: ['Flutter Desktop', 'OpenAI', 'Windows'],
    href: 'https://github.com/Awanjee/tashkeel',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-mono text-sm font-semibold text-[#07CEED] tracking-tight">
            awanjee.dev
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Awanjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8b949e] hover:text-[#e2e8f0] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usama-awan-a97743138/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8b949e] hover:text-[#e2e8f0] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:usamaawan925@gmail.com"
              className="text-sm text-[#8b949e] hover:text-[#e2e8f0] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="mx-auto max-w-5xl px-6 py-32">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-5">
            I build production<br />
            <span className="text-[#07CEED]">AI features.</span>
          </h1>
          <p className="font-mono text-lg sm:text-xl text-[#4a5568] mb-12">
            .NET, Flutter, LangChain.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#projects"
              className="border border-[#07CEED] text-[#07CEED] px-6 py-3 text-sm font-semibold rounded hover:bg-[#07CEED] hover:text-black transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="mailto:usamaawan925@gmail.com"
              className="text-sm font-semibold text-[#8b949e] hover:text-[#e2e8f0] px-4 py-3 transition-colors"
            >
              Email Me →
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="py-8 flex items-center gap-3">
            <span className="font-mono text-xs text-[#2d3748]">01 /</span>
            <span className="text-sm text-[#4a5568]">Projects</span>
          </div>
          {PROJECTS.map((project) => (
            <div key={project.name} className="py-10 border-t border-white/5">
              <div className="flex gap-8 sm:gap-16">
                <span className="font-mono text-xs text-[#2d3748] mt-1.5 w-5 flex-shrink-0">
                  {project.number}
                </span>
                <div className="flex-1 min-w-0">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 mb-3"
                  >
                    <h3 className="text-lg font-semibold text-[#e2e8f0] group-hover:text-[#07CEED] transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-[#4a5568] group-hover:text-[#07CEED] transition-colors text-sm">
                      →
                    </span>
                  </a>
                  <p className="text-sm text-[#8b949e] leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-[#4a5568]">
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
      <section id="about" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-[#2d3748]">02 /</span>
            <span className="text-sm text-[#4a5568]">About</span>
          </div>
          <p className="max-w-lg text-[#8b949e] leading-relaxed text-base border-l-2 border-[#07CEED]/20 pl-5">
            Full-stack engineer based in Islamabad, Pakistan. Seven years building production
            systems across enterprise software and fintech. Currently focused on AI integration:
            connecting LLMs to real business workflows using .NET, Python, and Flutter. I care
            about shipping things that work, not just things that demo well.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-[#2d3748]">03 /</span>
            <span className="text-sm text-[#4a5568]">Contact</span>
          </div>
          <div className="flex gap-6 flex-wrap">
            <a
              href="mailto:usamaawan925@gmail.com"
              className="text-sm font-medium text-[#e2e8f0] hover:text-[#07CEED] transition-colors"
            >
              usamaawan925@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usama-awan-a97743138/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8b949e] hover:text-[#07CEED] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Awanjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8b949e] hover:text-[#07CEED] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs text-[#2d3748]">
            © 2026 Usama Awan
          </p>
        </div>
      </footer>

    </div>
  )
}
