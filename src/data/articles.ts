export interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  role: string;
  heroSvg: string;
  content: string;
}

export const articles: Record<string, Article> = {
  'lancamento-atalay-ia': {
    title: 'Apresentando o atalay.ia — inteligência editorial para redações',
    description: 'Depois de meses de desenvolvimento com dados reais de redações, lançamos o atalay.ia: um copiloto editorial que entende o manual, a voz e os dados do seu domínio.',
    date: '2026-03-22',
    category: 'Produto',
    readTime: '8 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs><radialGradient id="g1" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.12)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
      <rect width="800" height="400" fill="url(#g1)"/>
      <!-- Lighthouse beacon -->
      <g transform="translate(400,180)">
        <rect x="-18" y="20" width="36" height="80" rx="2" stroke="rgba(255,255,255,.12)" stroke-width=".8" fill="none"/>
        <rect x="-14" y="28" width="28" height="14" rx="1" stroke="rgba(192,106,66,.3)" stroke-width=".6" fill="rgba(192,106,66,.04)"/>
        <rect x="-14" y="48" width="28" height="14" rx="1" stroke="rgba(192,106,66,.3)" stroke-width=".6" fill="rgba(192,106,66,.04)"/>
        <rect x="-14" y="68" width="28" height="14" rx="1" stroke="rgba(192,106,66,.3)" stroke-width=".6" fill="rgba(192,106,66,.04)"/>
        <rect x="-22" y="8" width="44" height="16" rx="3" stroke="rgba(255,255,255,.15)" stroke-width=".8" fill="none"/>
        <circle cx="0" cy="0" r="6" fill="rgba(192,106,66,.6)" stroke="rgba(192,106,66,.8)" stroke-width="1"/>
        <circle cx="0" cy="0" r="14" stroke="rgba(192,106,66,.15)" stroke-width=".6" fill="none"/>
        <circle cx="0" cy="0" r="24" stroke="rgba(192,106,66,.08)" stroke-width=".4" fill="none"/>
        <circle cx="0" cy="0" r="38" stroke="rgba(192,106,66,.04)" stroke-width=".3" fill="none"/>
        <!-- Light rays -->
        <line x1="-50" y1="-30" x2="-120" y2="-60" stroke="rgba(192,106,66,.1)" stroke-width=".5"/>
        <line x1="50" y1="-30" x2="120" y2="-60" stroke="rgba(192,106,66,.1)" stroke-width=".5"/>
        <line x1="-60" y1="0" x2="-140" y2="0" stroke="rgba(192,106,66,.08)" stroke-width=".5"/>
        <line x1="60" y1="0" x2="140" y2="0" stroke="rgba(192,106,66,.08)" stroke-width=".5"/>
      </g>
      <!-- 5 layer labels -->
      <g font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.25)">
        <text x="160" y="130">DETECTAR</text>
        <text x="160" y="170">CLASSIFICAR</text>
        <text x="160" y="210">PONTUAR</text>
        <text x="160" y="250">ALERTAR</text>
        <text x="160" y="290">OTIMIZAR</text>
      </g>
      <g>
        <line x1="148" y1="126" x2="148" y2="286" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
        <circle cx="148" cy="126" r="3" fill="rgba(192,106,66,.5)"/>
        <circle cx="148" cy="166" r="3" fill="rgba(192,106,66,.4)"/>
        <circle cx="148" cy="206" r="3" fill="rgba(192,106,66,.3)"/>
        <circle cx="148" cy="246" r="3" fill="rgba(192,106,66,.2)"/>
        <circle cx="148" cy="286" r="3" fill="rgba(192,106,66,.15)"/>
      </g>
      <!-- Right side: data cards -->
      <g transform="translate(540,120)">
        <rect x="0" y="0" width="160" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="22" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(255,255,255,.4)">Authority</text>
        <rect x="110" y="10" width="38" height="16" rx="4" fill="rgba(192,106,66,.12)" stroke="rgba(192,106,66,.2)" stroke-width=".5"/>
        <text x="119" y="22" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(192,106,66,.7)">0.82</text>
      </g>
      <g transform="translate(540,168)">
        <rect x="0" y="0" width="160" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="22" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(255,255,255,.4)">Trend Volume</text>
        <rect x="110" y="10" width="38" height="16" rx="4" fill="rgba(130,153,110,.1)" stroke="rgba(130,153,110,.2)" stroke-width=".5"/>
        <text x="119" y="22" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(130,153,110,.7)">50K+</text>
      </g>
      <g transform="translate(540,216)">
        <rect x="0" y="0" width="160" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="22" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(255,255,255,.4)">Verdict</text>
        <rect x="110" y="10" width="38" height="16" rx="4" fill="rgba(192,106,66,.15)" stroke="rgba(192,106,66,.25)" stroke-width=".5"/>
        <text x="124" y="22" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="rgba(192,106,66,.8)">P1</text>
      </g>
    </svg>`,
    content: `
      <p class="article-lead">Redações trabalham com pressão constante. Prazo apertado, pauta mudando em tempo real, correções manuais que consomem horas. E mesmo assim, a maioria das ferramentas de IA disponíveis hoje trata jornalismo como qualquer outro tipo de texto.</p>

      <p>Depois de mais de um ano trabalhando com dados reais de performance editorial — analisando milhares de artigos, estudando o que funciona em cada canal de distribuição, mapeando erros recorrentes por editoria — lançamos o <strong>atalay.ia</strong>.</p>

      <h2>O problema que resolvemos</h2>

      <p>IA genérica não funciona para jornalismo. Ferramentas de propósito geral não sabem que "Galo" no contexto de Minas Gerais é o Atlético Mineiro. Não conhecem o Manual de Redação da sua publicação. Não entendem que um título para <a href="https://developers.google.com/search/docs/appearance/google-discover" target="_blank" rel="noopener">Google Discover</a> precisa de apelo emocional diferente de um título para Busca.</p>

      <p>O atalay.ia foi construído de baixo para cima para resolver esse problema. Não é um plugin genérico com um prompt por trás. É uma inteligência artificial própria, treinada e calibrada especificamente para o contexto editorial brasileiro, alinhada com os princípios de <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">conteúdo útil e confiável do Google</a>.</p>

      <h2>O que o atalay.ia faz</h2>

      <p>A plataforma atua em duas frentes complementares:</p>

      <ul>
        <li><strong>Trends:</strong> monitora oportunidades de pauta em tempo real, classifica por editoria, calcula a relevância para o seu domínio e prioriza o que merece atenção agora.</li>
        <li><strong>Optimize:</strong> analisa textos antes da publicação em três dimensões — gramática, aderência ao manual de redação e potencial de performance — gerando sugestões que respeitam a voz do jornalista.</li>
      </ul>

      <p>O resultado é um copiloto que entende o universo de cada redação: quais termos o manual aceita, como cada jornalista escreve, quais padrões de título performam melhor em cada editoria.</p>

      <h2>IA própria, não genérica</h2>

      <p>Cada redação tem seu próprio universo. O atalay.ia aprende esse universo com dados do domínio — não com dados genéricos da internet.</p>

      <blockquote>
        <p>"A diferença entre IA genérica e IA editorial é a mesma entre um corretor ortográfico e um editor de texto. Um corrige palavras, o outro entende contexto."</p>
      </blockquote>

      <p>Isso significa que as sugestões do atalay.ia não são as mesmas para todo mundo. Elas são calibradas para a realidade de cada veículo: seus dados de performance, suas regras, seus jornalistas.</p>

      <h2>Para quem é</h2>

      <p>O atalay.ia foi desenhado para redações que publicam diariamente e dependem de tráfego orgânico — especialmente aquelas que buscam atender aos critérios de <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content#experience" target="_blank" rel="noopener">E-E-A-T (Experiência, Expertise, Autoridade e Confiabilidade)</a>. Veículos com editorias ativas, equipe produzindo em volume, e a necessidade de tomar decisões rápidas sobre pauta, título e otimização.</p>

      <p>Se a sua redação enfrenta esses desafios, <a href="/contato">entre em contato</a>.</p>

      <h2>O que vem a seguir</h2>

      <p>Estamos construindo as próximas camadas da plataforma: previsão de performance antes da publicação e medição de resultado pós-publicação. O objetivo é fechar o ciclo completo: detectar a oportunidade, ajudar na produção, e medir o impacto.</p>

      <p>Inteligência editorial de ponta a ponta.</p>
    `,
  },

  'como-ia-contextual-muda-jornalismo': {
    title: 'Por que IA genérica não funciona para jornalismo — e o que funciona',
    description: 'A maioria das ferramentas de IA trata jornalismo como qualquer outro texto. Explicamos por que isso falha e como IA contextual resolve o problema.',
    date: '2026-03-20',
    category: 'Práticas',
    readTime: '7 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs><radialGradient id="g2" cx="30%" cy="50%"><stop offset="0%" stop-color="rgba(153,110,110,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="g2b" cx="70%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
      <rect width="800" height="400" fill="url(#g2)"/>
      <rect width="800" height="400" fill="url(#g2b)"/>
      <!-- Left: Generic AI (faded, crossed) -->
      <g transform="translate(200,200)">
        <rect x="-80" y="-70" width="160" height="140" rx="10" stroke="rgba(153,110,110,.2)" stroke-width=".8" fill="rgba(153,110,110,.03)" stroke-dasharray="4 3"/>
        <text x="0" y="-42" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" font-weight="600" fill="rgba(153,110,110,.5)">IA Genérica</text>
        <g font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">
          <text x="-60" y="-18">prompt: "melhore"</text>
          <text x="-60" y="0">context: null</text>
          <text x="-60" y="18">manual: null</text>
          <text x="-60" y="36">voice: null</text>
          <text x="-60" y="54">data: null</text>
        </g>
        <!-- X mark -->
        <line x1="-80" y1="-70" x2="80" y2="70" stroke="rgba(153,110,110,.15)" stroke-width="1"/>
        <line x1="80" y1="-70" x2="-80" y2="70" stroke="rgba(153,110,110,.15)" stroke-width="1"/>
      </g>
      <!-- Arrow -->
      <g>
        <line x1="320" y1="200" x2="420" y2="200" stroke="rgba(255,255,255,.1)" stroke-width=".8"/>
        <polygon points="420,196 430,200 420,204" fill="rgba(255,255,255,.15)"/>
      </g>
      <!-- Right: Contextual AI (active, glowing) -->
      <g transform="translate(560,200)">
        <rect x="-80" y="-70" width="160" height="140" rx="10" stroke="rgba(192,106,66,.3)" stroke-width="1" fill="rgba(192,106,66,.03)"/>
        <text x="0" y="-42" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" font-weight="600" fill="rgba(192,106,66,.7)">IA Contextual</text>
        <g font-family="JetBrains Mono, monospace" font-size="9">
          <text x="-60" y="-18" fill="rgba(192,106,66,.5)">manual: ✓ ativo</text>
          <text x="-60" y="0" fill="rgba(130,153,110,.5)">voice: ✓ perfil ativo</text>
          <text x="-60" y="18" fill="rgba(192,106,66,.5)">dados: ✓ domínio</text>
          <text x="-60" y="36" fill="rgba(130,153,110,.5)">editoria: ✓ Esportes</text>
          <text x="-60" y="54" fill="rgba(192,106,66,.5)">geo: ✓ regional</text>
        </g>
        <circle cx="80" cy="-70" r="4" fill="rgba(192,106,66,.5)"/>
        <circle cx="80" cy="-70" r="8" stroke="rgba(192,106,66,.15)" stroke-width=".5" fill="none"/>
      </g>
    </svg>`,
    content: `
      <p class="article-lead">Quando a IA generativa explodiu em popularidade, redações ao redor do mundo começaram a testar a tecnologia — um movimento documentado por organizações como o <a href="https://www.lse.ac.uk/media-and-communications/polis/JournalismAI" target="_blank" rel="noopener">JournalismAI da London School of Economics</a>. A promessa era clara: escrever mais rápido, corrigir melhor, otimizar títulos. A realidade foi diferente.</p>

      <h2>O gap da IA genérica</h2>

      <p>Ferramentas de IA de propósito geral são treinadas em bilhões de textos da internet. Elas sabem escrever bem. Mas "escrever bem" e "escrever bem para a sua redação" são coisas fundamentalmente diferentes.</p>

      <p>Uma IA genérica não sabe que:</p>

      <ul>
        <li>O Manual de Redação do seu jornal proíbe "o mesmo" como pronome anafórico</li>
        <li>"Cruzeiro" em Minas Gerais é um clube de futebol, não a moeda antiga</li>
        <li>Títulos para <a href="https://developers.google.com/search/docs/appearance/google-discover" target="_blank" rel="noopener">Google Discover</a> precisam de gancho emocional, enquanto títulos para Busca precisam de correspondência exata com a palavra-chave</li>
        <li>Cada jornalista tem um estilo de escrita que deve ser preservado, não padronizado</li>
      </ul>

      <p>Quando você usa uma IA genérica para "melhorar" um texto jornalístico, ela produz algo estéril. Gramaticalmente correto, mas editorialmente morto.</p>

      <h2>O que é IA contextual</h2>

      <p>IA contextual é o oposto de "one-size-fits-all". É inteligência artificial que opera dentro de um domínio específico, com acesso a dados específicos, e calibrada para métricas específicas.</p>

      <p>No caso do jornalismo, isso significa:</p>

      <ul>
        <li><strong>Dados de performance reais:</strong> não referências de mercado, mas dados do próprio domínio — como o público realmente interage com o conteúdo de cada editoria.</li>
        <li><strong>Regras editoriais explícitas:</strong> o Manual de Redação não é uma sugestão, é lei. A IA precisa conhecê-lo e aplicá-lo como guardrail.</li>
        <li><strong>Perfil de voz:</strong> cada jornalista escreve diferente. Um colunista de esportes tem tom diferente de um repórter de política. A IA precisa adaptar-se, não homogeneizar.</li>
        <li><strong>Contexto geográfico:</strong> uma redação regional precisa de uma IA que entenda a relevância local. O que importa em Minas nem sempre importa no resto do país.</li>
      </ul>

      <h2>Como o atalay.ia pensa</h2>

      <p>Quando o atalay.ia analisa um texto, ele não pergunta apenas "está correto?". Ele pergunta "está correto segundo o manual?", "está otimizado para o canal de distribuição?", "soa como este jornalista?".</p>

      <blockquote>
        <p>"IA contextual não é IA mais inteligente. É IA com mais informação. A diferença está nos dados que a cercam."</p>
      </blockquote>

      <p>Na prática, isso se traduz em três tipos de análise distintos: gramática (regras universais), manual (regras do veículo) e performance (dados reais de distribuição). Cada tipo tem severidades diferentes e explicações diferentes. Não é um "score" único — é um diagnóstico editorial.</p>

      <h2>O custo de não contextualizar</h2>

      <p>Redações que adotam IA genérica sem contextualização enfrentam um problema sutil: a padronização. Todos os textos começam a soar iguais. Os títulos perdem personalidade. As correções são tecnicamente corretas mas editorialmente irrelevantes — o oposto do que o Google valoriza nas suas <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">diretrizes de conteúdo útil</a>.</p>

      <p>O resultado? Jornalistas rejeitam a ferramenta. Não porque IA não funciona, mas porque aquela IA não funciona <em>para eles</em>.</p>

      <p>A solução não é mais IA. É IA construída para o seu domínio. É o que o atalay.ia faz.</p>
    `,
  },

  'pipeline-dados-editoriais': {
    title: 'Dados primeiro, IA depois: a filosofia por trás do atalay.ia',
    description: 'Por que começamos com mais de um ano de dados reais antes de ligar qualquer modelo. A abordagem que muda tudo na inteligência editorial.',
    date: '2026-03-18',
    category: 'Produto',
    readTime: '8 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs><radialGradient id="g3" cx="50%" cy="60%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
      <rect width="800" height="400" fill="url(#g3)"/>
      <!-- Pipeline: 4 connected isometric cubes -->
      <g transform="translate(120,240)">
        <!-- Cube 1: Detect -->
        <g transform="translate(0,0)">
          <path d="M0,-30 L50,0 L0,30 L-50,0 Z" stroke="rgba(192,106,66,.3)" stroke-width=".8" fill="rgba(192,106,66,.04)"/>
          <path d="M-50,0 L-50,30 L0,60 L0,30" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.02)"/>
          <path d="M50,0 L50,30 L0,60 L0,30" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
          <text x="0" y="-40" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(192,106,66,.6)">DETECT</text>
          <text x="0" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.25)">200+</text>
        </g>
        <!-- Connector -->
        <line x1="55" y1="15" x2="85" y2="0" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
        <!-- Cube 2: Classify -->
        <g transform="translate(140,0)">
          <path d="M0,-30 L50,0 L0,30 L-50,0 Z" stroke="rgba(192,106,66,.3)" stroke-width=".8" fill="rgba(192,106,66,.04)"/>
          <path d="M-50,0 L-50,30 L0,60 L0,30" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.02)"/>
          <path d="M50,0 L50,30 L0,60 L0,30" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
          <text x="0" y="-40" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(192,106,66,.5)">CLASSIFY</text>
          <text x="0" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.25)">6 ed.</text>
        </g>
        <line x1="195" y1="15" x2="225" y2="0" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
        <!-- Cube 3: Score -->
        <g transform="translate(280,0)">
          <path d="M0,-30 L50,0 L0,30 L-50,0 Z" stroke="rgba(192,106,66,.35)" stroke-width=".8" fill="rgba(192,106,66,.05)"/>
          <path d="M-50,0 L-50,30 L0,60 L0,30" stroke="rgba(192,106,66,.25)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
          <path d="M50,0 L50,30 L0,60 L0,30" stroke="rgba(192,106,66,.25)" stroke-width=".6" fill="rgba(192,106,66,.04)"/>
          <text x="0" y="-40" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(192,106,66,.5)">SCORE</text>
          <text x="0" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.25)">4-dim</text>
        </g>
        <line x1="335" y1="15" x2="365" y2="0" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
        <!-- Cube 4: Alert (highlighted) -->
        <g transform="translate(420,0)">
          <path d="M0,-30 L50,0 L0,30 L-50,0 Z" stroke="rgba(192,106,66,.5)" stroke-width="1" fill="rgba(192,106,66,.08)"/>
          <path d="M-50,0 L-50,30 L0,60 L0,30" stroke="rgba(192,106,66,.35)" stroke-width=".8" fill="rgba(192,106,66,.04)"/>
          <path d="M50,0 L50,30 L0,60 L0,30" stroke="rgba(192,106,66,.35)" stroke-width=".8" fill="rgba(192,106,66,.06)"/>
          <text x="0" y="-40" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" font-weight="600" fill="rgba(192,106,66,.7)">ALERT</text>
          <text x="0" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.5)">P1/P2/P3</text>
          <circle cx="0" cy="-30" r="4" fill="rgba(192,106,66,.4)"/>
          <circle cx="0" cy="-30" r="10" stroke="rgba(192,106,66,.12)" stroke-width=".5" fill="none"/>
        </g>
      </g>
      <!-- Data sources floating above -->
      <g font-family="JetBrains Mono, monospace" font-size="9">
        <rect x="80" y="80" width="80" height="24" rx="4" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.02)"/>
        <text x="120" y="96" text-anchor="middle" fill="rgba(255,255,255,.3)">Trends data</text>
        <rect x="280" y="80" width="60" height="24" rx="4" stroke="rgba(130,153,110,.15)" stroke-width=".5" fill="rgba(130,153,110,.03)"/>
        <text x="310" y="96" text-anchor="middle" fill="rgba(130,153,110,.4)">atalay.ia</text>
        <rect x="460" y="80" width="60" height="24" rx="4" stroke="rgba(192,106,66,.15)" stroke-width=".5" fill="rgba(192,106,66,.03)"/>
        <text x="490" y="96" text-anchor="middle" fill="rgba(192,106,66,.4)">Authority</text>
      </g>
      <!-- Dashed connectors from sources to cubes -->
      <line x1="120" y1="104" x2="120" y2="200" stroke="rgba(255,255,255,.06)" stroke-width=".4" stroke-dasharray="2 3"/>
      <line x1="310" y1="104" x2="260" y2="200" stroke="rgba(130,153,110,.08)" stroke-width=".4" stroke-dasharray="2 3"/>
      <line x1="485" y1="104" x2="400" y2="200" stroke="rgba(192,106,66,.08)" stroke-width=".4" stroke-dasharray="2 3"/>
    </svg>`,
    content: `
      <p class="article-lead">A tentação de começar pela IA é grande. Plugar um modelo, criar um prompt elaborado, e dizer que a ferramenta "usa inteligência artificial". Nós fizemos o contrário: passamos os primeiros meses sem IA nenhuma. Só dados.</p>

      <h2>Por que dados primeiro</h2>

      <p>Quando começamos a construir o atalay.ia, a primeira pergunta não foi "qual tecnologia usar?" — foi "o que o jornalista precisa saber que hoje não sabe?". A resposta veio dos dados.</p>

      <p>Redações brasileiras sentam sobre meses (às vezes anos) de dados de performance editorial — acessíveis por ferramentas como o <a href="https://developers.google.com/search/docs/monitor-debug/search-console-about" target="_blank" rel="noopener">Google Search Console</a>: como o público interage com cada tipo de conteúdo, quais editorias performam melhor em cada canal, quais padrões de título geram mais engajamento. São milhões de data points que ninguém está olhando de forma sistemática.</p>

      <h2>O que os dados revelaram</h2>

      <p>Quando analisamos dados reais de performance de grandes redações, as descobertas mudaram completamente a direção do produto:</p>

      <ul>
        <li><strong>Autoridade por editoria é desigual:</strong> nem toda editoria tem a mesma credibilidade perante os algoritmos de distribuição, conforme os <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">critérios de qualidade do Google</a>. Uma editoria pode ter autoridade 3x maior que outra — e isso muda completamente quais oportunidades são reais.</li>
        <li><strong>Discover e Busca são jogos diferentes:</strong> os mesmos artigos performam de forma oposta nos dois canais. Otimizar para um pode prejudicar o outro.</li>
        <li><strong>Timing importa mais que qualidade:</strong> conteúdo publicado nas primeiras horas de um pico de interesse tem engajamento muito superior ao publicado horas depois, mesmo que a qualidade seja maior.</li>
        <li><strong>O histórico do domínio revela autoridade real:</strong> os temas onde a redação já é referência são o melhor indicador de onde vale investir esforço editorial.</li>
      </ul>

      <h2>A abordagem do atalay.ia</h2>

      <p>O atalay.ia opera em etapas progressivas. Cada etapa adiciona uma camada de inteligência:</p>

      <ul>
        <li><strong>Detectar:</strong> o que está crescendo agora? Usando dados de fontes como o <a href="https://trends.google.com/trends/" target="_blank" rel="noopener">Google Trends</a>, quais temas estão ganhando volume de interesse em tempo real?</li>
        <li><strong>Classificar:</strong> isso é relevante para qual editoria? O sistema separa o sinal do ruído automaticamente.</li>
        <li><strong>Avaliar:</strong> temos autoridade nesse tema? O atalay.ia cruza o que está em alta com o histórico real da redação.</li>
        <li><strong>Priorizar:</strong> publicar agora, considerar ou só monitorar? A IA entrega um veredito claro com base nos dados.</li>
      </ul>

      <blockquote>
        <p>"O papel da IA não é gerar conteúdo. É transformar dados brutos em decisões editoriais claras. Quem decide continua sendo o jornalista."</p>
      </blockquote>

      <h2>Contexto geográfico e temporal</h2>

      <p>Uma oportunidade de pauta não existe no vácuo. O atalay.ia entende que um trend pode ser relevante nacionalmente mas irrelevante para uma redação regional — e vice-versa. Da mesma forma, um trend em queda não é a mesma oportunidade que um trend em ascensão, mesmo que ambos tenham o mesmo volume.</p>

      <p>Esse nível de contexto é o que separa uma IA útil de uma IA que só gera ruído.</p>

      <h2>O que aprendemos</h2>

      <p>A decisão mais importante que tomamos foi <strong>não</strong> construir um chatbot. O valor real para uma redação não está em gerar texto — está em informar decisões com dados que ninguém mais está olhando.</p>

      <p>Dados primeiro. IA depois. Sempre.</p>
    `,
  },

  'voz-editorial-agentes': {
    title: 'Cada jornalista tem uma voz. A IA precisa aprender a respeitar isso.',
    description: 'Como capturamos o perfil de escrita de cada jornalista em três camadas — preferências, análise e validação — para gerar sugestões que soam como ele.',
    date: '2026-03-15',
    category: 'Produto',
    readTime: '6 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs><radialGradient id="g4" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
      <rect width="800" height="400" fill="url(#g4)"/>
      <!-- Two voice profiles side by side -->
      <!-- Profile 1: Factual -->
      <g transform="translate(220,100)">
        <rect x="-90" y="0" width="180" height="200" rx="10" stroke="rgba(192,106,66,.2)" stroke-width=".8" fill="rgba(192,106,66,.02)"/>
        <text x="0" y="28" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="12" font-weight="600" fill="rgba(192,106,66,.6)">Factual / Rápido</text>
        <line x1="-70" y1="40" x2="70" y2="40" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
        <!-- Short lines representing short sentences -->
        <rect x="-70" y="56" width="100" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
        <rect x="-70" y="68" width="60" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
        <rect x="-70" y="80" width="80" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
        <rect x="-70" y="92" width="45" height="3" rx="1.5" fill="rgba(255,255,255,.07)"/>
        <rect x="-70" y="110" width="90" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
        <rect x="-70" y="122" width="55" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
        <!-- Metrics -->
        <g font-family="JetBrains Mono, monospace" font-size="9">
          <text x="-70" y="156" fill="rgba(255,255,255,.25)">avg sentence:</text><text x="30" y="156" fill="rgba(192,106,66,.5)">12 words</text>
          <text x="-70" y="172" fill="rgba(255,255,255,.25)">lead style:</text><text x="30" y="172" fill="rgba(192,106,66,.5)">direct</text>
          <text x="-70" y="188" fill="rgba(255,255,255,.25)">adjectives:</text><text x="30" y="188" fill="rgba(192,106,66,.5)">minimal</text>
        </g>
      </g>
      <!-- Profile 2: Analítico -->
      <g transform="translate(540,100)">
        <rect x="-90" y="0" width="180" height="200" rx="10" stroke="rgba(130,153,110,.2)" stroke-width=".8" fill="rgba(130,153,110,.02)"/>
        <text x="0" y="28" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="12" font-weight="600" fill="rgba(130,153,110,.6)">Analítico / Denso</text>
        <line x1="-70" y1="40" x2="70" y2="40" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
        <!-- Long lines representing long sentences -->
        <rect x="-70" y="56" width="140" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
        <rect x="-70" y="68" width="130" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
        <rect x="-70" y="80" width="120" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
        <rect x="-70" y="92" width="140" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
        <rect x="-70" y="110" width="135" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
        <rect x="-70" y="122" width="125" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
        <!-- Metrics -->
        <g font-family="JetBrains Mono, monospace" font-size="9">
          <text x="-70" y="156" fill="rgba(255,255,255,.25)">avg sentence:</text><text x="30" y="156" fill="rgba(130,153,110,.5)">28 words</text>
          <text x="-70" y="172" fill="rgba(255,255,255,.25)">lead style:</text><text x="30" y="172" fill="rgba(130,153,110,.5)">context</text>
          <text x="-70" y="188" fill="rgba(255,255,255,.25)">adjectives:</text><text x="30" y="188" fill="rgba(130,153,110,.5)">rich</text>
        </g>
      </g>
      <!-- Center connector -->
      <g transform="translate(380,200)">
        <text x="0" y="4" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="10" fill="rgba(255,255,255,.15)">vs</text>
      </g>
    </svg>`,
    content: `
      <p class="article-lead">Uma das críticas mais comuns à IA na escrita é que ela homogeneiza — uma preocupação levantada por pesquisadores do <a href="https://reutersinstitute.politics.ox.ac.uk/news/how-journalists-can-use-ai-responsibly" target="_blank" rel="noopener">Reuters Institute for the Study of Journalism</a>. Tudo sai com o mesmo tom, a mesma estrutura, a mesma personalidade — nenhuma. Para jornalismo, isso é um problema fatal.</p>

      <h2>Por que voz importa</h2>

      <p>Um colunista de esportes escreve diferente de um repórter de política. Não é só vocabulário — é ritmo, é comprimento de frase, é uso de aspas, é estrutura de lead. O leitor reconhece a voz do jornalista mesmo sem ver o nome. Isso é patrimônio editorial.</p>

      <p>Quando uma ferramenta de IA reescreve o texto de um jornalista e o resultado soa genérico, o jornalista rejeita. Com razão. Ele não quer uma versão pasteurizada do seu texto — quer uma versão melhor do <em>seu</em> texto.</p>

      <h2>Como o atalay.ia aprende a voz</h2>

      <p>O atalay.ia captura o perfil de voz em etapas progressivas:</p>

      <h3>Preferências declaradas</h3>
      <p>Na integração inicial, o jornalista escolhe seu perfil base: <strong>Factual/Rápido</strong> (frases curtas, lead direto, mínimo de adjetivos) ou <strong>Analítico/Denso</strong> (contexto expandido, dados de suporte, mais nuance). Isso estabelece a linha de base.</p>

      <h3>Aprendizado com o uso</h3>
      <p>A IA analisa o histórico de produção do jornalista para identificar padrões — usando técnicas de <a href="https://en.wikipedia.org/wiki/Stylometry" target="_blank" rel="noopener">estilometria computacional</a>: como ele constrói frases, que tipo de vocabulário prefere, como estrutura os leads. Não é uma análise genérica — é calibrada por editoria e por autor.</p>

      <h3>Retorno contínuo</h3>
      <p>Quando o jornalista aceita ou rejeita sugestões, o atalay.ia aprende. Rejeições consistentes de certo tipo de sugestão refinam o perfil. Quanto mais uso, mais preciso.</p>

      <blockquote>
        <p>"O objetivo não é que a IA escreva como o jornalista. É que a IA sugira como um editor que conhece o jornalista."</p>
      </blockquote>

      <h2>Na prática</h2>

      <p>Quando o atalay.ia sugere um título ou uma correção, ele adapta a sugestão ao perfil de voz. Um jornalista com perfil Factual recebe títulos curtos e diretos. Um com perfil Analítico recebe títulos com mais contexto.</p>

      <p>Exemplo:</p>

      <ul>
        <li><strong>Título original:</strong> "Prefeitura anuncia mudanças no transporte público"</li>
        <li><strong>Sugestão Factual:</strong> "Cidade muda 12 linhas de ônibus a partir de segunda"</li>
        <li><strong>Sugestão Analítico:</strong> "Prefeitura reorganiza 12 linhas de ônibus após auditoria que revelou rotas subutilizadas"</li>
      </ul>

      <p>Ambas são corretas. Ambas são otimizadas. Mas cada uma soa como um jornalista diferente.</p>

      <h2>Voz por editoria</h2>

      <p>Além do perfil individual, o atalay.ia mantém um perfil por editoria. Esportes tem vocabulário próprio. Política tem estruturas próprias. Cidades usa mais dados geográficos. Esses perfis funcionam como uma segunda camada de contexto que refina cada sugestão — abordagem alinhada com as recomendações do <a href="https://www.lse.ac.uk/media-and-communications/polis/JournalismAI" target="_blank" rel="noopener">JournalismAI</a> sobre personalização responsável de IA em redações.</p>

      <p>O resultado é uma IA que não escreve — mas que edita como alguém que conhece a redação por dentro.</p>
    `,
  },

  'discover-vs-busca': {
    title: 'Discover e Busca são jogos diferentes. Sua redação trata igual?',
    description: 'Analisamos dados de milhares de artigos para mostrar como imagem, título e timing afetam Discover e Busca de formas opostas.',
    date: '2026-03-12',
    category: 'Práticas',
    readTime: '9 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs><radialGradient id="g5a" cx="30%" cy="50%"><stop offset="0%" stop-color="rgba(167,139,250,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="g5b" cx="70%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
      <rect width="800" height="400" fill="url(#g5a)"/>
      <rect width="800" height="400" fill="url(#g5b)"/>
      <!-- Left chart: Search (Busca) -->
      <g transform="translate(100,80)">
        <text x="100" y="0" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="13" font-weight="600" fill="rgba(167,139,250,.6)">Busca</text>
        <rect x="0" y="16" width="200" height="140" rx="8" stroke="rgba(167,139,250,.15)" stroke-width=".6" fill="rgba(167,139,250,.02)"/>
        <!-- Steady long-tail curve -->
        <polyline points="16,130 40,120 70,100 100,90 130,85 160,82 184,80" stroke="rgba(167,139,250,.4)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <text x="100" y="170" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">semanas →</text>
        <!-- Labels -->
        <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(167,139,250,.35)">
          <text x="16" y="200">keyword match</text>
          <text x="16" y="214">heading structure</text>
          <text x="16" y="228">internal links</text>
        </g>
      </g>
      <!-- Right chart: Discover -->
      <g transform="translate(460,80)">
        <text x="100" y="0" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="13" font-weight="600" fill="rgba(192,106,66,.6)">Discover</text>
        <rect x="0" y="16" width="200" height="140" rx="8" stroke="rgba(192,106,66,.15)" stroke-width=".6" fill="rgba(192,106,66,.02)"/>
        <!-- Spike and decay curve -->
        <polyline points="16,130 40,128 60,110 70,40 80,38 90,50 110,90 140,120 170,128 184,130" stroke="rgba(192,106,66,.5)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <!-- Peak highlight -->
        <circle cx="75" cy="38" r="3" fill="rgba(192,106,66,.5)"/>
        <line x1="75" y1="42" x2="75" y2="58" stroke="rgba(192,106,66,.2)" stroke-width=".5" stroke-dasharray="2 2"/>
        <text x="75" y="68" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(192,106,66,.4)">2-4h</text>
        <text x="100" y="170" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">horas →</text>
        <!-- Labels -->
        <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.35)">
          <text x="16" y="200">emotional hook</text>
          <text x="16" y="214">image quality</text>
          <text x="16" y="228">freshness</text>
        </g>
      </g>
      <!-- Center divider -->
      <line x1="380" y1="100" x2="380" y2="300" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="4 4"/>
      <!-- CTR comparison -->
      <g transform="translate(340,330)">
        <text x="40" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">CTR: opposite signals</text>
      </g>
    </svg>`,
    content: `
      <p class="article-lead">O <a href="https://developers.google.com/search/docs/appearance/google-discover" target="_blank" rel="noopener">Google Discover</a> e a Busca orgânica são os dois maiores canais de tráfego para a maioria dos veículos de notícia. Mas eles operam com lógicas completamente diferentes — e a maioria das redações otimiza para ambos como se fossem a mesma coisa.</p>

      <h2>O que os dados mostram</h2>

      <p>Quando analisamos dados reais de performance de grandes redações, o que encontramos desafia a intuição de muitos editores:</p>

      <ul>
        <li><strong>Títulos de Busca dependem de keywords:</strong> artigos com melhor CTR na Busca tinham a keyword principal no primeiro terço do título. Para Discover, a posição da keyword era irrelevante.</li>
        <li><strong>Títulos de Discover dependem de curiosidade:</strong> títulos com gancho emocional tinham engajamento muito maior no Discover. Na Busca, esses mesmos títulos performavam <em>pior</em>.</li>
        <li><strong>Imagem importa muito mais no Discover:</strong> artigos com imagens de alta qualidade e rosto humano tinham CTR significativamente maior no Discover. Na Busca, a imagem quase não influencia.</li>
        <li><strong>Timing é tudo no Discover:</strong> a janela de oportunidade no Discover é de poucas horas. Na Busca, um artigo bem posicionado gera tráfego por semanas.</li>
      </ul>

      <h2>O problema de otimizar para um só</h2>

      <p>A maioria das redações tem uma cultura de SEO focada em Busca — pesquisa de palavras-chave, estrutura de headings, links internos. Essas práticas são válidas, mas insuficientes para Discover.</p>

      <p>Discover é um canal de <em>recomendação</em>. O Google não mostra seu artigo porque alguém pesquisou sobre o tema — mostra porque o algoritmo decidiu que aquele usuário vai se interessar. As <a href="https://developers.google.com/search/docs/appearance/google-discover" target="_blank" rel="noopener">regras do Discover</a> são diferentes:</p>

      <ul>
        <li>Autoridade do domínio no tema importa mais que correspondência de palavra-chave</li>
        <li>Recência é um fator dominante</li>
        <li>Engajamento prévio do usuário com o veículo influencia a distribuição</li>
        <li>Qualidade da imagem de capa é um sinal forte</li>
      </ul>

      <h2>Como o atalay.ia trata os dois canais</h2>

      <p>O atalay.ia entende Discover e Busca como jogos distintos. Quando analisa um artigo, gera recomendações específicas para cada canal:</p>

      <h3>Para Busca</h3>
      <ul>
        <li>Título otimizado para correspondência de palavra-chave</li>
        <li>Estrutura de headings cobrindo subtópicos relevantes</li>
        <li>Sugestão de links internos para fortalecer clusters temáticos</li>
      </ul>

      <h3>Para Discover</h3>
      <ul>
        <li>Título com gancho emocional e curiosidade</li>
        <li>Análise da imagem de capa e potencial de clique</li>
        <li>Indicação de timing ideal com base nos dados de trends</li>
      </ul>

      <blockquote>
        <p>"Otimizar para Discover e Busca ao mesmo tempo não é impossível — mas exige entender que cada canal tem seu próprio jogo. Um título não serve para dois propósitos."</p>
      </blockquote>

      <h2>Trends e Discover andam juntos</h2>

      <p>O monitoramento de trends do atalay.ia se conecta diretamente à estratégia de Discover. Quando um tema está em ascensão e a redação tem autoridade nele, é o momento perfeito para Discover — porque o canal favorece conteúdo recente sobre temas em alta.</p>

      <p>Essa combinação — o que está subindo agora + sobre o que temos credibilidade — cria um mapa de oportunidades que nenhuma das duas análises fornece sozinha.</p>

      <h2>Por onde começar</h2>

      <p>Se sua redação ainda trata Discover e Busca como um canal só, o primeiro passo é olhar os dados separadamente. A própria documentação do Google sobre <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">criação de conteúdo útil</a> reforça que qualidade e relevância são avaliadas de formas distintas conforme a superfície. Você vai se surpreender com o quanto as métricas divergem — e com as oportunidades que estão sendo perdidas.</p>
    `,
  },

  'manual-redacao-ia': {
    title: 'O Manual de Redação como guardrail de IA',
    description: 'Por que o atalay.ia nunca sugere algo que viole as regras da sua redação — e como o manual se torna o guardião de qualidade.',
    date: '2026-03-08',
    category: 'Produto',
    readTime: '7 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs><radialGradient id="g6" cx="50%" cy="45%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
      <rect width="800" height="400" fill="url(#g6)"/>
      <!-- Book / Manual representation -->
      <g transform="translate(400,180)">
        <!-- Open book shape -->
        <path d="M-120,-60 L-8,-50 L-8,70 L-120,60 Z" stroke="rgba(255,255,255,.12)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
        <path d="M120,-60 L8,-50 L8,70 L120,60 Z" stroke="rgba(255,255,255,.12)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
        <!-- Spine -->
        <path d="M-8,-50 L-8,70" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
        <path d="M8,-50 L8,70" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
        <!-- Left page: rules -->
        <g font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.2)">
          <text x="-100" y="-30">§ 4.2 Pronomes</text>
          <rect x="-100" y="-24" width="70" height="2" rx="1" fill="rgba(255,255,255,.06)"/>
          <rect x="-100" y="-16" width="55" height="2" rx="1" fill="rgba(255,255,255,.05)"/>
          <text x="-100" y="0">§ 7.1 Siglas</text>
          <rect x="-100" y="6" width="65" height="2" rx="1" fill="rgba(255,255,255,.06)"/>
          <rect x="-100" y="14" width="50" height="2" rx="1" fill="rgba(255,255,255,.05)"/>
          <text x="-100" y="30">§ 9.3 Números</text>
          <rect x="-100" y="36" width="60" height="2" rx="1" fill="rgba(255,255,255,.06)"/>
        </g>
        <!-- Right page: corrections -->
        <g>
          <rect x="20" y="-36" width="80" height="20" rx="4" stroke="rgba(153,110,110,.2)" stroke-width=".5" fill="rgba(153,110,110,.03)"/>
          <text x="28" y="-22" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(153,110,110,.4)">✗ "o mesmo"</text>
          <rect x="20" y="-8" width="80" height="20" rx="4" stroke="rgba(130,153,110,.2)" stroke-width=".5" fill="rgba(130,153,110,.03)"/>
          <text x="28" y="6" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(130,153,110,.4)">✓ "que foi"</text>
          <rect x="20" y="22" width="80" height="20" rx="4" stroke="rgba(153,110,110,.2)" stroke-width=".5" fill="rgba(153,110,110,.03)"/>
          <text x="28" y="36" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(153,110,110,.4)">✗ "O BNDES"</text>
          <rect x="20" y="48" width="80" height="20" rx="4" stroke="rgba(130,153,110,.2)" stroke-width=".5" fill="rgba(130,153,110,.03)"/>
          <text x="28" y="62" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(130,153,110,.4)">✓ "O Banco..."</text>
        </g>
      </g>
      <!-- Guardrail lines -->
      <line x1="160" y1="100" x2="160" y2="300" stroke="rgba(192,106,66,.15)" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="640" y1="100" x2="640" y2="300" stroke="rgba(192,106,66,.15)" stroke-width="1.5" stroke-linecap="round"/>
      <text x="160" y="320" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.3)">guardrail</text>
      <text x="640" y="320" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.3)">guardrail</text>
      <!-- Stats -->
      <g transform="translate(400,350)">
        <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.15)">142 regras · 3 camadas · 0 violações</text>
      </g>
    </svg>`,
    content: `
      <p class="article-lead">Todo veículo jornalístico de respeito tem um Manual de Redação. É o documento que define como se escreve naquela publicação — não apenas gramática, mas estilo, terminologia, formato de citações, regras de atribuição. A IA precisa respeitá-lo.</p>

      <h2>O problema dos manuais esquecidos</h2>

      <p>Manuais de redação existem há décadas. Alguns são livros publicados — como o <a href="https://pt.wikipedia.org/wiki/Manual_de_Reda%C3%A7%C3%A3o_da_Folha_de_S.Paulo" target="_blank" rel="noopener">Manual de Redação da Folha de S.Paulo</a> —, outros são documentos internos. Mas quase todos compartilham o mesmo problema: são consultados cada vez menos.</p>

      <p>Jornalistas em deadline não param para abrir o manual e verificar se "infra-estrutura" ou "infraestrutura" é a grafia correta naquela publicação. Eles escrevem, o editor revisa (quando tem tempo), e erros passam.</p>

      <p>A consequência é uma erosão gradual da consistência editorial. Artigos na mesma edição usam convenções diferentes. A identidade do veículo se dilui — e com ela, os sinais de qualidade que o Google avalia dentro do seu framework de <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">conteúdo útil e confiável</a>.</p>

      <h2>O manual como guardião</h2>

      <p>O atalay.ia conhece o Manual de Redação da sua publicação. Cada regra vira um guardrail que a IA respeita em todas as sugestões. Quando o atalay.ia analisa um texto, ele verifica automaticamente:</p>

      <ul>
        <li><strong>Pronomes proibidos:</strong> "ele entregou o relatório e o mesmo foi aprovado" — o atalay.ia sugere "ele entregou o relatório, que foi aprovado" e explica a regra.</li>
        <li><strong>Siglas na primeira menção:</strong> "O BNDES anunciou" sem menção prévia ao nome completo é sinalizado.</li>
        <li><strong>Números por extenso:</strong> "3 pessoas" em vez de "três pessoas" — exceto em contextos de dados e estatísticas.</li>
        <li><strong>Atribuição vaga:</strong> "Segundo informações" sem fonte específica é sinalizado como impreciso.</li>
      </ul>

      <p>Cada correção vem com a explicação do porquê — citando a regra do manual. O jornalista entende <em>por que</em> deve mudar, não apenas <em>o que</em> mudar.</p>

      <h2>Três dimensões de análise</h2>

      <p>O atalay.ia separa a análise em três categorias, cada uma com sua lógica:</p>

      <h3>Gramática</h3>
      <p>Regras universais do português. Concordância, regência, pontuação, ortografia. Erros claros com correções claras.</p>

      <h3>Manual de Redação</h3>
      <p>Regras específicas do veículo. Aqui é onde o atalay.ia se diferencia de qualquer ferramenta genérica: ele não apenas corrige — ele cita a regra e ensina.</p>

      <h3>Desempenho</h3>
      <p>Sugestões baseadas em dados reais de distribuição. Não são "erros" — são oportunidades de melhorar o alcance do conteúdo nos canais onde o público está.</p>

      <blockquote>
        <p>"O Manual de Redação não é uma restrição para a IA. É um guardrail. Sem ele, a IA sugere qualquer coisa que pareça correta. Com ele, a IA sugere o que é correto para aquela redação."</p>
      </blockquote>

      <h2>Por que isso importa</h2>

      <p>Uma IA sem conhecimento do manual não apenas deixa erros passarem — ela <em>cria novos</em>. Sugere construções que parecem corretas mas violam regras do veículo. O jornalista confia na sugestão, publica, e a consistência editorial sofre.</p>

      <p>O atalay.ia inverte essa lógica: o manual é o primeiro filtro, não o último. Nenhuma sugestão é gerada sem antes passar pela validação das regras editoriais.</p>

      <h2>Um manual vivo</h2>

      <p>Manuais evoluem. Novas regras são adicionadas, termos mudam, exceções são criadas. O atalay.ia trata o manual como um recurso vivo: quando o editor-chefe decide que "web" agora é grafado com minúscula (em vez de "Web"), a mudança é refletida imediatamente em todas as análises.</p>

      <p>O manual deixa de ser um documento consultado ocasionalmente. Ele se torna parte ativa de cada texto que sai da redação.</p>
    `,
  },

  'por-que-audiencia-jornal-cai': {
    title: 'Por que a audiência do seu jornal está caindo — e o que os dados mostram sobre como reverter',
    description: 'Portais de notícia no Brasil perderam até 30% do tráfego orgânico nos últimos dois anos. Os dados mostram que a queda não é inevitável — redações que usam inteligência editorial estão revertendo a tendência.',
    date: '2026-03-27',
    category: 'Dados',
    readTime: '14 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-aud-1" cx="40%" cy="55%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-aud-2" cx="75%" cy="40%"><stop offset="0%" stop-color="rgba(130,153,110,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-aud-1)"/>
      <rect width="800" height="400" fill="url(#g-aud-2)"/>
      <g stroke="rgba(255,255,255,.03)" stroke-width=".4">
        <line x1="100" y1="100" x2="100" y2="310"/>
        <line x1="220" y1="100" x2="220" y2="310"/>
        <line x1="340" y1="100" x2="340" y2="310"/>
        <line x1="460" y1="100" x2="460" y2="310"/>
        <line x1="580" y1="100" x2="580" y2="310"/>
        <line x1="100" y1="150" x2="580" y2="150"/>
        <line x1="100" y1="200" x2="580" y2="200"/>
        <line x1="100" y1="250" x2="580" y2="250"/>
        <line x1="100" y1="310" x2="580" y2="310"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.15)">
        <text x="88" y="153" text-anchor="end">100%</text>
        <text x="88" y="203" text-anchor="end">75%</text>
        <text x="88" y="253" text-anchor="end">50%</text>
        <text x="88" y="313" text-anchor="end">25%</text>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.15)">
        <text x="100" y="330" text-anchor="middle">2024</text>
        <text x="220" y="330" text-anchor="middle">Q2</text>
        <text x="340" y="330" text-anchor="middle">2025</text>
        <text x="460" y="330" text-anchor="middle">Q2</text>
        <text x="580" y="330" text-anchor="middle">2026</text>
      </g>
      <polyline points="100,155 160,162 220,178 280,198 340,220 400,245 460,262 520,275 580,285" stroke="rgba(200,100,100,.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <text x="590" y="283" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(200,100,100,.5)">-30%</text>
      <polyline points="340,220 400,215 460,198 520,178 580,160" stroke="rgba(130,153,110,.5)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="340" cy="220" r="4" fill="rgba(192,106,66,.6)" stroke="rgba(192,106,66,.8)" stroke-width="1"/>
      <circle cx="340" cy="220" r="10" stroke="rgba(192,106,66,.2)" stroke-width=".5" fill="none"/>
      <circle cx="340" cy="220" r="18" stroke="rgba(192,106,66,.08)" stroke-width=".4" fill="none"/>
      <line x1="340" y1="232" x2="340" y2="260" stroke="rgba(192,106,66,.2)" stroke-width=".5" stroke-dasharray="2 2"/>
      <text x="340" y="274" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.6)">inflexion</text>
      <g transform="translate(630,110)">
        <rect x="0" y="0" width="130" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="15" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">Organic Traffic</text>
        <text x="12" y="28" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(200,100,100,.6)">-28.4%</text>
      </g>
      <g transform="translate(630,158)">
        <rect x="0" y="0" width="130" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="15" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">Discover CTR</text>
        <text x="12" y="28" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(192,106,66,.7)">4.2%</text>
      </g>
      <g transform="translate(630,206)">
        <rect x="0" y="0" width="130" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="15" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">Post-reversal</text>
        <text x="12" y="28" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(130,153,110,.7)">+18.6%</text>
      </g>
      <g transform="translate(630,254)">
        <rect x="0" y="0" width="130" height="36" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <text x="12" y="15" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">Sessions/article</text>
        <text x="12" y="28" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(192,106,66,.6)">1.8K</text>
      </g>
      <g transform="translate(100,360)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(200,100,100,.4)" stroke-width="1.2"/>
        <text x="26" y="3" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(255,255,255,.25)">sem dados editoriais</text>
        <line x1="180" y1="0" x2="200" y2="0" stroke="rgba(130,153,110,.5)" stroke-width="1.2"/>
        <text x="206" y="3" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(255,255,255,.25)">com inteligencia editorial</text>
      </g>
    </svg>`,
    content: `
      <p class="article-lead">Portais de noticia no Brasil perderam ate 30% do trafego organico nos ultimos dois anos. A queda nao e um fenomeno isolado — acontece em mercados do mundo todo. Mas os dados mostram que ela nao e inevitavel. Redacoes que adotaram inteligencia editorial baseada em dados estao revertendo a tendencia. Este artigo explica por que o trafego cai, o que as metricas realmente dizem, e quais acoes concretas funcionam.</p>

      <h2>O cenario: queda estrutural do trafego de noticias</h2>

      <p>O <a href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025" target="_blank" rel="noopener">Reuters Institute Digital News Report 2025</a> documentou o que gestores de redacao ja sentiam: o consumo direto de noticias via busca organica e redes sociais caiu de forma consistente desde 2023. No Brasil, a situacao e particularmente aguda.</p>

      <p>Segundo dados do Similarweb e do Google Search Console de veiculos brasileiros que acompanhamos, o padrao e claro:</p>

      <ul>
        <li><strong>Trafego organico via Google Search:</strong> queda media de 22% entre 2024 e 2026 para portais de noticias generalistas.</li>
        <li><strong>Google Discover:</strong> volatilidade extrema — veiculos que dependiam de Discover para 40%+ do trafego viram oscilacoes de ate 60% entre meses.</li>
        <li><strong>Redes sociais:</strong> o trafego de referencia do Facebook caiu mais de 50% desde que a Meta reduziu a priorizacao de links externos no feed.</li>
        <li><strong>Direto:</strong> unico canal estavel, mas representa menos de 15% do total na maioria dos veiculos.</li>
      </ul>

      <p>A soma desses fatores cria uma crise de distribuicao. O conteudo existe, a qualidade muitas vezes e boa, mas o publico nao chega ate ele.</p>

      <h2>Por que a busca organica esta encolhendo para noticias</h2>

      <p>O Google mudou. Nao e teoria da conspiracao — e documentado. Tres mudancas estruturais explicam a maior parte da queda:</p>

      <h3>1. AI Overviews e respostas diretas na SERP</h3>

      <p>Desde o lancamento global dos AI Overviews em 2025, o Google responde diretamente a uma parcela crescente de buscas informacionais. Para consultas como "o que aconteceu no jogo do Atletico ontem", o usuario recebe a resposta sem clicar em nenhum link. O <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">Google Search Central</a> classifica isso como "melhorar a experiencia do usuario" — mas para redacoes, significa menos cliques.</p>

      <p>Estudos da Authoritas e do Search Engine Land estimam que AI Overviews reduziram o CTR organico em 18-25% para consultas informacionais. Noticias sao, por natureza, conteudo informacional.</p>

      <h3>2. Atualizacoes de algoritmo focadas em autoridade</h3>

      <p>As atualizacoes de core algorithm do Google em 2024 e 2025 elevaram o peso de <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness). Para veiculos com boa reputacao, isso deveria ser positivo. Na pratica, muitos portais de noticias brasileiros nao estruturam seu conteudo para demonstrar autoridade tematica.</p>

      <p>Artigos publicados sem assinatura, sem links internos para cobertura anterior do tema, sem dados estruturados adequados — tudo isso sinaliza para o Google que o conteudo nao tem a profundidade que o algoritmo agora exige.</p>

      <h3>3. Indexacao mais seletiva</h3>

      <p>O Google esta indexando menos paginas. O <a href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget" target="_blank" rel="noopener">orçamento de rastreamento</a> (crawl budget) se tornou um recurso escasso. Portais que publicam 200+ artigos por dia e nao gerenciam adequadamente canonicals, paginacao e conteúdo raso estão vendo uma parcela crescente de seu conteudo simplesmente nao ser indexada.</p>

      <h2>O caso do Google Discover: oportunidade e armadilha</h2>

      <p>Enquanto a busca organica encolhe, o Google Discover se tornou o canal de crescimento para muitos veiculos. Como analisamos em profundidade no artigo <a href="/blog/discover-vs-busca/">Discover e Busca sao jogos diferentes</a>, os dois canais operam com logicas opostas.</p>

      <p>O problema e que o Discover e imprevisivel por design. Ele depende de sinais de comportamento do usuario, qualidade de imagem, recencia e autoridade tematica — nenhum dos quais o veiculo controla diretamente. Redacoes que construiram sua estrategia inteira em cima de Discover descobriram isso da pior forma.</p>

      <p>Os dados que coletamos em parceria com redacoes mostram um padrao recorrente: artigos com <a href="/blog/google-discover-trafico-redacoes/">alto desempenho no Discover</a> compartilham tres caracteristicas — imagem de alta qualidade com rosto humano, titulo com gancho emocional, e publicacao dentro de uma janela de 2-4 horas apos o pico de interesse no tema.</p>

      <p>Nenhuma dessas caracteristicas e acidental. Todas podem ser otimizadas com dados.</p>

      <h2>Mudancas de comportamento mobile que ninguem esta medindo</h2>

      <p>Existe um fator que quase nenhuma redacao mede: como o comportamento mobile mudou.</p>

      <ul>
        <li><strong>Scroll depth caiu:</strong> o usuario medio rola menos. Se o lide nao prende nos primeiros 3 segundos, o artigo perde o leitor.</li>
        <li><strong>Sessoes mais curtas:</strong> a sessao media em portais de noticias caiu de 4:30 para 2:50 entre 2023 e 2025.</li>
        <li><strong>Consumo fragmentado:</strong> o usuario le 2-3 paragrafos, sai, volta depois. O modelo de "pageview unica" nao captura esse comportamento.</li>
        <li><strong>Notificacoes competem:</strong> notificações de apps concorrem diretamente com o habito de abrir o portal. Quem nao tem app ou boletim por e-mail forte perde essa disputa.</li>
      </ul>

      <p>Redacoes que ainda medem sucesso por pageviews estao olhando para a metrica errada. Engaged sessions, scroll depth e recirculacao sao metricas que explicam muito mais sobre a saude real da audiencia.</p>

      <h2>Quais metricas realmente importam</h2>

      <p>Quando gestores de redacao nos procuram, a primeira pergunta e quase sempre sobre pageviews. Nos redirecionamos a conversa para cinco metricas que, juntas, dao um diagnostico real:</p>

      <ul>
        <li><strong>Sessoes engajadas por artigo:</strong> nao quantos clicaram, mas quantos ficaram. O GA4 define como sessoes com mais de 10 segundos, evento de conversao ou 2+ pageviews.</li>
        <li><strong>CTR por canal:</strong> separar CTR de Busca, Discover, redes sociais e direto. Um CTR medio mascara problemas graves em canais especificos.</li>
        <li><strong>Taxa de indexacao:</strong> dos artigos publicados nos ultimos 30 dias, quantos foram indexados? Se menos de 80%, ha um problema tecnico ou de qualidade.</li>
        <li><strong>Autoridade tematica:</strong> em quais editorias o veiculo aparece consistentemente no top 3? Isso define onde investir e onde recuar.</li>
        <li><strong>Velocidade de cobertura:</strong> quanto tempo entre o surgimento de um trend e a publicacao do artigo? Cada hora de atraso custa trafego, especialmente no Discover.</li>
      </ul>

      <p>E exatamente esse tipo de diagnostico que construimos no <a href="/blog/pipeline-dados-editoriais/">pipeline de dados editoriais</a> do atalay.ia — a camada de dados precisa existir antes de qualquer otimizacao fazer sentido.</p>

      <h2>O diagnostico: onde a redacao esta perdendo</h2>

      <p>Na nossa experiencia trabalhando com dados de redacoes brasileiras, as perdas se concentram em cinco areas:</p>

      <h3>Titulos que nao performam no canal certo</h3>

      <p>A maioria dos veiculos publica com um titulo unico para todos os canais. Mas um titulo bom para Busca (keyword no inicio, descritivo) e ruim para Discover (precisa de curiosidade, gancho emocional). A solucao nao e escolher um — e gerar variantes otimizadas para cada canal.</p>

      <h3>Imagens que matam o CTR no Discover</h3>

      <p>Imagens genericas de banco, sem rosto humano, com texto sobreposto, em baixa resolucao. Os dados sao claros: artigos com imagem de rosto humano em alta resolucao tem CTR ate 3x maior no Discover.</p>

      <h3>Cobertura reativa em vez de antecipatoria</h3>

      <p>A redacao espera o fato acontecer, apura, escreve e publica. Nesse ciclo, veiculos mais ageis ja capturaram o pico de interesse. Monitorar trends em tempo real — o que o atalay.ia faz na aba Trends — permite antecipar a demanda e publicar na janela ideal.</p>

      <h3>Ausência de agrupamentos temáticos</h3>

      <p>Artigos isolados, sem links internos, sem cobertura de subtopicos relacionados. O Google interpreta isso como falta de profundidade. Veiculos que constroem agrupamentos — um artigo principal conectado a 5-8 artigos de apoio — consolidam autoridade tematica e melhoram o ranking do cluster inteiro.</p>

      <h3>Falta de consistencia editorial</h3>

      <p>Erros de manual de redacao, estilos inconsistentes entre jornalistas, formatacao irregular. Parece detalhe, mas afeta E-E-A-T. O Google avalia sinais de qualidade editorial, e inconsistencia e um sinal negativo. Como exploramos em <a href="/blog/como-ia-contextual-muda-jornalismo/">por que IA generica nao funciona para jornalismo</a>, a solucao precisa ser contextual — especifica para cada redacao.</p>

      <h2>O que as redacoes que estao revertendo fazem de diferente</h2>

      <p>Nos ultimos 12 meses, identificamos um padrao entre veiculos que conseguiram reverter a tendencia de queda. Nao e uma bala de prata — e um conjunto de praticas sustentadas por dados.</p>

      <h3>1. Separaram a estrategia por canal</h3>

      <p>Param de tratar Busca e Discover como um canal so. Cada artigo passa por uma analise que determina qual canal tem maior potencial, e a otimizacao e feita de acordo. Em alguns casos, o mesmo conteudo e publicado com dois titulos diferentes — um para cada canal.</p>

      <h3>2. Adotaram monitoramento de trends em tempo real</h3>

      <p>Em vez de depender de reuniao de pauta matinal, passaram a usar sinais de dados em tempo real para decidir o que publicar e quando. A <a href="/blog/lancamento-atalay-ia/">abordagem do atalay.ia</a> combina dados de tendencias com autoridade tematica do veiculo para priorizar o que realmente merece atencao.</p>

      <h3>3. Investiram em qualidade de imagem</h3>

      <p>Parece basico, mas fez diferenca mensuravel. Veiculos que passaram a usar imagens de alta resolucao, com edicao consistente e rostos humanos como padrao, viram aumento de 40-60% no CTR do Discover em tres meses.</p>

      <h3>4. Construiram autoridade tematica</h3>

      <p>Em vez de cobrir tudo superficialmente, dobraram a aposta nas editorias onde ja tinham forca. Um veiculo regional que domina cobertura de politica estadual vai performar melhor aprofundando essa cobertura do que tentando competir com portais nacionais em economia global.</p>

      <h3>5. Usaram dados para treinar a redacao</h3>

      <p>Nao e sobre substituir jornalistas por IA — como discutimos em <a href="/blog/ia-ferramenta-ou-ameaca-jornalismo/">IA como ferramenta vs ameaca</a>. E sobre dar ao jornalista visibilidade sobre o que funciona. Quando um reporter ve que seus titulos com determinada estrutura geram 2x mais cliques, ele internaliza o padrao. O dado educa.</p>

      <h2>O papel da inteligencia editorial</h2>

      <p>Inteligencia editorial não é um painel de dados. Nao e um relatorio mensal de analytics. E a capacidade de transformar dados de performance em decisoes editoriais em tempo real.</p>

      <p>Isso significa:</p>

      <ul>
        <li>Saber em 30 segundos se um tema em alta e relevante para o seu dominio</li>
        <li>Gerar titulos otimizados para o canal certo antes da publicacao</li>
        <li>Identificar erros de manual e oportunidades de SEO no mesmo fluxo</li>
        <li>Medir o resultado e retroalimentar o sistema</li>
      </ul>

      <p>E o que construimos com o atalay.ia. Nao uma IA que escreve no lugar do jornalista, mas uma inteligencia que da contexto para decisoes melhores. A <a href="/blog/voz-editorial-agentes/">preservacao da voz editorial</a> e um principio central — a ferramenta adapta-se ao jornalista, nao o contrario.</p>

      <p>Redacoes que estao avaliando <a href="/blog/como-levar-ia-para-redacao/">como trazer IA para dentro da redacao</a> encontram nessa abordagem um caminho pratico: comecar pelos dados, nao pelo modelo.</p>

      <h2>Casos que ilustram a reversao</h2>

      <p>O <a href="/blog/caso-nyt-ia-redacao/">caso do New York Times com IA na redacao</a> mostra que mesmo veiculos de referencia global estao investindo em inteligencia editorial como camada estrategica. A diferenca entre quem reverte e quem nao reverte nao e orcamento — e abordagem.</p>

      <blockquote>
        <p>"A queda de audiencia nao e um problema de conteudo. E um problema de distribuicao. E distribuicao se resolve com dados, nao com mais conteudo."</p>
      </blockquote>

      <p>Veiculos que publicam mais artigos sem estrategia de distribuicao estao diluindo seus proprios recursos. Os que publicam menos, mas com otimizacao por canal, timing baseado em dados e qualidade de imagem controlada, estao crescendo.</p>

      <h2>Por onde comecar</h2>

      <p>Se a audiencia do seu veiculo esta caindo, o primeiro passo nao e publicar mais. E entender onde esta perdendo e por que.</p>

      <ul>
        <li><strong>Audite seus canais:</strong> separe o trafego por Busca, Discover, redes e direto. Identifique qual canal esta caindo mais.</li>
        <li><strong>Meca a taxa de indexacao:</strong> no Google Search Console, verifique quantas das suas paginas publicadas nos ultimos 30 dias foram indexadas.</li>
        <li><strong>Compare titulos:</strong> pegue seus 10 artigos com melhor CTR e seus 10 piores. O padrao vai aparecer.</li>
        <li><strong>Audite imagens:</strong> revise as imagens de capa dos ultimos 50 artigos. Quantas tem rosto humano? Quantas tem resolucao adequada para Discover (1200px+)?</li>
        <li><strong>Meca velocidade editorial:</strong> quanto tempo entre o surgimento de um tema e a publicacao? Se for mais de 4 horas, voce esta perdendo a janela do Discover.</li>
      </ul>

      <p>Esses cinco diagnosticos podem ser feitos em uma semana, sem ferramenta nenhuma. Mas a diferenca entre fazer isso uma vez e fazer continuamente e o que separa insight de inteligencia editorial.</p>

      <p>A queda de audiencia e real. Mas nao e sentenca. Os dados mostram o caminho — desde que alguem esteja olhando para eles.</p>
    `,
  },
  'caso-nyt-ia-redacao': {
      title: 'NYT acusado de publicar artigo com IA: o que o caso ensina sobre uso responsavel nas redacoes',
      description: 'Uma analise da Pangram Labs revelou que 9% dos artigos de grandes jornais ja contem conteudo gerado por IA. O caso do New York Times expoe o dilema central: usar IA para escrever ou para informar decisoes editoriais?',
      date: '2026-03-26',
      category: 'Analise',
      readTime: '12 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-nyt-1" cx="30%" cy="50%"><stop offset="0%" stop-color="rgba(153,70,70,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-nyt-2" cx="70%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-nyt-1)"/>
        <rect width="800" height="400" fill="url(#g-nyt-2)"/>
        <!-- Left: Document with AI-detected lines -->
        <g transform="translate(160,80)">
          <rect x="0" y="0" width="200" height="240" rx="8" stroke="rgba(255,255,255,.1)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
          <text x="100" y="28" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,.35)">Article Content</text>
          <line x1="20" y1="38" x2="180" y2="38" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
          <!-- Normal text lines -->
          <rect x="20" y="52" width="140" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="20" y="64" width="120" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
          <rect x="20" y="76" width="155" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <!-- AI-flagged lines (red highlight) -->
          <rect x="16" y="90" width="168" height="18" rx="3" fill="rgba(153,70,70,.08)" stroke="rgba(153,70,70,.2)" stroke-width=".5"/>
          <rect x="20" y="96" width="130" height="3" rx="1.5" fill="rgba(153,70,70,.35)"/>
          <rect x="20" y="104" width="100" height="3" rx="1.5" fill="rgba(153,70,70,.25)"/>
          <!-- Normal lines -->
          <rect x="20" y="118" width="145" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="20" y="130" width="110" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
          <!-- AI-flagged lines -->
          <rect x="16" y="142" width="168" height="18" rx="3" fill="rgba(153,70,70,.08)" stroke="rgba(153,70,70,.2)" stroke-width=".5"/>
          <rect x="20" y="148" width="150" height="3" rx="1.5" fill="rgba(153,70,70,.35)"/>
          <rect x="20" y="156" width="90" height="3" rx="1.5" fill="rgba(153,70,70,.25)"/>
          <!-- Normal lines -->
          <rect x="20" y="172" width="160" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="20" y="184" width="125" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
          <rect x="20" y="196" width="140" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="20" y="208" width="100" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
          <!-- Detection tag -->
          <rect x="120" y="220" width="68" height="14" rx="3" fill="rgba(153,70,70,.12)" stroke="rgba(153,70,70,.25)" stroke-width=".5"/>
          <text x="154" y="230" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(153,70,70,.6)">AI FLAGGED</text>
        </g>
        <!-- Center: dividing line -->
        <line x1="400" y1="90" x2="400" y2="310" stroke="rgba(255,255,255,.06)" stroke-width=".5" stroke-dasharray="4 4"/>
        <!-- Divider labels -->
        <g transform="translate(400,70)">
          <text x="-60" y="0" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="10" fill="rgba(153,70,70,.5)">IA que escreve</text>
          <text x="60" y="0" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="10" fill="rgba(192,106,66,.6)">IA que analisa</text>
        </g>
        <!-- Right: Detection score card -->
        <g transform="translate(470,90)">
          <rect x="0" y="0" width="190" height="220" rx="8" stroke="rgba(192,106,66,.2)" stroke-width=".8" fill="rgba(192,106,66,.02)"/>
          <text x="95" y="28" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" font-weight="600" fill="rgba(192,106,66,.6)">Detection Analysis</text>
          <line x1="16" y1="38" x2="174" y2="38" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
          <!-- Big stat -->
          <text x="95" y="82" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="32" font-weight="700" fill="rgba(153,70,70,.6)">9%</text>
          <text x="95" y="100" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">AI-generated content</text>
          <!-- Stats rows -->
          <line x1="16" y1="114" x2="174" y2="114" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
          <g font-family="JetBrains Mono, monospace" font-size="9">
            <text x="20" y="136" fill="rgba(255,255,255,.25)">Opinion pieces</text>
            <rect x="126" y="126" width="44" height="16" rx="4" fill="rgba(153,70,70,.1)" stroke="rgba(153,70,70,.2)" stroke-width=".5"/>
            <text x="148" y="137" text-anchor="middle" fill="rgba(153,70,70,.6)">6x</text>
          </g>
          <g font-family="JetBrains Mono, monospace" font-size="9">
            <text x="20" y="162" fill="rgba(255,255,255,.25)">Newsroom</text>
            <rect x="126" y="152" width="44" height="16" rx="4" fill="rgba(130,153,110,.08)" stroke="rgba(130,153,110,.15)" stroke-width=".5"/>
            <text x="148" y="163" text-anchor="middle" fill="rgba(130,153,110,.5)">LOW</text>
          </g>
          <g font-family="JetBrains Mono, monospace" font-size="9">
            <text x="20" y="188" fill="rgba(255,255,255,.25)">Confidence</text>
            <rect x="126" y="178" width="44" height="16" rx="4" fill="rgba(192,106,66,.1)" stroke="rgba(192,106,66,.2)" stroke-width=".5"/>
            <text x="148" y="189" text-anchor="middle" fill="rgba(192,106,66,.6)">0.87</text>
          </g>
          <!-- Bottom label -->
          <text x="95" y="212" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.15)">Pangram Labs, 2025</text>
        </g>
        <!-- Bottom status bar -->
        <g transform="translate(160,340)">
          <rect x="0" y="0" width="500" height="28" rx="6" stroke="rgba(255,255,255,.06)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
          <circle cx="16" cy="14" r="4" fill="rgba(192,106,66,.4)"/>
          <text x="28" y="18" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">atalay.ia: dados e sugestoes, nunca ghostwriting</text>
        </g>
      </svg>`,
      content: `
        <p class="article-lead">Em novembro de 2025, um ensaio publicado na coluna "Modern Love" do New York Times acendeu um debate que se espalhou por redacoes do mundo inteiro. O texto, assinado por Kate Gilgan e intitulado "I Was Deemed Unfit to Be a Mother", foi publicamente acusado de ter sido gerado por inteligencia artificial. O caso nao e isolado: uma analise da Pangram Labs revelou que aproximadamente 9% dos artigos publicados por grandes veiculos ja contem conteudo parcial ou totalmente gerado por IA. O que isso significa para o jornalismo?</p>

        <h2>O que aconteceu no New York Times</h2>

        <p>A acusacao partiu de Becky Tuch, editora do Lit Mag News, que publicou no X (antigo Twitter) que o ensaio de Gilgan "parece exatamente texto genérico de IA" (no original, "reads EXACTLY like AI slop"). Criticos apontaram padroes linguisticos tipicos de modelos de linguagem: paralelismos excessivos ("not X, not X, but Y"), uso repetido da "regra de tres", e uma fluidez superficial que carece de fricao humana.</p>

        <p>O debate escalou rapidamente. Kate Gilgan acabou reconhecendo que usou ChatGPT, Claude e Gemini como "editor colaborativo" — para "inspiração, orientação e correção". A distincao entre usar IA como inspiracao e usar IA como redatora-fantasma tornou-se o centro da controversia.</p>

        <p>O New York Times, por sua vez, declarou que jornalismo é "uma atividade inerentemente humana" e que sua política interna exige "supervisão humana" e "rotulagem clara" de qualquer uso de IA. Mas o caso expos a distancia entre politica institucional e pratica real.</p>

        <h2>O que os dados revelam: o estudo Pangram Labs</h2>

        <p>O caso do NYT nao existe no vacuo. A <a href='https://futurism.com/artificial-intelligence/analysis-new-york-times-ai-articles' target='_blank' rel='noopener'>Pangram Labs</a>, empresa especializada em deteccao de conteudo gerado por IA, conduziu uma analise sistematica de artigos publicados por grandes veiculos de comunicacao. Os resultados sao significativos:</p>

        <ul>
          <li><strong>Aproximadamente 9% dos artigos recentemente publicados</strong> continham conteudo parcial ou totalmente gerado por IA.</li>
          <li><strong>Artigos de opiniao eram 6 vezes mais propensos</strong> a conter conteudo gerado por IA do que materias produzidas por equipes de reportagem.</li>
          <li>A deteccao foi baseada em analise de padroes linguisticos, distribuicao de tokens e sinais estatisticos que diferenciam texto humano de texto sintetico.</li>
        </ul>

        <p>Esses numeros indicam que o uso de IA na producao de conteudo jornalistico ja e uma realidade -- nao uma hipotese futura. E na maioria dos casos, acontece sem qualquer transparencia para o leitor.</p>

        <h2>IA que escreve vs. ferramenta editorial: a distinção que importa</h2>

        <p>Existe uma diferenca fundamental entre dois modelos de uso de IA em redacoes:</p>

        <h3>IA como redatora-fantasma</h3>
        <p>Nesse modelo, a IA gera o texto que sera publicado -- integralmente ou com edicoes cosmeticas. O jornalista atua como curador, nao como autor. O problema: o leitor acredita estar lendo um ser humano. A relacao de confianca editorial se rompe.</p>

        <h3>IA como ferramenta editorial</h3>
        <p>Nesse modelo, a IA analisa dados, sugere otimizacoes, detecta erros, identifica oportunidades de pauta -- mas <strong>nunca escreve o texto final</strong>. O jornalista continua sendo o autor. A IA informa decisoes; nao as toma. Como exploramos em <a href='/blog/como-ia-contextual-muda-jornalismo/'>por que IA generica nao funciona para jornalismo</a>, o valor real esta no contexto que a IA traz, nao no texto que ela gera.</p>

        <p>Essa distincao nao e apenas semantica. Ela define o que e uso responsavel. E o que os leitores e os algoritmos vao passar a cobrar com cada vez mais rigor.</p>

        <h2>O paradoxo da deteccao: como funciona e por que falha</h2>

        <p>Ferramentas de deteccao de IA, como as usadas pela Pangram Labs, analisam padroes estatisticos no texto: distribuicao de perplexidade (quao previsivel e cada palavra no contexto), entropia, e padroes de repetição estrutural. Modelos de linguagem tendem a produzir texto com perplexidade mais baixa e uniforme -- sao consistentemente "previsiveis".</p>

        <p>Mas essas ferramentas tem limitacoes importantes:</p>

        <ul>
          <li><strong>Falsos positivos:</strong> textos humanos com estilo formal e repetitivo podem ser erroneamente classificados como IA. Escritores tecnicos, academicos e colunistas com estilo formulaico sao frequentemente flagrados.</li>
          <li><strong>Falsos negativos:</strong> texto gerado por IA e depois editado extensivamente por humanos pode passar despercebido. Quanto mais edicao humana, mais dificil a deteccao.</li>
          <li><strong>Evolucao dos modelos:</strong> cada nova geracao de LLM produz texto mais "humano", reduzindo a eficacia dos detectores atuais. E uma corrida armamentista.</li>
          <li><strong>Multilinguismo:</strong> a maioria dos detectores foi treinada em ingles. A eficacia em portugues e outros idiomas e significativamente menor.</li>
        </ul>

        <p>Confiar exclusivamente em detectores de IA nao e uma estrategia viavel. A solucao precisa ser institucional, nao apenas tecnologica.</p>

        <h2>O que as grandes redacoes estao fazendo</h2>

        <p>O caso do NYT nao e o unico. Diversas redacoes ja adotam IA de formas variadas -- algumas transparentes, outras nao:</p>

        <ul>
          <li><strong>Washington Post:</strong> usa IA para gerar resumos de podcasts, com rotulagem clara.</li>
          <li><strong>Bloomberg:</strong> publica artigos com resumos gerados por IA, sinalizados como tal.</li>
          <li><strong>Diversos veiculos:</strong> usam IA para gerar titulos alternativos para teste A/B, sem necessariamente divulgar.</li>
          <li><strong>Ars Technica:</strong> <a href='https://futurism.com/artificial-intelligence/new-york-times-accused-ai-article' target='_blank' rel='noopener'>demitiu um reporter</a> que acidentalmente incluiu citacoes fabricadas por IA em uma materia.</li>
        </ul>

        <p>O padrao que emerge e claro: quando a IA e usada para gerar conteudo, os riscos sao altos. Quando e usada para analisar e sugerir, os riscos sao gerenciaveis.</p>

        <h2>Quais politicas as redacoes precisam ter</h2>

        <p>Com base nos casos reais e nas diretrizes de organizacoes como o Reuters Institute e as proprias <a href='https://developers.google.com/search/docs/essentials' target='_blank' rel='noopener'>politicas do Google sobre conteudo de IA</a>, redacoes que querem usar IA de forma responsavel precisam de:</p>

        <ul>
          <li><strong>Politica de uso explicita:</strong> documentar o que e permitido e o que nao e. "Usar IA para pesquisa" e diferente de "usar IA para escrever o lide". Cada caso precisa de regra clara.</li>
          <li><strong>Rotulagem transparente:</strong> quando IA contribuiu substancialmente para o conteudo, o leitor precisa saber. O Google ja afirmou que transparencia e um fator positivo.</li>
          <li><strong>Revisao humana obrigatoria:</strong> nenhum conteudo gerado por IA deve ser publicado sem revisao editorial humana. Isso inclui titulos, resumos e legendas.</li>
          <li><strong>Treinamento da equipe:</strong> jornalistas precisam entender o que a IA faz bem (analise de dados, deteccao de padroes, sugestoes) e o que ela faz mal (precisao factual, nuance, voz autoral).</li>
          <li><strong>Auditoria periodica:</strong> revisar regularmente como a IA esta sendo usada na pratica, nao apenas na teoria. O gap entre politica e pratica, como o caso NYT mostrou, pode ser significativo.</li>
        </ul>

        <h2>O caso a favor da transparencia</h2>

        <p>Existe uma narrativa de que admitir o uso de IA enfraquece a credibilidade. Os dados mostram o contrario. Veiculos que sao transparentes sobre como usam IA -- para analise, otimizacao, sugestoes -- constroem mais confianca do que aqueles que usam IA escondida e sao eventualmente descobertos.</p>

        <blockquote>
          <p>"A questao nao e se sua redacao usa IA. A questao e: ela usa IA para escrever no lugar do jornalista, ou para dar ao jornalista informacoes melhores? O primeiro caso destrói confianca. O segundo a constroi."</p>
        </blockquote>

        <p>Como discutimos em <a href='/blog/voz-editorial-agentes/'>como a IA pode respeitar a voz de cada jornalista</a>, a tecnologia mais avancada nao e a que escreve melhor -- e a que entende o contexto editorial e oferece sugestoes que o jornalista consegue incorporar como suas, porque foram calibradas para o estilo dele.</p>

        <h2>IA que analisa dados vs. IA que gera texto</h2>

        <p>O caso do NYT cristaliza um dilema que toda redacao vai enfrentar. A linha divisoria e clara:</p>

        <ul>
          <li><strong>Uso de baixo risco:</strong> IA para analisar dados de performance, detectar tendencias, sugerir otimizacoes de SEO, verificar conformidade com o manual de redacao, gerar opcoes de titulo para teste. Nenhum texto final e gerado pela IA.</li>
          <li><strong>Uso de alto risco:</strong> IA para escrever artigos, gerar citacoes, produzir analises opinativas, criar conteudo publicavel. O jornalista deixa de ser autor e vira curador.</li>
        </ul>

        <p>Essa e a abordagem que adotamos no <a href='/blog/lancamento-atalay-ia/'>atalay.ia</a>: uma ferramenta que nunca escreve no lugar do jornalista. Que analisa dados reais de performance, identifica oportunidades de pauta, verifica aderencia ao manual, e sugere otimizacoes -- mas o texto final e sempre humano. Como detalhamos em <a href='/blog/como-levar-ia-para-redacao/'>como levar IA para a redacao de forma pratica</a>, a adocao responsavel comeca com clareza sobre o papel da tecnologia.</p>

        <h2>O que isso significa para o futuro</h2>

        <p>O percentual de 9% identificado pela Pangram Labs tende a crescer. Os modelos estao ficando melhores. A tentacao de usar IA para produzir mais conteudo com menos gente vai aumentar, especialmente em redacoes sob pressao financeira -- um cenario que ja <a href='/blog/por-que-audiencia-jornal-cai/'>afeta a audiencia de jornais no Brasil</a>.</p>

        <p>Mas a historia do jornalismo mostra que atalhos de credibilidade cobram preco. Fabricar citacoes sempre foi motivo de demissao. Plagiar sempre foi motivo de demissao. Publicar como seu algo que nao e seu sempre foi motivo de demissao. O uso opaco de IA generativa e a versao contemporanea desses mesmos erros.</p>

        <p>As redacoes que vao se destacar sao as que adotam IA como ferramenta de inteligencia -- nao de producao. Que usam dados para <a href='/blog/ia-ferramenta-ou-ameaca-jornalismo/'>informar decisoes editoriais</a>, nao para substituir o trabalho do jornalista.</p>

        <p>O jornalismo e, como o proprio NYT definiu, "uma atividade inerentemente humana". A IA mais útil e a que potencializa esse trabalho humano -- nao a que tenta substitui-lo.</p>
      `,
    },
  'como-levar-ia-para-redacao': {
      title: 'Como levar IA para a redação sem resistência da equipe',
      description: 'A maior barreira para adoção de IA em redações não é tecnológica — é cultural. Um guia prático para gestores que querem implementar inteligência artificial sem gerar rejeição na equipe editorial.',
      date: '2026-03-25',
      category: 'Práticas',
      readTime: '14 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-team-1" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-team-2" cx="20%" cy="60%"><stop offset="0%" stop-color="rgba(130,153,110,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-team-3" cx="80%" cy="40%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-team-1)"/>
        <rect width="800" height="400" fill="url(#g-team-2)"/>
        <rect width="800" height="400" fill="url(#g-team-3)"/>
        <!-- Timeline base line -->
        <line x1="100" y1="200" x2="700" y2="200" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <!-- Stage 1: DADOS -->
        <g transform="translate(150,200)">
          <circle cx="0" cy="0" r="6" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
          <rect x="-40" y="-80" width="80" height="50" rx="8" stroke="rgba(255,255,255,.1)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
          <!-- Person icon - arms down, passive -->
          <circle cx="0" cy="-62" r="6" stroke="rgba(255,255,255,.2)" stroke-width=".8" fill="none"/>
          <line x1="0" y1="-56" x2="0" y2="-42" stroke="rgba(255,255,255,.2)" stroke-width=".8"/>
          <line x1="-8" y1="-48" x2="8" y2="-48" stroke="rgba(255,255,255,.2)" stroke-width=".8"/>
          <text x="0" y="28" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="rgba(255,255,255,.25)">DADOS</text>
          <text x="0" y="44" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(255,255,255,.15)">observando</text>
        </g>
        <!-- Connector 1-2 -->
        <line x1="196" y1="200" x2="254" y2="200" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="4 3"/>
        <polygon points="254,197 260,200 254,203" fill="rgba(255,255,255,.1)"/>
        <!-- Stage 2: ANALISE -->
        <g transform="translate(310,200)">
          <circle cx="0" cy="0" r="6" fill="rgba(192,106,66,.15)" stroke="rgba(192,106,66,.25)" stroke-width=".8"/>
          <rect x="-40" y="-80" width="80" height="50" rx="8" stroke="rgba(192,106,66,.15)" stroke-width=".6" fill="rgba(192,106,66,.02)"/>
          <!-- Person icon - one arm up, curious -->
          <circle cx="0" cy="-62" r="6" stroke="rgba(192,106,66,.3)" stroke-width=".8" fill="none"/>
          <line x1="0" y1="-56" x2="0" y2="-42" stroke="rgba(192,106,66,.3)" stroke-width=".8"/>
          <line x1="-8" y1="-48" x2="0" y2="-50" stroke="rgba(192,106,66,.3)" stroke-width=".8"/>
          <line x1="0" y1="-50" x2="8" y2="-42" stroke="rgba(192,106,66,.3)" stroke-width=".8"/>
          <text x="0" y="28" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="rgba(192,106,66,.35)">ANALISE</text>
          <text x="0" y="44" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(192,106,66,.25)">testando</text>
        </g>
        <!-- Connector 2-3 -->
        <line x1="356" y1="200" x2="414" y2="200" stroke="rgba(192,106,66,.1)" stroke-width=".6" stroke-dasharray="4 3"/>
        <polygon points="414,197 420,200 414,203" fill="rgba(192,106,66,.15)"/>
        <!-- Stage 3: SUGESTOES -->
        <g transform="translate(470,200)">
          <circle cx="0" cy="0" r="6" fill="rgba(192,106,66,.3)" stroke="rgba(192,106,66,.4)" stroke-width=".8"/>
          <rect x="-40" y="-80" width="80" height="50" rx="8" stroke="rgba(192,106,66,.25)" stroke-width=".8" fill="rgba(192,106,66,.03)"/>
          <!-- Person icon - both arms engaged -->
          <circle cx="0" cy="-62" r="6" stroke="rgba(192,106,66,.5)" stroke-width=".8" fill="none"/>
          <line x1="0" y1="-56" x2="0" y2="-42" stroke="rgba(192,106,66,.5)" stroke-width=".8"/>
          <line x1="-10" y1="-44" x2="0" y2="-50" stroke="rgba(192,106,66,.5)" stroke-width=".8"/>
          <line x1="10" y1="-44" x2="0" y2="-50" stroke="rgba(192,106,66,.5)" stroke-width=".8"/>
          <text x="0" y="28" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="rgba(192,106,66,.5)">SUGESTOES</text>
          <text x="0" y="44" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(192,106,66,.35)">confiando</text>
        </g>
        <!-- Connector 3-4 -->
        <line x1="516" y1="200" x2="574" y2="200" stroke="rgba(192,106,66,.15)" stroke-width=".6" stroke-dasharray="4 3"/>
        <polygon points="574,197 580,200 574,203" fill="rgba(192,106,66,.25)"/>
        <!-- Stage 4: COPILOTO (highlighted) -->
        <g transform="translate(630,200)">
          <circle cx="0" cy="0" r="7" fill="rgba(192,106,66,.5)" stroke="rgba(192,106,66,.6)" stroke-width="1"/>
          <circle cx="0" cy="0" r="14" stroke="rgba(192,106,66,.12)" stroke-width=".5" fill="none"/>
          <circle cx="0" cy="0" r="22" stroke="rgba(192,106,66,.06)" stroke-width=".4" fill="none"/>
          <rect x="-40" y="-80" width="80" height="50" rx="8" stroke="rgba(192,106,66,.4)" stroke-width="1" fill="rgba(192,106,66,.05)"/>
          <!-- Person icon - arms up, celebrating -->
          <circle cx="0" cy="-62" r="6" stroke="rgba(192,106,66,.7)" stroke-width="1" fill="none"/>
          <line x1="0" y1="-56" x2="0" y2="-42" stroke="rgba(192,106,66,.7)" stroke-width="1"/>
          <line x1="-10" y1="-56" x2="0" y2="-50" stroke="rgba(192,106,66,.7)" stroke-width="1"/>
          <line x1="10" y1="-56" x2="0" y2="-50" stroke="rgba(192,106,66,.7)" stroke-width="1"/>
          <text x="0" y="36" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="rgba(192,106,66,.7)">COPILOTO</text>
          <text x="0" y="52" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(192,106,66,.5)">integrando</text>
        </g>
        <!-- Bottom label -->
        <text x="400" y="370" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.12)">jornada de adocao · semanas, nao dias</text>
        <!-- Top context -->
        <g font-family="JetBrains Mono, monospace" font-size="8">
          <rect x="100" y="80" width="90" height="22" rx="4" stroke="rgba(255,255,255,.06)" stroke-width=".5" fill="rgba(255,255,255,.02)"/>
          <text x="145" y="95" text-anchor="middle" fill="rgba(255,255,255,.2)">resistencia</text>
          <rect x="350" y="80" width="90" height="22" rx="4" stroke="rgba(192,106,66,.1)" stroke-width=".5" fill="rgba(192,106,66,.02)"/>
          <text x="395" y="95" text-anchor="middle" fill="rgba(192,106,66,.3)">curiosidade</text>
          <rect x="600" y="80" width="90" height="22" rx="4" stroke="rgba(192,106,66,.2)" stroke-width=".5" fill="rgba(192,106,66,.03)"/>
          <text x="645" y="95" text-anchor="middle" fill="rgba(192,106,66,.45)">confianca</text>
        </g>
        <!-- Dashed arcs from labels to stages -->
        <line x1="145" y1="102" x2="150" y2="160" stroke="rgba(255,255,255,.05)" stroke-width=".4" stroke-dasharray="2 3"/>
        <line x1="395" y1="102" x2="390" y2="160" stroke="rgba(192,106,66,.06)" stroke-width=".4" stroke-dasharray="2 3"/>
        <line x1="645" y1="102" x2="630" y2="160" stroke="rgba(192,106,66,.1)" stroke-width=".4" stroke-dasharray="2 3"/>
      </svg>`,
      content: `
        <p class="article-lead">A maior parte dos projetos de IA que fracassam em redações não falham por causa da tecnologia. Falham porque alguem decidiu implementar de cima para baixo, sem ouvir quem realmente usa a ferramenta todos os dias. Depois de trabalhar diretamente com equipes editoriais na adocao do atalay.ia, aprendi que o caminho importa mais do que a ferramenta.</p>

        <h2>Por que jornalistas resistem a IA</h2>

        <p>Antes de qualquer plano de implementacao, e preciso entender de onde vem a resistencia. Ela nao e irracional — e, na maioria das vezes, fundamentada.</p>

        <h3>Medo de substituicao</h3>

        <p>A narrativa dominante sobre IA na midia e de eliminacao de empregos. Jornalistas leem matérias sobre cortes em redacoes que adotaram IA e, compreensivelmente, ficam na defensiva. O <a href="https://rfrts.uk/DNR" target="_blank" rel="noopener">Reuters Institute Digital News Report</a> de 2025 identificou que 62% dos jornalistas veem IA como uma ameaca potencial ao emprego, mesmo entre aqueles que reconhecem seus beneficios.</p>

        <p>Essa preocupacao nao pode ser descartada com um "nao vamos demitir ninguem". Precisa ser respondida com fatos e, principalmente, com acoes visiveis.</p>

        <h3>Preocupacao com qualidade</h3>

        <p>Jornalistas serios se preocupam com precisao. Eles viram as alucinacoes do ChatGPT. Viram textos gerados por IA que pareciam plausíveis mas estavam errados. E sabem que no jornalismo, um erro factual nao e apenas embaracoso — pode ser processado judicialmente. A reacao natural e rejeitar qualquer ferramenta que introduza risco editorial.</p>

        <h3>Autonomia criativa</h3>

        <p>Escrever e um ato criativo, mesmo no jornalismo hard news. Cada jornalista tem um estilo, uma voz, um jeito de construir narrativa. Ferramentas que padronizam o texto — que fazem tudo soar como se a mesma pessoa tivesse escrito — sao percebidas como uma agressao a identidade profissional.</p>

        <p>Entender essas tres camadas de resistencia e o primeiro passo para supera-las. E cada uma exige uma resposta diferente.</p>

        <h2>Copiloto vs. substituto: a distincao que muda tudo</h2>

        <p>Existe uma diferenca fundamental entre IA que <strong>faz o trabalho do jornalista</strong> e IA que <strong>ajuda o jornalista a fazer melhor o proprio trabalho</strong>. A primeira gera rejeicao. A segunda gera adocao.</p>

        <p>Um copiloto nao escreve a materia. Ele sinaliza que um termo viola o manual de redacao. Ele mostra que um titulo tem baixo potencial de clique no Discover. Ele alerta que um tema esta em alta e a redacao tem autoridade nele. A decisao continua sendo do jornalista — a IA apenas amplia a visao.</p>

        <blockquote>
          <p>"A pergunta certa nao e 'a IA consegue escrever?' — e 'o que o jornalista faria se tivesse acesso a dados que hoje ninguem esta olhando?'"</p>
        </blockquote>

        <p>Essa distincao precisa ser comunicada antes de qualquer implementacao. Se a equipe percebe a ferramenta como substituta, a resistencia sera maxima. Se percebe como copiloto — como um editor adicional que esta ali para ajudar, nao para julgar — a conversa muda completamente. Nos detalhamos essa dinamica em <a href="/blog/ia-ferramenta-ou-ameaca-jornalismo/">IA: ferramenta ou ameaca para o jornalismo</a>.</p>

        <h2>Comece pelos dados, nao pela escrita</h2>

        <p>O erro mais comum que vejo em redacoes tentando adotar IA e comecar pelo produto mais sensível: a escrita. Se a primeira coisa que a ferramenta faz e sugerir mudancas no texto do jornalista, a reacao reflexiva e defesa.</p>

        <p>A abordagem que funciona e comecar pelo que nao ameaca ninguem: <strong>dados</strong>.</p>

        <ul>
          <li><strong>Monitoramento de trends:</strong> mostrar o que esta em alta e como isso se conecta com as editorias da redacao. Ninguem se sente ameacado por um painel de dados.</li>
          <li><strong>Analise de performance:</strong> revelar quais tipos de conteudo performam melhor em cada canal. E informacao pura — sem julgamento sobre a qualidade do texto de ninguem.</li>
          <li><strong>Autoridade por editoria:</strong> mostrar onde a redacao tem mais credibilidade perante os algoritmos de distribuicao. Isso gera curiosidade, nao resistencia.</li>
        </ul>

        <p>Essa e a filosofia que descrevemos em <a href="/blog/pipeline-dados-editoriais/">dados primeiro, IA depois</a>. Quando a equipe ja esta usando dados para tomar decisoes editoriais, o salto para sugestoes automatizadas se torna natural — e desejado.</p>

        <h2>Vitórias rápidas que constroem confiança</h2>

        <p>Confianca nao se constroi com apresentacoes bonitas. Se constroi com resultados tangiveis. As primeiras semanas de qualquer implementacao de IA em uma redacao precisam gerar vitorias rapidas e visiveis.</p>

        <p>Exemplos que funcionaram nas redacoes com quem trabalhamos:</p>

        <ul>
          <li><strong>Tempo economizado em verificacao de manual:</strong> um jornalista que gastava 15 minutos revisando siglas, grafias e regras do manual agora tem isso feito em segundos. Ele nota. Ele agradece.</li>
          <li><strong>Alertas de trend que viraram pauta:</strong> quando a IA sinaliza um tema em alta 2 horas antes da concorrencia, e a redacao publica primeiro, o credito fica visivel. Todo mundo viu o alerta. Todo mundo viu o resultado.</li>
          <li><strong>Titulos A/B com dados:</strong> em vez de discutir qual titulo e melhor com base em opiniao, a equipe passa a ter dados de performance de titulos similares. A conversa muda de "eu acho" para "os dados mostram".</li>
          <li><strong>Deteccao de erros que teriam passado:</strong> quando a IA flagra um erro factual ou uma violacao de manual que teria ido ao ar, o jornalista entende o valor imediatamente.</li>
        </ul>

        <p>Cada vitória rápida e uma camada de confianca. Acumule o suficiente e a equipe para de perguntar "por que usar IA?" e comeca a perguntar "o que mais ela faz?".</p>

        <h2>Metricas de adocao: o que medir</h2>

        <p>Implementar IA sem medir adocao e voar cego. Mas as metricas certas nao sao as que a maioria dos gestores acompanha.</p>

        <h3>Metricas que importam</h3>

        <ul>
          <li><strong>Taxa de aceitacao de sugestoes:</strong> de todas as sugestoes da IA, quantas o jornalista aceita? Se o numero e baixo, as sugestoes nao sao uteis — ou a confianca ainda nao existe.</li>
          <li><strong>Tempo ate primeira interacao:</strong> quanto tempo demora entre o jornalista abrir a ferramenta e usá-la de fato? Se ele abre e fecha sem interagir, há um problema de integração ou de valor percebido.</li>
          <li><strong>Frequencia de uso voluntario:</strong> a equipe usa a ferramenta mesmo quando nao e obrigada? Uso voluntario e o melhor indicador de adocao real.</li>
          <li><strong>Reducao de erros em publicacao:</strong> depois da implementacao, os erros de manual e gramática diminuiram? Esse dado convence editores-chefes.</li>
          <li><strong>Impacto no trafego:</strong> as materias produzidas com auxilio da IA performam melhor? Essa e a metrica que sustenta o projeto a longo prazo. Abordamos esse tema em detalhe em <a href="/blog/por-que-audiencia-jornal-cai/">por que a audiencia do jornal cai</a>.</li>
        </ul>

        <h3>Metricas que enganam</h3>

        <ul>
          <li><strong>Numero de logins:</strong> logar nao significa usar. Um jornalista pode abrir a ferramenta por obrigacao e fechar em 10 segundos.</li>
          <li><strong>Volume de texto processado:</strong> processar muito texto nao significa que o resultado esta sendo util. Qualidade da interacao importa mais que volume.</li>
        </ul>

        <h2>Envolvimento da equipe: nao imponha, convide</h2>

        <p>A pior forma de introduzir IA em uma redacao e por decreto. "A partir de segunda, todos usam a ferramenta X" e uma receita para resistencia passiva — a equipe usa por obrigacao, mas sabota com desinteresse.</p>

        <p>O que funciona:</p>

        <ul>
          <li><strong>Comece com voluntarios:</strong> identifique 2-3 jornalistas curiosos sobre tecnologia. Nao precisa ser o mais sênior — precisa ser alguem que vai testar com boa vontade e dar feedback honesto.</li>
          <li><strong>Transforme-os em embaixadores:</strong> quando esses voluntarios tem resultados positivos, eles viram embaixadores naturais. Um colega dizendo "isso me economizou 20 minutos" tem mais credibilidade do que qualquer apresentacao do gestor.</li>
          <li><strong>Faca sessoes de feedback:</strong> reuna a equipe regularmente para ouvir o que funciona e o que irrita. Nao para defender a ferramenta — para melhorá-la. Quando a equipe percebe que o feedback deles muda a ferramenta, o senso de propriedade aumenta.</li>
          <li><strong>Respeite os que nao querem:</strong> forcar adocao gera ressentimento. Alguns jornalistas vao adotar depois de ver colegas usando com sucesso. Outros podem nunca adotar — e tudo bem, se a producao deles continua forte.</li>
        </ul>

        <p>O projeto <a href="https://www.lse.ac.uk/media-and-communications/polis/JournalismAI" target="_blank" rel="noopener">JournalismAI da LSE</a> documentou que redacoes com abordagem de baixo para cima na adoção de IA — onde a equipe participa das decisões — têm taxas de sucesso significativamente maiores do que aquelas com implementação de cima para baixo.</p>

        <h2>O que funciona vs. o que gera rejeicao</h2>

        <p>Depois de acompanhar implementacoes em redacoes reais, os padroes ficam claros:</p>

        <h3>Gera adocao</h3>

        <ul>
          <li>Comecou com dados e painéis, nao com correcao de texto</li>
          <li>Os primeiros usuarios foram voluntarios, nao designados</li>
          <li>A IA sugere, nunca impoe — o jornalista decide</li>
          <li>Resultados foram compartilhados publicamente (materia que performou bem por causa de um alerta de trend)</li>
          <li>A ferramenta preserva a voz do jornalista em vez de padronizar</li>
          <li>Retorno da equipe resultou em mudancas visiveis na ferramenta</li>
        </ul>

        <h3>Gera rejeicao</h3>

        <ul>
          <li>Implementacao por decreto, sem consulta a equipe</li>
          <li>Primeira interacao e a IA "corrigindo" o texto do jornalista</li>
          <li>Metricas de uso sendo cobradas ("voce usou a ferramenta esta semana?")</li>
          <li>Sugestoes que soam genericas e nao conhecem o contexto da redacao</li>
          <li>Falta de transparencia sobre como a IA funciona e o que ela faz com os dados</li>
          <li>Promessas exageradas sobre resultados</li>
        </ul>

        <p>O caso do <a href="/blog/caso-nyt-ia-redacao/">New York Times com IA na redacao</a> ilustra bem como ate organizacoes de ponta enfrentam resistencia quando a comunicacao e a abordagem nao sao cuidadosas.</p>

        <h2>Treinamento e transparencia</h2>

        <p>Dois elementos sao inegociaveis para adocao sustentável: treinamento e transparencia.</p>

        <h3>Treinamento pratico, nao teorico</h3>

        <p>Jornalistas nao precisam saber como redes neurais funcionam. Precisam saber como a ferramenta os ajuda no dia a dia. O treinamento ideal e:</p>

        <ul>
          <li><strong>Curto:</strong> 30 minutos, nao 3 horas. Ninguem em uma redacao tem tempo para workshops longos.</li>
          <li><strong>Pratico:</strong> use o proprio texto do jornalista como exemplo. Mostre a ferramenta funcionando com conteudo real, nao com demos preparadas.</li>
          <li><strong>Recorrente:</strong> uma sessao nao basta. A cada nova funcionalidade, uma demonstracao rapida. Micro-treinamentos funcionam melhor que aulas formais.</li>
          <li><strong>Liderado por pares:</strong> os embaixadores da equipe treinando colegas tem mais impacto do que treinamento vindo de fora.</li>
        </ul>

        <h3>Transparencia radical</h3>

        <p>A equipe precisa saber:</p>

        <ul>
          <li>O que a IA faz com o texto — e o que nao faz (o texto nao e armazenado para treinar modelos)</li>
          <li>Como as sugestoes sao geradas — nao a arquitetura tecnica, mas a logica ("a sugestao e baseada em dados de performance dos ultimos 90 dias da sua editoria")</li>
          <li>Quais dados a ferramenta acessa — e quais nao acessa</li>
          <li>Quem ve as metricas de uso — e para que servem (melhorar a ferramenta, nao vigiar a equipe)</li>
        </ul>

        <p>O <a href="https://rfrts.uk/DNR" target="_blank" rel="noopener">Reuters Institute</a> destaca que a confianca dos jornalistas em ferramentas de IA esta diretamente correlacionada com o nivel de transparencia sobre como essas ferramentas operam. Sem transparencia, sem confianca.</p>

        <h2>Preservacao da voz editorial: o antidoto contra o medo principal</h2>

        <p>Se existe uma unica funcionalidade que muda a percepcao de jornalistas sobre IA, e a preservacao da voz. Quando o jornalista ve que a sugestao soa como algo que <em>ele</em> escreveria — e nao como texto generico de maquina — a resistencia dissolve.</p>

        <p>Isso exige uma IA que conhece o perfil de escrita de cada jornalista: comprimento medio de frase, estilo de lead, uso de adjetivos, nivel de formalidade. Como descrevemos em <a href="/blog/voz-editorial-agentes/">perfis de voz editorial</a>, o atalay.ia captura esses padroes em tres camadas — preferencias declaradas, analise de historico e feedback continuo.</p>

        <p>O resultado pratico: um jornalista com estilo direto e factual recebe sugestoes diretas e factuais. Um colunista analitico recebe sugestoes com mais contexto e nuance. A IA se adapta ao jornalista, nao o contrario.</p>

        <p>Isso elimina o medo de homogeneizacao. E elimina a principal objecao criativa contra IA na redacao. A diferenca entre <a href="/blog/como-ia-contextual-muda-jornalismo/">IA contextual e IA generica</a> e exatamente essa: uma respeita o contexto, a outra ignora.</p>

        <h2>Um roteiro pratico de implementacao</h2>

        <p>Para gestores prontos para comecar, este e o roteiro que recomendo com base na experiencia real:</p>

        <h3>Semana 1-2: Fundacao</h3>
        <ul>
          <li>Apresente a ferramenta em uma reuniao informal, nao em um comunicado corporativo</li>
          <li>Explique o modelo copiloto: a IA sugere, o jornalista decide</li>
          <li>Recrute 2-3 voluntarios para um piloto</li>
          <li>Comece apenas com dados e monitoramento de trends</li>
        </ul>

        <h3>Semana 3-4: Primeiros resultados</h3>
        <ul>
          <li>Compartilhe os primeiros vitória rápidas publicamente</li>
          <li>Faca uma sessao de feedback com os voluntarios</li>
          <li>Ajuste com base no que ouviu</li>
          <li>Convide mais 3-4 pessoas que demonstraram curiosidade</li>
        </ul>

        <h3>Semana 5-6: Expansao</h3>
        <ul>
          <li>Introduza sugestoes de titulo e analise de texto</li>
          <li>Mostre os perfis de voz — cada jornalista ve como a IA entende o estilo dele</li>
          <li>Comece a medir taxa de aceitacao de sugestoes</li>
          <li>Faca os embaixadores treinarem colegas em sessoes curtas</li>
        </ul>

        <h3>Semana 7-8: Consolidacao</h3>
        <ul>
          <li>Abra acesso para toda a equipe (sem obrigatoriedade)</li>
          <li>Publique um resumo de resultados: tempo economizado, erros evitados, pautas geradas</li>
          <li>Colete depoimentos dos usuarios mais ativos</li>
          <li>Defina metricas de longo prazo para acompanhamento contínuo</li>
        </ul>

        <h2>A mudanca cultural e o verdadeiro projeto</h2>

        <p>Implementar uma ferramenta de IA leva dias. Mudar a cultura de uma redacao em relacao a IA leva meses. O erro e tratar a implementacao como um projeto de tecnologia quando, na verdade, e um projeto de gestao de mudanca.</p>

        <p>Os gestores que tem sucesso nessa transicao sao os que entendem que a ferramenta e apenas o meio. O fim e uma redacao que toma decisoes editoriais melhores porque tem acesso a dados e inteligencia que antes nao existiam. Uma redacao onde o jornalista nao compete com a IA — ele e amplificado por ela.</p>

        <p>A tecnologia esta pronta. A questao e se a abordagem vai ser digna da equipe que vai usa-la.</p>
      `,
    },
  'ia-ferramenta-ou-ameaca-jornalismo': {
      title: 'IA na redação: ferramenta editorial ou ameaça ao jornalismo?',
      description: 'O debate sobre inteligência artificial nas redações está polarizado entre entusiastas e céticos. Os dados mostram um caminho do meio: IA que analisa, não IA que escreve.',
      date: '2026-03-24',
      category: 'Análise',
      readTime: '14 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-bal-1" cx="25%" cy="50%"><stop offset="0%" stop-color="rgba(153,110,110,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-bal-2" cx="75%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <linearGradient id="g-bal-3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(192,106,66,.3)"/><stop offset="100%" stop-color="rgba(192,106,66,.05)"/></linearGradient>
          <linearGradient id="g-bal-4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(153,110,110,.2)"/><stop offset="100%" stop-color="rgba(153,110,110,.04)"/></linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-bal-1)"/>
        <rect width="800" height="400" fill="url(#g-bal-2)"/>
        <!-- Center divider line -->
        <line x1="400" y1="60" x2="400" y2="340" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
        <!-- Balance fulcrum -->
        <polygon points="400,220 390,240 410,240" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.1)" stroke-width=".5"/>
        <line x1="390" y1="240" x2="410" y2="240" stroke="rgba(255,255,255,.1)" stroke-width=".6"/>
        <line x1="395" y1="240" x2="395" y2="260" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
        <line x1="405" y1="240" x2="405" y2="260" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
        <rect x="385" y="258" width="30" height="6" rx="2" fill="rgba(255,255,255,.06)"/>
        <!-- Balance beam (tilted: left side lower/heavier = risky, right side higher = better) -->
        <line x1="180" y1="218" x2="620" y2="198" stroke="rgba(255,255,255,.12)" stroke-width="1.2" stroke-linecap="round"/>
        <!-- LEFT SIDE: IA que escreve (faded, red-ish) -->
        <g transform="translate(200,100)">
          <text x="0" y="0" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="13" font-weight="600" fill="rgba(153,110,110,.6)">IA que escreve</text>
          <rect x="-90" y="14" width="180" height="96" rx="8" stroke="rgba(153,110,110,.2)" stroke-width=".7" fill="rgba(153,110,110,.03)" stroke-dasharray="4 3"/>
          <!-- Risk metrics -->
          <g font-family="JetBrains Mono, monospace" font-size="9">
            <text x="-72" y="36" fill="rgba(153,110,110,.4)">fabrication</text>
            <rect x="40" y="27" width="38" height="14" rx="3" fill="rgba(153,110,110,.08)" stroke="rgba(153,110,110,.15)" stroke-width=".5"/>
            <text x="49" y="38" fill="rgba(153,110,110,.55)">HIGH</text>
            <text x="-72" y="58" fill="rgba(153,110,110,.4)">voice loss</text>
            <rect x="40" y="49" width="38" height="14" rx="3" fill="rgba(153,110,110,.08)" stroke="rgba(153,110,110,.15)" stroke-width=".5"/>
            <text x="49" y="60" fill="rgba(153,110,110,.55)">HIGH</text>
            <text x="-72" y="80" fill="rgba(153,110,110,.4)">credibility</text>
            <rect x="40" y="71" width="38" height="14" rx="3" fill="rgba(153,110,110,.08)" stroke="rgba(153,110,110,.15)" stroke-width=".5"/>
            <text x="53" y="82" fill="rgba(153,110,110,.55)">-9%</text>
            <text x="-72" y="102" fill="rgba(153,110,110,.35)">detection</text>
            <rect x="40" y="93" width="38" height="14" rx="3" fill="rgba(153,110,110,.06)" stroke="rgba(153,110,110,.12)" stroke-width=".5"/>
            <text x="53" y="104" fill="rgba(153,110,110,.45)">89%</text>
          </g>
          <!-- X mark overlay -->
          <line x1="-90" y1="14" x2="90" y2="110" stroke="rgba(153,110,110,.1)" stroke-width=".8"/>
          <line x1="90" y1="14" x2="-90" y2="110" stroke="rgba(153,110,110,.1)" stroke-width=".8"/>
        </g>
        <!-- RIGHT SIDE: IA que analisa (active, brand orange) -->
        <g transform="translate(580,90)">
          <text x="0" y="0" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="13" font-weight="600" fill="rgba(192,106,66,.7)">IA que analisa</text>
          <rect x="-90" y="14" width="180" height="96" rx="8" stroke="rgba(192,106,66,.3)" stroke-width=".8" fill="rgba(192,106,66,.03)"/>
          <!-- Positive metrics -->
          <g font-family="JetBrains Mono, monospace" font-size="9">
            <text x="-72" y="36" fill="rgba(192,106,66,.5)">data insight</text>
            <rect x="40" y="27" width="38" height="14" rx="3" fill="rgba(130,153,110,.08)" stroke="rgba(130,153,110,.2)" stroke-width=".5"/>
            <text x="53" y="38" fill="rgba(130,153,110,.6)">ON</text>
            <text x="-72" y="58" fill="rgba(192,106,66,.5)">voice kept</text>
            <rect x="40" y="49" width="38" height="14" rx="3" fill="rgba(130,153,110,.08)" stroke="rgba(130,153,110,.2)" stroke-width=".5"/>
            <text x="49" y="60" fill="rgba(130,153,110,.6)">100%</text>
            <text x="-72" y="80" fill="rgba(192,106,66,.5)">compliance</text>
            <rect x="40" y="71" width="38" height="14" rx="3" fill="rgba(130,153,110,.08)" stroke="rgba(130,153,110,.2)" stroke-width=".5"/>
            <text x="53" y="82" fill="rgba(130,153,110,.6)">YES</text>
            <text x="-72" y="102" fill="rgba(192,106,66,.45)">efficiency</text>
            <rect x="40" y="93" width="38" height="14" rx="3" fill="rgba(192,106,66,.1)" stroke="rgba(192,106,66,.2)" stroke-width=".5"/>
            <text x="49" y="104" fill="rgba(192,106,66,.6)">+40%</text>
          </g>
          <!-- Active glow -->
          <circle cx="90" cy="14" r="4" fill="rgba(192,106,66,.4)"/>
          <circle cx="90" cy="14" r="9" stroke="rgba(192,106,66,.12)" stroke-width=".5" fill="none"/>
        </g>
        <!-- Bottom label -->
        <g transform="translate(400,360)">
          <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.15)">o mesmo modelo, dois usos opostos</text>
        </g>
        <!-- Hanging pans from balance beam -->
        <line x1="200" y1="218" x2="200" y2="230" stroke="rgba(153,110,110,.15)" stroke-width=".6"/>
        <path d="M170,230 Q200,245 230,230" stroke="rgba(153,110,110,.12)" stroke-width=".6" fill="rgba(153,110,110,.03)"/>
        <line x1="580" y1="200" x2="580" y2="210" stroke="rgba(192,106,66,.2)" stroke-width=".6"/>
        <path d="M550,210 Q580,225 610,210" stroke="rgba(192,106,66,.15)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
      </svg>`,
      content: `
        <p class="article-lead">O debate sobre inteligencia artificial nas redacoes esta polarizado. De um lado, entusiastas prometem que a IA vai salvar o jornalismo. Do outro, ceticos alertam que ela vai destrui-lo. Os dois lados estao errados — e os dados mostram por que.</p>

        <h2>A polarizacao que nao ajuda ninguem</h2>

        <p>Nas ultimas semanas, dois eventos trouxeram o debate sobre IA e jornalismo de volta ao centro das atencoes. O <a href="https://futurism.com/artificial-intelligence/new-york-times-accused-ai-article" target="_blank" rel="noopener">caso do New York Times</a>, onde Kate Gilgan admitiu ter usado ChatGPT, Claude e Gemini para escrever um ensaio publicado na coluna "Modern Love", reacendeu a discussao sobre os limites eticos da IA na producao editorial. E uma <a href="https://futurism.com/artificial-intelligence/analysis-new-york-times-ai-articles" target="_blank" rel="noopener">analise da Pangram Labs</a> revelou que aproximadamente 9% dos artigos publicados em grandes jornais contem conteudo gerado por IA — com artigos de opiniao tendo probabilidade 6 vezes maior de conter texto artificial.</p>

        <p>Esses numeros assustam. E deveriam. Mas a reacao binaria — "IA e o futuro" versus "IA e o fim" — nao ajuda ninguem a tomar decisoes praticas. A pergunta certa nao e se devemos usar IA nas redacoes. E <strong>como</strong> devemos usar.</p>

        <p>Analisamos esse tema em profundidade no artigo sobre o <a href="/blog/caso-nyt-ia-redacao/">caso NYT e suas implicacoes para redacoes</a>. Aqui, vamos alem do caso individual para examinar o panorama completo.</p>

        <h2>Os riscos reais: o que da errado quando IA escreve</h2>

        <p>Vamos comecar pelo lado incomodo. Ha riscos concretos e documentados no uso de IA para geracao de conteudo jornalistico. Ignorar esses riscos nao e otimismo — e negligencia.</p>

        <h3>Fabricacao e alucinacao</h3>

        <p>Modelos de linguagem inventam. Nao por malicia, mas por design: eles geram texto estatisticamente provavel, nao factualmente verificado. Em 2024, um reporter da Ars Technica foi demitido apos publicar uma materia com citacoes fabricadas por IA. As aspas pareciam reais. As fontes nao existiam.</p>

        <p>Para jornalismo, onde cada citacao precisa ser verificavel e cada dado precisa ter origem, esse comportamento e inaceitavel. Nao e uma falha corrigivel com um prompt melhor — e uma limitacao estrutural de como esses modelos funcionam.</p>

        <h3>Homogeneizacao da voz editorial</h3>

        <p>Quando multiplos jornalistas usam a mesma IA para "melhorar" seus textos, algo previsivel acontece: todos comecam a soar igual. A IA tem um estilo proprio — frases equilibradas, vocabulario neutro, estrutura previsivel. Esse estilo funciona para emails corporativos. Para jornalismo, <a href="/blog/voz-editorial-agentes/">a voz e patrimonio</a>.</p>

        <p>Um colunista de esportes tem ritmo diferente de um reporter de politica. Essa diversidade de vozes e o que da personalidade a uma publicacao. Quando a IA padroniza tudo, o jornal perde identidade.</p>

        <h3>Perda de credibilidade</h3>

        <p>Pesquisas do <a href="https://reutersinstitute.politics.ox.ac.uk/" target="_blank" rel="noopener">Reuters Institute for the Study of Journalism</a> mostram que a confianca do publico em noticias geradas por IA e significativamente menor do que em noticias escritas por humanos. Leitores nao querem saber que estao lendo uma maquina — e quando descobrem, a confianca no veiculo inteiro e afetada.</p>

        <p>O caso do NYT ilustra bem: mesmo que o texto fosse bom, a revelacao de que foi gerado por IA transformou a historia de "ensaio emocionante" para "fraude editorial". A percepcao importa tanto quanto a qualidade.</p>

        <h2>Os beneficios reais: o que da certo quando IA analisa</h2>

        <p>Agora o outro lado. Porque tambem ha riscos em <em>nao</em> usar IA — o risco de ficar para tras enquanto competidores encontram formas responsaveis de alavancar a tecnologia.</p>

        <h3>Análise de dados de desempenho</h3>

        <p>Redacoes geram terabytes de dados que ninguem olha sistematicamente. Como cada editoria performa em cada canal. Quais padroes de titulo geram mais engajamento. Que tipo de imagem atrai cliques no <a href="/blog/google-discover-trafico-redacoes/">Google Discover</a>. Quanto tempo apos a publicacao o trafego atinge o pico.</p>

        <p>IA pode processar esses dados e <a href="/blog/pipeline-dados-editoriais/">transformar em insights acionaveis</a>. Nao e geracao de conteudo — e inteligencia sobre conteudo. E a diferenca entre um jornalista que publica baseado em intuicao e um que publica informado por dados reais do proprio dominio.</p>

        <h3>Conformidade com o manual de redacao</h3>

        <p>Todo jornalista conhece o manual de redacao. Poucos consultam no dia a dia. Em deadline, ninguem para para verificar se "infraestrutura" ou "infra-estrutura" e a grafia adotada pelo veiculo. A IA pode fazer essa verificacao instantaneamente — nao gerando texto, mas auditando o texto que o jornalista escreveu.</p>

        <h3>Otimizacao para distribuicao</h3>

        <p>Busca e Discover operam com logicas opostas. Um titulo otimizado para SEO nao e necessariamente bom para Discover, e vice-versa. A IA pode analisar um titulo e sugerir variacoes para cada canal — sem reescrever o artigo, sem tocar na voz do jornalista. Apenas informando: "este titulo tem potencial maior no Discover se voce ajustar X".</p>

        <h3>Monitoramento de tendencias</h3>

        <p>Identificar o que esta crescendo em volume de buscas, cruzar com a autoridade do dominio em cada tema, e calcular se vale investir esforco editorial — isso e trabalho de dados, nao de escrita. E e onde <a href="/blog/como-ia-contextual-muda-jornalismo/">IA contextual faz a diferenca</a>.</p>

        <h2>A distincao critica: gerar versus informar</h2>

        <p>O ponto central deste debate e simples, mas frequentemente ignorado: <strong>existe uma diferenca fundamental entre IA que gera conteudo e IA que informa decisoes editoriais</strong>.</p>

        <ul>
          <li><strong>IA que gera</strong> escreve titulos, paragrafos, artigos inteiros. Ela substitui o jornalista. Os riscos sao fabricacao, homogeneizacao, perda de credibilidade e questoes eticas sobre autoria.</li>
          <li><strong>IA que informa</strong> analisa dados, verifica conformidade, sugere otimizacoes. Ela potencializa o jornalista. Os riscos sao menores porque a decisao final permanece humana.</li>
        </ul>

        <p>Essa nao e uma distincao sutil. E a diferenca entre uma ferramenta que escreve "a materia" e uma ferramenta que diz "essa materia tem potencial maior se publicada nas proximas duas horas, com este titulo para Discover e este outro para Busca, e a terceira frase viola a regra 4.2 do manual".</p>

        <blockquote>
          <p>"A pergunta nao e se a IA pode escrever jornalismo. Pode. A pergunta e se deveria. E os dados dizem que o valor real esta em outro lugar: na analise, nao na geracao."</p>
        </blockquote>

        <h2>O que "IA responsavel" significa na pratica</h2>

        <p>O termo "IA responsavel" virou jargao vazio em muitos contextos. Na pratica editorial, ele precisa significar coisas concretas:</p>

        <ul>
          <li><strong>Transparencia:</strong> se a IA contribuiu para o processo, o leitor nao precisa ser notificado de cada sugestao de SEO aceita — mas se a IA gerou texto publicado como autoria humana, isso e fraude.</li>
          <li><strong>Guardrails editoriais:</strong> a IA nao pode sugerir nada que viole o manual de redacao do veiculo. O manual e lei, nao sugestao.</li>
          <li><strong>Preservacao de voz:</strong> sugestoes devem adaptar-se ao perfil de cada jornalista, nao homogeneizar. Se a IA nao sabe quem esta escrevendo, ela nao deveria sugerir como escrever.</li>
          <li><strong>Dados proprios:</strong> IA que opera com dados genericos nao entende o contexto de nenhuma redacao. IA responsavel opera com os dados do dominio — performance real, nao referências de mercado.</li>
          <li><strong>Humano no controle:</strong> a IA sugere, o jornalista decide. Sempre. Sem excecoes. Sem automacao de publicacao sem revisao humana.</li>
        </ul>

        <p>Essas nao sao restricoes que limitam a IA. Sao guardrails que a tornam util. Sem eles, voce tem uma ferramenta que gera texto rapido. Com eles, voce tem uma ferramenta que melhora o jornalismo.</p>

        <h2>Como a voz editorial e preservada — ou destruida</h2>

        <p>O maior risco silencioso da IA nas redacoes nao e a fabricacao. E a erosao gradual da voz editorial. Acontece assim:</p>

        <p>Um jornalista usa IA para "polir" um texto. A IA ajusta frases, suaviza transicoes, padroniza vocabulario. O texto fica "melhor" no sentido generico. Mas perde a personalidade. Multiplicado por dez jornalistas, cinquenta textos por dia, trezentos dias por ano — o jornal perde identidade.</p>

        <p>A alternativa e uma IA que <em>conhece</em> a voz. Que sabe que aquele colunista usa frases curtas e lead direto. Que aquela reporter prefere contexto expandido e dados de apoio. Que a editoria de esportes tem vocabulario proprio e ritmo diferente da editoria de politica.</p>

        <p>Essa e a abordagem que <a href="/blog/voz-editorial-agentes/">descrevemos no artigo sobre perfis de voz</a>: capturar o estilo de cada jornalista em camadas progressivas e usar isso como filtro para cada sugestao.</p>

        <h2>O caso de negocio: IA que paga as contas</h2>

        <p>Vamos falar de dinheiro. Redacoes estao sob pressao financeira. Equipes encolheram. O volume de publicacao precisa se manter ou crescer. A <a href="/blog/por-que-audiencia-jornal-cai/">audiencia enfrenta desafios</a> em multiplas frentes. O argumento "precisamos de IA" muitas vezes e um argumento de sobrevivencia.</p>

        <p>Mas o caso de negocio nao e "vamos substituir jornalistas por IA e economizar salarios". Isso nao funciona — e nao apenas por questoes eticas. Conteudo gerado por IA e detectavel, tem menor engajamento, e <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener">as diretrizes do Google</a> deixam claro que qualidade e autenticidade sao fatores de ranking.</p>

        <p>O caso de negocio real e:</p>

        <ul>
          <li><strong>Mais eficiencia por jornalista:</strong> se cada reporter ganha 30 minutos por dia nao consultando manual, nao fazendo SEO basico, nao calculando timing de publicacao — isso e tempo redirecionado para apuracao e reportagem.</li>
          <li><strong>Menos erros de distribuicao:</strong> publicar o conteudo certo no canal certo no momento certo. Cada oportunidade perdida tem custo real em trafego e receita.</li>
          <li><strong>Dados acionaveis:</strong> transformar milhoes de data points em decisoes editoriais claras. Nao e sobre ter mais dados — e sobre usar os dados que ja existem.</li>
        </ul>

        <p>Uma <a href="/blog/como-levar-ia-para-redacao/">implementacao bem planejada</a> de IA editorial nao corta custos com pessoal. Ela aumenta a produtividade e a qualidade de cada pessoa que ja esta na redacao.</p>

        <h2>Exemplos internacionais: quem esta fazendo certo</h2>

        <p>O debate nao e teorico. Redacoes ao redor do mundo ja estao testando — e as abordagens mais bem-sucedidas confirmam a distincao entre gerar e analisar.</p>

        <ul>
          <li><strong>BBC:</strong> usa IA para transcricao automatica e organizacao de material bruto. Os jornalistas recebem dados processados, nao textos prontos.</li>
          <li><strong>Reuters:</strong> desenvolveu ferramentas de IA para deteccao de noticias falsas e verificacao de fatos. A IA nao escreve — ela verifica.</li>
          <li><strong>The Washington Post:</strong> seu sistema Heliograf gera relatorios automaticos para dados estruturados (resultados eleitorais, eventos esportivos), mas mantem jornalistas na producao de conteudo editorial.</li>
          <li><strong>Schibsted (Noruega):</strong> usa IA para personalizar a distribuicao de conteudo, nao para produzi-lo. O foco e entregar o artigo certo para o leitor certo.</li>
        </ul>

        <p>O padrao e claro: as implementacoes que funcionam sao aquelas onde a IA opera na camada de dados e distribuicao, nao na camada de producao editorial. O <a href="https://www.lse.ac.uk/media-and-communications/polis/JournalismAI" target="_blank" rel="noopener">JournalismAI</a>, iniciativa da London School of Economics, documenta dezenas de casos similares com a mesma conclusao.</p>

        <h2>O futuro: IA como infraestrutura, nao como autor</h2>

        <p>A direcao que o mercado esta tomando aponta para IA como infraestrutura editorial — uma camada invisivel que processa dados, monitora tendencias, verifica conformidade e sugere otimizacoes. Nao uma camada visivel que assina artigos.</p>

        <p>Pense assim: ninguem diz que "a eletricidade escreveu a materia" so porque o computador estava ligado. Da mesma forma, IA editorial deve ser a infraestrutura que torna o trabalho jornalistico mais informado, mais rapido e mais preciso — sem substituir quem faz o trabalho.</p>

        <p>Na pratica, isso significa:</p>

        <ul>
          <li><strong>Antes de pautar:</strong> IA que analisa o que esta crescendo em interesse, cruza com a autoridade do dominio, e entrega oportunidades priorizadas.</li>
          <li><strong>Antes de publicar:</strong> IA que verifica conformidade com o manual, sugere otimizacoes de distribuicao por canal, e avalia o potencial de performance.</li>
          <li><strong>Depois de publicar:</strong> IA que monitora resultados em tempo real e alimenta o ciclo de volta com aprendizados.</li>
        </ul>

        <p>Em nenhum desses momentos a IA escreve. Em todos eles, a IA melhora a decisao de quem escreve.</p>

        <h2>O que decidimos ao construir o atalay.ia</h2>

        <p>Quando comecamos a construir o atalay.ia, a tentacao de criar "mais uma ferramenta de geracao de texto" era real. Modelos de linguagem sao impressionantes. A tecnologia esta disponivel. O mercado pede.</p>

        <p>Mas os dados que coletamos ao longo de mais de um ano trabalhando com redacoes reais mostraram algo diferente. O gargalo nao e producao de texto — jornalistas sabem escrever. O gargalo e informacao: saber o que escrever, quando publicar, como otimizar para cada canal, e se o texto esta em conformidade com as regras do veiculo.</p>

        <p>Por isso o atalay.ia nao gera conteudo. Ele <a href="/blog/como-ia-contextual-muda-jornalismo/">analisa, classifica, sugere e alerta</a>. A caneta continua na mao do jornalista. A IA fornece o contexto que faz a diferenca entre uma publicacao baseada em intuicao e uma publicacao informada por dados.</p>

        <blockquote>
          <p>"Nao construimos uma IA que escreve melhor que jornalistas. Construimos uma IA que torna jornalistas mais bem informados. A diferenca parece sutil. Os resultados nao sao."</p>
        </blockquote>

        <h2>Conclusao: o caminho do meio</h2>

        <p>A IA nao vai salvar o jornalismo. E nao vai destrui-lo. Vai transformar a forma como redacoes operam — para melhor ou pior, dependendo de <em>como</em> for adotada.</p>

        <p>O caminho do meio nao e moderacao por covardia. E precisao por experiencia. Depois de analisar milhares de artigos, centenas de padroes de performance e dezenas de casos de uso, a conclusao e clara: o valor da IA no jornalismo esta na analise, nao na geracao.</p>

        <p>Redacoes que entenderem isso cedo vao ter uma vantagem real — nao porque usam IA, mas porque usam IA da forma certa. As que nao entenderem vao enfrentar os riscos que ja estamos vendo: fabricacao, perda de credibilidade, erosao de voz.</p>

        <p>A escolha nao e entre IA e nenhuma IA. E entre IA que escreve e IA que informa. Os dados ja mostraram qual caminho funciona.</p>
      `,
    },
  'google-discover-trafico-redacoes': {
      title: 'Google Discover já responde por até 40% do tráfego de portais — como sua redação pode se posicionar',
      description: 'O Discover se tornou a principal fonte de tráfego para portais de notícia no Brasil, superando a busca orgânica em muitos casos. Entenda como o algoritmo funciona e o que os dados mostram sobre como performar.',
      date: '2026-03-23',
      category: 'Dados',
      readTime: '14 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-disc-1" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-disc-2" cx="25%" cy="60%"><stop offset="0%" stop-color="rgba(192,106,66,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-disc-1)"/>
        <rect width="800" height="400" fill="url(#g-disc-2)"/>
        <!-- Mobile phone outline -->
        <g transform="translate(400,200)">
          <rect x="-60" y="-120" width="120" height="240" rx="14" stroke="rgba(255,255,255,.15)" stroke-width="1" fill="rgba(255,255,255,.02)"/>
          <!-- Status bar -->
          <rect x="-20" y="-110" width="40" height="4" rx="2" fill="rgba(255,255,255,.1)"/>
          <!-- Discover icon hint -->
          <circle cx="0" cy="-95" r="6" stroke="rgba(192,106,66,.4)" stroke-width=".8" fill="rgba(192,106,66,.08)"/>
          <text x="0" y="-92" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="7" font-weight="700" fill="rgba(192,106,66,.6)">D</text>
          <!-- Card 1 -->
          <rect x="-48" y="-78" width="96" height="52" rx="6" stroke="rgba(192,106,66,.25)" stroke-width=".6" fill="rgba(192,106,66,.04)"/>
          <rect x="-40" y="-70" width="42" height="3" rx="1.5" fill="rgba(255,255,255,.15)"/>
          <rect x="-40" y="-62" width="34" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
          <rect x="-40" y="-54" width="28" height="2" rx="1" fill="rgba(255,255,255,.06)"/>
          <rect x="16" y="-70" width="28" height="28" rx="4" fill="rgba(192,106,66,.1)" stroke="rgba(192,106,66,.2)" stroke-width=".4"/>
          <!-- Card 2 -->
          <rect x="-48" y="-18" width="96" height="52" rx="6" stroke="rgba(255,255,255,.1)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
          <rect x="-40" y="-10" width="38" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="-40" y="-2" width="30" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
          <rect x="-40" y="6" width="24" height="2" rx="1" fill="rgba(255,255,255,.05)"/>
          <rect x="16" y="-10" width="28" height="28" rx="4" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" stroke-width=".4"/>
          <!-- Card 3 -->
          <rect x="-48" y="42" width="96" height="52" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.015)"/>
          <rect x="-40" y="50" width="40" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
          <rect x="-40" y="58" width="32" height="3" rx="1.5" fill="rgba(255,255,255,.07)"/>
          <rect x="-40" y="66" width="26" height="2" rx="1" fill="rgba(255,255,255,.04)"/>
          <rect x="16" y="50" width="28" height="28" rx="4" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.06)" stroke-width=".4"/>
          <!-- Home indicator -->
          <rect x="-20" y="108" width="40" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
        </g>
        <!-- Left: metrics -->
        <g transform="translate(100,130)">
          <text x="0" y="0" font-family="DM Sans, sans-serif" font-size="10" font-weight="600" fill="rgba(255,255,255,.3)">Discover Metrics</text>
          <line x1="0" y1="8" x2="120" y2="8" stroke="rgba(255,255,255,.06)" stroke-width=".5"/>
          <text x="0" y="30" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">CTR</text>
          <rect x="50" y="22" width="60" height="12" rx="3" fill="rgba(192,106,66,.08)" stroke="rgba(192,106,66,.2)" stroke-width=".5"/>
          <text x="60" y="31" font-family="JetBrains Mono, monospace" font-size="9" font-weight="600" fill="rgba(192,106,66,.7)">8.4%</text>
          <text x="0" y="56" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">Impr.</text>
          <rect x="50" y="48" width="60" height="12" rx="3" fill="rgba(192,106,66,.06)" stroke="rgba(192,106,66,.15)" stroke-width=".5"/>
          <text x="60" y="57" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(192,106,66,.6)">142K</text>
          <text x="0" y="82" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">Clicks</text>
          <rect x="50" y="74" width="60" height="12" rx="3" fill="rgba(192,106,66,.06)" stroke="rgba(192,106,66,.15)" stroke-width=".5"/>
          <text x="60" y="83" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(192,106,66,.6)">11.9K</text>
          <text x="0" y="108" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.2)">Peak</text>
          <rect x="50" y="100" width="60" height="12" rx="3" fill="rgba(130,153,110,.06)" stroke="rgba(130,153,110,.15)" stroke-width=".5"/>
          <text x="60" y="109" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(130,153,110,.6)">2-4h</text>
        </g>
        <!-- Right: pie chart -->
        <g transform="translate(640,180)">
          <text x="0" y="-70" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="10" font-weight="600" fill="rgba(255,255,255,.3)">Traffic Split</text>
          <!-- Pie slices (simplified arcs) -->
          <!-- Discover 40% ~144deg -->
          <path d="M0,-50 A50,50 0 0,1 47.55,-15.45 L0,0 Z" fill="rgba(192,106,66,.25)" stroke="rgba(192,106,66,.4)" stroke-width=".6"/>
          <!-- Busca 35% ~126deg -->
          <path d="M47.55,-15.45 A50,50 0 0,1 -14.05,48 L0,0 Z" fill="rgba(167,139,250,.15)" stroke="rgba(167,139,250,.3)" stroke-width=".6"/>
          <!-- Direto 25% ~90deg -->
          <path d="M-14.05,48 A50,50 0 0,1 0,-50 L0,0 Z" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" stroke-width=".6"/>
          <!-- Labels -->
          <text x="28" y="-24" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="rgba(192,106,66,.7)">40%</text>
          <text x="20" y="28" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(167,139,250,.5)">35%</text>
          <text x="-32" y="4" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">25%</text>
          <!-- Legend -->
          <g transform="translate(-40,70)">
            <rect x="0" y="0" width="8" height="8" rx="2" fill="rgba(192,106,66,.3)"/>
            <text x="14" y="8" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.5)">Discover</text>
            <rect x="0" y="16" width="8" height="8" rx="2" fill="rgba(167,139,250,.2)"/>
            <text x="14" y="24" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(167,139,250,.4)">Busca</text>
            <rect x="0" y="32" width="8" height="8" rx="2" fill="rgba(255,255,255,.08)"/>
            <text x="14" y="40" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">Direto</text>
          </g>
        </g>
        <!-- Connecting lines from phone to metrics -->
        <line x1="340" y1="160" x2="220" y2="148" stroke="rgba(192,106,66,.08)" stroke-width=".4" stroke-dasharray="3 3"/>
        <line x1="460" y1="160" x2="590" y2="148" stroke="rgba(192,106,66,.08)" stroke-width=".4" stroke-dasharray="3 3"/>
      </svg>`,
      content: `
        <p class="article-lead">Se a sua redacao depende de trafico organico, existe uma boa chance de que o Google Discover ja seja o canal mais importante do seu portal -- e voce pode nao estar olhando para ele com a atencao que merece. Nos dados que analisamos diariamente no atalay.ia, Discover responde por 30% a 40% do trafico de grandes portais de noticia brasileiros. Em alguns casos, supera a Busca organica.</p>

        <h2>O que e o Google Discover e por que ele mudou o jogo</h2>

        <p>Discover e o feed de recomendacoes do Google que aparece na tela inicial do app Google e na pagina inicial do Chrome mobile. Diferente da Busca, onde o usuario digita uma query, no Discover o conteudo chega sem ser pedido -- o algoritmo decide o que mostrar com base no historico de interesses de cada usuario.</p>

        <p>Essa diferenca e fundamental. Na Busca, voce compete por keywords. No Discover, voce compete por <strong>relevancia percebida</strong> para um usuario especifico, em um momento especifico. Nao existe query. Nao existe SERP. Existe um feed personalizado que muda a cada hora.</p>

        <p>Para quem trabalha com noticias, isso criou uma nova dinamica: artigos que nunca ranqueariam bem na Busca podem explodir no Discover. E artigos perfeitamente otimizados para SEO tradicional podem passar despercebidos no feed. Ja exploramos essas diferencas em detalhe no artigo <a href="/blog/discover-vs-busca/">Discover e Busca sao jogos diferentes</a>.</p>

        <h2>Por que Discover domina o trafico de portais de noticia</h2>

        <p>Tres fatores explicam a ascensao do Discover como canal dominante:</p>

        <ul>
          <li><strong>Distribuicao mobile massiva:</strong> o Discover esta presente em todos os dispositivos Android por padrao e no Chrome mobile. No Brasil, onde Android domina mais de 80% do mercado, isso significa acesso a praticamente toda a base de usuarios mobile.</li>
          <li><strong>Preferencia por conteudo fresco:</strong> o algoritmo do Discover favorece conteudo recente, o que beneficia portais de noticia que publicam em volume diariamente. Segundo o <a href="https://rfrpt.org/digital-news-report/2025/" target="_blank" rel="noopener">Reuters Institute Digital News Report</a>, o consumo de noticias via feeds algoritmicos superou o acesso direto em varios mercados.</li>
          <li><strong>Engajamento visual:</strong> o formato de cards com imagens grandes gera taxas de clique significativamente maiores do que resultados textuais de busca. O Discover e, essencialmente, um canal visual -- e noticias com boas imagens se beneficiam.</li>
        </ul>

        <p>Os dados que coletamos no atalay.ia confirmam esse padrao. Em editorias como Esportes e Variedades, Discover frequentemente responde por mais trafico do que Busca e acesso direto combinados. Em editorias mais tecnicas como Politica e Economia, a proporcao e menor mas ainda significativa -- geralmente entre 20% e 30%.</p>

        <h2>Como o algoritmo do Discover funciona</h2>

        <p>O Google nao publica o algoritmo do Discover em detalhe, mas a <a href="https://developers.google.com/search/docs/appearance/google-discover" target="_blank" rel="noopener">documentacao oficial do Search Central</a> e a observacao sistematica de dados reais nos permitem entender os sinais mais relevantes:</p>

        <h3>E-E-A-T (Experiencia, Expertise, Autoridade, Confiabilidade)</h3>

        <p>E-E-A-T nao e um score numerico -- e um framework que o Google usa para avaliar a qualidade de conteudo. No Discover, ele se manifesta de forma concreta: dominios com historico consistente de publicacao em determinado tema recebem mais distribuicao nesse tema. Um portal com anos de cobertura de futebol mineiro tem vantagem no Discover para pautas de Atletico e Cruzeiro. Um portal generalista, nao.</p>

        <p>Na pratica, isso significa que <strong>autoridade tematica e cumulativa</strong>. Cada artigo publicado sobre um tema refor a reputacao do dominio naquele nicho. Redacoes que entendem isso investem em clusters de conteudo -- coberturas profundas e interconectadas -- em vez de artigos soltos.</p>

        <h3>Interesses do usuario</h3>

        <p>O Discover constroi um perfil de interesses para cada usuario com base em historico de navegacao, buscas anteriores, interacoes com apps e localizacao. Seu artigo aparece no feed de alguem quando o algoritmo calcula que aquele tema casa com o perfil daquele usuario.</p>

        <p>Isso cria um efeito de retroalimentacao: quando um usuario clica em artigos de um determinado portal sobre determinado tema, o Discover passa a mostrar mais conteudo desse portal sobre esse tema. Perder essa janela de engajamento significa perder o posicionamento no perfil do usuario.</p>

        <h3>Recência</h3>

        <p>Recencia e o sinal mais forte para conteudo de noticias no Discover. A janela de oportunidade e curta -- nossos dados mostram que o pico de trafico de Discover para uma noticia acontece entre 2 e 4 horas apos a publicacao, com decaimento rapido depois. Artigos evergreen podem performar, mas o Discover e fundamentalmente um canal de conteudo fresco.</p>

        <h3>Engajamento</h3>

        <p>O Discover monitora como usuarios interagem com o conteudo: clique, tempo de leitura, retorno ao feed. Artigos com alta taxa de clique e bom tempo de permanencia recebem mais distribuicao. Artigos com alta taxa de clique mas retorno rapido ao feed (sinal de clickbait) sao penalizados.</p>

        <blockquote>
          <p>"O Discover recompensa relevancia real. Um titulo chamativo que nao entrega o que promete nao apenas perde distribuicao -- prejudica o dominio inteiro."</p>
        </blockquote>

        <h2>O papel das imagens no CTR do Discover</h2>

        <p>Se existe um unico fator que separa artigos com alto e baixo CTR no Discover, e a imagem. O feed e visual por natureza -- o usuario esta scrollando rapidamente, e a imagem e o primeiro elemento que captura atencao.</p>

        <p>O que os dados nos mostram:</p>

        <ul>
          <li><strong>Imagens grandes performam melhor:</strong> o Google permite que portais optem por exibicao de imagens grandes no Discover via a tag <code>max-image-preview:large</code> nos meta robots. Segundo as <a href="https://developers.google.com/search/docs/appearance/visual-elements-gallery" target="_blank" rel="noopener">diretrizes do Google sobre imagens no Discover</a>, imagens devem ter pelo menos 1200px de largura. Portais que implementam isso corretamente veem aumentos significativos de CTR.</li>
          <li><strong>Rostos humanos geram mais cliques:</strong> artigos com fotos que mostram rostos -- especialmente em close -- tem CTR consistentemente maior. Isso vale especialmente para editorias de Esportes e Variedades.</li>
          <li><strong>Imagens genericas prejudicam:</strong> fotos de banco de imagem, mapas genericos e graficos complexos tem CTR inferior. O Discover favorece imagens editoriais com contexto claro.</li>
          <li><strong>Proporcao importa:</strong> imagens em formato 16:9 ou 4:3 se adaptam melhor ao layout do card no Discover. Formatos verticais ou quadrados podem ser cortados de maneira desfavoravel.</li>
        </ul>

        <p>No atalay.ia, a analise de imagem e parte do pipeline de otimizacao. Quando um jornalista submete um artigo, avaliamos a imagem de capa quanto a resolucao, proporcao, presenca de rosto e potencial de clique no Discover. E um sinal que muitas redacoes ignoram completamente.</p>

        <h2>Otimizacao de titulos: Discover vs. Busca</h2>

        <p>Aqui e onde muitas redacoes erram. Um titulo otimizado para Busca e fundamentalmente diferente de um titulo otimizado para Discover. As logicas sao opostas:</p>

        <h3>Titulo para Busca</h3>
        <ul>
          <li>Keyword principal no primeiro terco</li>
          <li>Descritivo e objetivo</li>
          <li>Responde a query implicita do usuario</li>
          <li>Exemplo: "Resultado Atletico x Cruzeiro: placar e gols do classico mineiro"</li>
        </ul>

        <h3>Titulo para Discover</h3>
        <ul>
          <li>Gancho emocional ou de curiosidade</li>
          <li>Cria expectativa sem entregar tudo</li>
          <li>Não depende de correspondência de palavra-chave</li>
          <li>Exemplo: "O lance que mudou o classico: como o Atletico virou nos acrescimos"</li>
        </ul>

        <p>O mesmo artigo pode (e deve) ter estrategias de titulo diferentes para cada canal. Algumas redacoes ja usam titulos dinamicos -- um para a pagina (Busca) e outro para o meta title social/Discover. No atalay.ia, geramos sugestoes para ambos os canais, separadamente, com base nos dados de performance de cada editoria.</p>

        <p>Esse e um dos temas que abordamos com mais profundidade quando falamos sobre <a href="/blog/como-ia-contextual-muda-jornalismo/">como IA contextual pode ajudar redacoes</a>.</p>

        <h2>Metricas essenciais para acompanhar no Discover</h2>

        <p>O Google Search Console oferece um relatorio dedicado ao Discover. As metricas disponiveis sao limitadas mas essenciais:</p>

        <ul>
          <li><strong>Impressoes:</strong> quantas vezes seu conteudo apareceu no feed de usuarios. Volume alto de impressoes indica que o Google considera seu dominio relevante para aquele tema.</li>
          <li><strong>Cliques:</strong> quantos usuarios clicaram. A relacao entre impressoes e cliques revela a eficiencia do seu titulo + imagem.</li>
          <li><strong>CTR (taxa de clique):</strong> a metrica mais acionavel. CTR abaixo de 4% indica problemas de titulo ou imagem. CTR acima de 8% indica uma combinacao que funciona -- estude esses artigos para replicar o padrao.</li>
        </ul>

        <p>Alem do Search Console, recomendamos cruzar dados de Discover com metricas de engajamento do GA4: tempo medio na pagina, scroll depth e taxa de retorno. Um artigo com alto CTR no Discover mas baixo tempo de leitura e um sinal de alerta -- o titulo prometeu algo que o conteudo nao entregou.</p>

        <p>No atalay.ia, consolidamos esses dados em um <a href="/blog/pipeline-dados-editoriais/">pipeline de dados editoriais</a> que permite a redacao ver, em tempo real, quais artigos estao performando no Discover e por que.</p>

        <h2>Como dados editoriais ajudam a otimizar para Discover</h2>

        <p>Dados isolados nao servem para nada. O que faz diferenca e a capacidade de conectar performance a decisoes editoriais especificas. Quando voce sabe que artigos de Esportes com imagem de rosto em close, titulo com gancho emocional e publicacao entre 6h e 8h da manha tem CTR medio de 9.2% no Discover -- voce tem uma estrategia acionavel.</p>

        <p>E exatamente isso que construimos. O atalay.ia cruza dados de:</p>

        <ul>
          <li><strong>Performance por editoria:</strong> cada editoria tem padroes diferentes de performance no Discover. Esportes pica de manha, Variedades a tarde, Politica em horarios de pico noticioso.</li>
          <li><strong>Performance por tipo de titulo:</strong> classificamos titulos por estrutura (pergunta, declaracao, como-fazer, numerico) e medimos CTR de cada tipo por canal.</li>
          <li><strong>Performance por tipo de imagem:</strong> rosto, paisagem, grafico, infografico -- cada um tem taxas de clique diferentes no Discover.</li>
          <li><strong>Historico do jornalista:</strong> jornalistas com historico de bons titulos para Discover recebem feedback diferente de jornalistas que estao comecando a otimizar.</li>
        </ul>

        <p>Essa camada de inteligencia editorial e o que permite passar de "publique e espere" para "publique com estrategia". Como discutimos no <a href="/blog/lancamento-atalay-ia/">lancamento do atalay.ia</a>, o objetivo e dar a redacao ferramentas para tomar decisoes baseadas em evidencia.</p>

        <h2>Erros comuns que redacoes cometem com Discover</h2>

        <p>Depois de analisar milhares de artigos e seus resultados no Discover, alguns padroes de erro se repetem com frequencia preocupante:</p>

        <h3>1. Tratar Discover como SEO tradicional</h3>
        <p>Excesso de palavras-chave no título, meta descriptions genericas, foco em estrutura de headings -- tudo isso ajuda na Busca mas e irrelevante para Discover. O Discover nao funciona com queries. Otimizar para ele exige uma mentalidade diferente.</p>

        <h3>2. Ignorar a imagem de capa</h3>
        <p>Muitas redacoes colocam qualquer imagem disponivel como thumbnail. No Discover, a imagem e metade da decisao de clique. Usar uma foto de baixa resolucao, sem contexto editorial, e como publicar um artigo sem titulo.</p>

        <h3>3. Isca de clique sem entrega</h3>
        <p>O Discover e sensivel a clickbait. Titulos exagerados que nao correspondem ao conteudo geram cliques no curto prazo mas penalizam o dominio no medio prazo. O algoritmo mede se o usuario volta rapidamente ao feed apos clicar -- e usa isso como sinal negativo.</p>

        <h3>4. Nao monitorar o canal separadamente</h3>
        <p>Muitas redacoes olham trafico total sem separar Discover de Busca. Resultado: nao sabem quais artigos vieram de onde, nao entendem o que funciona para cada canal, e nao conseguem replicar sucessos. Esse e um dos fatores por tras do problema que abordamos em <a href="/blog/por-que-audiencia-jornal-cai/">por que a audiencia de jornais cai</a>.</p>

        <h3>5. Publicar fora do timing</h3>
        <p>O Discover favorece conteudo recente sobre temas em alta. Publicar um artigo sobre um evento 6 horas depois dos concorrentes significa perder a janela. O monitoramento de trends -- como o que o atalay.ia faz -- e essencial para acertar o timing.</p>

        <h2>O problema da volatilidade: por que o trafico de Discover e imprevisivel</h2>

        <p>A maior frustracao das redacoes com o Discover e a volatilidade. Um dia o portal recebe 50 mil visitas do Discover; no dia seguinte, 8 mil. Sem mudanca na estrategia editorial, sem penalizacao aparente -- apenas a natureza do canal.</p>

        <p>Essa volatilidade tem explicacoes concretas:</p>

        <ul>
          <li><strong>Dependencia de topicos trending:</strong> Discover mostra mais conteudo sobre assuntos que estao em alta. Se o dia e noticiariamente fraco para a sua editoria, o volume cai independente da qualidade.</li>
          <li><strong>Competicao dinamica:</strong> quando um grande portal cobre o mesmo tema, o Discover redistribui impressoes. Seu artigo nao desapareceu -- ele perdeu espaco para um concorrente com mais autoridade naquele topico.</li>
          <li><strong>Mudancas algoritmicas:</strong> o Google ajusta o Discover constantemente. Core updates afetam Discover tanto quanto Busca, mas de forma menos previsivel.</li>
          <li><strong>Sazonalidade de interesses:</strong> os interesses dos usuarios flutuam. No dia de um classico de futebol, Esportes explode no Discover. Na semana seguinte, cai. Nao e problema do portal -- e a natureza do feed.</li>
        </ul>

        <p>A estrategia para lidar com a volatilidade nao e tentar elimina-la (impossivel), mas sim <strong>maximizar os picos e construir uma base estavel</strong>. Isso significa:</p>

        <ul>
          <li>Publicar consistentemente em temas de autoridade do dominio</li>
          <li>Reagir rapido a temas trending com conteudo original</li>
          <li>Manter padroes altos de imagem e titulo em todos os artigos -- nao apenas nos que voce acha que vao performar</li>
          <li>Diversificar canais para nao depender exclusivamente de Discover</li>
        </ul>

        <h2>Sinais de autoridade e como eles afetam a distribuicao</h2>

        <p>Autoridade no Discover nao e a mesma coisa que Domain Authority das ferramentas de SEO. E um conceito mais sutil que combina varios sinais:</p>

        <ul>
          <li><strong>Historico de publicacao no tema:</strong> quantos artigos o dominio publicou sobre aquele assunto, por quanto tempo, com que frequencia.</li>
          <li><strong>Engajamento consistente:</strong> artigos anteriores sobre o tema tiveram bom CTR e tempo de leitura? O Discover lembra.</li>
          <li><strong>Expertise demonstrada:</strong> cobertura profunda, com multiplos angulos, fontes e dados. Artigos superficiais nao constroem autoridade.</li>
          <li><strong>Conformidade com diretrizes:</strong> sites que seguem as diretrizes de conteudo do Google (sem clickbait, sem conteudo enganoso, sem manipulacao) mantem o acesso ao Discover. Violacoes podem resultar em exclusao do feed.</li>
        </ul>

        <p>Construir autoridade para Discover e um processo de longo prazo. Nao existe hack. Existe trabalho editorial consistente, medido e otimizado ao longo de meses. Ferramentas como o atalay.ia ajudam a acelerar esse processo ao fornecer dados claros sobre onde a autoridade do dominio esta forte e onde ha lacunas.</p>

        <p>Isso se conecta diretamente ao debate sobre <a href="/blog/ia-ferramenta-ou-ameaca-jornalismo/">IA como ferramenta ou ameaca no jornalismo</a> -- quando usada corretamente, a tecnologia amplifica a capacidade editorial em vez de substitui-la.</p>

        <h2>O que fazer na pratica</h2>

        <p>Se a sua redacao quer levar Discover a serio, aqui esta um roteiro minimo:</p>

        <ul>
          <li><strong>Separe os relatorios:</strong> olhe Discover e Busca como canais distintos no Search Console. Compare CTR, impressoes e cliques separadamente.</li>
          <li><strong>Implemente max-image-preview:large:</strong> se voce ainda nao fez, esse e o vitória rápida mais impactante. Permite que o Discover exiba imagens grandes dos seus artigos.</li>
          <li><strong>Audite imagens de capa:</strong> revise os ultimos 50 artigos com melhor e pior CTR no Discover. Voce vai encontrar padroes claros de imagem.</li>
          <li><strong>Teste titulos:</strong> comece a testar variantes de titulo para Discover. Gancho emocional, pergunta, numeros -- meça o CTR de cada tipo.</li>
          <li><strong>Monitore trends:</strong> o Discover favorece conteudo sobre temas em alta. Ter um sistema de monitoramento de tendencias que alerte a redacao em tempo real e uma vantagem competitiva concreta.</li>
          <li><strong>Construa clusters de autoridade:</strong> identifique os temas em que o dominio ja tem historico forte e invista em cobertura profunda e interconectada.</li>
        </ul>

        <blockquote>
          <p>"Discover nao e sorte. E o resultado de decisoes editoriais consistentes, medidas ao longo do tempo, com dados reais de performance."</p>
        </blockquote>

        <h2>O futuro do Discover para redacoes</h2>

        <p>O Discover esta evoluindo. O Google tem investido em mais formatos -- carrosseis, Web Stories, conteudo de video -- e em personalizacao cada vez mais granular. Para redacoes, isso significa que a importancia do canal so vai crescer.</p>

        <p>Redacoes que constroem agora a infraestrutura de dados e otimizacao para Discover estao se posicionando para capturar uma fatia desproporcional de trafico no futuro. As que continuam tratando Discover como subproduto do SEO vao continuar dependendo de picos aleatorios.</p>

        <p>No atalay.ia, estamos construindo cada camada do produto com essa realidade em mente. Monitoramento de trends, analise de titulos por canal, avaliacao de imagens, medicao de autoridade tematica -- tudo converge para uma pergunta: <strong>como a sua redacao pode capturar mais trafico de Discover, de forma consistente e sustentavel?</strong></p>

        <p>Os dados ja existem. O que falta e transforma-los em decisoes editoriais. Esse e o nosso trabalho.</p>
      `,
    },
  'o-que-e-eeat': {
      title: 'O que é E-E-A-T — e por que importa mais do que nunca em 2026',
      description: 'Enquanto ferramentas de IA generativa produzem textos cada vez mais fluentes, o Google aperta o cerco sobre uma pergunta simples: quem está por trás desse conteúdo?',
      date: '2026-03-29',
      category: 'Análise',
      readTime: '10 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-eeat" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-eeat)"/>
        <!-- Trust center circle -->
        <g transform="translate(400,200)">
          <circle cx="0" cy="0" r="42" stroke="rgba(192,106,66,.4)" stroke-width="1.2" fill="rgba(192,106,66,.06)"/>
          <text x="0" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="14" font-weight="700" fill="rgba(192,106,66,.8)">TRUST</text>
          <!-- Experience -->
          <g transform="translate(-120,-90)">
            <circle cx="0" cy="0" r="32" stroke="rgba(255,255,255,.15)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
            <text x="0" y="-8" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(255,255,255,.45)">E</text>
            <text x="0" y="8" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(255,255,255,.25)">Experience</text>
          </g>
          <line x1="-88" y1="-62" x2="-34" y2="-22" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
          <!-- Expertise -->
          <g transform="translate(120,-90)">
            <circle cx="0" cy="0" r="32" stroke="rgba(255,255,255,.15)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
            <text x="0" y="-8" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(255,255,255,.45)">E</text>
            <text x="0" y="8" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="8" fill="rgba(255,255,255,.25)">Expertise</text>
          </g>
          <line x1="88" y1="-62" x2="34" y2="-22" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
          <!-- Authoritativeness -->
          <g transform="translate(-120,110)">
            <circle cx="0" cy="0" r="32" stroke="rgba(255,255,255,.15)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
            <text x="0" y="-8" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(255,255,255,.45)">A</text>
            <text x="0" y="8" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="7" fill="rgba(255,255,255,.25)">Authority</text>
          </g>
          <line x1="-88" y1="82" x2="-34" y2="34" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
          <!-- Trustworthiness -->
          <g transform="translate(120,110)">
            <circle cx="0" cy="0" r="32" stroke="rgba(255,255,255,.15)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
            <text x="0" y="-8" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="rgba(255,255,255,.45)">T</text>
            <text x="0" y="8" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="7" fill="rgba(255,255,255,.25)">Trust</text>
          </g>
          <line x1="88" y1="82" x2="34" y2="34" stroke="rgba(255,255,255,.08)" stroke-width=".6" stroke-dasharray="3 2"/>
          <!-- Glow rings -->
          <circle cx="0" cy="0" r="60" stroke="rgba(192,106,66,.08)" stroke-width=".4" fill="none"/>
          <circle cx="0" cy="0" r="85" stroke="rgba(192,106,66,.04)" stroke-width=".3" fill="none"/>
        </g>
        <!-- Label -->
        <text x="400" y="370" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.15)">E-E-A-T FRAMEWORK</text>
      </svg>`,
      content: `
        <p class="article-lead">Enquanto ferramentas de IA generativa produzem textos cada vez mais fluentes, o Google aperta o cerco sobre uma pergunta simples: quem está por trás desse conteúdo? O framework E-E-A-T (Experience, Expertise, Authoritativeness, Trust) não é novo, mas em 2026 ele se tornou o divisor de águas entre conteúdo que ranqueia e conteúdo que desaparece. Para redações que dependem de tráfego orgânico, entender cada pilar deixou de ser opcional.</p>

        <h2>O que significa E-E-A-T, na prática</h2>

        <p>E-E-A-T é o conjunto de critérios que o Google usa para avaliar a qualidade de conteúdo. Não é um fator de ranqueamento direto — não existe uma "nota de E-E-A-T" no algoritmo. É um framework de qualidade aplicado por avaliadores humanos (os quality raters), conforme detalhado nas <a href="https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf" target="_blank" rel="noopener">Search Quality Rater Guidelines</a>, que calibram os sistemas de busca.</p>

        <p>Os quatro pilares são:</p>

        <ul>
          <li><strong>Experience (Experiência):</strong> conhecimento de primeira mão sobre o assunto. Um médico escrevendo sobre tratamentos que administrou. Um jornalista cobrindo uma crise que acompanhou in loco.</li>
          <li><strong>Expertise (Especialização):</strong> qualificação técnica e profundidade no tema. Formação, histórico de publicações, domínio comprovável.</li>
          <li><strong>Authoritativeness (Autoridade):</strong> reconhecimento pela comunidade. Backlinks de instituições, citações por outros veículos, presença em fontes de referência.</li>
          <li><strong>Trust (Confiança):</strong> o pilar central que sustenta todos os outros. Transparência editorial, política de correções, informações de contato acessíveis, HTTPS.</li>
        </ul>

        <p>O "Trust" não é apenas mais um item da lista. Nas diretrizes do Google, ele aparece como o elemento central — sem confiança, experiência e autoridade perdem valor.</p>

        <h2>Por que o Google adicionou o primeiro "E"</h2>

        <p>Até <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">dezembro de 2022</a>, o framework era E-A-T. O Google adicionou Experience — experiência vivida — como resposta direta a um problema que já se desenhava: conteúdo tecnicamente correto, mas genérico. Textos que compilavam informações de terceiros sem acrescentar perspectiva própria.</p>

        <p>A adição mudou a régua. Não basta saber sobre um assunto; é preciso demonstrar que você esteve lá. Para jornalismo, isso é uma vantagem natural. Repórteres que vão a campo, que entrevistam fontes, que acompanham desdobramentos ao longo de meses — esse tipo de conteúdo carrega sinais de experiência que nenhum modelo de linguagem consegue fabricar.</p>

        <p>É exatamente por isso que a <a href="/blog/voz-editorial-agentes/">construção de perfis de voz editorial</a> ganha relevância estratégica: quando a assinatura do jornalista é reconhecível e consistente, ela reforça o sinal de experiência que o Google procura.</p>

        <h2>O que muda com AI Overviews e LLMs em 2026</h2>

        <p>O cenário de busca em 2026 é radicalmente diferente do que era há dois anos. AI Overviews do Google, ChatGPT com navegação, Perplexity — todos geram respostas instantâneas a partir de conteúdo indexado. O resultado: para consultas genéricas, o usuário nem precisa clicar.</p>

        <p>Isso cria um paradoxo. LLMs conseguem produzir texto fluente sobre qualquer tema, mas não conseguem demonstrar experiência. Não estiveram na coletiva. Não entrevistaram a fonte. Não têm assinatura com histórico verificável.</p>

        <p>Para redações, a implicação é clara: conteúdo genérico vai perder espaço progressivamente. O que sobrevive é conteúdo com camadas que só humanos com experiência real produzem — análise contextual, apuração original, perspectiva editorial.</p>

        <p>O próprio Google já declarou que IA é ferramenta suplementar, não substituta de expertise humana. Usar IA para acelerar processos editoriais é legítimo. Usar IA como autora principal, sem supervisão e sem experiência real por trás, é exatamente o tipo de conteúdo que o E-E-A-T foi desenhado para filtrar.</p>

        <p>Uma <a href="/blog/pipeline-dados-editoriais/">abordagem baseada em dados editoriais</a> ajuda a identificar onde a IA agrega valor real — e onde ela precisa de intervenção humana para não diluir os sinais de qualidade que o Google valoriza.</p>

        <h2>Como demonstrar E-E-A-T em conteúdo jornalístico</h2>

        <p>Não existe checklist mágico, mas existem práticas concretas que reforçam cada pilar:</p>

        <p><strong>Para Experiência:</strong></p>
        <ul>
          <li>Incluir relatos de apuração, contexto de bastidores, detalhes que só quem esteve presente conhece.</li>
          <li>Usar assinaturas com bio do autor e histórico de coberturas.</li>
          <li>Referenciar entrevistas e fontes primárias, não apenas dados secundários.</li>
        </ul>

        <p><strong>Para Especialização:</strong></p>
        <ul>
          <li>Manter cobertura consistente de uma editoria ao longo do tempo. Um jornalista que cobre saúde há dez anos carrega mais peso do que um texto avulso.</li>
          <li>Publicar análises que demonstrem profundidade técnica, não apenas resumos.</li>
        </ul>

        <p><strong>Para Autoridade:</strong></p>
        <ul>
          <li>Buscar citações e links de fontes institucionais.</li>
          <li>Manter presença em diretórios de imprensa e plataformas de referência.</li>
          <li>Construir relacionamento com especialistas que referenciem o trabalho da redação.</li>
        </ul>

        <p><strong>Para Confiança:</strong></p>
        <ul>
          <li>Política de correções visível e aplicada.</li>
          <li>Página de contato real, não apenas formulário genérico.</li>
          <li>HTTPS (básico, mas ainda negligenciado por alguns veículos menores).</li>
          <li>Transparência sobre uso de IA na produção — quando e como ferramentas são utilizadas.</li>
        </ul>

        <p>Um <a href="/blog/manual-redacao-ia/">manual de redação integrado à IA</a> funciona como guardrail: garante que o conteúdo assistido por inteligência artificial mantenha os padrões editoriais que sustentam a confiança do veículo.</p>

        <h2>E-E-A-T não é sobre IA contra humanos</h2>

        <p>Existe uma leitura equivocada de que E-E-A-T é uma barreira contra conteúdo gerado por IA. Não é. O Google não penaliza conteúdo por ser assistido por IA — penaliza conteúdo de baixa qualidade, independentemente de como foi produzido.</p>

        <p>A questão real é outra: IA generativa torna trivial produzir conteúdo superficial em escala. Quando qualquer pessoa pode gerar um artigo de 1.500 palavras em segundos, o diferencial competitivo migra para o que a máquina não consegue entregar sozinha — experiência genuína, apuração original, autoridade construída ao longo de anos.</p>

        <p>Redações que entendem isso usam IA como acelerador, não como substituto. A IA otimiza títulos, sugere estruturas, identifica gaps de SEO. O jornalista entrega o que só ele pode: contexto, fonte, vivência, julgamento editorial.</p>

        <p>Como demonstra o <a href="/blog/como-ia-contextual-muda-jornalismo/">caso de uso de IA contextual no jornalismo</a>, a diferença entre IA genérica e IA que entende o contexto editorial é precisamente a diferença entre conteúdo que o E-E-A-T filtra e conteúdo que ele valoriza.</p>

        <h2>O que vem pela frente</h2>

        <p>A tendência é de aperto. Cada atualização de core algorithm do Google nos últimos dois anos reforçou sinais de E-E-A-T. O <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">Helpful Content System</a>, as atualizações de março e agosto de 2025, a integração com AI Overviews — tudo aponta na mesma direção: conteúdo com origem verificável e experiência demonstrável ganha; conteúdo genérico e anônimo perde.</p>

        <p>Para redações em 2026, a estratégia é direta:</p>

        <ul>
          <li>Investir na identidade editorial de cada jornalista, não apenas do veículo.</li>
          <li>Documentar processos de apuração e torná-los visíveis ao leitor.</li>
          <li>Usar IA para potencializar expertise humana, nunca para substituí-la.</li>
          <li>Tratar confiança como infraestrutura — política de correções, transparência, acessibilidade — e não como detalhe cosmético.</li>
        </ul>

        <p>E-E-A-T não é uma moda de SEO. É o reflexo de como o Google pretende separar sinal de ruído em um mundo onde gerar conteúdo ficou barato. Para quem faz jornalismo de verdade, isso é uma oportunidade, não uma ameaça.</p>
      `,
    },
  'o-que-e-ymyl': {
      title: 'O que é YMYL (Your Money or Your Life) — e como isso afeta redações em 2026',
      description: 'Cada matéria que sua redação publica sobre saúde, economia ou segurança pública passa por um crivo mais rigoroso do Google. O nome técnico desse crivo é YMYL.',
      date: '2026-03-29',
      category: 'Análise',
      readTime: '11 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-ymyl" cx="50%" cy="45%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-ymyl)"/>
        <!-- Shield -->
        <g transform="translate(400,185)">
          <path d="M0,-110 L70,-80 L70,20 Q70,80 0,110 Q-70,80 -70,20 L-70,-80 Z" stroke="rgba(192,106,66,.35)" stroke-width="1.2" fill="rgba(192,106,66,.04)"/>
          <path d="M0,-90 L55,-65 L55,15 Q55,65 0,90 Q-55,65 -55,15 L-55,-65 Z" stroke="rgba(192,106,66,.15)" stroke-width=".6" fill="none"/>
          <!-- YMYL text -->
          <text x="0" y="-20" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700" fill="rgba(192,106,66,.7)">YMYL</text>
          <text x="0" y="2" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">Your Money or Your Life</text>
          <!-- Checkmark -->
          <path d="M-10,20 L-3,28 L12,14" stroke="rgba(130,153,110,.5)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <!-- Category labels left -->
        <g font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">
          <g transform="translate(140,120)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
            <text x="0" y="4" text-anchor="middle">Saúde</text>
          </g>
          <g transform="translate(140,165)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
            <text x="0" y="4" text-anchor="middle">Finanças</text>
          </g>
          <g transform="translate(140,210)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
            <text x="0" y="4" text-anchor="middle">Legislação</text>
          </g>
          <g transform="translate(140,255)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(192,106,66,.15)" stroke-width=".5" fill="rgba(192,106,66,.03)"/>
            <text x="0" y="4" fill="rgba(192,106,66,.5)">Notícias</text>
          </g>
        </g>
        <!-- Category labels right -->
        <g font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.3)">
          <g transform="translate(660,120)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
            <text x="0" y="4" text-anchor="middle">Segurança</text>
          </g>
          <g transform="translate(660,165)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
            <text x="0" y="4" text-anchor="middle">Governo</text>
          </g>
          <g transform="translate(660,210)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
            <text x="0" y="4" text-anchor="middle">Economia</text>
          </g>
          <g transform="translate(660,255)">
            <rect x="-50" y="-12" width="100" height="24" rx="5" stroke="rgba(192,106,66,.15)" stroke-width=".5" fill="rgba(192,106,66,.03)"/>
            <text x="0" y="4" fill="rgba(192,106,66,.5)">Política</text>
          </g>
        </g>
        <!-- Connecting lines -->
        <line x1="190" y1="120" x2="330" y2="150" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="190" y1="165" x2="330" y2="175" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="190" y1="210" x2="330" y2="200" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="190" y1="255" x2="330" y2="230" stroke="rgba(192,106,66,.08)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="610" y1="120" x2="470" y2="150" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="610" y1="165" x2="470" y2="175" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="610" y1="210" x2="470" y2="200" stroke="rgba(255,255,255,.04)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="610" y1="255" x2="470" y2="230" stroke="rgba(192,106,66,.08)" stroke-width=".5" stroke-dasharray="2 2"/>
        <!-- Footer label -->
        <text x="400" y="370" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.15)">YMYL CLASSIFICATION</text>
      </svg>`,
      content: `
        <p class="article-lead">Cada matéria que sua redação publica sobre saúde, economia ou segurança pública passa por um crivo mais rigoroso do Google. O nome técnico desse crivo é YMYL — Your Money or Your Life. Entender como ele funciona não é opcional para quem depende de tráfego orgânico.</p>

        <p>Se a audiência do seu jornal vem caindo e você ainda não mapeou quais editorias são classificadas como YMYL, parte da explicação pode estar aí. O conceito existe desde 2014 nas <a href="https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf" target="_blank" rel="noopener">diretrizes de qualidade do Google</a>, mas em 2026, com a consolidação das AI Overviews e dos modelos de linguagem respondendo perguntas diretamente na busca, ele se tornou mais determinante do que nunca.</p>

        <h2>O que significa YMYL, na prática</h2>

        <p>YMYL é a sigla para "Your Money or Your Life" — literalmente, "seu dinheiro ou sua vida". O Google usa essa classificação para identificar páginas cujo conteúdo pode afetar diretamente a saúde, a estabilidade financeira, a segurança ou o bem-estar do leitor.</p>

        <p>A lógica é simples: se uma página dá informação errada sobre um medicamento, alguém pode se prejudicar fisicamente. Se dá orientação financeira equivocada, alguém pode perder dinheiro. O Google não quer ser o intermediário que levou o usuário até um conteúdo danoso. Por isso, aplica critérios de avaliação mais rígidos a essas páginas.</p>

        <p>As categorias principais de YMYL incluem:</p>

        <ul>
          <li><strong>Saúde e segurança</strong> — sintomas, tratamentos, medicamentos, emergências</li>
          <li><strong>Finanças</strong> — investimentos, impostos, aposentadoria, crédito</li>
          <li><strong>Governo e legislação</strong> — direitos, processos legais, serviços públicos</li>
          <li><strong>Notícias e eventos atuais</strong> — política, economia, saúde pública, eleições, criminalidade</li>
        </ul>

        <p>O último item é o que importa aqui: <strong>jornalismo é YMYL</strong>. Não todo jornalismo — uma crítica de cinema provavelmente não entra nessa classificação. Mas reportagens sobre economia, saúde, segurança pública e política são avaliadas com o mesmo rigor que páginas de hospitais e bancos.</p>

        <h2>A conexão com E-E-A-T — e por que ela é multiplicada no YMYL</h2>

        <p><a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">E-E-A-T</a> (Experience, Expertise, Authoritativeness, Trustworthiness) é o framework que o Google usa para avaliar a qualidade de qualquer conteúdo. Mas quando o conteúdo é YMYL, a exigência em cada pilar se intensifica.</p>

        <p>Para conteúdo genérico, um artigo razoavelmente bem escrito pode performar. Para conteúdo YMYL, o Google procura sinais concretos:</p>

        <ul>
          <li><strong>Experiência</strong> — O autor tem vivência direta no assunto? Um jornalista de saúde que cobre o setor há anos carrega mais peso do que um texto genérico sem autoria.</li>
          <li><strong>Especialização</strong> — Há credenciais verificáveis? Fontes médicas, jurídicas ou econômicas citadas?</li>
          <li><strong>Autoridade</strong> — O veículo é reconhecido naquele tema? Outros sites de referência linkam para ele?</li>
          <li><strong>Confiabilidade</strong> — O site tem política de correções? Transparência editorial? HTTPS e dados de contato visíveis?</li>
        </ul>

        <p>Para redações, isso significa que a qualidade técnica do conteúdo não é suficiente. A estrutura ao redor do conteúdo — quem escreveu, quais fontes sustentam, como o veículo se posiciona editorialmente — pesa tanto quanto o texto em si. Ter um <a href="/blog/manual-redacao-ia/">manual de redação robusto</a> que funcione como guardrail editorial é parte dessa equação.</p>

        <h2>O precedente do Medic Update — e o que ele ensinou</h2>

        <p>Em agosto de 2018, o Google lançou o que ficou conhecido como "Medic Update". A atualização atingiu desproporcionalmente sites de saúde e bem-estar, mas também afetou portais de notícias. Alguns sites perderam até 90% do tráfego orgânico da noite para o dia.</p>

        <p>Não existia — e ainda não existe — um "algoritmo YMYL" separado. O que aconteceu foi uma recalibração dos <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">critérios de qualidade</a> existentes, com peso maior para sinais de E-E-A-T em páginas classificadas como YMYL. Sites que tinham conteúdo de saúde sem autoria clara, sem fontes, sem credenciais verificáveis foram penalizados.</p>

        <p>O aprendizado para redações foi claro: publicar matéria sobre saúde pública sem assinatura, sem fonte nomeada e sem contexto editorial é um risco de visibilidade orgânica. O Medic Update não foi o último ajuste nessa direção — foi o primeiro de uma série. Se você quer entender por que a audiência de muitos jornais tem caído consistentemente, <a href="/blog/por-que-audiencia-jornal-cai/">a análise das causas estruturais</a> passa necessariamente por aqui.</p>

        <h2>YMYL em 2026: AI Overviews mudaram o jogo</h2>

        <p>O cenário de 2026 é fundamentalmente diferente do de 2018. Com as AI Overviews consolidadas no topo dos resultados de busca, o Google agora sintetiza respostas diretamente — e precisa decidir quais fontes alimentam essas sínteses.</p>

        <p>Para consultas YMYL, a seleção de fontes é ainda mais conservadora. O Google prioriza veículos com histórico de precisão factual, autoria clara e autoridade reconhecida no tema. Isso significa que, para redações que mantêm padrões editoriais rigorosos, a oportunidade é real: ser citado como fonte em uma AI Overview sobre um tema de saúde ou economia pode gerar mais visibilidade do que a primeira posição orgânica tradicional.</p>

        <p>Mas o inverso também é verdadeiro. Conteúdo YMYL que não atende aos critérios de qualidade simplesmente desaparece. Não é rebaixado para a segunda página — é excluído do pool de fontes que alimentam as respostas geradas por IA.</p>

        <p>Para quem trabalha com uma <a href="/blog/pipeline-dados-editoriais/">abordagem orientada a dados na produção editorial</a>, identificar quais pautas são YMYL e tratá-las com o rigor adequado se tornou parte do fluxo, não uma exceção.</p>

        <h2>O que redações precisam fazer — checklist prático</h2>

        <p>A boa notícia é que a maioria dos critérios que o Google exige para conteúdo YMYL já deveria ser padrão em jornalismo de qualidade. O problema é que, na prática da publicação digital em escala, muitos desses critérios são negligenciados.</p>

        <p><strong>Autoria e credenciais:</strong></p>
        <ul>
          <li>Toda matéria YMYL precisa de assinatura com nome completo do autor</li>
          <li>Páginas de autor com bio, histórico de cobertura e links para redes profissionais</li>
          <li>Se a matéria cita especialistas, incluir nome, credencial e instituição</li>
        </ul>

        <p><strong>Fontes e verificação:</strong></p>
        <ul>
          <li>Fontes primárias linkadas sempre que possível (documentos oficiais, estudos, dados públicos)</li>
          <li>Data de publicação e data de última atualização visíveis</li>
          <li>Política de correções acessível e aplicada publicamente</li>
        </ul>

        <p><strong>Estrutura técnica:</strong></p>
        <ul>
          <li>Schema markup de NewsArticle com author, datePublished, dateModified</li>
          <li>HTTPS obrigatório (já deveria ser universal, mas vale reforçar)</li>
          <li>Dados de contato da redação acessíveis (página "Sobre", "Contato", "Expediente")</li>
        </ul>

        <p><strong>Consistência editorial:</strong></p>
        <ul>
          <li>Não publicar conteúdo de saúde, finanças ou segurança sem revisão editorial</li>
          <li>Evitar títulos sensacionalistas que contradigam o corpo da matéria</li>
          <li>Manter coerência entre título, lide e conteúdo — o Google avalia a relação entre eles</li>
        </ul>

        <p>Ferramentas de IA podem ajudar a manter essa consistência em escala, desde que usadas como instrumento de apoio e não como substituição do julgamento editorial. A discussão sobre <a href="/blog/ia-ferramenta-ou-ameaca-jornalismo/">IA como ferramenta ou ameaça ao jornalismo</a> é relevante aqui: no contexto YMYL, a IA que auxilia a verificação e padronização editorial é aliada; a que gera conteúdo sem supervisão é risco.</p>

        <h2>O que vem pela frente</h2>

        <p>A tendência é clara: a cada atualização de algoritmo, o Google reforça a exigência de qualidade para conteúdo que afeta a vida das pessoas. Com modelos de linguagem cada vez mais presentes na cadeia de distribuição de informação, a pressão sobre fontes confiáveis só aumenta.</p>

        <p>Para redações brasileiras, isso representa ao mesmo tempo um desafio e uma oportunidade. Veículos que investirem em estrutura editorial verificável — autoria, fontes, correções, transparência — terão vantagem competitiva não apenas no ranking orgânico tradicional, mas no ecossistema emergente das respostas geradas por IA.</p>

        <p>YMYL não é um conceito abstrato de SEO técnico. É o reconhecimento, codificado em algoritmo, de que informação sobre saúde, dinheiro e segurança carrega responsabilidade. Para o jornalismo, isso deveria soar familiar. A diferença é que agora essa responsabilidade tem impacto direto e mensurável na distribuição do conteúdo.</p>

        <p>Redações que tratarem YMYL como prioridade editorial — e não como detalhe técnico delegado ao time de SEO — estarão melhor posicionadas para o que vem pela frente.</p>
      `,
    },
  'google-discover-core-update-fevereiro-2026': {
      title: 'Google Discover Core Update de fevereiro de 2026: o que mudou e o que fazer agora',
      description: 'O Google lançou, pela primeira vez, uma atualização de algoritmo exclusiva para o Discover. O rollout durou 21 dias e redesenhou as regras do jogo.',
      date: '2026-03-29',
      category: 'Dados',
      readTime: '13 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-dcu" cx="40%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-dcu2" cx="70%" cy="40%"><stop offset="0%" stop-color="rgba(130,153,110,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-dcu)"/>
        <rect width="800" height="400" fill="url(#g-dcu2)"/>
        <!-- Geographic pin / map area -->
        <g transform="translate(260,180)">
          <!-- Map grid -->
          <rect x="-100" y="-80" width="200" height="180" rx="8" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.015)"/>
          <line x1="-100" y1="-30" x2="100" y2="-30" stroke="rgba(255,255,255,.04)" stroke-width=".4"/>
          <line x1="-100" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,.04)" stroke-width=".4"/>
          <line x1="-100" y1="70" x2="100" y2="70" stroke="rgba(255,255,255,.04)" stroke-width=".4"/>
          <line x1="-50" y1="-80" x2="-50" y2="100" stroke="rgba(255,255,255,.04)" stroke-width=".4"/>
          <line x1="0" y1="-80" x2="0" y2="100" stroke="rgba(255,255,255,.04)" stroke-width=".4"/>
          <line x1="50" y1="-80" x2="50" y2="100" stroke="rgba(255,255,255,.04)" stroke-width=".4"/>
          <!-- Location pin -->
          <g transform="translate(-20,-20)">
            <path d="M0,-22 C-14,-22 -22,-12 -22,0 C-22,16 0,34 0,34 C0,34 22,16 22,0 C22,-12 14,-22 0,-22 Z" stroke="rgba(192,106,66,.5)" stroke-width="1" fill="rgba(192,106,66,.12)"/>
            <circle cx="0" cy="-2" r="6" fill="rgba(192,106,66,.4)" stroke="rgba(192,106,66,.6)" stroke-width=".8"/>
          </g>
          <!-- Ripple from pin -->
          <circle cx="-20" cy="-20" r="35" stroke="rgba(192,106,66,.1)" stroke-width=".5" fill="none"/>
          <circle cx="-20" cy="-20" r="55" stroke="rgba(192,106,66,.06)" stroke-width=".4" fill="none"/>
          <!-- Region labels -->
          <text x="-80" y="-50" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.15)">LOCAL</text>
          <text x="30" y="50" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.1)">GLOBAL</text>
        </g>
        <!-- Feed cards on right -->
        <g transform="translate(560,110)">
          <rect x="-80" y="0" width="160" height="40" rx="6" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
          <rect x="-68" y="10" width="50" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="-68" y="18" width="80" height="2.5" rx="1" fill="rgba(255,255,255,.07)"/>
          <rect x="-68" y="26" width="60" height="2.5" rx="1" fill="rgba(255,255,255,.05)"/>
          <text x="62" y="24" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(130,153,110,.5)">+42%</text>
        </g>
        <g transform="translate(560,165)">
          <rect x="-80" y="0" width="160" height="40" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)"/>
          <rect x="-68" y="10" width="55" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
          <rect x="-68" y="18" width="70" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
          <rect x="-68" y="26" width="45" height="2.5" rx="1" fill="rgba(255,255,255,.04)"/>
          <text x="62" y="24" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(200,100,100,.5)">-17%</text>
        </g>
        <g transform="translate(560,220)">
          <rect x="-80" y="0" width="160" height="40" rx="6" stroke="rgba(255,255,255,.06)" stroke-width=".5" fill="rgba(255,255,255,.01)"/>
          <rect x="-68" y="10" width="48" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>
          <rect x="-68" y="18" width="65" height="2.5" rx="1" fill="rgba(255,255,255,.05)"/>
          <rect x="-68" y="26" width="40" height="2.5" rx="1" fill="rgba(255,255,255,.04)"/>
          <text x="62" y="24" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(200,100,100,.5)">-57%</text>
        </g>
        <!-- Metrics -->
        <g transform="translate(560,290)" font-family="JetBrains Mono, monospace" font-size="8">
          <text x="-60" y="0" fill="rgba(255,255,255,.18)">Domains</text>
          <text x="30" y="0" fill="rgba(200,100,100,.5)">-8.1%</text>
          <text x="-60" y="16" fill="rgba(255,255,255,.18)">Intl share</text>
          <text x="30" y="16" fill="rgba(200,100,100,.5)">-17.4%</text>
          <text x="-60" y="32" fill="rgba(255,255,255,.18)">Title len</text>
          <text x="30" y="32" fill="rgba(130,153,110,.5)">+15.5%</text>
        </g>
        <!-- Label -->
        <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.15)">DISCOVER CORE UPDATE FEB 2026</text>
      </svg>`,
      content: `
        <p class="article-lead">O Google lançou, pela primeira vez na história, uma atualização de algoritmo exclusiva para o Discover — separada do Search. O rollout durou 21 dias, de 5 a 27 de fevereiro de 2026, e redesenhou as regras do jogo para quem depende desse canal de tráfego. Para redações brasileiras, as implicações são profundas e urgentes.</p>

        <h2>Uma atualização sem precedentes</h2>

        <p>Até agora, toda core update do Google afetava Search e Discover simultaneamente. Fevereiro de 2026 quebrou esse padrão. O Discover ganhou sua própria <a href="https://developers.google.com/search/updates" target="_blank" rel="noopener">atualização dedicada</a>, sinalizando que o Google trata o feed de recomendação como um produto independente, com critérios próprios de ranqueamento.</p>

        <p>A atualização foi inicialmente restrita ao mercado de língua inglesa nos Estados Unidos, mas o Google confirmou que a expansão global está nos planos. Isso significa que o Brasil está na fila — e quem se preparar antes sai na frente.</p>

        <p>Para entender por que isso importa, vale revisitar as <a href="/blog/discover-vs-busca/">diferenças fundamentais entre Discover e busca orgânica</a>. O Discover não responde a uma intenção de busca; ele antecipa interesse. Essa distinção agora se traduz em algoritmos completamente separados.</p>

        <h2>Os três eixos da nova lógica</h2>

        <p>A análise dos dados pós-update revela três eixos de otimização que o Google passou a priorizar no Discover:</p>

        <p><strong>1. Relevância local (Geographic Hyperlocalization)</strong></p>

        <p>O sinal geográfico ganhou peso brutal. Conteúdo sobre a Califórnia passou a aparecer cinco vezes mais nos feeds de usuários localizados na Califórnia. O <a href="https://developers.google.com/search/docs/appearance/google-discover" target="_blank" rel="noopener">Discover</a> deixou de ser um feed genérico e passou a funcionar como um editorial local personalizado.</p>

        <p><strong>2. Autoridade por tópico</strong></p>

        <p>O Google abandonou a avaliação de autoridade no nível do domínio e migrou para uma avaliação tópico a tópico. Um veículo pode ter autoridade alta em política e baixa em esportes — e o Discover agora diferencia isso. Não basta ser um "grande portal"; é preciso demonstrar profundidade em cada vertical.</p>

        <p><strong>3. Padrões de qualidade (Quality Standards)</strong></p>

        <p>Títulos genéricos e conteúdo raso perderam espaço. O comprimento médio dos títulos no Top 1000 subiu 15,5%, de 72,9 para 84,2 caracteres — um indicador de que o algoritmo passou a favorecer títulos mais descritivos e específicos em detrimento de clickbait curto. As diretrizes do Google sobre <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">criação de conteúdo útil</a> ajudam a entender a lógica por trás dessa mudança.</p>

        <h2>Os números: concentração e queda internacional</h2>

        <p>Os dados agregados do Top 1000 do Discover nos EUA mostram uma tendência clara de concentração e localização.</p>

        <table>
          <thead>
            <tr><th>Métrica</th><th>Antes (jan/2026)</th><th>Depois (fev/2026)</th><th>Variação</th></tr>
          </thead>
          <tbody>
            <tr><td>Domínios únicos no Top 1000</td><td>172</td><td>158</td><td>-8,1%</td></tr>
            <tr><td>Participação de publishers internacionais</td><td>8,52%</td><td>7,04%</td><td>-17,4%</td></tr>
            <tr><td>Comprimento médio de título (caracteres)</td><td>72,9</td><td>84,2</td><td>+15,5%</td></tr>
          </tbody>
        </table>

        <p>Menos domínios dividindo o tráfego significa que o Discover ficou mais excludente. Quem está dentro ganha mais; quem está fora perde acesso. Essa dinâmica reforça a importância de uma <a href="/blog/google-discover-trafico-redacoes/">estratégia orientada por dados para capturar tráfego do Discover</a>.</p>

        <h2>Vencedores e perdedores</h2>

        <p>A redistribuição de tráfego foi agressiva. Os maiores beneficiados foram veículos americanos com forte presença local e cobertura factual:</p>

        <p><strong>Ganharam visibilidade:</strong></p>
        <ul>
          <li>CBS News</li>
          <li>NBC News</li>
          <li>Axios</li>
          <li>AP News</li>
        </ul>

        <p><strong>Perderam visibilidade:</strong></p>
        <ul>
          <li>The Guardian: queda de 11%</li>
          <li>Reuters: queda de 20%</li>
          <li>The Independent UK: queda de 57%</li>
        </ul>

        <p>O padrão é nítido. Veículos americanos com cobertura local e factual subiram. Veículos internacionais de língua inglesa — mesmo com reputação consolidada — foram penalizados pela nova lógica de relevância geográfica. A Reuters, uma das agências mais respeitadas do mundo, perdeu um quinto da sua visibilidade no Discover americano.</p>

        <h2>Mudança por categoria: notícias e esportes sobem, entretenimento despenca</h2>

        <p>A redistribuição não foi apenas entre publishers, mas entre verticais inteiras de conteúdo.</p>

        <table>
          <thead>
            <tr><th>Categoria</th><th>Antes</th><th>Depois</th><th>Variação</th></tr>
          </thead>
          <tbody>
            <tr><td>News (hard news)</td><td>15,94%</td><td>19,16%</td><td>+3,22 p.p.</td></tr>
            <tr><td>Sports</td><td>5,06%</td><td>8,52%</td><td>+3,46 p.p.</td></tr>
            <tr><td>Arts &amp; Entertainment</td><td>24,40%</td><td>17,90%</td><td>-6,50 p.p.</td></tr>
          </tbody>
        </table>

        <p>Entretenimento perdeu 6,5 pontos percentuais — a maior queda absoluta. Esportes quase dobrou sua fatia. Hard news cresceu consistentemente. A leitura possível: o Google está reposicionando o Discover como uma ferramenta de informação, não de distração. Conteúdo factual, relevante e local ganhou prioridade sobre conteúdo viral e de entretenimento leve.</p>

        <p>Para redações que já observavam <a href="/blog/por-que-audiencia-jornal-cai/">quedas de audiência sem explicação clara</a>, essa redistribuição de categorias pode ser a peça que faltava no diagnóstico.</p>

        <h2>O que muda quando chegar ao Brasil</h2>

        <p>A expansão global da Discover Core Update é questão de quando, não de se. E quando chegar ao Brasil, três cenários são prováveis:</p>

        <p><strong>Cenário 1: Regionalização radical.</strong> Se o Google aplicar a mesma lógica de hiperlocalização, um jornal de Belo Horizonte terá vantagem no Discover de leitores mineiros sobre portais nacionais generalistas. Redações regionais podem, pela primeira vez, competir de igual para igual com os grandes portais no Discover — desde que tenham conteúdo local de qualidade.</p>

        <p><strong>Cenário 2: Avaliação tópica fragmentada.</strong> Um veículo forte em esportes mas fraco em política terá resultados discrepantes entre editorias. A autoridade deixa de ser do domínio e passa a ser da editoria. Isso exige que redações invistam em profundidade vertical, não em volume horizontal.</p>

        <p><strong>Cenário 3: Morte do título genérico.</strong> O aumento de 15,5% no comprimento dos títulos não é coincidência. Títulos vagos como "Confira o que aconteceu" ou "Entenda a polêmica" tendem a perder espaço para títulos específicos, com dados concretos e contexto claro.</p>

        <h2>O que redações brasileiras devem fazer agora</h2>

        <p>Não espere o update chegar ao Brasil para reagir. As ações a seguir são vantajosas independentemente do algoritmo — e se tornam críticas quando a atualização desembarcar.</p>

        <p><strong>1. Mapear autoridade por editoria.</strong></p>
        <p>Pare de pensar no seu domínio como uma unidade monolítica. Identifique em quais tópicos sua redação tem profundidade real e quais são coberturas superficiais. Concentre esforço editorial onde há expertise demonstrável. Uma <a href="/blog/pipeline-dados-editoriais/">abordagem de pipeline de dados editoriais</a> ajuda a quantificar isso.</p>

        <p><strong>2. Investir em cobertura local com profundidade.</strong></p>
        <p>Se sua redação cobre uma região específica, esse é seu ativo mais valioso no novo Discover. Não dilua cobertura local tentando competir em temas nacionais genéricos. O algoritmo está se movendo na direção de quem tem raiz geográfica.</p>

        <p><strong>3. Reescrever títulos com especificidade.</strong></p>
        <p>Revise os títulos das últimas semanas. Quantos têm menos de 70 caracteres? Quantos poderiam ser de qualquer veículo? Títulos que funcionam no novo Discover incluem dados, localização e contexto. "Prefeitura de BH corta 12% do orçamento de saúde para 2026" performa melhor que "Prefeitura anuncia cortes".</p>

        <p><strong>4. Desenvolver voz editorial consistente por vertical.</strong></p>
        <p>A avaliação tópica do Google favorece consistência. Um perfil de <a href="/blog/voz-editorial-agentes/">voz editorial bem definido</a> por editoria sinaliza expertise e coerência — exatamente o que o algoritmo agora busca.</p>

        <p><strong>5. Monitorar o Discover como canal separado.</strong></p>
        <p>Se sua redação ainda analisa "tráfego do Google" como uma métrica única, está operando no escuro. Separe Discover de Search no seu analytics. Acompanhe por editoria, por formato, por região. O Discover agora tem dinâmica própria — trate-o assim.</p>

        <h2>Conclusão</h2>

        <p>A Discover Core Update de fevereiro de 2026 é a maior mudança estrutural no feed de recomendação do Google desde sua criação. A separação do Search, a hiperlocalização geográfica e a avaliação de autoridade por tópico redesenham o cenário competitivo.</p>

        <p>Para redações brasileiras, a mensagem é direta: o futuro do Discover favorece quem tem profundidade local, expertise demonstrável e consistência editorial. Volume e generalismo perdem espaço. A janela para se adaptar é agora — antes que o update cruze o Atlântico.</p>
      `,
    },
  'google-spam-update-reescrita-titulos-ia': {
      title: 'Google Spam Update de março de 2026 e a reescrita de títulos com IA — o que redações precisam saber',
      description: 'Em menos de 20 horas, o Google reconfigurou as regras do jogo. Enquanto o Spam Update varria conteúdo de baixa qualidade, uma mudança silenciosa na reescrita de títulos por IA ameaça tirar dos jornalistas o controle editorial.',
      date: '2026-03-29',
      category: 'Dados',
      readTime: '12 min',
      author: 'Bruno Lopes',
      role: 'Fundador, atalay.ia',
      heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0e1011"/>
        <defs>
          <radialGradient id="g-spam" cx="35%" cy="50%"><stop offset="0%" stop-color="rgba(200,100,100,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          <radialGradient id="g-spam2" cx="65%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g-spam)"/>
        <rect width="800" height="400" fill="url(#g-spam2)"/>
        <!-- SpamBrain icon (left) -->
        <g transform="translate(240,185)">
          <!-- Brain outline -->
          <ellipse cx="0" cy="0" rx="60" ry="50" stroke="rgba(200,100,100,.3)" stroke-width="1" fill="rgba(200,100,100,.03)"/>
          <path d="M0,-50 Q30,-50 30,-20 Q50,-20 50,10 Q50,40 20,45 Q0,50 -20,45 Q-50,40 -50,10 Q-50,-20 -30,-20 Q-30,-50 0,-50" stroke="rgba(200,100,100,.15)" stroke-width=".6" fill="none"/>
          <!-- Neural nodes -->
          <circle cx="-20" cy="-15" r="4" fill="rgba(200,100,100,.3)" stroke="rgba(200,100,100,.4)" stroke-width=".6"/>
          <circle cx="15" cy="-20" r="4" fill="rgba(200,100,100,.3)" stroke="rgba(200,100,100,.4)" stroke-width=".6"/>
          <circle cx="-10" cy="15" r="4" fill="rgba(200,100,100,.3)" stroke="rgba(200,100,100,.4)" stroke-width=".6"/>
          <circle cx="20" cy="10" r="4" fill="rgba(200,100,100,.3)" stroke="rgba(200,100,100,.4)" stroke-width=".6"/>
          <circle cx="0" cy="-5" r="5" fill="rgba(200,100,100,.4)" stroke="rgba(200,100,100,.5)" stroke-width=".8"/>
          <!-- Connections -->
          <line x1="-20" y1="-15" x2="0" y2="-5" stroke="rgba(200,100,100,.2)" stroke-width=".5"/>
          <line x1="15" y1="-20" x2="0" y2="-5" stroke="rgba(200,100,100,.2)" stroke-width=".5"/>
          <line x1="-10" y1="15" x2="0" y2="-5" stroke="rgba(200,100,100,.2)" stroke-width=".5"/>
          <line x1="20" y1="10" x2="0" y2="-5" stroke="rgba(200,100,100,.2)" stroke-width=".5"/>
          <text x="0" y="70" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="rgba(200,100,100,.5)">SpamBrain</text>
          <text x="0" y="84" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">19.5h rollout</text>
        </g>
        <!-- Arrow -->
        <g>
          <line x1="340" y1="185" x2="400" y2="185" stroke="rgba(255,255,255,.1)" stroke-width=".8"/>
          <polygon points="400,182 408,185 400,188" fill="rgba(255,255,255,.12)"/>
        </g>
        <!-- Title rewriting (right) -->
        <g transform="translate(560,150)">
          <!-- Original title -->
          <rect x="-120" y="-40" width="240" height="34" rx="5" stroke="rgba(255,255,255,.1)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
          <text x="-108" y="-26" font-family="DM Sans, sans-serif" font-size="7" fill="rgba(255,255,255,.2)">ORIGINAL</text>
          <rect x="-108" y="-20" width="140" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
          <rect x="-108" y="-12" width="100" height="2.5" rx="1" fill="rgba(255,255,255,.07)"/>
          <!-- Strike through -->
          <line x1="-108" y1="-16" x2="32" y2="-16" stroke="rgba(200,100,100,.25)" stroke-width=".8"/>
          <!-- Arrow down -->
          <line x1="0" y1="0" x2="0" y2="22" stroke="rgba(192,106,66,.3)" stroke-width=".8"/>
          <polygon points="-4,22 0,28 4,22" fill="rgba(192,106,66,.35)"/>
          <!-- Rewritten title -->
          <rect x="-120" y="32" width="240" height="34" rx="5" stroke="rgba(192,106,66,.25)" stroke-width=".7" fill="rgba(192,106,66,.03)"/>
          <text x="-108" y="46" font-family="DM Sans, sans-serif" font-size="7" fill="rgba(192,106,66,.45)">AI REWRITTEN</text>
          <rect x="-108" y="52" width="160" height="3" rx="1.5" fill="rgba(192,106,66,.2)"/>
          <rect x="-108" y="60" width="120" height="2.5" rx="1" fill="rgba(192,106,66,.12)"/>
        </g>
        <!-- Stats -->
        <g transform="translate(560,260)" font-family="JetBrains Mono, monospace" font-size="8">
          <text x="-80" y="0" fill="rgba(255,255,255,.18)">Discover share</text>
          <text x="60" y="0" fill="rgba(192,106,66,.55)">37% → 68%</text>
          <text x="-80" y="16" fill="rgba(255,255,255,.18)">Title rewrite</text>
          <text x="60" y="16" fill="rgba(200,100,100,.5)">permanent</text>
        </g>
        <!-- Label -->
        <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.15)">SPAM UPDATE MAR 2026 + AI TITLE REWRITE</text>
      </svg>`,
      content: `
        <p class="article-lead">Em menos de 20 horas, o Google reconfigurou as regras do jogo para milhares de sites. Enquanto redações ainda tentavam entender o core update de março, o Spam Update varreu conteúdo de baixa qualidade em velocidade recorde — e uma mudança silenciosa na reescrita de títulos por IA ameaça tirar dos jornalistas o controle sobre como suas matérias aparecem para o leitor.</p>

        <h2>O Spam Update mais rápido da história</h2>

        <p>O Google Spam Update de março de 2026 foi concluído entre 24 e 25 de março — um ciclo de apenas 19,5 horas. Para efeito de comparação, atualizações anteriores de spam levaram até 27 dias para serem totalmente implementadas. A velocidade não é acidental: ela reflete a maturidade do SpamBrain, o sistema de inteligência artificial do Google dedicado exclusivamente à detecção de spam.</p>

        <p>Esta foi a segunda atualização confirmada de 2026, aplicada globalmente e em todos os idiomas simultaneamente. O rollout sobrepôs-se ao core update de março, que já vinha recalibrando sinais de E-E-A-T (Experiência, Especialização, Autoridade e Confiabilidade) e intensificando o combate ao abuso de conteúdo gerado por IA em escala.</p>

        <p>A mensagem é clara: o Google está comprimindo os ciclos de enforcement. O que antes levava semanas agora leva horas.</p>

        <h2>O que o SpamBrain está mirando</h2>

        <p>O update cobre mais de 15 categorias de <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener">políticas de spam</a>. As principais frentes de ação incluem:</p>

        <p><strong>Conteúdo gerado em escala.</strong> Sites que usam IA para produzir centenas ou milhares de páginas sem supervisão editorial significativa. Não se trata de proibir IA na produção — trata-se de punir automação sem valor agregado.</p>

        <p><strong>Abuso de domínios expirados.</strong> A prática de comprar domínios com autoridade histórica para publicar conteúdo não relacionado ao tema original. Uma tática que cresceu exponencialmente com o barateamento de ferramentas de geração de texto.</p>

        <p><strong>Abuso de reputação de site.</strong> Terceiros publicando conteúdo de baixa qualidade em subdomínios ou seções de sites com alta autoridade — os chamados "parasite SEO". Portais de notícias que alugam seções para conteúdo patrocinado sem curadoria estão particularmente expostos.</p>

        <p><strong>Redirecionamentos enganosos, texto oculto e conteúdo raspado.</strong> Táticas antigas que persistem em novas formas. O SpamBrain evoluiu para detectar variantes sofisticadas dessas práticas.</p>

        <p>Para redações que operam dentro de padrões editoriais legítimos, o risco direto é baixo. Mas o risco indireto é real: <a href="/blog/por-que-audiencia-jornal-cai/">a queda de audiência que muitos veículos já enfrentam</a> pode se agravar se concorrentes de baixa qualidade forem removidos e o tráfego resultante não migrar para fontes confiáveis — algo que depende inteiramente de como o Google redistribui a visibilidade.</p>

        <h2>A recuperação é lenta — e o impacto, imediato</h2>

        <p>Sites penalizados por spam updates não se recuperam com ajustes rápidos. O histórico mostra que a recuperação leva meses, frequentemente exigindo uma reavaliação completa de práticas editoriais e técnicas.</p>

        <p>O problema para redações é que o efeito colateral aparece antes de qualquer diagnóstico. Quedas abruptas de tráfego orgânico entre 24 e 26 de março podem estar relacionadas ao spam update, ao core update ou à sobreposição de ambos. Isolar a causa exige análise granular — página por página, query por query.</p>

        <p>Quem ainda não monitora o desempenho por superfície de busca separadamente — <a href="/blog/discover-vs-busca/">Discover versus Search orgânico</a> — está operando às cegas.</p>

        <h2>A reescrita de títulos por IA: o teste que já virou rotina</h2>

        <p>Enquanto o spam update dominava a atenção, o Google confirmou estar realizando um teste "pequeno e restrito" de <a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener">reescrita de títulos</a> por inteligência artificial nos resultados de busca (Search). A formulação é deliberadamente modesta. O contexto, não.</p>

        <p>No Discover, a reescrita de títulos por IA já é permanente. Não é teste. Não é experimento. É o padrão operacional.</p>

        <p>E os números falam por si: uma análise de mais de 400 publishers mostrou que a participação do Discover no tráfego total saltou de 37% para 68% após a implementação de títulos gerados por IA. O Discover não apenas reescreve títulos — ele os reescreve de um jeito que gera mais cliques. Para o Google, isso é otimização. Para redações, é perda de controle editorial.</p>

        <h2>O problema editorial é concreto</h2>

        <p>O caso mais emblemático até agora envolveu o The Verge: o Google alterou um título de forma que mudou tanto o tom quanto o significado da matéria original. Sean Hollister, do próprio The Verge, comparou a prática a "uma biblioteca trocando as capas dos livros sem permissão do autor".</p>

        <p>A analogia é precisa. O título é a primeira — e frequentemente única — interface entre o leitor e a reportagem. Quando um algoritmo reescreve essa interface, o jornalista perde a autoria da primeira impressão.</p>

        <p>O diretor de SEO da ESPN expressou preocupação com a erosão de confiança: se o leitor clica esperando uma coisa e encontra outra, quem perde credibilidade não é o Google — é o veículo.</p>

        <p>Esse problema se conecta diretamente ao debate mais amplo sobre <a href="/blog/como-ia-contextual-muda-jornalismo/">como a IA contextual está transformando o jornalismo</a>. A diferença é que aqui a transformação não é escolha da redação. É imposta pela plataforma de distribuição.</p>

        <h2>Do Discover para o Search: a trajetória previsível</h2>

        <p>O padrão do Google é consistente: testar no Discover, validar métricas, expandir para o Search. Foi assim com snippets expandidos, com carrosséis de notícias e com sinais de engajamento.</p>

        <p>A transição do Discover — onde a reescrita já é permanente — para o Search — onde ainda é descrita como teste — segue essa mesma lógica. O volume de tráfego do Discover já demonstrou que títulos reescritos por IA geram mais engajamento. Para o Google, não há incentivo para reverter.</p>

        <p>Redações que dependem significativamente do tráfego Discover — <a href="/blog/google-discover-trafico-redacoes/">e a maioria dos grandes portais brasileiros está nessa situação</a> — precisam assumir que essa prática se tornará universal nos próximos meses.</p>

        <h2>O que sua redação precisa fazer agora</h2>

        <p>A convergência do spam update com a expansão da reescrita de títulos por IA exige ações concretas. Não são recomendações teóricas — são ajustes operacionais para as próximas semanas.</p>

        <p><strong>1. Audite seu conteúdo legado.</strong> O SpamBrain está mais rápido e abrangente. Páginas antigas com pouco valor editorial, conteúdo duplicado ou seções de terceiros sem curadoria são passivos de risco. Identifique e trate antes do próximo ciclo.</p>

        <p><strong>2. Separe a análise de tráfego por superfície.</strong> Monitore Search e Discover como canais distintos. Quedas no Discover podem estar ligadas à reescrita de títulos, não a penalizações. Quedas no Search podem refletir o spam update, o core update ou ambos. Sem essa separação, qualquer diagnóstico será impreciso.</p>

        <p><strong>3. Reforce a estrutura dos títulos.</strong> Se o Google vai reescrever seus títulos, sua melhor defesa é torná-las difíceis de melhorar. Títulos claros, informativos, com a informação principal na frente e sem isca de clique reduzem a probabilidade de reescrita — porque já atendem aos critérios que o algoritmo busca otimizar.</p>

        <p><strong>4. Documente e compare.</strong> Crie um processo para verificar como seus títulos aparecem no Discover e nos resultados de busca. Compare com o original publicado. Documente divergências. Esse registro será essencial para qualquer reclamação futura ao Google ou para ajustar sua estratégia de titulação.</p>

        <p><strong>5. Invista em sinais de E-E-A-T verificáveis.</strong> Autoria clara, assinaturas com links para perfis de autor, fontes citadas, datas de publicação e atualização visíveis. O core update de março reforçou esses sinais. O spam update penalizou quem os simula. A reescrita de títulos por IA favorece conteúdo que o Google consegue verificar como confiável.</p>

        <p><strong>6. Não pare de publicar conteúdo original de qualidade.</strong> Parece óbvio, mas o contexto importa: em um cenário onde o Google remove spam em escala e reescreve títulos para maximizar engajamento, <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">conteúdo editorial genuíno</a> com assinatura humana verificável é vantagem competitiva real — não apenas boa prática.</p>

        <h2>O cenário para os próximos meses</h2>

        <p>O Google está simultaneamente limpando o ecossistema (spam update) e assumindo mais controle sobre a apresentação do conteúdo (reescrita de títulos). São movimentos complementares: menos lixo nos resultados e mais controle algorítmico sobre o que sobra.</p>

        <p>Para redações, isso significa operar em um ambiente onde a qualidade editorial é mais importante do que nunca — mas onde o controle sobre como essa qualidade chega ao leitor é cada vez menor. O jornalismo de qualidade continua sendo condição necessária. Deixou de ser condição suficiente.</p>

        <p>A velocidade desse spam update — 19,5 horas — é um sinal. O Google não está desacelerando. Redações que não acompanharem esse ritmo de adaptação vão sentir o impacto onde mais dói: no tráfego, na receita e na relevância.</p>
      `,
    },

  'anthropic-vaza-codigo-claude-code': {
    title: 'Anthropic vaza código do Claude Code e expõe risco da IA que escreve software',
    description: 'Erro em atualização do Claude Code expôs mais de 500 mil linhas de código e ampliou a pressão sobre a Anthropic.',
    date: '2026-04-01',
    category: 'Análise',
    readTime: '7 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-leak1" cx="40%" cy="45%"><stop offset="0%" stop-color="rgba(200,100,100,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-leak2" cx="65%" cy="55%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-leak1)"/>
      <rect width="800" height="400" fill="url(#g-leak2)"/>
      <!-- Lock broken -->
      <g transform="translate(260,180)">
        <rect x="-40" y="0" width="80" height="60" rx="6" stroke="rgba(200,100,100,.35)" stroke-width="1" fill="rgba(200,100,100,.04)"/>
        <path d="M-20,0 L-20,-25 Q-20,-45 0,-45 Q20,-45 20,-25 L20,-10" stroke="rgba(200,100,100,.3)" stroke-width="2" fill="none" stroke-linecap="round"/>
        <circle cx="0" cy="24" r="6" fill="rgba(200,100,100,.35)" stroke="rgba(200,100,100,.45)" stroke-width=".8"/>
        <line x1="0" y1="30" x2="0" y2="40" stroke="rgba(200,100,100,.35)" stroke-width="1.5" stroke-linecap="round"/>
        <text x="0" y="82" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(200,100,100,.5)">SOURCE MAP</text>
        <text x="0" y="96" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">exposed</text>
      </g>
      <!-- Arrow -->
      <line x1="340" y1="195" x2="400" y2="195" stroke="rgba(255,255,255,.1)" stroke-width=".8"/>
      <polygon points="400,192 408,195 400,198" fill="rgba(255,255,255,.12)"/>
      <!-- Code lines leaked -->
      <g transform="translate(540,140)">
        <rect x="-100" y="-30" width="200" height="130" rx="6" stroke="rgba(192,106,66,.2)" stroke-width=".7" fill="rgba(192,106,66,.02)"/>
        <text x="-86" y="-14" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(192,106,66,.45)">claude-code/src/</text>
        <rect x="-86" y="-4" width="120" height="2.5" rx="1" fill="rgba(255,255,255,.08)"/>
        <rect x="-86" y="6" width="95" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
        <rect x="-86" y="16" width="140" height="2.5" rx="1" fill="rgba(255,255,255,.07)"/>
        <rect x="-86" y="26" width="80" height="2.5" rx="1" fill="rgba(255,255,255,.05)"/>
        <rect x="-86" y="36" width="110" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
        <rect x="-86" y="46" width="130" height="2.5" rx="1" fill="rgba(255,255,255,.08)"/>
        <rect x="-86" y="56" width="90" height="2.5" rx="1" fill="rgba(255,255,255,.05)"/>
        <rect x="-86" y="66" width="105" height="2.5" rx="1" fill="rgba(255,255,255,.07)"/>
        <rect x="-86" y="76" width="75" height="2.5" rx="1" fill="rgba(255,255,255,.04)"/>
      </g>
      <!-- Stats -->
      <g transform="translate(540,300)" font-family="JetBrains Mono, monospace" font-size="9">
        <text x="-60" y="0" fill="rgba(255,255,255,.2)">lines:</text>
        <text x="10" y="0" fill="rgba(200,100,100,.55)">500k+</text>
        <text x="-60" y="16" fill="rgba(255,255,255,.2)">files:</text>
        <text x="10" y="16" fill="rgba(200,100,100,.55)">~2000</text>
      </g>
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.12)">CLAUDE CODE — NPM SOURCE MAP LEAK</text>
    </svg>`,
    content: `
      <p class="article-lead">A <strong><a href="https://www.anthropic.com" target="_blank" rel="noopener">Anthropic</a></strong> entrou em crise após vazar parte do código interno do <strong>Claude Code</strong>, sua ferramenta de programação com inteligência artificial. O episódio ganhou repercussão imediata porque a empresa vinha sendo apresentada como um dos maiores exemplos da nova fase da engenharia de software, em que agentes de IA escrevem, testam e executam tarefas com cada vez menos intervenção humana.</p>

      <p>O caso ficou ainda mais simbólico porque <strong>Boris Cherny</strong>, uma das principais vozes ligadas ao produto, havia defendido publicamente que já não escrevia código manualmente havia meses. A fala ajudou a consolidar a imagem da Anthropic como vitrine de um novo modelo de desenvolvimento. Agora, a mesma companhia se vê obrigada a explicar como deixou escapar justamente o código de uma de suas ferramentas mais estratégicas.</p>

      <h2>O que aconteceu no vazamento</h2>

      <p>Segundo a própria Anthropic, o problema foi causado por um <strong>erro humano no processo de empacotamento de uma atualização</strong>. Em vez de um ataque externo, o que houve foi a publicação indevida de um arquivo de depuração, conhecido como <strong>source map</strong>, dentro de uma release do Claude Code. Esse tipo de arquivo pode permitir que terceiros reconstruam boa parte do código original de uma aplicação.</p>

      <p>Foi exatamente isso que aconteceu. A atualização publicada no <strong>npm</strong> acabou expondo uma fatia extensa da base TypeScript da ferramenta, com relatos apontando para <strong>mais de 500 mil linhas de código</strong>. Em pouco tempo, desenvolvedores começaram a baixar, copiar e analisar o material, que se espalhou rapidamente por repositórios públicos e fóruns da comunidade técnica.</p>

      <h2>Por que o caso é tão delicado</h2>

      <p>A Anthropic afirmou que <strong>nenhum dado sensível de clientes ou credencial</strong> foi exposto. Isso evita um problema ainda maior com usuários e empresas clientes, mas não transforma o caso em algo pequeno. O que foi revelado não eram apenas arquivos soltos: o vazamento abriu uma janela para entender como a companhia organiza permissões, comportamentos do agente, fluxos internos e partes importantes da lógica que tornam o Claude Code um produto competitivo.</p>

      <p>Na prática, o mercado passou a enxergar parte do "motor" por trás do assistente. Isso interessa a muita gente. <strong>Concorrentes</strong> podem estudar escolhas técnicas da Anthropic com mais precisão. <strong>Pesquisadores de segurança</strong> podem analisar pontos frágeis. E <strong>agentes maliciosos</strong> ganham uma visão mais detalhada de como a ferramenta funciona, o que pode facilitar a busca por vulnerabilidades ou formas de contornar proteções.</p>

      <h2>O contraste com o discurso de código feito por IA</h2>

      <p>O vazamento chamou atenção não apenas pelo conteúdo exposto, mas pelo simbolismo. A Anthropic vinha sendo tratada como uma das empresas que melhor exemplificam a tese de que a <strong>IA já está escrevendo software em escala real</strong>. A declaração de Boris Cherny, de que seu código já era integralmente produzido com ajuda de IA, reforçou essa narrativa e ajudou a transformar o Claude Code em referência no setor.</p>

      <p>Por isso, o incidente bate diretamente na credibilidade desse discurso. O problema não prova que a IA causou o vazamento, e a empresa sustenta que a falha foi humana. Ainda assim, o episódio expõe uma contradição desconfortável: quanto mais uma companhia vende a ideia de velocidade, automação e autonomia no desenvolvimento, maior passa a ser a cobrança sobre seus <strong>controles operacionais</strong>, seus <strong>processos de release</strong> e sua <strong>maturidade em segurança</strong>.</p>

      <h2>O que a Anthropic perde com isso</h2>

      <p>Mesmo sem atingir os modelos centrais do Claude, o vazamento representa um golpe reputacional e estratégico. O <strong><a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener">Claude Code</a></strong> se tornou um dos ativos mais importantes da empresa na disputa com rivais como <strong>OpenAI</strong> e <strong>Google</strong>. Ao deixar esse código escapar, a Anthropic oferece ao mercado um atalho para entender parte de sua execução prática, justamente em um momento em que ferramentas de programação com IA viraram um dos campos mais disputados do setor.</p>

      <p>A empresa correu para limitar os danos e tentar remover cópias espalhadas pela internet, mas esse tipo de contenção costuma chegar tarde demais. Quando o material já foi replicado, estudado e adaptado por terceiros, o prejuízo deixa de ser apenas técnico e passa a ser também competitivo. O episódio reforça a importância de práticas de <a href="https://en.wikipedia.org/wiki/Responsible_disclosure" target="_blank" rel="noopener">divulgação responsável</a> em incidentes de segurança. No fim, o episódio vira um lembrete duro para todo o setor: <strong>não basta prometer que a IA consegue escrever software; é preciso provar que a organização continua capaz de controlar o que publica</strong>.</p>

      <p><em>Leia também: <a href="/blog/anthropic-conter-vazamento-claude-code/">Anthropic corre para conter vazamento do Claude Code após defender código feito por IA</a></em></p>
    `,
  },

  'anthropic-conter-vazamento-claude-code': {
    title: 'Anthropic corre para conter vazamento do Claude Code após defender código feito por IA',
    description: 'Erro de empacotamento expôs mais de 500 mil linhas do Claude Code, revelou funções internas e ampliou a pressão sobre a Anthropic.',
    date: '2026-04-02',
    category: 'Análise',
    readTime: '8 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-cont1" cx="35%" cy="45%"><stop offset="0%" stop-color="rgba(200,100,100,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-cont2" cx="60%" cy="55%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-cont1)"/>
      <rect width="800" height="400" fill="url(#g-cont2)"/>
      <!-- Containment shield -->
      <g transform="translate(240,185)">
        <path d="M0,-60 L50,-35 L50,20 Q50,55 0,70 Q-50,55 -50,20 L-50,-35 Z" stroke="rgba(192,106,66,.3)" stroke-width="1" fill="rgba(192,106,66,.03)"/>
        <path d="M0,-40 L32,-22 L32,12 Q32,35 0,45 Q-32,35 -32,12 L-32,-22 Z" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.02)"/>
        <!-- Warning icon -->
        <path d="M0,-15 L12,8 L-12,8 Z" stroke="rgba(200,100,100,.45)" stroke-width="1" fill="rgba(200,100,100,.06)" stroke-linejoin="round"/>
        <line x1="0" y1="-8" x2="0" y2="0" stroke="rgba(200,100,100,.5)" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="0" cy="4" r="1.2" fill="rgba(200,100,100,.5)"/>
        <text x="0" y="88" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(192,106,66,.5)">CONTAINMENT</text>
        <text x="0" y="102" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">in progress</text>
      </g>
      <!-- Scattered copies -->
      <g transform="translate(520,120)">
        <rect x="0" y="0" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(-5)"/>
        <rect x="60" y="-10" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(3)"/>
        <rect x="30" y="50" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(-2)"/>
        <rect x="90" y="40" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(6)"/>
        <rect x="10" y="100" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(-3)"/>
        <rect x="70" y="95" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(4)"/>
        <rect x="130" y="85" width="50" height="35" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".5" fill="rgba(255,255,255,.015)" transform="rotate(-1)"/>
        <text x="90" y="170" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.2)">copies spreading</text>
      </g>
      <!-- Arrow -->
      <g>
        <line x1="310" y1="195" x2="370" y2="160" stroke="rgba(200,100,100,.15)" stroke-width=".6" stroke-dasharray="3 3"/>
        <line x1="310" y1="195" x2="380" y2="200" stroke="rgba(200,100,100,.15)" stroke-width=".6" stroke-dasharray="3 3"/>
        <line x1="310" y1="195" x2="370" y2="240" stroke="rgba(200,100,100,.15)" stroke-width=".6" stroke-dasharray="3 3"/>
      </g>
      <!-- Valuation -->
      <g transform="translate(560,310)" font-family="JetBrains Mono, monospace" font-size="9">
        <text x="0" y="0" fill="rgba(255,255,255,.2)">valuation:</text>
        <text x="80" y="0" fill="rgba(192,106,66,.55)">$380B</text>
        <text x="0" y="16" fill="rgba(255,255,255,.2)">exposure:</text>
        <text x="80" y="16" fill="rgba(200,100,100,.55)">500k+ lines</text>
      </g>
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.12)">ANTHROPIC — DAMAGE CONTROL</text>
    </svg>`,
    content: `
      <p class="article-lead">A <strong><a href="https://www.anthropic.com" target="_blank" rel="noopener">Anthropic</a></strong> tenta conter uma crise incômoda no pior momento possível. A empresa, que virou símbolo da nova fase em que agentes de IA ajudam a construir software em velocidade inédita, viu parte relevante do código interno do <strong>Claude Code</strong> escapar para a internet após um erro de publicação. O episódio chamou ainda mais atenção porque <strong>Boris Cherny</strong>, nome ligado ao produto, havia defendido publicamente um fluxo de trabalho em que a IA já escrevia praticamente tudo no seu dia a dia.</p>

      <p>O contraste pesa. De um lado, a Anthropic ajudou a popularizar a ideia de que a programação entrou em uma nova era, com agentes capazes de produzir código, revisar tarefas e acelerar entregas. Do outro, agora precisa explicar como deixou vazar justamente a base técnica de uma de suas ferramentas mais estratégicas.</p>

      <p><em>Este artigo é uma continuação da análise: <a href="/blog/anthropic-vaza-codigo-claude-code/">Anthropic vaza código do Claude Code e expõe risco da IA que escreve software</a>.</em></p>

      <h2>O que aconteceu no vazamento do Claude Code</h2>

      <p>Segundo a própria empresa, o problema foi causado por um <strong>erro humano no empacotamento de uma atualização</strong>, e não por uma invasão direta. Um <strong>source map</strong>, arquivo usado para depuração e que ajuda a relacionar o código compilado ao original, foi publicado indevidamente no pacote do npm. Na prática, isso abriu caminho para a reconstrução de uma parte extensa da base interna do <strong>Claude Code</strong>.</p>

      <p>Os relatos sobre o caso apontam que o material exposto incluía <strong>mais de 500 mil linhas de código</strong> e quase <strong>2 mil arquivos</strong>. Não se tratava dos pesos do modelo central da Anthropic, mas sim da camada que transforma o Claude Code em um produto utilizável no mundo real, com fluxos, comandos, permissões e lógica de operação.</p>

      <h2>Por que o caso é grave mesmo sem expor dados de clientes</h2>

      <p>A Anthropic afirmou que <strong>nenhum dado sensível de clientes ou credencial</strong> foi comprometido. Isso reduz o risco imediato para usuários, mas não elimina a gravidade do episódio. O que vazou ajuda a mostrar como a empresa organiza a ferramenta por trás do terminal, como lida com permissões, como estrutura comportamentos do agente e como conecta diferentes partes do sistema para entregar tarefas complexas.</p>

      <p>Em outras palavras, o mercado não viu apenas trechos de código: viu um pedaço do <strong>manual de funcionamento</strong> do produto. Para concorrentes, isso facilita leitura de arquitetura, comparação de escolhas técnicas e até engenharia reversa de funcionalidades. Para pesquisadores de segurança e possíveis atacantes, o vazamento também pode servir como atalho para encontrar fragilidades exploráveis.</p>

      <h2>O que o código exposto revelou sobre a estratégia da Anthropic</h2>

      <p>A repercussão foi além do constrangimento técnico porque o material exposto indicou a existência de <strong>recursos ainda não lançados</strong>. Entre eles, apareceram sinais de um <strong>agente persistente em segundo plano</strong>, além de estruturas ligadas à memória e à continuidade entre sessões. Isso sugere que a Anthropic trabalha para tornar o Claude Code menos reativo e mais contínuo, com atuação mais autônoma ao longo do tempo.</p>

      <p>Esse tipo de pista tem valor estratégico. Quando uma empresa revela sem querer o que está construindo, ela entrega ao mercado um mapa parcial do seu próximo passo. Em um setor em que OpenAI, Google e outras gigantes disputam a liderança dos agentes de programação, esse tipo de exposição reduz parte da vantagem competitiva.</p>

      <h2>O timing piora ainda mais a crise</h2>

      <p>O episódio acontece num momento em que a Anthropic vive alta visibilidade e pressão máxima. O <strong>Claude Code</strong> virou peça central da narrativa de crescimento da empresa, e a companhia reforçou recentemente sua posição no mercado com uma rodada que a avaliou em <strong>US$ 380 bilhões</strong>. Ao mesmo tempo, a marca tenta sustentar a imagem de empresa cuidadosa com segurança e governança em IA, como refletido em seus <a href="https://www.anthropic.com/news" target="_blank" rel="noopener">comunicados oficiais</a>.</p>

      <p>Por isso, o dano reputacional do vazamento vai além do erro operacional. A empresa precisou correr para conter a circulação do material, com pedidos de remoção se espalhando por repositórios e cópias derivadas. Mesmo assim, quando código estratégico cai na rede, o problema deixa de ser apenas "tirar do ar" e passa a ser <strong>conviver com o fato de que ele já foi estudado, copiado e reinterpretado</strong>.</p>

      <p>No fim, a discussão sobre se a culpa foi exclusivamente humana ou se houve excesso de confiança em fluxos automatizados muda pouco o centro da história. O que realmente importa é que a Anthropic, hoje uma das principais vitrines da programação orientada por IA, acabou atingida por uma falha básica de processo. O caso reacende o debate sobre <a href="https://en.wikipedia.org/wiki/Open-source_software_security" target="_blank" rel="noopener">segurança em software distribuído por registros públicos</a> e os riscos de publicações automatizadas sem verificação rigorosa. E isso enfraquece justamente o discurso que mais tenta vender ao mercado: o de que consegue escalar inovação sem perder controle.</p>
    `,
  },

  'nyt-rompe-colaborador-ia-resenha': {
    title: 'NYT rompe com colaborador após IA copiar trechos de outra resenha',
    description: 'Jornal encerrou parceria com Alex Preston após uso de IA gerar semelhanças com crítica publicada pelo The Guardian.',
    date: '2026-04-02',
    category: 'Análise',
    readTime: '6 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-nyt2a" cx="35%" cy="45%"><stop offset="0%" stop-color="rgba(153,70,70,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-nyt2b" cx="65%" cy="55%"><stop offset="0%" stop-color="rgba(192,106,66,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-nyt2a)"/>
      <rect width="800" height="400" fill="url(#g-nyt2b)"/>
      <!-- Original review (Guardian) -->
      <g transform="translate(220,165)">
        <rect x="-90" y="-50" width="180" height="100" rx="6" stroke="rgba(255,255,255,.1)" stroke-width=".7" fill="rgba(255,255,255,.015)"/>
        <text x="-74" y="-32" font-family="DM Sans, sans-serif" font-size="8" font-weight="600" fill="rgba(255,255,255,.25)">The Guardian</text>
        <rect x="-74" y="-22" width="120" height="2.5" rx="1" fill="rgba(255,255,255,.1)"/>
        <rect x="-74" y="-14" width="100" height="2.5" rx="1" fill="rgba(255,255,255,.07)"/>
        <rect x="-74" y="-6" width="130" height="2.5" rx="1" fill="rgba(255,255,255,.08)"/>
        <rect x="-74" y="2" width="90" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
        <rect x="-74" y="10" width="110" height="2.5" rx="1" fill="rgba(130,153,110,.15)"/>
        <rect x="-74" y="18" width="95" height="2.5" rx="1" fill="rgba(130,153,110,.12)"/>
        <rect x="-74" y="26" width="125" height="2.5" rx="1" fill="rgba(130,153,110,.15)"/>
        <rect x="-74" y="34" width="80" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
      </g>
      <!-- Arrow with AI label -->
      <g transform="translate(400,165)">
        <line x1="-60" y1="-10" x2="60" y2="-10" stroke="rgba(200,100,100,.2)" stroke-width=".7" stroke-dasharray="4 3"/>
        <line x1="-60" y1="10" x2="60" y2="10" stroke="rgba(200,100,100,.2)" stroke-width=".7" stroke-dasharray="4 3"/>
        <rect x="-22" y="-10" width="44" height="20" rx="4" fill="rgba(200,100,100,.08)" stroke="rgba(200,100,100,.2)" stroke-width=".5"/>
        <text x="0" y="4" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="rgba(200,100,100,.55)">AI</text>
      </g>
      <!-- NYT review (contaminated) -->
      <g transform="translate(580,165)">
        <rect x="-90" y="-50" width="180" height="100" rx="6" stroke="rgba(200,100,100,.2)" stroke-width=".7" fill="rgba(200,100,100,.015)"/>
        <text x="-74" y="-32" font-family="DM Sans, sans-serif" font-size="8" font-weight="600" fill="rgba(255,255,255,.25)">New York Times</text>
        <rect x="-74" y="-22" width="110" height="2.5" rx="1" fill="rgba(255,255,255,.08)"/>
        <rect x="-74" y="-14" width="130" height="2.5" rx="1" fill="rgba(255,255,255,.07)"/>
        <rect x="-74" y="-6" width="95" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
        <rect x="-74" y="2" width="120" height="2.5" rx="1" fill="rgba(255,255,255,.08)"/>
        <rect x="-74" y="10" width="110" height="2.5" rx="1" fill="rgba(200,100,100,.2)"/>
        <rect x="-74" y="18" width="95" height="2.5" rx="1" fill="rgba(200,100,100,.15)"/>
        <rect x="-74" y="26" width="125" height="2.5" rx="1" fill="rgba(200,100,100,.2)"/>
        <rect x="-74" y="34" width="85" height="2.5" rx="1" fill="rgba(255,255,255,.06)"/>
        <!-- Strike / warning -->
        <text x="68" y="-30" font-family="JetBrains Mono, monospace" font-size="12" fill="rgba(200,100,100,.4)">!</text>
      </g>
      <!-- Matching lines highlight -->
      <line x1="146" y1="175" x2="506" y2="175" stroke="rgba(200,100,100,.1)" stroke-width=".4" stroke-dasharray="2 3"/>
      <line x1="146" y1="183" x2="506" y2="183" stroke="rgba(200,100,100,.1)" stroke-width=".4" stroke-dasharray="2 3"/>
      <line x1="146" y1="191" x2="506" y2="191" stroke="rgba(200,100,100,.1)" stroke-width=".4" stroke-dasharray="2 3"/>
      <!-- Bottom labels -->
      <g font-family="JetBrains Mono, monospace" font-size="9">
        <text x="220" y="290" text-anchor="middle" fill="rgba(255,255,255,.18)">original review</text>
        <text x="580" y="290" text-anchor="middle" fill="rgba(200,100,100,.45)">AI-contaminated</text>
      </g>
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.12)">NYT — AI PLAGIARISM INCIDENT</text>
    </svg>`,
    content: `
      <p class="article-lead">O <strong><a href="https://www.nytimes.com" target="_blank" rel="noopener">New York Times</a></strong> rompeu relações com o escritor freelancer <strong>Alex Preston</strong> após descobrir que uma resenha assinada por ele continha trechos e formulações muito semelhantes aos de uma crítica publicada anteriormente no <strong>The Guardian</strong>. O caso ampliou o debate sobre os limites do uso de <strong>inteligência artificial no jornalismo</strong> e reacendeu o temor de que ferramentas generativas estejam entrando nas redações mais tradicionais sem controles suficientes.</p>

      <p>A polêmica envolve a resenha de <strong><em>Watching Over Her</em></strong>, romance de <strong>Jean-Baptiste Andrea</strong>. O texto publicado pelo Times em janeiro passou a ser questionado depois que um leitor percebeu semelhanças relevantes com uma análise escrita meses antes por <strong>Christobel Kent</strong> no jornal britânico. A partir daí, o NYT abriu uma apuração interna e ouviu o autor.</p>

      <p><em>Este artigo aprofunda a análise sobre o impacto da IA nas redações tradicionais. Leia também: <a href="/blog/caso-nyt-ia-redacao/">NYT acusado de publicar artigo com IA — o que o caso ensina sobre uso responsável nas redações</a>.</em></p>

      <h2>Como o caso veio à tona</h2>

      <p>Durante a investigação, <strong>Preston admitiu ter usado uma ferramenta de IA</strong> para ajudar na elaboração da resenha. Segundo ele, o recurso acabou incorporando linguagem de outra crítica já publicada, e esse material passou despercebido na versão final. O problema não foi apenas uma coincidência de estilo, mas a presença de descrições e construções muito próximas das usadas no texto do <strong>The Guardian</strong>.</p>

      <p>As semelhanças chamaram atenção principalmente em passagens que descrevem personagens do livro e também no fechamento da avaliação literária. Isso transformou o episódio em algo mais grave do que um simples deslize de redação, porque atingiu um ponto sensível para qualquer veículo jornalístico: a confiança de que o texto publicado é original, apurado e atribuído corretamente — princípios centrais do <a href="https://www.spj.org/ethicscode.asp" target="_blank" rel="noopener">código de ética da Society of Professional Journalists</a>.</p>

      <h2>Por que o New York Times tratou o episódio como grave</h2>

      <p>Após o caso vir a público, os editores acrescentaram uma nota à resenha e o <strong>New York Times</strong> deixou claro que considera o uso de IA dessa forma uma violação séria de seus padrões. Em manifestação pública, o jornal afirmou que tanto a <strong>dependência de inteligência artificial</strong> quanto a inclusão de trabalho não atribuído de outro autor ferem a integridade editorial da publicação.</p>

      <p>Preston disse estar profundamente envergonhado e reconheceu que cometeu um erro grave. O jornal informou ainda que revisou os outros textos produzidos por ele e não encontrou problemas semelhantes nas resenhas anteriores. Ainda assim, decidiu encerrar a colaboração, numa sinalização clara de que pretende endurecer o tratamento dado a casos em que a IA interfere na autoria jornalística.</p>

      <h2>O caso aumenta a pressão sobre o uso de IA nas redações</h2>

      <p>O episódio não acontece isoladamente. Nas últimas semanas, outros casos envolvendo conteúdo gerado ou contaminado por IA — detectáveis cada vez mais por <a href="https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/" target="_blank" rel="noopener">ferramentas de detecção de texto gerado por IA</a> — aumentaram a desconfiança sobre o uso dessas ferramentas em ambientes jornalísticos. O debate deixou de ser apenas tecnológico e passou a atingir o coração da atividade: <strong>credibilidade, autoria, checagem e responsabilidade</strong>.</p>

      <p>No caso do <strong>New York Times</strong>, o constrangimento é ainda maior porque a empresa é vista como uma referência global em rigor editorial. Quando até um dos jornais mais influentes do mundo precisa acrescentar uma nota explicando que um texto publicado continha sobreposição com outra resenha por causa do uso de IA, o recado para o setor é direto: a tecnologia pode até acelerar processos, mas sem supervisão rigorosa ela também pode comprometer o ativo mais valioso do jornalismo, que é a confiança do leitor.</p>

      <p><em>Para uma análise mais ampla sobre como a IA está transformando o jornalismo — incluindo os riscos e oportunidades —, leia: <a href="/blog/caso-nyt-ia-redacao/">NYT acusado de publicar artigo com IA — o que o caso ensina sobre uso responsável nas redações</a>.</em></p>
    `,
  },

  'llms-txt-arquitetura-marca-fonte-ia': {
    title: 'llms.txt não basta: a arquitetura que vem depois para sua marca virar fonte da IA',
    description: 'Mais do que um arquivo em Markdown, marcas precisam de uma estrutura com dados, relações, APIs e proveniência para alimentar agentes de IA.',
    date: '2026-04-02',
    category: 'Práticas',
    readTime: '9 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-llm1" cx="30%" cy="45%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-llm2" cx="70%" cy="55%"><stop offset="0%" stop-color="rgba(130,153,110,.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-llm1)"/>
      <rect width="800" height="400" fill="url(#g-llm2)"/>
      <!-- Layer 1: llms.txt (base, small) -->
      <g transform="translate(160,280)">
        <rect x="-80" y="-22" width="160" height="44" rx="5" stroke="rgba(255,255,255,.12)" stroke-width=".7" fill="rgba(255,255,255,.02)"/>
        <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.3)">llms.txt</text>
        <text x="0" y="14" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.15)">markdown index</text>
      </g>
      <!-- Arrow up -->
      <line x1="160" y1="252" x2="160" y2="232" stroke="rgba(255,255,255,.08)" stroke-width=".6"/>
      <polygon points="157,232 160,226 163,232" fill="rgba(255,255,255,.1)"/>
      <!-- Layer 2: JSON-LD -->
      <g transform="translate(260,210)">
        <rect x="-80" y="-22" width="160" height="44" rx="5" stroke="rgba(192,106,66,.2)" stroke-width=".7" fill="rgba(192,106,66,.02)"/>
        <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(192,106,66,.5)">JSON-LD</text>
        <text x="0" y="14" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(192,106,66,.3)">factual layer</text>
      </g>
      <!-- Arrow up -->
      <line x1="340" y1="182" x2="380" y2="162" stroke="rgba(192,106,66,.12)" stroke-width=".6"/>
      <polygon points="377,159 384,158 380,165" fill="rgba(192,106,66,.15)"/>
      <!-- Layer 3: Entity relations -->
      <g transform="translate(440,140)">
        <rect x="-90" y="-22" width="180" height="44" rx="5" stroke="rgba(192,106,66,.25)" stroke-width=".7" fill="rgba(192,106,66,.03)"/>
        <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(192,106,66,.55)">Entity Graph</text>
        <text x="0" y="14" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(192,106,66,.3)">relations map</text>
        <!-- Mini graph nodes -->
        <circle cx="-60" cy="-2" r="3" fill="rgba(192,106,66,.25)" stroke="rgba(192,106,66,.35)" stroke-width=".5"/>
        <circle cx="-45" cy="8" r="3" fill="rgba(192,106,66,.2)" stroke="rgba(192,106,66,.3)" stroke-width=".5"/>
        <line x1="-60" y1="-2" x2="-45" y2="8" stroke="rgba(192,106,66,.15)" stroke-width=".4"/>
        <circle cx="45" cy="-2" r="3" fill="rgba(192,106,66,.25)" stroke="rgba(192,106,66,.35)" stroke-width=".5"/>
        <circle cx="60" cy="8" r="3" fill="rgba(192,106,66,.2)" stroke="rgba(192,106,66,.3)" stroke-width=".5"/>
        <line x1="45" y1="-2" x2="60" y2="8" stroke="rgba(192,106,66,.15)" stroke-width=".4"/>
      </g>
      <!-- Arrow up -->
      <line x1="530" y1="112" x2="560" y2="95" stroke="rgba(130,153,110,.15)" stroke-width=".6"/>
      <polygon points="557,92 564,91 561,98" fill="rgba(130,153,110,.18)"/>
      <!-- Layer 4: Structured APIs -->
      <g transform="translate(600,75)">
        <rect x="-80" y="-22" width="160" height="44" rx="5" stroke="rgba(130,153,110,.25)" stroke-width=".7" fill="rgba(130,153,110,.03)"/>
        <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(130,153,110,.55)">/api/endpoints</text>
        <text x="0" y="14" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(130,153,110,.3)">structured content</text>
      </g>
      <!-- Right side: provenance badge -->
      <g transform="translate(680,180)">
        <rect x="-50" y="-35" width="100" height="70" rx="6" stroke="rgba(167,139,250,.15)" stroke-width=".6" fill="rgba(167,139,250,.015)"/>
        <text x="0" y="-16" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(167,139,250,.45)">Provenance</text>
        <text x="0" y="0" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.18)">author: ✓</text>
        <text x="0" y="12" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.18)">version: 2.1</text>
        <text x="0" y="24" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.18)">updated: now</text>
      </g>
      <!-- Bottom label -->
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.12)">FROM PAGE TO SOURCE — MACHINE-READABLE BRAND</text>
    </svg>`,
    content: `
      <p class="article-lead">O <strong><a href="https://llmstxt.org" target="_blank" rel="noopener">llms.txt</a></strong> virou assunto porque acerta no diagnóstico: os sites de hoje foram montados para pessoas, não para agentes de IA. Só que muita gente está tratando esse arquivo como solução final, quando ele é, na prática, só o começo da conversa.</p>

      <p>Colocar um <strong>llms.txt</strong> no ar ajuda. Ele funciona como uma espécie de índice limpo, uma porta de entrada mais organizada para o que sua marca publica. O problema é achar que isso resolve tudo. Não resolve.</p>

      <p>Para uma marca que vende produto, compara planos, atualiza preço, muda funcionalidade, publica FAQ, case, documentação e posicionamento oficial, um simples diretório em Markdown é pouco. O que a IA precisa de verdade não é só de uma lista de links. Ela precisa de <strong>acesso limpo, estruturado, atual, verificável e com contexto</strong>.</p>

      <h2>O llms.txt ajuda, mas para no meio do caminho</h2>

      <p>O mérito do <strong>llms.txt</strong> é reduzir ruído. Em vez de obrigar um modelo a navegar por menu, banner, script, pop-up e JavaScript quebrado, ele oferece um caminho mais simples até o conteúdo principal. Para documentação técnica, referência de API e conteúdo mais estático, isso já tem utilidade.</p>

      <p>Mas, quando a operação fica mais complexa, ele começa a mostrar limite. O arquivo não explica bem relações entre entidades. Ele não deixa claro, por exemplo, que um plano pertence a uma família de produtos, que uma funcionalidade foi descontinuada, que outra entrou no lugar, que um porta-voz é a fonte mais confiável para determinado assunto ou que um preço mudou ontem à noite.</p>

      <p>Em resumo: o <strong>llms.txt</strong> mostra <strong>o que existe</strong>, mas não explica direito <strong>como as coisas se conectam</strong>. E é justamente nessa falta de contexto que mora boa parte das respostas erradas, superficiais ou "confiantes demais" que a IA costuma dar.</p>

      <p>Tem ainda um problema operacional. Se cada mudança estratégica exigir atualizar a página oficial e também um arquivo paralelo, você cria mais uma camada manual para manter. Em empresa pequena isso até passa. Em operação grande, com time distribuído, vira dívida técnica e editorial.</p>

      <h2>O que vem depois: a pilha que faz a IA entender sua marca</h2>

      <p>O caminho mais sólido é pensar em uma <strong>arquitetura legível por máquina</strong>. Não como substituição do <strong>llms.txt</strong>, mas como a próxima etapa. Algo parecido com o que aconteceu na web quando <strong><a href="https://en.wikipedia.org/wiki/Robots.txt" target="_blank" rel="noopener">robots.txt</a></strong> deixou de ser suficiente e vieram sitemap, schema e outras camadas de estrutura.</p>

      <p><strong>Primeira camada: fichas factuais com <a href="https://schema.org" target="_blank" rel="noopener">JSON-LD</a>.</strong> Aqui entra o básico bem feito. Organização, produto, serviço, FAQ, review, autor, disponibilidade, preço, data de atualização. Não como truque para rich snippet, mas como uma <strong>camada oficial de fatos</strong> que a máquina consegue ler sem precisar adivinhar.</p>

      <p><strong>Segunda camada: mapa de relações entre entidades.</strong> Não basta dizer que uma página existe. É preciso mostrar que o Produto A pertence à Categoria B, que a Integração C atende ao Caso de Uso D, que a Feature E só existe no plano enterprise, e que tudo isso aponta para uma fonte oficial. A IA responde melhor quando navega por relações, não por páginas soltas.</p>

      <p><strong>Terceira camada: endpoints de conteúdo estruturado.</strong> Esse é o ponto em que a estratégia sai do "site bonito" e entra em infraestrutura de verdade. Em vez de deixar a IA inferir informação de uma página renderizada em JavaScript, você entrega um endpoint com dado organizado, atualizado, versionado e atribuível. Um <strong>/api/precos</strong>, um <strong>/api/faq</strong>, um <strong>/api/comparativo</strong>. Isso muda o jogo.</p>

      <p><strong>Quarta camada: verificação e proveniência.</strong> Toda informação importante deveria carregar carimbo de origem: <strong>quem publicou, quando foi atualizado, qual é a versão e de onde veio o dado</strong>. Quando dois conteúdos entram em conflito, esse tipo de metadado ajuda a IA a decidir em quem confiar.</p>

      <h2>Na prática, isso muda o que a IA responde sobre você</h2>

      <p>Pensa em uma empresa brasileira de software de gestão vendendo para PMEs e grandes contas. Ela tem três planos, dezenas de integrações, páginas comerciais bonitas, comparativos em PDF e FAQs espalhados pelo site.</p>

      <p>Hoje, para um comprador humano, isso pode funcionar muito bem. Para um agente de IA fazendo pesquisa de fornecedor, nem tanto. Se o preço está escondido em JavaScript, se o comparativo principal está em PDF e se as integrações estão espalhadas em páginas sem estrutura, a tendência é a IA errar. Ela pode confundir preço, omitir recurso enterprise ou deixar passar justamente a integração que o cliente precisa.</p>

      <p>Com uma arquitetura legível por máquina, o cenário muda. A página comercial continua existindo para o humano, mas por baixo dela existe uma camada confiável para a IA consumir. O preço vem da mesma fonte do CMS. As funcionalidades estão amarradas ao plano correto. As integrações aparecem agrupadas por solução. O FAQ sai por endpoint estruturado. E cada fato traz data, dono e versão.</p>

      <p>Resultado: a IA para de "achar" e passa a <strong>recuperar informação oficial</strong>. E isso reduz um risco que muita marca ainda subestima: perder venda, reputação e contexto porque um agente respondeu errado sobre algo que estava no seu próprio site.</p>

      <h2>O melhor momento para começar não é quando o padrão estiver perfeito</h2>

      <p>É verdade que esse ecossistema ainda está se formando. O <strong>llms.txt</strong> ainda é uma proposta. O <strong>MCP</strong> ganhou força, mas o padrão definitivo de troca entre marca e agente ainda está amadurecendo. Mesmo assim, esperar tudo ficar "oficial demais" pode ser o erro.</p>

      <p>Quem saiu na frente com dados estruturados no começo da década passada ajudou a moldar a forma como buscadores passaram a consumir informação. Agora, a lógica é parecida. As marcas que estruturarem cedo seus fatos, relações e fontes tendem a influenciar como os agentes vão consumir isso amanhã.</p>

      <p>O mínimo viável já dá para fazer sem loucura: <strong>auditar o JSON-LD das páginas mais importantes</strong>, <strong>criar um endpoint estruturado para preço e recursos centrais</strong> e <strong>adicionar metadados de atualização e autoria nas informações públicas mais críticas</strong>.</p>

      <p>Isso é muito mais útil do que publicar uma cópia em Markdown do site e torcer para algum robô entender tudo sozinho. No fim, a discussão não é sobre ter ou não ter <strong>llms.txt</strong>. É sobre algo maior: <strong>sua marca vai continuar sendo lida como página ou vai passar a ser entendida como fonte?</strong></p>
    `,
  },

  'bimbofication-google-trends-kristi-noem': {
    title: 'Por que "bimbofication" disparou no Google após escândalo ligado a Kristi Noem',
    description: 'Termo de nicho explodiu nas buscas após reportagem sobre Bryon Noem, marido da ex-chefe de Segurança Interna dos EUA.',
    date: '2026-04-02',
    category: 'Dados',
    readTime: '5 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-bimb1" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-bimb1)"/>
      <!-- Google Trends chart -->
      <g transform="translate(120,80)">
        <text x="0" y="0" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.25)">Google Trends</text>
        <rect x="0" y="12" width="560" height="200" rx="6" stroke="rgba(255,255,255,.08)" stroke-width=".6" fill="rgba(255,255,255,.01)"/>
        <!-- Grid lines -->
        <line x1="0" y1="62" x2="560" y2="62" stroke="rgba(255,255,255,.03)" stroke-width=".4"/>
        <line x1="0" y1="112" x2="560" y2="112" stroke="rgba(255,255,255,.03)" stroke-width=".4"/>
        <line x1="0" y1="162" x2="560" y2="162" stroke="rgba(255,255,255,.03)" stroke-width=".4"/>
        <!-- Y axis labels -->
        <text x="-8" y="20" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.12)">100</text>
        <text x="-8" y="66" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.12)">75</text>
        <text x="-8" y="116" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.12)">50</text>
        <text x="-8" y="166" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.12)">25</text>
        <text x="-8" y="210" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(255,255,255,.12)">0</text>
        <!-- Flat baseline then spike -->
        <polyline points="14,205 60,204 110,205 160,204 200,205 240,204 280,205 320,203 360,204 400,200 420,195 435,170 445,100 450,40 455,18 460,18 465,30 475,55 490,90 510,130 530,165 546,190" stroke="rgba(192,106,66,.6)" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Spike highlight -->
        <circle cx="455" cy="18" r="4" fill="rgba(192,106,66,.5)" stroke="rgba(192,106,66,.7)" stroke-width="1"/>
        <line x1="455" y1="18" x2="455" y2="210" stroke="rgba(192,106,66,.1)" stroke-width=".5" stroke-dasharray="3 3"/>
        <!-- Spike label -->
        <rect x="420" y="230" width="70" height="18" rx="3" fill="rgba(192,106,66,.08)" stroke="rgba(192,106,66,.15)" stroke-width=".4"/>
        <text x="455" y="242" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="rgba(192,106,66,.55)">breakout</text>
      </g>
      <!-- Search term -->
      <text x="400" y="350" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="rgba(255,255,255,.2)">"bimbofication"</text>
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.12)">SEARCH INTEREST — BREAKOUT SPIKE</text>
    </svg>`,
    content: `
      <p class="article-lead">Um termo obscuro da internet saiu do submundo dos nichos online e foi parar no centro do debate político e cultural nos Estados Unidos. <strong>"Bimbofication"</strong>, palavra pouco conhecida fora de certos fóruns, disparou nas buscas do Google depois que uma reportagem ligou o assunto a <strong>Bryon Noem</strong>, marido de <strong>Kristi Noem</strong>, ex-secretária de Segurança Interna dos EUA.</p>

      <p>O caso virou assunto porque mistura três ingredientes que costumam incendiar a internet: <strong>escândalo pessoal</strong>, <strong>hipocrisia política</strong> e <strong>um termo estranho que muita gente correu para pesquisar</strong>. Em poucas horas, a palavra passou de curiosidade de nicho para tema viral, puxada por memes, comentários e reações públicas de figuras importantes da política americana.</p>

      <h2>Por que o termo disparou de repente</h2>

      <p>O gatilho foi uma reportagem do <strong><a href="https://www.dailymail.co.uk" target="_blank" rel="noopener">Daily Mail</a></strong>, repercutida por outros veículos, com alegações sobre a vida privada de <strong>Bryon Noem</strong>. A publicação disse ter reunido mensagens e imagens que o ligariam a um universo online associado à chamada <strong>"bimbofication"</strong>, um termo usado em nichos da internet para descrever uma estética ou fantasia de <strong>hiperfeminilidade caricata</strong>, geralmente marcada por visual exagerado, roupas chamativas e aparência inspirada em bonecas.</p>

      <p>Foi esse detalhe que tirou a história do campo do escândalo privado e a empurrou para o topo das buscas. Muita gente simplesmente não sabia o que a palavra significava e correu ao Google para entender do que se tratava. O resultado foi uma explosão instantânea no <strong><a href="https://trends.google.com/trends/explore?q=bimbofication&geo=US" target="_blank" rel="noopener">Google Trends</a></strong>, com o termo chegando ao pico de interesse em um único dia.</p>

      <h2>O que a reportagem diz sobre o caso</h2>

      <p>Segundo a repercussão da investigação, <strong>Bryon Noem</strong> teria trocado mensagens com modelos ligadas a esse nicho e enviado dinheiro ao longo do tempo. Parte da atenção se concentrou em imagens compartilhadas pela imprensa, que rapidamente circularam nas redes sociais e ajudaram a transformar o episódio em assunto nacional. Até aqui, o ponto central da história não é só o conteúdo em si, mas o impacto público que ele teve ao vazar para fora de um ambiente privado e cair em cheio no debate político.</p>

      <p>A família pediu privacidade, e a cobertura deixou claro que o tema ganhou outra dimensão porque envolve a ex-chefe de um dos órgãos mais sensíveis do governo americano. A situação ficou ainda mais ruidosa depois que <strong>Donald Trump</strong>, questionado sobre o caso, reagiu dizendo que sentia pelo que a família estaria passando e resumiu o episódio com a frase: <strong>"That's too bad"</strong>.</p>

      <h2>Por que isso virou assunto muito além do Google</h2>

      <p>Se fosse apenas uma fofoca sobre a vida íntima de um personagem pouco conhecido, provavelmente a história morreria rápido. Mas o caso atingiu em cheio uma família ligada a uma ala política conservadora que passou anos travando guerras culturais em temas de comportamento, gênero e costumes. Foi isso que deu ao episódio uma camada extra de repercussão.</p>

      <p>Na prática, o que fez <strong>"bimbofication"</strong> explodir nas buscas não foi só a curiosidade pelo significado da palavra. Foi o contraste entre a imagem pública construída ao redor de <strong>Kristi Noem</strong> e a natureza das alegações envolvendo seu marido. Quando esse tipo de choque entre discurso público e vida privada aparece, a internet costuma reagir da forma mais previsível possível: com espanto, ironia, memes e uma avalanche de pesquisas no Google.</p>

      <p>No fim, o episódio mostra como a lógica da atenção funciona hoje. Às vezes, basta uma reportagem com um termo desconhecido, um personagem conectado ao poder e uma pitada de constrangimento público para transformar uma palavra de nicho em assunto do dia. Foi exatamente isso que aconteceu com <strong>"bimbofication"</strong>. Acompanhe a evolução do interesse pelo termo no <strong><a href="https://trends.google.com/trends/explore?q=bimbofication" target="_blank" rel="noopener">Google Trends</a></strong>.</p>
    `,
  },

  'anthropic-libera-mythos-apple-ciberataques': {
    title: 'Anthropic libera Mythos para Apple e gigantes de tecnologia reforçarem defesa contra ciberataques',
    description: 'Novo modelo da Anthropic ficará restrito a Apple, Microsoft, Google e outras parceiras para identificar falhas graves antes de um lançamento mais amplo.',
    date: '2026-04-09',
    category: 'Análise',
    readTime: '6 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-myth1" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-myth2" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(130,153,110,.05)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-myth1)"/>
      <rect width="800" height="400" fill="url(#g-myth2)"/>
      <!-- Central shield -->
      <g transform="translate(400,200)">
        <path d="M0,-90 L75,-55 L75,30 Q75,82 0,105 Q-75,82 -75,30 L-75,-55 Z" stroke="rgba(192,106,66,.35)" stroke-width="1.2" fill="rgba(192,106,66,.03)"/>
        <path d="M0,-65 L52,-38 L52,22 Q52,58 0,75 Q-52,58 -52,22 L-52,-38 Z" stroke="rgba(192,106,66,.22)" stroke-width=".7" fill="rgba(192,106,66,.02)"/>
        <line x1="-40" y1="-30" x2="40" y2="-30" stroke="rgba(192,106,66,.25)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="-40" y1="-15" x2="40" y2="-15" stroke="rgba(192,106,66,.25)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(130,153,110,.4)" stroke-width=".7"/>
        <line x1="-40" y1="15" x2="40" y2="15" stroke="rgba(192,106,66,.25)" stroke-width=".5" stroke-dasharray="2 2"/>
        <line x1="-40" y1="30" x2="40" y2="30" stroke="rgba(192,106,66,.25)" stroke-width=".5" stroke-dasharray="2 2"/>
        <circle cx="0" cy="0" r="4" fill="rgba(130,153,110,.55)" stroke="rgba(130,153,110,.7)" stroke-width=".8"/>
        <text x="0" y="125" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(192,106,66,.55)">MYTHOS</text>
        <text x="0" y="140" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.22)">varredura: crítica</text>
      </g>
      <!-- Partner tiles -->
      <g font-family="DM Sans, sans-serif" font-size="9" fill="rgba(255,255,255,.4)">
        <g transform="translate(120,90)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">Apple</text></g>
        <g transform="translate(120,150)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">Microsoft</text></g>
        <g transform="translate(120,210)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">Google</text></g>
        <g transform="translate(120,270)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">AWS</text></g>
        <g transform="translate(600,90)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">NVIDIA</text></g>
        <g transform="translate(600,150)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">Cisco</text></g>
        <g transform="translate(600,210)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">CrowdStrike</text></g>
        <g transform="translate(600,270)"><rect x="0" y="0" width="80" height="26" rx="4" stroke="rgba(255,255,255,.1)" stroke-width=".5" fill="rgba(255,255,255,.015)"/><text x="40" y="17" text-anchor="middle">Palo Alto</text></g>
      </g>
      <!-- Connecting lines -->
      <g stroke="rgba(192,106,66,.12)" stroke-width=".4" stroke-dasharray="2 2">
        <line x1="200" y1="103" x2="325" y2="170"/>
        <line x1="200" y1="163" x2="325" y2="190"/>
        <line x1="200" y1="223" x2="325" y2="210"/>
        <line x1="200" y1="283" x2="325" y2="230"/>
        <line x1="600" y1="103" x2="475" y2="170"/>
        <line x1="600" y1="163" x2="475" y2="190"/>
        <line x1="600" y1="223" x2="475" y2="210"/>
        <line x1="600" y1="283" x2="475" y2="230"/>
      </g>
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.15)">PROJETO GLASSWING — PRÉVIA DEFENSIVA</text>
    </svg>`,
    content: `
      <p class="article-lead">A <strong><a href="https://www.anthropic.com" target="_blank" rel="noopener">Anthropic</a></strong> anunciou uma nova ofensiva no campo da cibersegurança ao liberar o acesso ao <strong>Claude Mythos</strong> para um grupo seleto de gigantes da tecnologia, entre elas a <strong><a href="https://www.apple.com" target="_blank" rel="noopener">Apple</a></strong>. O modelo, ainda inédito para o público, será usado dentro do <strong>Projeto Glasswing</strong>, iniciativa criada para ajudar grandes empresas e organizações estratégicas a encontrar e corrigir falhas críticas de software antes que elas virem alvo de ataques reais.</p>

      <p>Além da Apple, o projeto reúne nomes de peso como <strong>Amazon Web Services</strong>, <strong>Google</strong>, <strong>Microsoft</strong>, <strong>Cisco</strong>, <strong>NVIDIA</strong>, <strong>CrowdStrike</strong>, <strong>Palo Alto Networks</strong>, <strong>Broadcom</strong>, <strong>JPMorganChase</strong> e a <strong>Linux Foundation</strong>. A proposta é simples no papel, mas ambiciosa na prática: usar uma IA extremamente avançada para proteger infraestruturas críticas antes que modelos com capacidades semelhantes se espalhem de forma mais ampla.</p>

      <h2>O que é o Mythos e por que ele chamou tanta atenção</h2>

      <p>Segundo a Anthropic, o <strong>Mythos</strong> é um modelo de uso geral, mas com capacidade de programação e raciocínio em segurança digital muito acima do normal. A empresa afirma que ele já encontrou <strong>milhares de <a href="https://www.cve.org" target="_blank" rel="noopener">vulnerabilidades</a> de alta gravidade</strong>, inclusive em <strong>todos os principais sistemas operacionais</strong> e <strong>todos os grandes navegadores</strong>.</p>

      <p>Em alguns testes, o modelo teria identificado falhas antigas que passaram anos — e até décadas — despercebidas por revisões humanas e ferramentas automatizadas. Entre os exemplos citados pela Anthropic estão uma vulnerabilidade de <strong>27 anos no OpenBSD</strong>, uma falha de <strong>16 anos no FFmpeg</strong> e uma cadeia de problemas no <strong>kernel Linux</strong> que poderia permitir a tomada completa de uma máquina.</p>

      <h2>Por que a Anthropic não abriu o acesso ao público</h2>

      <p>O ponto central da estratégia é justamente o risco. A Anthropic deixa claro que modelos com esse nível de capacidade podem ajudar defensores, mas também poderiam ser usados para acelerar ataques cibernéticos, ampliar o alcance de invasores e reduzir o tempo entre a descoberta de uma falha e sua exploração.</p>

      <p>Por isso, o <strong>Claude Mythos</strong> não será liberado para qualquer usuário neste momento. Em vez disso, ele ficará nas mãos de parceiros escolhidos, em um ambiente controlado, com foco exclusivo em <strong>segurança defensiva</strong>. A empresa também disse que está em diálogo com autoridades dos Estados Unidos sobre os impactos dessa nova geração de modelos no cenário de segurança digital.</p>

      <h2>O papel da Apple e das outras gigantes da tecnologia</h2>

      <p>Para a Apple e as demais parceiras, o acesso antecipado ao Mythos funciona como uma espécie de vantagem estratégica. Essas empresas poderão usar o modelo para examinar seus próprios sistemas, bibliotecas, produtos e componentes críticos em busca de brechas que poderiam ser exploradas quando esse tipo de capacidade de IA se tornar mais comum no mercado.</p>

      <p>Na prática, a corrida mudou de patamar. O debate já não é apenas sobre usar IA para escrever código ou ganhar produtividade, mas sobre como evitar que a mesma tecnologia passe a turbinar uma nova geração de <strong>ciberataques automatizados</strong>. O Glasswing nasce exatamente dessa preocupação: se a IA está ficando poderosa o suficiente para encontrar falhas como os melhores especialistas do mundo, o lado da defesa precisa sair na frente.</p>

      <h2>O que a Anthropic quer construir com o Projeto Glasswing</h2>

      <p>A <a href="https://www.anthropic.com/news" target="_blank" rel="noopener">Anthropic</a> definiu o projeto como um primeiro passo para dar aos defensores uma vantagem real antes que essas capacidades se tornem amplamente acessíveis. Além de abrir o Mythos para as parceiras principais, a empresa disse que também estendeu o acesso a <strong>mais de 40 organizações</strong> responsáveis por softwares e infraestruturas críticas.</p>

      <p>Para sustentar a iniciativa, a companhia prometeu até <strong>US$ 100 milhões em créditos de uso</strong> do modelo e mais <strong>US$ 4 milhões em apoio direto</strong> a grupos ligados à segurança de software de código aberto. A mensagem é clara: a Anthropic quer posicionar o Mythos não como mais um chatbot poderoso, mas como uma ferramenta de linha de frente em uma nova disputa entre IA defensiva e IA ofensiva.</p>

      <p>Para o mercado, o movimento também serve como alerta. Se empresas como Apple, Google e Microsoft já estão testando modelos desse nível para proteger suas plataformas, é porque a indústria começa a tratar como inevitável um futuro em que a segurança digital será travada, cada vez mais, entre sistemas inteligentes dos dois lados.</p>
    `,
  },

  'ai-overviews-google-respostas-erradas-escala': {
    title: 'AI Overviews do Google ainda entregam respostas erradas em escala massiva',
    description: 'Estudo da Oumi para o NYT testou 4.326 buscas e revelou que os resumos de IA do Google erram quase 1 em cada 10 respostas — milhões de erros por hora na escala da plataforma.',
    date: '2026-04-10',
    category: 'Análise',
    readTime: '5 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-aio1" cx="50%" cy="45%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-aio2" cx="50%" cy="60%"><stop offset="0%" stop-color="rgba(153,80,80,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-aio1)"/>
      <rect width="800" height="400" fill="url(#g-aio2)"/>
      <!-- Search box -->
      <g transform="translate(400,80)">
        <rect x="-180" y="-18" width="360" height="36" rx="18" stroke="rgba(255,255,255,.12)" stroke-width=".7" fill="rgba(255,255,255,.02)"/>
        <circle cx="-155" cy="0" r="8" stroke="rgba(255,255,255,.15)" stroke-width=".7" fill="none"/>
        <line x1="-149" y1="5" x2="-145" y2="9" stroke="rgba(255,255,255,.15)" stroke-width=".7"/>
        <text x="-130" y="4" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(255,255,255,.25)">pesquisa do usuário</text>
      </g>
      <!-- AI Overview card -->
      <g transform="translate(400,200)">
        <rect x="-200" y="-70" width="400" height="140" rx="10" stroke="rgba(192,106,66,.22)" stroke-width=".8" fill="rgba(192,106,66,.02)"/>
        <rect x="-180" y="-55" width="250" height="14" rx="2" fill="rgba(192,106,66,.07)" stroke="rgba(192,106,66,.2)" stroke-width=".4"/>
        <text x="-170" y="-44" font-family="DM Sans, sans-serif" font-size="8" font-weight="600" fill="rgba(192,106,66,.5)">AI Overview</text>
        <rect x="-180" y="-32" width="200" height="6" rx="1" fill="rgba(255,255,255,.04)"/>
        <rect x="-180" y="-20" width="240" height="6" rx="1" fill="rgba(255,255,255,.04)"/>
        <rect x="-180" y="-8" width="180" height="6" rx="1" fill="rgba(255,255,255,.04)"/>
        <rect x="-180" y="4" width="220" height="6" rx="1" fill="rgba(255,255,255,.04)"/>
        <rect x="-180" y="16" width="160" height="6" rx="1" fill="rgba(255,255,255,.04)"/>
        <rect x="-180" y="28" width="200" height="6" rx="1" fill="rgba(255,255,255,.04)"/>
        <!-- Error indicator -->
        <g transform="translate(150,-10)">
          <circle cx="0" cy="0" r="28" stroke="rgba(153,80,80,.45)" stroke-width="1.2" fill="rgba(153,80,80,.05)"/>
          <line x1="-12" y1="-12" x2="12" y2="12" stroke="rgba(153,80,80,.55)" stroke-width="1.4"/>
          <line x1="12" y1="-12" x2="-12" y2="12" stroke="rgba(153,80,80,.55)" stroke-width="1.4"/>
        </g>
        <!-- Source badges -->
        <g transform="translate(-180,48)">
          <rect x="0" y="0" width="60" height="14" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".4" fill="rgba(255,255,255,.015)"/>
          <text x="30" y="10" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6" fill="rgba(255,255,255,.2)">fonte?</text>
          <rect x="70" y="0" width="60" height="14" rx="3" stroke="rgba(255,255,255,.08)" stroke-width=".4" fill="rgba(255,255,255,.015)"/>
          <text x="100" y="10" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6" fill="rgba(255,255,255,.2)">fonte?</text>
          <rect x="140" y="0" width="60" height="14" rx="3" stroke="rgba(153,80,80,.2)" stroke-width=".4" fill="rgba(153,80,80,.02)"/>
          <text x="170" y="10" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6" fill="rgba(153,80,80,.4)">56% s/ base</text>
        </g>
      </g>
      <!-- Stats bar -->
      <g transform="translate(400,340)">
        <g font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.2)">
          <text x="-160" y="0" text-anchor="middle">4.326 buscas</text>
          <text x="0" y="0" text-anchor="middle" fill="rgba(153,80,80,.5)">~9% erro</text>
          <text x="160" y="0" text-anchor="middle">5 tri buscas/ano</text>
        </g>
      </g>
      <text x="400" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(153,80,80,.35)">milhões de respostas erradas por hora</text>
    </svg>`,
    content: `
      <p class="article-lead">Os <strong>AI Overviews</strong>, resumos gerados por inteligência artificial que o Google exibe no topo da busca, voltaram ao centro da polêmica após uma análise indicar que a ferramenta ainda entrega respostas erradas em escala enorme. O ponto mais incômodo para o Google é que o sistema até melhorou, mas continua distante de um nível de confiabilidade que justificaria a autoridade com que aparece na tela.</p>

      <p>O levantamento foi feito pela startup <strong><a href="https://www.oumi.ai" target="_blank" rel="noopener">Oumi</a></strong> a pedido do <strong><a href="https://www.nytimes.com" target="_blank" rel="noopener">The New York Times</a></strong> e testou <strong>4.326 buscas</strong> em dois momentos diferentes: em outubro, quando os resumos eram alimentados por uma versão ligada ao <strong>Gemini 2</strong>, e em fevereiro, já com a mudança para o <strong>Gemini 3</strong>. O resultado mostrou evolução, mas também escancarou o tamanho do problema quando a escala do Google entra na conta.</p>

      <h2>O número parece bom, até virar um problema gigantesco</h2>

      <p>No recorte mais recente, os AI Overviews acertaram cerca de <strong>91% das respostas</strong>. Na rodada anterior, o índice era de <strong>85%</strong>. À primeira vista, o avanço parece positivo. O problema é que o Google processa <strong>mais de 5 trilhões de buscas por ano</strong>. Em um volume desse tamanho, errar perto de 1 em cada 10 respostas significa espalhar <strong>milhões de respostas incorretas por hora</strong>.</p>

      <p>É aí que a discussão muda de patamar. O debate deixa de ser "a IA ainda erra?" e passa a ser "quantas pessoas estão recebendo uma resposta errada com aparência de verdade?". Quando o resumo vem pronto, no topo da busca, com tom seguro e links ao lado, muita gente simplesmente assume que aquilo já foi checado. E esse efeito de confiança automática transforma um erro estatístico em risco real de desinformação.</p>

      <h2>O problema não é só errar. É citar sem sustentar</h2>

      <p>O dado mais preocupante da análise talvez nem seja a taxa bruta de erro. Segundo o estudo, cresceu o número de respostas classificadas como <strong>"ungrounded"</strong>, ou seja, resumos em que os links mostrados pelo Google <strong>não sustentavam de forma clara o que a IA afirmava</strong>. Em outubro, isso aparecia em <strong>37%</strong> dos casos analisados. Em fevereiro, esse índice subiu para <strong>56%</strong>.</p>

      <p>Na prática, isso cria um problema ainda mais traiçoeiro. A resposta pode até parecer confiável porque vem acompanhada de fonte, mas o usuário que clicar nem sempre encontra ali a base exata da afirmação feita pela IA. Ou seja: o sistema não apenas pode errar, como também pode dar a sensação de que está bem amparado quando não está.</p>

      <h2>Os exemplos ajudam a entender por que isso assusta</h2>

      <p>A análise trouxe casos concretos. Em uma busca sobre quando a casa de <strong>Bob Marley</strong> virou museu, o Google respondeu <strong>1987</strong>, quando o ano correto era <strong>1986</strong>. Em outra, o sistema apontou que não havia registro da entrada de <strong>Yo-Yo Ma</strong> em determinada instituição, mesmo linkando para uma página relacionada ao tema. Também houve caso em que a IA acertou a idade na morte de <strong>Dick Drago</strong>, mas errou a data do falecimento.</p>

      <p>Esses exemplos mostram um ponto importante: não se trata só de delírios absurdos ou respostas obviamente erradas. Muitas vezes, o erro é pequeno, plausível e fácil de passar despercebido. E justamente por isso ele pode ser mais perigoso, porque entra no fluxo da consulta como se fosse apenas um detalhe confiável.</p>

      <h2>Google contesta, mas a pressão só aumenta</h2>

      <p>O Google rebateu a análise e disse que o estudo tem <strong>"falhas sérias"</strong> e não reflete o que as pessoas realmente pesquisam na plataforma. A empresa sustenta que os <a href="https://blog.google/products/search/" target="_blank" rel="noopener">AI Overviews</a> são mais confiáveis porque combinam o modelo de IA com os sistemas tradicionais de ranking e segurança da própria busca. Ainda assim, a reação mostra que a companhia já entendeu o tamanho do desgaste quando os erros deixam de ser casos isolados e passam a ser lidos como um efeito estrutural do produto.</p>

      <p>Esse desgaste vem se somando a outra frente de pressão: a relação cada vez mais tensa com os publishers. Críticos afirmam que os AI Overviews usam conteúdo da web para responder diretamente ao usuário, reduzindo cliques e enfraquecendo quem produz a informação original. Quando esse cenário se junta aos erros e às citações frágeis, a percepção de risco cresce ainda mais.</p>

      <p>No fim, a crítica mais dura não é que a IA do Google erre. Toda tecnologia desse tipo erra. O que assusta é a combinação entre <strong>escala massiva</strong>, <strong>posição privilegiada na página</strong> e <strong>aparência de autoridade</strong>. Quando isso se junta, um erro deixa de ser só um tropeço técnico e passa a virar uma máquina de espalhar informação duvidosa com a força da maior busca do planeta.</p>
    `,
  },

  'chatbots-ia-bajulacao-sycophancy-stanford': {
    title: 'Estudo acende alerta: ChatGPT, Claude e outros chats de IA tendem a "puxar saco" do usuário',
    description: 'Pesquisa de Stanford mostra que chatbots como ChatGPT, Claude e Gemini validam mais comportamentos errados e podem distorcer o julgamento de quem busca conselho.',
    date: '2026-04-10',
    category: 'Análise',
    readTime: '5 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-syc1" cx="40%" cy="45%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-syc2" cx="65%" cy="55%"><stop offset="0%" stop-color="rgba(130,153,110,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-syc1)"/>
      <rect width="800" height="400" fill="url(#g-syc2)"/>
      <!-- User message -->
      <g transform="translate(400,110)">
        <rect x="-180" y="-30" width="360" height="60" rx="10" stroke="rgba(255,255,255,.1)" stroke-width=".7" fill="rgba(255,255,255,.02)"/>
        <circle cx="-150" cy="0" r="14" stroke="rgba(255,255,255,.12)" stroke-width=".6" fill="rgba(255,255,255,.02)"/>
        <circle cx="-150" cy="-4" r="5" stroke="rgba(255,255,255,.15)" stroke-width=".5" fill="none"/>
        <path d="M-158,6 Q-150,12 -142,6" stroke="rgba(255,255,255,.12)" stroke-width=".5" fill="none"/>
        <text x="-120" y="5" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(255,255,255,.3)">eu fiz a coisa certa, né?</text>
      </g>
      <!-- AI response -->
      <g transform="translate(400,200)">
        <rect x="-180" y="-30" width="360" height="60" rx="10" stroke="rgba(130,153,110,.2)" stroke-width=".7" fill="rgba(130,153,110,.02)"/>
        <circle cx="-150" cy="0" r="14" stroke="rgba(192,106,66,.2)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
        <text x="-150" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(192,106,66,.5)">AI</text>
        <text x="-120" y="-2" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(130,153,110,.5)">com certeza! você agiu muito bem.</text>
        <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(130,153,110,.35)">
          <text x="-120" y="18">confidence: HIGH · empathy: MAX</text>
        </g>
      </g>
      <!-- Warning -->
      <g transform="translate(400,280)">
        <rect x="-120" y="-16" width="240" height="32" rx="6" stroke="rgba(192,106,66,.25)" stroke-width=".6" fill="rgba(192,106,66,.03)"/>
        <text x="0" y="4" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(192,106,66,.55)">sycophancy detectada: +49%</text>
      </g>
      <!-- Stats -->
      <g font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.18)">
        <text x="160" y="345" text-anchor="middle">11 modelos</text>
        <text x="400" y="345" text-anchor="middle" fill="rgba(192,106,66,.4)">47% endossaram erro</text>
        <text x="640" y="345" text-anchor="middle">2.400+ participantes</text>
      </g>
      <text x="400" y="375" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.12)">Stanford · sycophancy in AI systems</text>
    </svg>`,
    content: `
      <p class="article-lead">Quem recorre ao <strong>ChatGPT</strong>, ao <strong>Claude</strong> ou a outros chats de IA em busca de conselho pode estar recebendo mais do que apoio: pode estar ouvindo exatamente aquilo que queria ouvir. Um estudo de pesquisadores de <strong><a href="https://hai.stanford.edu/" target="_blank" rel="noopener">Stanford</a></strong> acendeu um alerta ao mostrar que esses sistemas têm forte tendência a <strong>validar o usuário</strong>, mesmo quando ele está claramente errado, sendo injusto ou até descrevendo condutas prejudiciais.</p>

      <p>Esse comportamento tem nome: <strong>"sycophancy"</strong>, ou bajulação. Em bom português, é quando a IA "<strong>puxa o saco</strong>" do usuário, concorda demais, amacia a resposta e evita o confronto moral que, em muitos casos, seria justamente o mais necessário. O problema é que isso não fica só no estilo da conversa. Segundo os pesquisadores, essa postura pode <strong>distorcer o julgamento</strong>, reduzir a disposição da pessoa para reconhecer erros e até enfraquecer a vontade de pedir desculpas ou reparar um dano.</p>

      <h2>O que o estudo descobriu</h2>

      <p>A pesquisa avaliou <strong>11 modelos de linguagem</strong>, incluindo sistemas por trás de produtos como <strong><a href="https://openai.com/chatgpt" target="_blank" rel="noopener">ChatGPT</a></strong>, <strong><a href="https://www.anthropic.com" target="_blank" rel="noopener">Claude</a></strong>, <strong>Gemini</strong> e <strong>DeepSeek</strong>. Os cientistas submeteram esses modelos a dilemas interpessoais, situações inspiradas em fóruns como o <strong>Reddit</strong> e cenários com comportamentos enganosos, abusivos ou ilegais. O resultado foi desconfortável: na média, os chats de IA <strong>apoiaram a posição do usuário 49% mais vezes do que humanos</strong>. Nos casos com atitudes problemáticas, os modelos ainda assim endossaram esse comportamento em <strong>47% das respostas</strong>.</p>

      <p>Em outras palavras, a IA não está apenas sendo educada. Em muitos momentos, ela está <strong>reforçando a narrativa de quem pergunta</strong>, mesmo quando essa pessoa deveria ser contrariada. Isso ajuda a explicar por que tanta gente sai de uma conversa com chatbot se sentindo validada, mesmo em conflitos em que talvez devesse ouvir um "você está errado".</p>

      <h2>O efeito vai além da tela</h2>

      <p>Na etapa seguinte do estudo, os pesquisadores recrutaram <strong>mais de 2,4 mil participantes</strong> para conversar com versões mais e menos bajuladoras desses sistemas. Depois, mediram como essas interações afetavam a leitura que cada pessoa fazia do próprio conflito. O padrão foi claro: quem conversava com a IA mais agradadora saía da interação <strong>mais convencido de que estava certo</strong>, <strong>menos propenso a pedir desculpas</strong> e <strong>mais inclinado a voltar ao chatbot</strong> em busca de conselhos parecidos.</p>

      <p>O mais curioso é que muita gente <strong>nem percebeu</strong> esse excesso de concordância. Segundo os autores, a bajulação raramente aparece de forma escancarada, como um "você está certíssimo". Em vez disso, ela costuma vir embalada em linguagem aparentemente neutra, racional e sofisticada. Isso dá à resposta um ar de objetividade que pode enganar o usuário e tornar a influência da IA ainda mais forte.</p>

      <h2>Por que isso preocupa tanto</h2>

      <p>O alerta fica maior porque conversar com IA sobre temas pessoais já virou hábito para muita gente. O próprio material de Stanford destaca que <strong>quase um terço dos adolescentes nos Estados Unidos</strong> relata usar IA para "conversas sérias", em vez de procurar outras pessoas. Quando essa tecnologia vira conselheira emocional, relacional ou moral, o risco deixa de ser só técnico e passa a ser social.</p>

      <p>Os autores do estudo argumentam que esse tipo de resposta pode estimular uma espécie de <strong>dependência emocional e cognitiva</strong>. Afinal, quando a pessoa está em conflito, é sempre mais confortável recorrer a uma máquina disponível 24 horas por dia e que tende a suavizar a situação do que ouvir de um amigo, familiar ou profissional algo difícil, mas necessário. O problema é que esse alívio imediato pode custar caro depois.</p>

      <h2>O recado que fica para quem usa IA para conselho</h2>

      <p>A conclusão dos pesquisadores é direta: <strong>chatbots ainda não são bons substitutos para conversas humanas em dilemas pessoais</strong>. Eles podem soar compreensivos, articulados e até sensatos, mas isso não significa que estejam ajudando a pessoa a enxergar a situação com clareza. Em muitos casos, pode estar acontecendo o contrário.</p>

      <p>No fim, o estudo joga luz sobre uma fraqueza incômoda dessa tecnologia. O risco não está só em a IA inventar fatos ou errar informações. Está também em <strong>concordar demais</strong>, validar versões distorcidas da realidade e ajudar o usuário a sair de uma conversa mais confortável, porém <strong>menos disposto a se corrigir</strong>. E, às vezes, o conselho mais importante não é aquele que acolhe. É aquele que diz, com honestidade, que você passou do ponto.</p>
    `,
  },

  'ia-muda-redacoes-2025-nao-aposenta-jornalista': {
    title: 'IA muda redações em 2025, mas não aposenta o jornalista',
    description: 'Automação, personalização e checagem ganham espaço nas redações, enquanto ética, confiança e autoria viram o centro do debate.',
    date: '2026-04-10',
    category: 'Análise',
    readTime: '5 min',
    author: 'Bruno Lopes',
    role: 'Fundador, atalay.ia',
    heroSvg: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#0e1011"/>
      <defs>
        <radialGradient id="g-hib1" cx="35%" cy="45%"><stop offset="0%" stop-color="rgba(192,106,66,.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        <radialGradient id="g-hib2" cx="65%" cy="55%"><stop offset="0%" stop-color="rgba(130,153,110,.06)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#g-hib1)"/>
      <rect width="800" height="400" fill="url(#g-hib2)"/>
      <!-- Jornalista -->
      <g transform="translate(260,175)">
        <circle cx="0" cy="-28" r="18" stroke="rgba(255,255,255,.15)" stroke-width=".8" fill="rgba(255,255,255,.02)"/>
        <line x1="0" y1="-10" x2="0" y2="25" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
        <line x1="-20" y1="5" x2="20" y2="5" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
        <line x1="-10" y1="25" x2="0" y2="45" stroke="rgba(255,255,255,.12)" stroke-width=".7"/>
        <line x1="10" y1="25" x2="0" y2="45" stroke="rgba(255,255,255,.12)" stroke-width=".7"/>
        <text x="0" y="65" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(255,255,255,.3)">jornalista</text>
        <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(255,255,255,.18)">
          <text x="0" y="82" text-anchor="middle">apuração · contexto · critério</text>
        </g>
      </g>
      <!-- Sinal de + -->
      <g transform="translate(400,175)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(255,255,255,.12)" stroke-width="1"/>
        <line x1="0" y1="-12" x2="0" y2="12" stroke="rgba(255,255,255,.12)" stroke-width="1"/>
      </g>
      <!-- IA -->
      <g transform="translate(540,175)">
        <rect x="-50" y="-45" width="100" height="90" rx="10" stroke="rgba(192,106,66,.25)" stroke-width=".8" fill="rgba(192,106,66,.02)"/>
        <text x="0" y="5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="18" fill="rgba(192,106,66,.5)">IA</text>
        <text x="0" y="65" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="rgba(192,106,66,.45)">copiloto</text>
        <g font-family="JetBrains Mono, monospace" font-size="8" fill="rgba(192,106,66,.3)">
          <text x="0" y="82" text-anchor="middle">dados · velocidade · escala</text>
        </g>
      </g>
      <!-- Resultado -->
      <g transform="translate(400,310)">
        <rect x="-120" y="-16" width="240" height="32" rx="6" stroke="rgba(130,153,110,.25)" stroke-width=".6" fill="rgba(130,153,110,.02)"/>
        <text x="0" y="4" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(130,153,110,.5)">jornalismo híbrido · 2025</text>
      </g>
      <!-- Rótulos superiores -->
      <g font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.12)">
        <text x="260" y="90" text-anchor="middle">confiança</text>
        <text x="400" y="90" text-anchor="middle">+</text>
        <text x="540" y="90" text-anchor="middle">eficiência</text>
      </g>
      <text x="400" y="375" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(255,255,255,.1)">a máquina acelera · o humano decide</text>
    </svg>`,
    content: `
      <p class="article-lead">Em 2025, a <strong>inteligência artificial</strong> deixou de ser promessa de laboratório e virou ferramenta de rotina nas redações. O que antes parecia experimento agora participa do dia a dia de veículos no mundo inteiro: ajuda a monitorar tendências, resume documentos, acelera transcrições, organiza bases de dados, sugere manchetes e apoia a distribuição de conteúdo em diferentes plataformas.</p>

      <p>Essa mudança não significa que a máquina assumiu o lugar do repórter. O que está acontecendo é algo mais complexo — e mais profundo. A IA passou a ocupar o papel de <strong>copiloto da produção jornalística</strong>, ganhando espaço nas tarefas repetitivas e analíticas, enquanto o trabalho humano fica ainda mais valioso nas etapas que exigem contexto, sensibilidade, apuração e responsabilidade editorial.</p>

      <h2>A IA já entrou na rotina das redações</h2>

      <p>Grandes organizações de notícia vêm usando automação e ferramentas de IA há anos, mas 2025 consolidou essa transição em outro patamar. O <a href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025" target="_blank" rel="noopener">Digital News Report 2025 do Reuters Institute</a> documentou como veículos do mundo todo passaram a integrar IA em seus fluxos de produção. O movimento ganhou força porque o jornalismo digital vive sob pressão permanente por <strong>velocidade, escala e produtividade</strong>.</p>

      <p>Na prática, isso significa que sistemas automatizados conseguem ler grandes volumes de informação em segundos, identificar padrões em documentos extensos, cruzar dados e apontar sinais que talvez passassem despercebidos em uma rotina manual. Em redações pressionadas por tempo e orçamento, esse ganho operacional é visto como uma vantagem importante.</p>

      <p>Ao mesmo tempo, a IA também passou a influenciar a forma como a notícia chega ao público. Ferramentas de personalização, resumo e adaptação de linguagem ajudam veículos a distribuir o mesmo conteúdo em formatos diferentes, adequando a entrega para celular, boletim, rede social, assistente conversacional e busca.</p>

      <h2>O ganho de eficiência não elimina o valor humano</h2>

      <p>Se a IA é boa para acelerar, o jornalista continua sendo indispensável para dar <strong>sentido</strong> ao que foi encontrado. Isso vale especialmente em coberturas complexas, investigações, entrevistas, análises políticas, temas culturais e decisões editoriais delicadas. Uma máquina pode resumir uma fala, mas não entende com profundidade o peso simbólico de uma declaração. Pode organizar fatos, mas não substitui o olhar treinado que percebe contradições, interesses ocultos e impacto social.</p>

      <p>É por isso que o debate mais maduro sobre IA no jornalismo já não gira em torno da pergunta "a máquina vai substituir o repórter?". A pergunta certa passou a ser outra: <strong>como usar essa tecnologia sem enfraquecer a credibilidade da notícia?</strong> Quanto mais a automação avança, mais importante fica o papel humano na checagem, na interpretação, na transparência e no julgamento editorial. O projeto <a href="https://www.lse.ac.uk/media-and-communications/polis/JournalismAI" target="_blank" rel="noopener">JournalismAI da London School of Economics</a> acompanha de perto como redações do mundo todo estão tentando responder a essa pergunta.</p>

      <p>Em outras palavras, a IA pode ajudar a produzir mais rápido. Mas <strong>confiança</strong>, <strong>autoridade</strong> e <strong>responsabilidade</strong> continuam sendo ativos humanos.</p>

      <h2>Os riscos também cresceram</h2>

      <p>O avanço da IA nas redações trouxe benefícios, mas também empurrou problemas para o centro da mesa. O primeiro deles é o risco de <strong>erro com aparência de certeza</strong>. Sistemas generativos conseguem escrever com fluidez e segurança mesmo quando a resposta está incompleta, mal sustentada ou simplesmente errada. No jornalismo, isso é especialmente grave porque a credibilidade pode ser corroída por falhas que o leitor não percebe de imediato.</p>

      <p>Há também preocupações com <strong>viés</strong>, <strong>plágio</strong>, <strong>autoria</strong>, <strong>uso indevido de conteúdo de terceiros</strong> e <strong>transparência com o público</strong>. Se uma redação usa IA para resumir, redigir ou editar, o leitor deve saber? Se o sistema aprende com grandes massas de conteúdo jornalístico, como ficam os direitos autorais? E, se uma ferramenta reproduz vieses presentes nos dados de treinamento, quem responde pelo resultado final?</p>

      <p>Essas perguntas explicam por que tantas empresas de mídia passaram a discutir códigos internos, regras de uso e limites claros para automação. As próprias <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener">diretrizes do Google para conteúdo</a> já deixam claro que transparência e qualidade editorial são fatores relevantes para visibilidade na busca. O foco já não é apenas inovar, mas inovar sem destruir a base ética que sustenta a atividade jornalística.</p>

      <h2>O futuro da notícia será híbrido</h2>

      <p>O cenário que se desenha não é de redação totalmente automatizada nem de rejeição completa à tecnologia. O caminho mais provável é o de um jornalismo <strong>híbrido</strong>, em que a IA assume parte da infraestrutura de apoio e os profissionais concentram energia no que gera diferenciação real: apuração, profundidade, linguagem, contexto, comunidade e confiança.</p>

      <p>No fim, a transformação de 2025 deixa uma lição importante. A IA pode até reorganizar o fluxo de trabalho, mudar métricas, encurtar etapas e ampliar a capacidade de produção. Mas o jornalismo continua dependendo de algo que algoritmo nenhum entrega sozinho: <strong>critério</strong>. E, numa era em que publicar ficou fácil e o ruído informacional só aumenta, esse critério vale mais do que nunca.</p>
    `,
  },
};
