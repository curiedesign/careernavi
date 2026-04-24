export function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Workbench />
      <Trust />
    </>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">
      <div className="max-w-3xl">
        <p className="text-sm tracking-widest uppercase text-accent mb-6">
          Editorial resumes &middot; Executive polish
        </p>
        <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] tracking-tight mb-8">
          Write your career
          <br />
          <em className="text-warm-charcoal">like it matters.</em>
        </h1>
        <p className="text-xl text-charcoal leading-relaxed max-w-2xl mb-10">
          Resumes, cover letters, and LinkedIn copy drafted with AI you control.
          Bring your own keys or use the free tier. Your words, your voice, your data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#start"
            className="inline-flex items-center justify-center bg-ink text-paper px-8 py-4 text-base font-medium hover:bg-warm-charcoal transition"
          >
            Start drafting &mdash; it&rsquo;s free
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center border border-ink text-ink px-8 py-4 text-base font-medium hover:bg-ink hover:text-paper transition"
          >
            See how it works
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
          <span>&middot; No credit card</span>
          <span>&middot; PII scrubbed before every call</span>
          <span>&middot; Delete anytime</span>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Drop your resume.',
      body: 'Paste text, upload a PDF, or start fresh. We scrub PII and mask employer names before anything leaves your device.',
    },
    {
      n: '02',
      title: 'Draft with AI you own.',
      body: 'Bring your own key for Claude, GPT, Gemini, or 5 more providers. Or use the free tier, no sign-up.',
    },
    {
      n: '03',
      title: 'Elevate and export.',
      body: 'Move each bullet up the ladder: Flat \u2192 Functional \u2192 Impact \u2192 Executive. Export to PDF, DOCX, or plain text.',
    },
  ];
  return (
    <section id="how" className="border-t border-subtle bg-subtle/30">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-16">
          <div>
            <p className="text-sm tracking-widest uppercase text-accent mb-4">How it works</p>
            <h2 className="font-serif text-4xl leading-tight">
              Three steps between
              <br />
              blank page and polished.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-ink pt-6">
              <p className="font-mono text-sm text-accent mb-4">{s.n}</p>
              <h3 className="font-serif text-2xl mb-3 leading-tight">{s.title}</h3>
              <p className="text-charcoal leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workbench() {
  const tools = [
    { label: 'Resume Builder', body: 'Structured sections, bullet elevation, role-aware tone.' },
    { label: 'Cover Letter', body: 'Draft from your resume and a job posting in one pass.' },
    { label: 'Skills Optimizer', body: 'Match your skill set to a role without stuffing keywords.' },
    { label: 'LinkedIn Copy', body: 'Headline, About, and experience blocks in your voice.' },
    { label: 'STAR Breakdown', body: 'Turn a story into Situation-Task-Action-Result bullets.' },
    { label: 'Application Answers', body: 'Short-answer fields drafted and refined in seconds.' },
  ];
  return (
    <section id="workbench" className="border-t border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">The workbench</p>
          <h2 className="font-serif text-4xl leading-tight mb-4">Six tools. One vocabulary.</h2>
          <p className="text-charcoal leading-relaxed">
            Everything shares your profile, your voice, and your evidence. Draft once,
            adapt across formats without retyping the story.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle">
          {tools.map((t) => (
            <div key={t.label} className="bg-paper p-8 hover:bg-subtle/50 transition">
              <h3 className="font-serif text-xl mb-3">{t.label}</h3>
              <p className="text-charcoal leading-relaxed text-sm">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const rows = [
    {
      title: 'PII scrubbing, every call.',
      body: 'Emails, phone numbers, and names are stripped before your text touches any AI provider.',
    },
    {
      title: 'Brand names masked.',
      body: 'Employers, clients, and products become generic descriptors in prompts. Your story, not your NDA violation.',
    },
    {
      title: 'Bring your own keys.',
      body: 'Eight providers supported. Your API key, your bill, your data. We never see your key.',
    },
    {
      title: 'Export and delete.',
      body: 'GDPR-style data export and 30-day deletion grace. You own your drafts.',
    },
  ];
  return (
    <section id="trust" className="border-t border-subtle bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">Privacy first</p>
          <h2 className="font-serif text-4xl leading-tight">Your career story stays yours.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {rows.map((r) => (
            <div key={r.title} className="border-t border-paper/20 pt-6">
              <h3 className="font-serif text-2xl mb-3 leading-tight">{r.title}</h3>
              <p className="text-paper/70 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
