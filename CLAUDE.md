@../../_template/AGENTS.md

# Foveans — Regole di progetto

## Identità del progetto

**Foveans S.r.l.** è una startup innovativa italiana di AI infrastructure (P.IVA 04588150716, REA FG-340217, fondata il 25/02/2026 a Foggia, Puglia). Il sito è una landing page enterprise-grade che comunica credibilità tecnica, non startup hype.

**Stack:** Next.js 16 App Router · Tailwind v4 · TypeScript  
**Porta dev:** 3002 (`npm run dev -- --port 3002`)  
**Tema attivo:** `foveans` in `lib/themes.ts` → `currentTheme = 'foveans'`

---

## Sistema dei temi (`lib/themes.ts`)

I CSS custom properties vengono iniettati in `app/layout.tsx` via `getThemeCss()`. Non usare mai colori hardcoded dove esistono token — usare sempre `var(--accent-1)` ecc.

| Token | Valore Foveans | Uso |
|---|---|---|
| `--bg` | `#000000` | Background pagina |
| `--accent-1` | `#DC2626` | Rosso primario — CTA, bordi hover, dot attivi |
| `--accent-2` | `#991B1B` | Rosso scuro — gradienti, bordi subtle |
| `--accent-3` | `#EF4444` | Rosso chiaro — highlight, badge |
| `--glow-1` | `rgba(220,38,38,0.4)` | Box shadow / glow sui componenti |
| `--glow-2` | `rgba(153,27,27,0.35)` | Glow secondario, più soft |

Per cambiare tema: modificare `currentTheme` in `lib/themes.ts`. I temi disponibili sono: `dark-glass`, `light-fintech`, `dark-neon`, `midnight-pro`, `soft-light`, `foveans`.

---

## Componenti animation (`components/animations/`)

### DitherClient
WebGL Three.js pixel-dithering. **Usare solo nella Hero**, richiede `dynamic(..., {ssr:false})` se importato da un Server Component. Nel progetto la page è già `'use client'` quindi l'import diretto funziona.

```tsx
<DitherClient
  waveColor={[0.45, 0.04, 0.04]}  // RGB 0-1 — rosso per Foveans
  enableMouseInteraction
  mouseRadius={0.28}
  colorNum={4}
  waveAmplitude={0.3}
  waveFrequency={2.8}
  waveSpeed={0.045}
  pixelSize={2}
/>
```

### CardSwap
GSAP elastic card rotation stack. **Regola critica:** deve avere come parent diretto un `div` con `position: relative` e altezza esplicita. Non wrappare mai in `ScrollReveal` o altri componenti che rimuovono il contesto di altezza.

```tsx
{/* CORRETTO */}
<div className="flex-1 relative h-[560px] w-full max-w-[480px]">
  <CardSwap cardDistance={55} verticalDistance={65} delay={4500} pauseOnHover width={440} height={300}>
    <Card>...</Card>
  </CardSwap>
</div>

{/* SBAGLIATO — CardSwap finisce in un angolo dello schermo */}
<ScrollReveal>
  <div className="relative h-[560px]">
    <CardSwap>...</CardSwap>
  </div>
</ScrollReveal>
```

### ScrollReveal
IntersectionObserver fade + translateY. Usabile ovunque tranne che come wrapper diretto di CardSwap. Props: `delay` (ms), `distance` (px), `duration` (ms).

### SpotlightCard
Mouse-tracking `radial-gradient` overlay. Wrappa il contenuto di una card. Props: `spotColor`, `spotSize`, `className`.

### TiltCard
`perspective(800px) rotateX/Y` su mouse. Props: `maxTilt` (default 8deg), `className`. Usare con `maxTilt={4}` per effetti subtle nelle card bento.

### Marquee
CSS keyframe loop. Props: `speed` (secondi per loop completo), `direction` (`'left'`|`'right'`), `pauseOnHover`. Duplica i children internamente per il loop seamless.

### CountUp
IntersectionObserver che trigga una volta. Props: `end`, `prefix`, `suffix`, `duration` (ms), `decimals`. Usare per metriche numeriche (es. `$73B`, `€8M`) nella sezione Investitori.

### BlurText
Animazione per-parola con blur → nitido. Props: `text`, `delay` (ms tra parole), `animateBy` (`'words'`|`'chars'`), `direction`. **Non supporta span/JSX inline** — solo testo puro. Usare nella Hero headline.

---

## Regole layout

### Bento grid (sezione Valori)
Pattern asimmetrico su 12 colonne. Layout attuale: riga 1 = 4+8 (30/70), riga 2 = 8+4 (70/30).

```tsx
<div className="grid grid-cols-12 gap-4 auto-rows-[minmax(200px,auto)]">
  <ScrollReveal className="col-span-12 md:col-span-4" delay={0}>...</ScrollReveal>
  <ScrollReveal className="col-span-12 md:col-span-8" delay={80}>...</ScrollReveal>
  <ScrollReveal className="col-span-12 md:col-span-8" delay={120}>...</ScrollReveal>
  <ScrollReveal className="col-span-12 md:col-span-4" delay={160}>...</ScrollReveal>
</div>
```

### Timeline (sezione Storia)
Linea verticale continua con `absolute left-[9px]`, dot da 18px centrati. Tre stati:
- **Passato** (`i < activeIdx`): bordo + bg `var(--accent-2)`, checkmark SVG rosso
- **Attivo** (`item.active`): rosso pieno con glow, pallino bianco
- **Futuro** (`i > activeIdx`): zinc-800 grigio

### Layout sezioni alternate
Non usare sempre left-align. Alternare:
- **2 colonne**: testo sinistra + componente destra (Prodotti, Investitori, Contatti)
- **Header sinistra + contenuto destra**: Storia (title fisso 340px + timeline flex-1)
- **Full-width grid**: Valori bento, Team 2-col, Carriere 3-col, Blog 3-col

---

## Regole background per sezione

I background devono essere **presenti ma non aggressivi**. Linee guida:

| Tipo | Opacità corretta | Uso |
|---|---|---|
| Dot grid `radial-gradient` 1.5px | `opacity-[0.018]` | Storia |
| Dot grid `radial-gradient` 1px | `opacity-[0.07]` | Prodotti (più grande, 32px) |
| Diagonal stripes `repeating-linear-gradient` | `opacity-[0.04]` | Valori |
| Grid lines (horizontal + vertical) | `opacity-[0.03]` | Blog |
| Diagonal grid (45deg + -45deg) | `opacity-[0.04]` | Team |
| Radial glow (accent colore) | `rgba(220,38,38,0.05–0.09)` | max per sezione |

Regola: se il background disturba la lettura del testo o risulta visivamente aggressivo, dimezzare l'opacità.

---

## Regole copy (tono corporate-first)

### Titoli H2
- **Sempre bianchi** (`text-white`) — no split bianco/grigio
- **Una parola chiave in rosso** per headline — scegliere il termine con più peso semantico
- Pattern: `Titolo con <span className="text-[var(--accent-1)]">keyword</span>.`

### Tono generale
- Corporate, autorevole, mai startup bravado ("nessuna scusa", "siamo i migliori" ecc.)
- Dati concreti dove esistono (date, numeri, sigle legali)
- Frasi brevi e dichiarative — un concetto per frase
- Italiano, non anglicismi inutili (ma i termini tecnici restano in inglese: "layer", "deployment", ecc.)

### CTA
- Hero primaria: "Esplora il prodotto" → `#prodotti`
- Hero secondaria: "La nostra storia" → `#storia`
- Investitori: "Richiedi il pitch deck" → `#contatti`
- Nav: "Parla con Foveans" → `#contatti`

---

## Dati aziendali ufficiali

```
Ragione sociale: Foveans S.r.l.
P.IVA: 04588150716
REA: FG-340217
Data costituzione: 25/02/2026
Sede: Foggia, Puglia
Tipo: Startup Innovativa (sezione speciale Registro Imprese)
Email: foveans@pec.it
Seed round: €8M (pre-seed in apertura)
Mercato di riferimento: $73B (infrastrutture intelligenti, crescita al 2030)
```

### Founders
- **Armando Anselmi** — CEO & Co-Founder. Visione, strategy, business dev. Alumni UniBa, YC Startup School.
- **Valerio S. Di Maggio** — CTO & Co-Founder. Architecture, AI/ML, Kubernetes. Alumni Poliba.

### Prodotti
| Codice | Nome | Status |
|---|---|---|
| ARIA-OP | AI Agent Orchestration | In produzione |
| QARIA | Quantum AI Orchestration | Beta · Q4 2026 |
| FOVEANS SUITE | Enterprise AI Governance | Roadmap 2027 |

---

## Workflow consigliato per modifiche

1. **Cambi di copy** → editare direttamente `app/page.tsx`, sezione per sezione
2. **Nuovo componente animation** → aggiungere in `components/animations/`, importare in `page.tsx`
3. **Cambio tema** → modificare solo `currentTheme` in `lib/themes.ts`
4. **Nuova sezione** → aggiungere funzione in `page.tsx`, inserirla in `Page()`, aggiungere link in `Nav`
5. **Verifica** → `npm run build` prima di considerare completata qualsiasi modifica
