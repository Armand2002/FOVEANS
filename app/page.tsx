'use client';
import BlurText from '@/components/animations/BlurText';
import CountUp from '@/components/animations/CountUp';
import SpotlightCard from '@/components/animations/Spotlight';
import TiltCard from '@/components/animations/TiltCard';
import Marquee from '@/components/animations/Marquee';
import DitherClient from '@/components/animations/DitherClient';
import CardSwap, { Card } from '@/components/animations/CardSwap';
import ScrollReveal from '@/components/animations/ScrollReveal';

// ─────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────
function Nav() {
  const links = ['Storia', 'Prodotti', 'Valori', 'Team', 'Investitori', 'Carriere', 'Contatti'];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-[68px]
                    bg-black/80 backdrop-blur-2xl border-b border-white/[0.06]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent-1)] flex items-center justify-center shadow-[0_0_20px_var(--glow-1)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="8" cy="8" r="2" fill="white"/>
          </svg>
        </div>
        <span className="text-[17px] font-bold tracking-[-0.02em] text-white">foveans</span>
      </div>
      <div className="hidden md:flex items-center gap-0.5">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
             className="px-4 py-2 text-[13px] font-medium text-zinc-400
                        hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]">
            {l}
          </a>
        ))}
      </div>
      <a href="#contatti"
         className="px-5 py-2 rounded-lg text-[13px] font-semibold text-white bg-[var(--accent-1)]
                    hover:bg-[var(--accent-3)] shadow-[0_0_20px_var(--glow-1)]
                    hover:shadow-[0_0_32px_var(--glow-1)] transition-all duration-200">
        Parla con Foveans
      </a>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────
function Hero() {
  const agents = [
    { id: 'ARIA-7', task: 'Processing enterprise contract batch', pct: 87, status: 'running' },
    { id: 'ARIA-12', task: 'Anomaly detection — dataset 3.2GB', pct: 54, status: 'running' },
    { id: 'ARIA-3', task: 'Compliance audit EU AI Act v2', pct: 100, status: 'done' },
    { id: 'ARIA-9', task: 'Multi-modal inference pipeline', pct: 31, status: 'running' },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* ── Layer 0: Dither WebGL waves (red) ── */}
      <div className="absolute inset-0 z-0 opacity-75">
        <DitherClient
          waveColor={[0.45, 0.04, 0.04]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.28}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={2.8}
          waveSpeed={0.045}
          pixelSize={2}
        />
      </div>

      {/* ── Layer 1: CSS grid lines ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.07]"
           style={{
             backgroundImage: `
               linear-gradient(rgba(220,38,38,0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(220,38,38,0.6) 1px, transparent 1px)
             `,
             backgroundSize: '80px 80px',
           }} />

      {/* ── Layer 2: aurora blobs ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[400px] rounded-full blur-[100px]
                        bg-[radial-gradient(ellipse,rgba(220,38,38,0.22)_0%,transparent_60%)]
                        animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] right-[10%] w-[380px] h-[300px] rounded-full blur-[90px]
                        bg-[radial-gradient(ellipse,rgba(153,27,27,0.18)_0%,transparent_60%)]
                        animate-[pulse_6s_ease-in-out_infinite_1s]" />
        <div className="absolute top-[50%] left-[55%] w-[280px] h-[200px] rounded-full blur-[80px]
                        bg-[radial-gradient(ellipse,rgba(239,68,68,0.1)_0%,transparent_60%)]
                        animate-[pulse_5s_ease-in-out_infinite_2s]" />
      </div>

      {/* ── Layer 3: radial vignette ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none
                      bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_10%,rgba(0,0,0,0.5)_60%,#000_100%)]" />

      {/* ── Layer 4: bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-[4]
                      bg-gradient-to-t from-black to-transparent" />

      {/* ── Layer 5: content ── */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto px-6 md:px-16
                      flex flex-col lg:flex-row items-center gap-16">

        {/* Left: copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8
                          border border-[var(--accent-1)]/25 bg-[var(--accent-1)]/10
                          backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-3)] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-3)]">
              AI Infrastructure · Enterprise-grade · EU Compliant
            </span>
          </div>

          <BlurText
            text="Il layer operativo per l'enterprise del prossimo decennio."
            delay={70}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.08] tracking-[-0.03em]
                       text-white mb-6 max-w-[600px]"
          />

          <p className="text-[15px] text-zinc-400 max-w-[480px] leading-relaxed mb-3">
            Foveans progetta e distribuisce infrastruttura tecnologica per sistemi enterprise complessi.
            Dalla governance AI alla computazione quantistica ibrida.
          </p>
          <p className="text-[14px] text-zinc-600 max-w-[440px] leading-relaxed mb-10">
            Affidabile per design. Scalabile per natura. Conforme per default.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a href="#prodotti"
               className="px-7 py-3.5 rounded-xl text-[14px] font-semibold text-white
                          bg-[var(--accent-1)] shadow-[0_0_28px_var(--glow-1)]
                          hover:bg-[var(--accent-3)] hover:shadow-[0_0_44px_var(--glow-1)]
                          hover:scale-[1.02] transition-all duration-200">
              Esplora il prodotto
            </a>
            <a href="#storia"
               className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold
                          text-zinc-300 bg-white/[0.04] border border-white/[0.1]
                          hover:bg-white/[0.07] hover:text-white transition-all duration-200">
              La nostra storia
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: floating ARIA-OP dashboard card */}
        <div className="flex-shrink-0 w-full max-w-[420px] hidden lg:block">
          <div className="rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-2xl overflow-hidden
                          shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(220,38,38,0.1)]">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3
                            border-b border-white/[0.06] bg-zinc-950/80">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[11px] text-zinc-600 ml-2 font-mono">aria-op · cluster-eu-west</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[10px] text-[#10B981] font-semibold">LIVE</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-b border-white/[0.06]">
              {[
                { label: 'Agents', value: '52' },
                { label: 'Tasks/min', value: '1.4k' },
                { label: 'Uptime', value: '99.9%' },
              ].map(s => (
                <div key={s.label} className="px-4 py-3 text-center">
                  <div className="text-[16px] font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Agent list */}
            <div className="px-4 py-3 flex flex-col gap-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-700 mb-1">Active agents</div>
              {agents.map((a) => (
                <div key={a.id} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[var(--accent-1)] font-mono">{a.id}</span>
                      <span className="text-[11px] text-zinc-500 truncate max-w-[200px]">{a.task}</span>
                    </div>
                    <span className={`text-[10px] font-bold ${a.status === 'done' ? 'text-[#10B981]' : 'text-zinc-500'}`}>
                      {a.pct}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500
                                  ${a.status === 'done'
                                    ? 'bg-[#10B981]'
                                    : 'bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-1)]'}`}
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-white/[0.05] flex items-center justify-between">
              <span className="text-[10px] text-zinc-700 font-mono">v1.4.2-stable · EU compliant</span>
              <span className="text-[10px] text-[var(--accent-1)] font-semibold">→ open dashboard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] opacity-25">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-zinc-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// TECH MARQUEE
// ─────────────────────────────────────────────────────────────────
function TechMarquee() {
  const techs = [
    'Kubernetes', 'PyTorch', 'ONNX Runtime', 'gRPC', 'Rust',
    'Temporal', 'NATS', 'Istio', 'Triton Inference Server',
    'OpenTelemetry', 'eBPF', 'RISC-V', 'CUDA', 'WebAssembly',
    'Post-Quantum Crypto', 'ROS2', 'Kafka', 'Ray Cluster',
  ];

  return (
    <div className="border-t border-b border-white/[0.04] py-5 bg-black">
      <Marquee speed={40} pauseOnHover>
        {techs.map((t) => (
          <div key={t} className="flex items-center gap-8 px-8">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-700
                             hover:text-zinc-400 transition-colors whitespace-nowrap">
              {t}
            </span>
            <span className="text-[var(--accent-1)]/30 text-[10px]">◆</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PRODOTTI
// ─────────────────────────────────────────────────────────────────
function Prodotti() {
  return (
    <section id="prodotti" className="relative py-32 overflow-hidden">
      {/* Section bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: `radial-gradient(rgba(220,38,38,0.08) 1px, transparent 1px)`,
             backgroundSize: '32px 32px',
           }} />
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(0,0,0,0.7)_0%,transparent_100%)]" />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: text */}
          <div className="flex-1 max-w-lg">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[var(--accent-1)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Prodotti</span>
              </div>
              <h2 className="text-3xl md:text-[48px] font-bold text-white tracking-tight leading-[1.1] mb-5">
                Stack verticale. <span className="text-[var(--accent-1)]">Architettura</span> coerente.
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
                Tre prodotti che risolvono layer distinti dell&apos;enterprise moderno.
                Ogni componente è autonomo. Insieme formano un sistema operativo per la convergenza tecnologica.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-4">
                {[
                  { icon: '⬡', code: 'ARIA-OP', label: 'AI Agent Orchestration', status: 'In produzione', color: '#10B981' },
                  { icon: '◈', code: 'QARIA', label: 'Quantum AI Orchestration', status: 'Beta · Q4 2026', color: '#F59E0B' },
                  { icon: '⬢', code: 'FOVEANS SUITE', label: 'Enterprise AI Governance', status: 'Roadmap 2027', color: '#818CF8' },
                ].map((item) => (
                  <div key={item.code}
                       className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.05]
                                  bg-white/[0.02] hover:bg-white/[0.04] hover:border-[var(--accent-1)]/20
                                  transition-all duration-200 cursor-default group">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-1)]/10 flex items-center justify-center
                                    text-[var(--accent-1)] flex-shrink-0 group-hover:bg-[var(--accent-1)]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold tracking-widest text-zinc-600">{item.code}</div>
                      <div className="text-[13px] font-semibold text-zinc-300 truncate">{item.label}</div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.color }} />
                      <span className="text-[10px] font-semibold" style={{ color: item.color }}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: CardSwap */}
          <div className="flex-1 relative h-[560px] w-full max-w-[480px]">
              <CardSwap
                cardDistance={55}
                verticalDistance={65}
                delay={4500}
                pauseOnHover
                width={440}
                height={300}
              >
                {/* Card 1 — ARIA-OP */}
                <Card>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#991B1B]
                                        flex items-center justify-center text-white text-sm font-bold">⬡</div>
                        <div>
                          <div className="text-[10px] text-zinc-500 font-bold tracking-widest">ARIA-OP</div>
                          <div className="text-[14px] font-bold text-white">AI Agent Orchestration</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-400">Live</span>
                      </div>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">
                      Orchestra, monitora e governa agenti AI in ambienti enterprise con osservabilità completa.
                    </p>
                    {/* Mini dashboard */}
                    <div className="mt-auto p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="text-[10px] text-zinc-600 mb-2 font-bold uppercase tracking-wide">Active agents</div>
                      <div className="flex gap-2">
                        {[87, 54, 100, 31, 68, 92].map((v, i) => (
                          <div key={i} className="flex-1 rounded-sm"
                               style={{
                                 height: `${v * 0.28}px`,
                                 background: v === 100 ? '#10B981' : `rgba(220,38,38,${0.3 + v * 0.004})`,
                                 alignSelf: 'flex-end',
                               }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Card 2 — QARIA */}
                <Card>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600
                                        flex items-center justify-center text-white text-sm font-bold">◈</div>
                        <div>
                          <div className="text-[10px] text-zinc-500 font-bold tracking-widest">QARIA</div>
                          <div className="text-[14px] font-bold text-white">Quantum AI Orchestration</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-amber-400">Beta Q4</span>
                      </div>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">
                      Orchestrazione ibrida quantum-classica per workload AI ad alta intensità computazionale.
                    </p>
                    <div className="mt-auto grid grid-cols-2 gap-2">
                      {['Post-Quantum Crypto', 'Hybrid AI', 'QKD Ready', 'EU Compliant'].map(t => (
                        <div key={t} className="px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]
                                                text-[10px] font-semibold text-zinc-500 text-center">
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Card 3 — Foveans Suite */}
                <Card>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600
                                        flex items-center justify-center text-white text-sm font-bold">⬢</div>
                        <div>
                          <div className="text-[10px] text-zinc-500 font-bold tracking-widest">FOVEANS SUITE</div>
                          <div className="text-[14px] font-bold text-white">Enterprise AI Governance</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30">
                        <span className="text-[10px] font-bold text-indigo-400">2027</span>
                      </div>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">
                      Suite completa per governance, compliance e audit dei sistemi AI enterprise. EU AI Act by design.
                    </p>
                    <div className="mt-auto flex items-center gap-2 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      <div className="text-[10px] text-indigo-300 font-semibold">EU AI Act · Art. 9 compliant · Full audit trail</div>
                    </div>
                  </div>
                </Card>
              </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// STORIA (Timeline)
// ─────────────────────────────────────────────────────────────────
function Storia() {
  const timeline = [
    {
      date: '2024',
      label: 'Identificazione del gap',
      text: 'I fondatori mappano l\'assenza di infrastruttura AI enterprise-grade nel mercato europeo. Inizia la fase di ricerca e progettazione architetturale.',
      active: false,
    },
    {
      date: '2025',
      label: 'Primo deployment di ARIA-OP',
      text: 'Core di ARIA-OP completato. Prime validazioni tecniche con aziende enterprise italiane confermano la tesi di prodotto.',
      active: false,
    },
    {
      date: '25 Febbraio 2026',
      label: 'Costituzione di Foveans S.r.l.',
      text: 'Foveans è iscritta nel Registro delle Imprese — sezione speciale Startup Innovative. P.IVA 04588150716, REA FG-340217.',
      active: true,
    },
    {
      date: 'Prossimi 12 mesi',
      label: 'Espansione e seed round',
      text: 'ARIA-OP in produzione su clienti enterprise. Seed round da €8M in apertura. Espansione verso i mercati EU e primo team allargato.',
      active: false,
    },
  ];

  return (
    <section id="storia" className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      {/* Dot grid — very subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
           style={{
             backgroundImage: `radial-gradient(rgba(220,38,38,1) 1.5px, transparent 1.5px)`,
             backgroundSize: '28px 28px',
           }} />
      {/* Subtle right-side glow */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
           style={{
             background: 'radial-gradient(ellipse 70% 60% at 100% 50%, rgba(220,38,38,0.05) 0%, transparent 70%)',
           }} />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Asymmetric: label+title left, timeline pushed right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: header sticky-ish */}
          <div className="lg:w-[340px] flex-shrink-0">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[var(--accent-1)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">La nostra storia</span>
              </div>
              <h2 className="text-3xl md:text-[44px] font-bold text-white tracking-tight mb-4 leading-[1.1]">
                Dal problema al prodotto. In <span className="text-[var(--accent-1)]">18 mesi</span>.
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed">
                Non abbiamo aspettato il momento giusto. Abbiamo costruito finché il prodotto
                parlava da solo.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: timeline */}
          <div className="flex-1">

            <div className="relative">
              {/* Continuous vertical line */}
              <div className="absolute left-[9px] top-[10px] bottom-[10px] w-px
                              bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />

              {(() => {
                const activeIdx = timeline.findIndex(t => t.active);
                return (
                <div className="flex flex-col">
                {timeline.map((item, i) => {
                  const isPast = i < activeIdx;
                  const isCurrent = item.active;
                  return (
                  <div key={i} className="flex gap-8 group relative pb-12 last:pb-0">

                    {/* Dot */}
                    <div className="flex-shrink-0 w-5 flex items-start justify-center pt-[2px] z-10">
                      <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center
                                       transition-all duration-300
                                       ${isCurrent
                                         ? 'border-[var(--accent-1)] bg-[var(--accent-1)] shadow-[0_0_14px_var(--glow-1)]'
                                         : isPast
                                           ? 'border-[var(--accent-2)] bg-[var(--accent-2)]/30'
                                           : 'border-zinc-800 bg-black group-hover:border-zinc-600'}`}>
                        {isCurrent && <div className="w-[6px] h-[6px] rounded-full bg-white" />}
                        {isPast && (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4L3.5 6L6.5 2" stroke="rgba(220,38,38,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 min-w-0 transition-opacity duration-300
                                     ${isCurrent ? 'opacity-100' : isPast ? 'opacity-60 group-hover:opacity-90' : 'opacity-35 group-hover:opacity-65'}`}>
                      <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                        <span className={`text-[13px] font-bold tracking-wide
                                          ${item.active ? 'text-[var(--accent-1)]' : 'text-zinc-600'}`}>
                          {item.date}
                        </span>
                        <div className="h-px w-3 bg-zinc-800 self-center" />
                        <span className="text-[15px] font-semibold text-zinc-200">{item.label}</span>
                      </div>
                      <p className="text-[13px] text-zinc-500 leading-relaxed max-w-lg">{item.text}</p>
                    </div>

                  </div>
                );
                })}
              </div>
              );
              })()}
            </div>

          </div>{/* end flex-1 timeline */}
        </div>{/* end flex row */}
      </div>{/* end container */}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// VALORI
// ─────────────────────────────────────────────────────────────────
function Valori() {
  return (
    <section id="valori" className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: `
               radial-gradient(ellipse 60% 50% at 90% 60%, rgba(220,38,38,0.05) 0%, transparent 65%),
               radial-gradient(ellipse 40% 50% at 5% 30%, rgba(153,27,27,0.04) 0%, transparent 60%)
             `
           }} />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[var(--accent-1)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Principi</span>
          </div>
          <h2 className="text-3xl md:text-[52px] font-bold text-white tracking-tight mb-12">
            Principi <span className="text-[var(--accent-1)]">non negoziabili</span>.
          </h2>
        </ScrollReveal>

        {/* Asymmetric bento grid — row1: 30/70, row2: 70/30 */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(200px,auto)]">

          {/* 01 — narrow left (30%) */}
          <ScrollReveal className="col-span-12 md:col-span-4" delay={0}>
            <TiltCard maxTilt={4} className="h-full">
              <SpotlightCard spotColor="rgba(220,38,38,0.12)" spotSize={320} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-zinc-950 border border-white/[0.07]
                                hover:border-[var(--accent-1)]/30 transition-all duration-300 group
                                flex flex-col min-h-[220px]">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--accent-1)]/40
                                   group-hover:text-[var(--accent-1)] transition-colors mb-4">01</span>
                  <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">Il talento non ha un codice postale</h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mt-auto">
                    Team fondatore under-30 da Foggia. L&apos;assenza di bias legacy e la distanza dal rumore sono vantaggi strutturali.
                  </p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </ScrollReveal>

          {/* 02 — wide right (70%) */}
          <ScrollReveal className="col-span-12 md:col-span-8" delay={80}>
            <TiltCard maxTilt={4} className="h-full">
              <SpotlightCard spotColor="rgba(220,38,38,0.1)" spotSize={500} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-[#0D0D0D] border border-white/[0.07]
                                hover:border-[var(--accent-1)]/30 transition-all duration-300 group
                                flex flex-col min-h-[220px]">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--accent-1)]/40
                                   group-hover:text-[var(--accent-1)] transition-colors mb-4">02</span>
                  <h3 className="text-[26px] font-bold text-white mb-3 leading-snug">Costruiamo per durare, non per impressionare</h3>
                  <p className="text-[14px] text-zinc-500 leading-relaxed max-w-xl">
                    Ogni decisione architetturale è documentata, difendibile e progettata con un orizzonte di 10 anni.
                    Nessuna scorciatoia tecnica che non pagheremmo cara in produzione.
                  </p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </ScrollReveal>

          {/* 03 — wide left (70%) with red accent */}
          <ScrollReveal className="col-span-12 md:col-span-8" delay={120}>
            <TiltCard maxTilt={4} className="h-full">
              <SpotlightCard spotColor="rgba(220,38,38,0.12)" spotSize={480} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl border border-[var(--accent-1)]/20
                                bg-gradient-to-br from-[var(--accent-1)]/8 via-zinc-950 to-zinc-950
                                hover:border-[var(--accent-1)]/35 transition-all duration-300 group
                                flex flex-col md:flex-row gap-8 min-h-[220px]">
                  <div className="flex-1">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--accent-1)] mb-4 block">03</span>
                    <h3 className="text-[26px] font-bold text-white mb-3 leading-snug">Zero hype. Metriche verificabili.</h3>
                    <p className="text-[14px] text-zinc-400 leading-relaxed max-w-sm">
                      Ogni annuncio pubblico corrisponde a codice in produzione e clienti reali.
                      La credibilità tecnica non si costruisce con i comunicati stampa.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-col gap-2 justify-center self-end md:self-center">
                    {['Codice funzionante', 'Deployment reale', 'Metriche verificabili'].map((t, i) => (
                      <div key={t} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                                               bg-[var(--accent-1)]/5 border border-[var(--accent-1)]/15
                                               hover:border-[var(--accent-1)]/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-1)]"
                             style={{ opacity: 1 - i * 0.25 }} />
                        <span className="text-[12px] font-medium text-zinc-400 whitespace-nowrap">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </ScrollReveal>

          {/* 04 — narrow right (30%) */}
          <ScrollReveal className="col-span-12 md:col-span-4" delay={160}>
            <TiltCard maxTilt={4} className="h-full">
              <SpotlightCard spotColor="rgba(220,38,38,0.12)" spotSize={280} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-zinc-950 border border-white/[0.07]
                                hover:border-[var(--accent-1)]/30 transition-all duration-300 group
                                flex flex-col min-h-[220px]">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--accent-1)]/40
                                   group-hover:text-[var(--accent-1)] transition-colors mb-4">04</span>
                  <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">
                    Origini come vantaggio competitivo
                  </h3>
                  <p className="text-[12px] text-zinc-500 leading-relaxed mt-auto">
                    Foggia, Puglia. Lontano dai centri del rumore, vicini alla sostanza. Il talento meridionale è sotto-valorizzato, non sotto-dotato.
                  </p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────────────────────────
function Team() {
  const members = [
    {
      name: 'Armando Anselmi',
      role: 'CEO & Co-Founder',
      skills: ['Visione', 'Strategy', 'Business Dev', 'UniBa', 'YC Startup School'],
      bio: 'Responsabile di visione, strategia e sviluppo commerciale. Background in ingegneria e startup, alumni UniBa e YC Startup School. Coordina l\'esecuzione su ogni fronte non tecnico.',
      initials: 'AA',
    },
    {
      name: 'Valerio S. Di Maggio',
      role: 'CTO & Co-Founder',
      skills: ['Architecture', 'AI/ML', 'Kubernetes', 'Poliba'],
      bio: 'Progetta e implementa l\'intera architettura tecnica di Foveans. Specializzato in sistemi distribuiti, AI deployment e orchestrazione enterprise su larga scala. Alumni Poliba.',
      initials: 'VM',
    },
  ];

  return (
    <section id="team" className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[#050505]" />
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: `
               radial-gradient(ellipse 60% 70% at 0% 50%, rgba(220,38,38,0.08) 0%, transparent 60%),
               radial-gradient(ellipse 40% 40% at 100% 80%, rgba(153,27,27,0.06) 0%, transparent 55%)
             `,
           }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
           style={{
             backgroundImage: `linear-gradient(45deg, rgba(220,38,38,1) 1px, transparent 1px),
                               linear-gradient(-45deg, rgba(220,38,38,1) 1px, transparent 1px)`,
             backgroundSize: '56px 56px',
           }} />
      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[var(--accent-1)]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Founders</span>
        </div>
        <h2 className="text-3xl md:text-[52px] font-bold text-white tracking-tight">
          Competenza verticale. <span className="text-[var(--accent-1)]">Responsabilità</span> diretta.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((m) => (
          <TiltCard key={m.name} maxTilt={6} className="rounded-2xl">
            <SpotlightCard
              spotColor="rgba(220,38,38,0.1)"
              spotSize={380}
              className="rounded-2xl h-full"
            >
              <div className="p-8 rounded-2xl bg-zinc-950 border border-white/[0.06]
                              hover:border-[var(--accent-1)]/25 transition-all duration-300 h-full">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-1)]/20 to-[var(--accent-2)]/20
                                  border border-[var(--accent-1)]/20 flex items-center justify-center
                                  text-[18px] font-bold text-[var(--accent-1)]">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white">{m.name}</h3>
                    <div className="text-[12px] text-[var(--accent-1)] font-semibold">{m.role}</div>
                  </div>
                </div>

                <p className="text-[13px] text-zinc-500 leading-relaxed mb-5">{m.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {m.skills.map(s => (
                    <span key={s} className="px-2.5 py-1 text-[10px] font-semibold text-zinc-500 rounded-lg
                                             bg-white/[0.03] border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </TiltCard>
        ))}
      </div>
      </div>{/* end relative z-10 */}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// INVESTITORI
// ─────────────────────────────────────────────────────────────────
function Investitori() {
  return (
    <section id="investitori" className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      {/* Red side glow */}
      <div className="absolute top-0 left-0 w-[500px] h-full pointer-events-none
                      bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(220,38,38,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[var(--accent-1)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Investitori</span>
            </div>
            <h2 className="text-3xl md:text-[52px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Un mercato <span className="text-[var(--accent-1)]">strutturale</span>. Un&apos;azienda costruita per scala.
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 max-w-md">
              Le infrastrutture intelligenti non sono una tendenza — sono il prerequisito tecnico della prossima decade enterprise.
              Stiamo costruendo la risposta europea, con fondamenta legali e tecniche già operative.
            </p>
            <a href="#contatti"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white
                          bg-[var(--accent-1)] hover:bg-[var(--accent-3)]
                          shadow-[0_0_28px_var(--glow-1)] hover:shadow-[0_0_44px_var(--glow-1)]
                          transition-all duration-200 hover:scale-[1.02]">
              Richiedi il pitch deck
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right metrics */}
          <div className="flex flex-col gap-4">
            {([
              { label: 'Mercato infrastrutture intelligenti', sub: 'Forte crescita al 2030', num: '01',
                count: { end: 73, prefix: '$', suffix: 'B' } },
              { label: 'Seed round aperto', sub: 'Pre-seed in chiusura', num: '02',
                count: { end: 8, prefix: '€', suffix: 'M' } },
              { label: 'Iscritta sezione speciale CCIAA', sub: 'Startup Innovativa', num: '03',
                count: null, staticValue: '25/02/2026' },
            ] as const).map(item => (
              <SpotlightCard
                key={item.label}
                spotColor="rgba(220,38,38,0.1)"
                className="rounded-xl"
              >
                <div className="p-5 rounded-xl bg-zinc-950 border border-white/[0.05]
                                hover:border-[var(--accent-1)]/20 transition-all duration-300
                                flex items-center gap-5">
                  <div className="text-[11px] font-bold text-zinc-700 tracking-widest w-6 flex-shrink-0">{item.num}</div>
                  <div className="flex-1">
                    <div className="text-[22px] font-bold text-white">
                      {item.count ? (
                        <CountUp
                          end={item.count.end}
                          prefix={item.count.prefix}
                          suffix={item.count.suffix}
                          duration={1800}
                        />
                      ) : (
                        item.staticValue
                      )}
                    </div>
                    <div className="text-[11px] text-zinc-600">{item.label} · {item.sub}</div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/15
                                  flex items-center justify-center text-[var(--accent-1)] text-[10px] font-bold">
                    →
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// CARRIERE
// ─────────────────────────────────────────────────────────────────
function Carriere() {
  const cols = [
    {
      title: 'Chi cerchiamo',
      items: [
        'Ingegneri con padronanza di sistemi distribuiti ad alta disponibilità',
        'ML engineer con esperienza di deployment enterprise',
        'Security engineer specializzato in infrastrutture critiche',
        'Architect che scelgono la complessità giusta, non quella evitabile',
      ],
    },
    {
      title: 'Cosa offriamo',
      items: [
        'Equity significativa per i primi ingressi',
        'Problemi tecnici aperti — nessuna soluzione preconfezionata',
        'Accesso diretto ai founder, zero layer manageriale',
        'Sede a Foggia, remote-first per ruoli senior',
      ],
    },
    {
      title: 'Il processo di selezione',
      items: [
        '1. Portfolio tecnico + GitHub a foveans@pec.it',
        '2. Technical review con il CTO (90 min)',
        '3. Design session su un problema reale',
        '4. Decisione e offerta entro 5 giorni lavorativi',
      ],
    },
  ];

  return (
    <section id="carriere" className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-zinc-950/40" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none
                      bg-[radial-gradient(ellipse,rgba(220,38,38,0.05)_0%,transparent_60%)] blur-3xl" />
      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[var(--accent-1)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Carriere</span>
          </div>
          <h2 className="text-3xl md:text-[52px] font-bold text-white tracking-tight mb-4">
            Posizioni ad <span className="text-[var(--accent-1)]">alto impatto</span> tecnico.
          </h2>
          <p className="text-[16px] text-zinc-500 max-w-xl leading-relaxed">
            Foveans è un contesto di responsabilità reale — problemi aperti, architetture da zero, nessuna burocrazia inutile.
            Se vuoi lasciare un'impronta tecnica misurabile, questo è il posto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cols.map((col) => (
            <div key={col.title} className="p-7 rounded-2xl bg-zinc-950 border border-white/[0.05]">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-1)] mb-6">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[var(--accent-1)]/60 mt-2 flex-shrink-0" />
                    <span className="text-[13px] text-zinc-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// BLOG
// ─────────────────────────────────────────────────────────────────
function Blog() {
  const posts = [
    {
      date: 'Feb 2026',
      readTime: '12 min',
      title: 'Come abbiamo progettato un coordinator resiliente in 10 mesi',
      tag: 'Engineering',
    },
    {
      date: 'Gen 2026',
      readTime: '8 min',
      title: 'Perché puntiamo alla convergenza tra AI, robotica, quantum e cybersecurity',
      tag: 'Vision',
    },
    {
      date: 'Mar 2026',
      readTime: '6 min',
      title: 'Costruire da Foggia: metodo, vantaggi e realtà',
      tag: 'Company',
    },
  ];

  return (
    <section className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: `linear-gradient(rgba(220,38,38,1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(220,38,38,1) 1px, transparent 1px)`,
             backgroundSize: '100px 100px',
           }} />
      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[var(--accent-1)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Blog</span>
              </div>
              <h2 className="text-3xl md:text-[52px] font-bold text-white tracking-tight">
                Pubblichiamo quello che <span className="text-[var(--accent-1)]">impariamo</span>.
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
            <SpotlightCard spotColor="rgba(220,38,38,0.08)" className="rounded-2xl group cursor-pointer">
              <div className="p-7 rounded-2xl bg-zinc-950 border border-white/[0.05]
                              hover:border-[var(--accent-1)]/20 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider
                                   text-[var(--accent-1)] bg-[var(--accent-1)]/10 rounded-md">
                    {p.tag}
                  </span>
                  <span className="text-[11px] text-zinc-700">{p.date} · {p.readTime}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-zinc-300 leading-snug flex-1
                                group-hover:text-white transition-colors duration-200">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-5 text-[12px] text-zinc-700
                                group-hover:text-[var(--accent-1)] transition-colors duration-200">
                  Leggi
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// CONTATTI
// ─────────────────────────────────────────────────────────────────
function Contatti() {
  const contexts = [
    'Partnership tecnologica', 'Deployment enterprise', 'Investor interest',
    'Opportunità di lavoro', 'Press & media', 'Ricerca accademica', 'Altro',
  ];

  return (
    <section id="contatti" className="py-32 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(ellipse_40%_60%_at_80%_50%,rgba(220,38,38,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[var(--accent-1)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-1)]">Contatti</span>
            </div>
            <h2 className="text-3xl md:text-[44px] font-bold text-white tracking-tight mb-6 leading-[1.15]">
              Apriamo una <span className="text-[var(--accent-1)]">conversazione</span>.
            </h2>
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-3 max-w-md font-medium">
              Partnership, investimento, collaborazione tecnica o semplicemente curiosità — ogni contesto è benvenuto.
            </p>
            <p className="text-[14px] text-zinc-600 leading-relaxed mb-10 max-w-md">
              Rispondiamo a ogni messaggio. Di solito entro 24 ore.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-white/[0.06] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 3.5C1 2.67 1.67 2 2.5 2H11.5C12.33 2 13 2.67 13 3.5V10.5C13 11.33 12.33 12 11.5 12H2.5C1.67 12 1 11.33 1 10.5V3.5Z" stroke="#52525b" strokeWidth="1.2"/>
                    <path d="M1 4L7 8L13 4" stroke="#52525b" strokeWidth="1.2"/>
                  </svg>
                </div>
                <a href="mailto:foveans@pec.it"
                   className="text-[14px] text-zinc-400 hover:text-white transition-colors">
                  foveans@pec.it
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-white/[0.06] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="#52525b" strokeWidth="1.2"/>
                    <circle cx="7" cy="5" r="1.5" stroke="#52525b" strokeWidth="1.2"/>
                  </svg>
                </div>
                <span className="text-[13px] text-zinc-500">Foggia, Puglia — Remote-first</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <SpotlightCard spotColor="rgba(220,38,38,0.08)" className="rounded-2xl">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/[0.06]">
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">Nome</label>
                    <input type="text" placeholder="Mario"
                           className="px-4 py-3 rounded-xl bg-black border border-white/[0.07]
                                      text-[14px] text-white placeholder:text-zinc-800
                                      focus:outline-none focus:border-[var(--accent-1)]/50 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">Cognome</label>
                    <input type="text" placeholder="Rossi"
                           className="px-4 py-3 rounded-xl bg-black border border-white/[0.07]
                                      text-[14px] text-white placeholder:text-zinc-800
                                      focus:outline-none focus:border-[var(--accent-1)]/50 transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">Email</label>
                  <input type="email" placeholder="mario@azienda.it"
                         className="px-4 py-3 rounded-xl bg-black border border-white/[0.07]
                                    text-[14px] text-white placeholder:text-zinc-800
                                    focus:outline-none focus:border-[var(--accent-1)]/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">Contesto</label>
                  <select className="px-4 py-3 rounded-xl bg-black border border-white/[0.07]
                                     text-[14px] text-zinc-500
                                     focus:outline-none focus:border-[var(--accent-1)]/50 transition-colors appearance-none">
                    <option value="">Seleziona...</option>
                    {contexts.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">Messaggio</label>
                  <textarea placeholder="Descrivici il tuo progetto..." rows={4}
                            className="px-4 py-3 rounded-xl bg-black border border-white/[0.07]
                                       text-[14px] text-white placeholder:text-zinc-800
                                       focus:outline-none focus:border-[var(--accent-1)]/50 transition-colors resize-none" />
                </div>
                <button type="submit"
                        className="w-full py-3.5 rounded-xl text-[14px] font-semibold text-white
                                   bg-[var(--accent-1)] hover:bg-[var(--accent-3)]
                                   shadow-[0_0_24px_var(--glow-1)] hover:shadow-[0_0_36px_var(--glow-1)]
                                   transition-all duration-200 hover:scale-[1.01]">
                  Invia messaggio
                </button>
              </form>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12 px-6 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-1)] flex items-center justify-center shadow-[0_0_12px_var(--glow-1)]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="2" fill="white"/>
              </svg>
            </div>
            <span className="text-[17px] font-bold tracking-[-0.02em] text-white">foveans</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {['Prodotti', 'Storia', 'Valori', 'Team', 'Carriere', 'Contatti'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                 className="text-[12px] text-zinc-700 hover:text-zinc-300 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-800">
            © 2026 Foveans S.r.l. · P.IVA 04588150716 · REA FG-340217 · Foggia, Puglia
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors">GitHub</a>
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors">X</a>
            <a href="#" className="text-[11px] text-zinc-800 hover:text-zinc-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <TechMarquee />
      <Prodotti />
      <Storia />
      <Valori />
      <Team />
      <Investitori />
      <Carriere />
      <Blog />
      <Contatti />
      <Footer />
    </main>
  );
}
