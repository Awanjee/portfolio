import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'iStatis / Arco Papers — Usama Awan',
  description:
    'AI-powered invoice extraction for a paper trading business. GPT-4o vision + LangChain turns handwritten documents into structured financial records.',
}

const STACK = [
  { label: 'Backend', items: ['Python', 'FastAPI', 'LangChain', 'GPT-4o Vision'] },
  { label: 'Client', items: ['Flutter Web', 'Flutter Mobile'] },
  { label: 'Data', items: ['Supabase (Postgres)', 'pgvector'] },
  { label: 'Infra', items: ['Firebase Hosting', 'Cloudflare'] },
]

const HIGHLIGHTS = [
  {
    stat: 'GPT-4o Vision',
    detail: 'Reads handwritten Urdu/English invoices, extracts line items, quantities, prices.',
  },
  {
    stat: 'LangChain Agent',
    detail: 'Orchestrates extraction, validation, and database writes in a single pipeline.',
  },
  {
    stat: 'Live production',
    detail: 'Running on real business data for a paper manufacturing and trading company.',
  },
  {
    stat: 'Flutter client',
    detail: 'Cross-platform: same codebase runs as web app and on Android.',
  },
]

export default function IStatisPage() {
  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line-subtle bg-canvas/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-mono text-small font-semibold text-accent tracking-tight">
            awanjee.dev
          </Link>
          <Link
            href="/"
            className="text-small text-ink-3 hover:text-ink-1 transition-colors"
          >
            ← Back
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-small text-ink-3">Project 01</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-pill border bg-success/10 text-success border-success/30">
              <span className="w-[7px] h-[7px] rounded-full bg-current" />
              Live
            </span>
          </div>
          <h1 className="text-display font-bold text-ink-1 mb-4">
            Arco Papers
          </h1>
          <p className="text-body-lg text-ink-2 max-w-2xl mb-10">
            A paper trading business generates dozens of handwritten invoices every day.
            Arco Papers uses GPT-4o vision and a LangChain agent to photograph those documents
            and turn them into structured financial records in seconds, with zero manual data entry.
          </p>
          <a
            href="https://arco-papers-app-6b721.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-accent text-accent-contrast font-semibold text-small hover:bg-accent-hover active:bg-accent-press transition-colors"
          >
            Launch App →
          </a>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-2 gap-12">
          <div>
            <h2 className="text-h2 text-ink-1 mb-4">The problem</h2>
            <p className="text-body text-ink-2 leading-relaxed">
              A family-run paper manufacturing and trading business in Islamabad was recording
              every purchase and sale invoice manually into spreadsheets. Handwritten documents
              in Urdu and English, multiple suppliers, daily volume. Reconciliation took hours
              and errors slipped through.
            </p>
          </div>
          <div>
            <h2 className="text-h2 text-ink-1 mb-4">The solution</h2>
            <p className="text-body text-ink-2 leading-relaxed">
              A Flutter mobile client lets staff photograph an invoice. A FastAPI backend passes
              the image to GPT-4o Vision via a LangChain agent, extracts line items and totals,
              validates the data, and writes structured records to Supabase. The web dashboard
              gives the owner a live view of inventory and financials.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-h2 text-ink-1 mb-8">How it works</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.stat}
                className="bg-surface-1 border border-line-subtle rounded-lg p-5"
              >
                <p className="font-mono text-small text-accent mb-2">{h.stat}</p>
                <p className="text-body text-ink-2">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-h2 text-ink-1 mb-8">Tech stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STACK.map((group) => (
              <div
                key={group.label}
                className="bg-surface-1 border border-line-subtle rounded-lg p-5"
              >
                <p className="text-small font-semibold text-ink-3 uppercase tracking-wider mb-3">
                  {group.label}
                </p>
                <div className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="font-mono text-small text-ink-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My role */}
      <section className="py-16 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-h2 text-ink-1 mb-4">My role</h2>
          <p className="text-body text-ink-2 leading-relaxed max-w-2xl border-l-2 border-accent/30 pl-5">
            Solo project, end to end. Identified the problem from personal experience with the
            family business, designed the data model, built the FastAPI backend and LangChain
            pipeline, wrote the Flutter client, and deployed to Firebase. The app runs on real
            production data.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-line-subtle">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="https://arco-papers-app-6b721.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-accent text-accent-contrast font-semibold text-small hover:bg-accent-hover active:bg-accent-press transition-colors"
          >
            Launch App →
          </a>
          <Link
            href="/"
            className="inline-flex items-center h-11 px-4 text-small font-semibold text-ink-2 hover:text-ink-1 transition-colors"
          >
            ← All Projects
          </Link>
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
