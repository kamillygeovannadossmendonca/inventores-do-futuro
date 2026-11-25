const SHAPE_ICONS = {
  cubo: `<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 35,13 20,21 5,13" fill="#FF8585" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="5,13 20,21 20,35 5,27" fill="#FF5D5D" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="35,13 20,21 20,35 35,27" fill="#D93B3B" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>`,
  esfera: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" fill="#3AA0FF" stroke="#1B2559" stroke-width="2.6"/><ellipse cx="15" cy="14" rx="4.5" ry="2.8" transform="rotate(-28 15 14)" fill="#BFE1FF"/></svg>`,
  cilindro: `<svg viewBox="0 0 40 40" fill="none"><path d="M8 11V29C8 32.3 13.4 35 20 35C26.6 35 32 32.3 32 29V11" fill="#2FCB8B" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><ellipse cx="20" cy="11" rx="12" ry="5" fill="#7BE8BA" stroke="#1B2559" stroke-width="2.6"/></svg>`,
  cone: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 6L7 30C9.8 33.2 14.5 35 20 35C25.5 35 30.2 33.2 33 30L20 6Z" fill="#FFB020" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>`,
  piramide: `<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 7,29 22,35" fill="#9B6BFF" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="20,5 22,35 34,27" fill="#7644E8" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>`
};

function makePart(geo, color, pos, rot = [0, 0, 0]) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.08 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  const edges = new THREE.EdgesGeometry(geo, 24);
  mesh.add(new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x1b2559, transparent: true, opacity: 0.35 })));
  return mesh;
}

const OBJECT_BUILDERS = {
  sorvete() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.ConeGeometry(0.8, 1.8, 24), 0xf4a261, [0, -0.55, 0], [Math.PI, 0, 0]));
    g.add(makePart(new THREE.SphereGeometry(0.75, 24, 20), 0xff6b8b, [0, 0.55, 0]));
    g.add(makePart(new THREE.SphereGeometry(0.58, 24, 20), 0x6ee7b7, [0, 1.32, 0]));
    return g;
  },
  lapis() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.CylinderGeometry(0.45, 0.45, 2.1, 24), 0xffc93c, [0, -0.2, 0]));
    g.add(makePart(new THREE.ConeGeometry(0.45, 0.75, 24), 0xf5cba7, [0, 1.22, 0]));
    g.add(makePart(new THREE.ConeGeometry(0.16, 0.28, 18), 0x1b2559, [0, 1.46, 0]));
    return g;
  },
  casinha() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.BoxGeometry(1.55, 1.35, 1.55), 0xffd166, [0, -0.45, 0]));
    g.add(makePart(new THREE.ConeGeometry(1.32, 1.1, 4), 0xff5d5d, [0, 0.78, 0], [0, Math.PI / 4, 0]));
    return g;
  },
  foguete() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.CylinderGeometry(0.55, 0.55, 1.75, 24), 0xf8f9fa, [0, -0.1, 0]));
    g.add(makePart(new THREE.ConeGeometry(0.55, 0.85, 24), 0xff5d5d, [0, 1.2, 0]));
    g.add(makePart(new THREE.SphereGeometry(0.28, 18, 18), 0x3aa0ff, [0, 0.2, 0.48]));
    return g;
  },
  bonecoNeve() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.SphereGeometry(0.9, 24, 20), 0xffffff, [0, -0.65, 0]));
    g.add(makePart(new THREE.SphereGeometry(0.62, 24, 20), 0xffffff, [0, 0.62, 0]));
    g.add(makePart(new THREE.ConeGeometry(0.16, 0.65, 16), 0xff7b00, [0, 0.62, 0.82], [Math.PI / 2, 0, 0]));
    return g;
  },
  torre() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.BoxGeometry(1.4, 1.4, 1.4), 0x3aa0ff, [0, -0.45, 0]));
    g.add(makePart(new THREE.CylinderGeometry(0.5, 0.5, 1.1, 24), 0x2fcb8b, [0, 0.8, 0]));
    return g;
  },
  pirulito() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.CylinderGeometry(0.14, 0.14, 1.4, 18), 0xf8f9fa, [0, -0.65, 0]));
    g.add(makePart(new THREE.SphereGeometry(0.85, 24, 20), 0x9b6bff, [0, 0.55, 0]));
    return g;
  },
  chapeuFesta() {
    const g = new THREE.Group();
    g.add(makePart(new THREE.ConeGeometry(0.95, 1.85, 24), 0xff70a6, [0, -0.1, 0]));
    g.add(makePart(new THREE.SphereGeometry(0.24, 18, 18), 0xffc93c, [0, 0.92, 0]));
    return g;
  }
};

const CHALLENGES = [
  {
    parts: [
      { id: 'cone', label: 'Cone', color: 0xf4a261 },
      { id: 'esfera', label: 'Esfera', color: 0xff6b8b }
    ],
    title: 'Cone + Esfera',
    desc: 'Qual objeto 3D combina um cone com bolas esféricas?',
    hint: 'Pense em algo docinho e gelado com casquinha pontuda embaixo!',
    correctId: 'sorvete',
    explanation: 'A casquinha é um Cone e as bolas de sorvete são Esferas!',
    options: [
      { id: 'sorvete', name: 'Sorvete de Casquinha' },
      { id: 'casinha', name: 'Casinha' },
      { id: 'lapis', name: 'Lápis' },
      { id: 'torre', name: 'Torre' }
    ]
  },
  {
    parts: [
      { id: 'cubo', label: 'Cubo', color: 0xffd166 },
      { id: 'piramide', label: 'Pirâmide', color: 0xff5d5d }
    ],
    title: 'Cubo + Pirâmide',
    desc: 'Qual construção 3D junta paredes quadradas com um telhado pontudo?',
    hint: 'Tem base quadrada e quatro lados inclinados formando o topo.',
    correctId: 'casinha',
    explanation: 'A base/parede lembra um Cubo e o telhado forma uma Pirâmide!',
    options: [
      { id: 'sorvete', name: 'Sorvete de Casquinha' },
      { id: 'casinha', name: 'Casinha' },
      { id: 'bonecoNeve', name: 'Boneco de Neve' },
      { id: 'lapis', name: 'Lápis' }
    ]
  },
  {
    parts: [
      { id: 'cilindro', label: 'Cilindro', color: 0xffc93c },
      { id: 'cone', label: 'Cone', color: 0xf5cba7 }
    ],
    title: 'Cilindro + Cone',
    desc: 'Qual objeto 3D tem corpo cilíndrico e ponta de cone para escrever?',
    hint: 'É um material escolar clássico com corpo comprido e ponta afilada.',
    correctId: 'lapis',
    explanation: 'O corpo do lápis é um Cilindro e a ponta apontada é um Cone!',
    options: [
      { id: 'foguete', name: 'Foguete' },
      { id: 'lapis', name: 'Lápis' },
      { id: 'bonecoNeve', name: 'Boneco de Neve' },
      { id: 'casinha', name: 'Casinha' }
    ]
  },
  {
    parts: [
      { id: 'esfera', label: 'Esfera', color: 0xffffff },
      { id: 'cone', label: 'Cone', color: 0xff7b00 }
    ],
    title: 'Esfera + Cone',
    desc: 'Qual objeto 3D usa esferas no corpo e um cone pequeno na frente?',
    hint: 'Repare no nariz em formato de cone!',
    correctId: 'bonecoNeve',
    explanation: 'O corpo é feito de Esferas e o nariz de cenoura é um Cone!',
    options: [
      { id: 'casinha', name: 'Casinha' },
      { id: 'torre', name: 'Torre' },
      { id: 'bonecoNeve', name: 'Boneco de Neve' },
      { id: 'lapis', name: 'Lápis' }
    ]
  },
  {
    parts: [
      { id: 'cilindro', label: 'Cilindro', color: 0xf8f9fa },
      { id: 'cone', label: 'Cone', color: 0xff5d5d },
      { id: 'esfera', label: 'Esfera', color: 0x3aa0ff }
    ],
    title: 'Cilindro + Cone + Esfera',
    desc: 'Qual nave 3D reúne corpo cilíndrico, bico cônico e janela redonda?',
    hint: 'Ela foi feita para viajar pelo espaço!',
    correctId: 'foguete',
    explanation: 'O foguete junta Cilindro (corpo), Cone (bico) e Esfera (janela)!',
    options: [
      { id: 'foguete', name: 'Foguete' },
      { id: 'sorvete', name: 'Sorvete de Casquinha' },
      { id: 'casinha', name: 'Casinha' },
      { id: 'torre', name: 'Torre' }
    ]
  },
  {
    parts: [
      { id: 'cubo', label: 'Cubo', color: 0x3aa0ff },
      { id: 'cilindro', label: 'Cilindro', color: 0x2fcb8b }
    ],
    title: 'Cubo + Cilindro',
    desc: 'Qual montagem 3D combina uma base cúbica com uma parte superior cilíndrica?',
    hint: 'Olhe a base quadrada embaixo e o cilindro em cima.',
    correctId: 'torre',
    explanation: 'A torre combina a base em formato de Cubo com o topo em Cilindro!',
    options: [
      { id: 'bonecoNeve', name: 'Boneco de Neve' },
      { id: 'lapis', name: 'Lápis' },
      { id: 'torre', name: 'Torre' },
      { id: 'foguete', name: 'Foguete' }
    ]
  }
];

const TOTAL_ROUNDS = CHALLENGES.length;

const state = {
  index: 0,
  wrongIds: new Set(),
  hadMistake: false,
  answered: false,
  score: 0,
  streak: 0,
  bestStreak: 0,
  results: [],
  soundOn: true
};

const el = {
  dots: document.getElementById('round-dots'),
  streakPill: document.getElementById('streak-pill'),
  scorePill: document.getElementById('score-pill'),
  soundToggle: document.getElementById('sound-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  gameScreen: document.getElementById('game-screen'),
  summaryScreen: document.getElementById('summary-screen'),
  roundTag: document.getElementById('round-tag'),
  hintBtn: document.getElementById('hint-btn'),
  comboFormula: document.getElementById('combo-formula'),
  comboPreview: document.getElementById('combo-preview'),
  linkStatus: document.getElementById('link-status'),
  hintBox: document.getElementById('hint-box'),
  comboTitle: document.getElementById('combo-title'),
  comboDesc: document.getElementById('combo-desc'),
  objectsGrid: document.getElementById('objects-grid'),
  feedbackBox: document.getElementById('feedback-box'),
  nextBtn: document.getElementById('next-btn'),
  summaryEmoji: document.getElementById('summary-emoji'),
  rankBadge: document.getElementById('rank-badge'),
  summaryTitle: document.getElementById('summary-title'),
  summarySub: document.getElementById('summary-sub'),
  finalScore: document.getElementById('final-score'),
  finalPercent: document.getElementById('final-percent'),
  finalStreak: document.getElementById('final-streak'),
  phasesShowcase: document.getElementById('phases-showcase'),
  phaseDetailText: document.getElementById('phase-detail-text'),
  celebrateBtn: document.getElementById('celebrate-btn'),
  restartBtn: document.getElementById('restart-btn'),
  confettiLayer: document.getElementById('confetti-layer')
};

function applySavedPrefs() {
  try {
    const savedTheme = localStorage.getItem('formas3d-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    const savedSound = localStorage.getItem('formas3d-sound');
    if (savedSound === 'off') state.soundOn = false;
    else if (savedSound === 'on') state.soundOn = true;
  } catch (err) {}
  el.soundToggle.textContent = state.soundOn ? '🔊' : '🔇';
  el.soundToggle.title = state.soundOn ? 'Som ligado' : 'Som desligado';
}

let audioCtx = null;
function playTone(type) {
  if (!state.soundOn) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioCtx = audioCtx || new AudioContextClass();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    if (type === 'select') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'ok') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.09);
      osc.frequency.setValueAtTime(783.99, now + 0.18);
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
      osc.start(now);
      osc.stop(now + 0.34);
    } else if (type === 'bad') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(175, now + 0.22);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
      osc.start(now);
      osc.stop(now + 0.24);
    } else if (type === 'fanfare') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'triangle';
        o.connect(g);
        g.connect(audioCtx.destination);
        o.frequency.setValueAtTime(freq, now + idx * 0.1);
        g.gain.setValueAtTime(0.1, now + idx * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.28);
        o.start(now + idx * 0.1);
        o.stop(now + idx * 0.1 + 0.28);
      });
    }
  } catch (err) {}
}

let miniScenes = [];

function clearMiniScenes() {
  miniScenes.forEach((item) => {
    if (item.renderer) {
      item.renderer.dispose();
    }
  });
  miniScenes = [];
}

function createMini3DCanvas(container, buildFn, camZ = 4.2, rotX = 0.32) {
  if (!window.THREE || !container) return;
  container.innerHTML = '';
  const w = container.clientWidth || 160;
  const h = container.clientHeight || 118;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  camera.position.set(0, 1.0, camZ);
  camera.lookAt(0, 0.05, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 1.3));
  const d1 = new THREE.DirectionalLight(0xffffff, 1.5);
  d1.position.set(3, 5, 4);
  scene.add(d1);

  const group = buildFn();
  group.rotation.set(rotX, 0.55, 0);
  scene.add(group);

  miniScenes.push({ scene, camera, renderer, group });
}

function animateMiniScenes() {
  requestAnimationFrame(animateMiniScenes);
  miniScenes.forEach((m) => {
    m.group.rotation.y += 0.012;
    m.renderer.render(m.scene, m.camera);
  });
}
animateMiniScenes();

function buildComboPreviewGroup(parts) {
  const g = new THREE.Group();
  const spacing = 1.65;
  const startX = -((parts.length - 1) * spacing) / 2;

  parts.forEach((p, idx) => {
    let geo;
    if (p.id === 'cubo') geo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
    else if (p.id === 'esfera') geo = new THREE.SphereGeometry(0.62, 22, 18);
    else if (p.id === 'cilindro') geo = new THREE.CylinderGeometry(0.52, 0.52, 1.15, 22);
    else if (p.id === 'cone') geo = new THREE.ConeGeometry(0.62, 1.2, 22);
    else geo = new THREE.ConeGeometry(0.75, 1.15, 4);

    const mesh = makePart(geo, p.color, [startX + idx * spacing, 0, 0]);
    if (p.id === 'piramide') mesh.rotation.y = Math.PI / 4;
    g.add(mesh);
  });
  return g;
}

function renderDots() {
  el.dots.innerHTML = '';
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const li = document.createElement('li');
    li.textContent = String(i + 1);
    if (i < state.results.length) li.classList.add(state.results[i] ? 'ok' : 'bad');
    else if (i === state.index && !el.gameScreen.hidden) li.classList.add('current');
    el.dots.appendChild(li);
  }
  el.scorePill.textContent = 'Acertos: ' + state.score + ' / ' + TOTAL_ROUNDS;
  el.streakPill.textContent = '🔥 ' + state.streak;
}

function renderFormula() {
  const item = CHALLENGES[state.index];
  el.comboFormula.innerHTML = '';
  item.parts.forEach((p, idx) => {
    if (idx > 0) {
      const plus = document.createElement('span');
      plus.className = 'combo-plus';
      plus.textContent = '+';
      el.comboFormula.appendChild(plus);
    }
    const chip = document.createElement('div');
    chip.className = 'combo-part-chip';
    chip.innerHTML = `${SHAPE_ICONS[p.id] || ''}<span>${p.label}</span>`;
    el.comboFormula.appendChild(chip);
  });

  clearMiniScenes();
  createMini3DCanvas(el.comboPreview, () => buildComboPreviewGroup(item.parts), 4.6, 0.28);
}

function handleObjectPick(opt) {
  if (state.answered) return;
  const item = CHALLENGES[state.index];

  if (opt.id === item.correctId) {
    state.answered = true;
    state.score += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    playTone('ok');

    el.linkStatus.textContent = '✅ Associado a: ' + opt.name;
    el.feedbackBox.className = 'feedback-box ok';
    el.feedbackBox.textContent = 'Mandou bem! ' + item.explanation;
    el.feedbackBox.hidden = false;
    el.nextBtn.hidden = false;
    el.nextBtn.textContent = state.index === TOTAL_ROUNDS - 1 ? 'Ver resultado final das 3 fases 🏆' : 'Próximo desafio →';

    state.results.push(!state.hadMistake);
    renderDots();
    renderObjectsGrid();
  } else {
    state.hadMistake = true;
    state.streak = 0;
    state.wrongIds.add(opt.id);
    playTone('bad');
    renderDots();

    el.linkStatus.textContent = '❌ Não é esse — continue aqui e tente outro!';
    el.feedbackBox.className = 'feedback-box bad';
    el.feedbackBox.textContent = 'Quase! Continue neste desafio e escolha outro objeto 3D.';
    el.feedbackBox.hidden = false;
    renderObjectsGrid();
  }
}

function renderObjectsGrid() {
  const item = CHALLENGES[state.index];
  el.objectsGrid.innerHTML = '';

  item.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'object-3d-card';

    if (state.wrongIds.has(opt.id)) {
      btn.classList.add('wrong');
      btn.disabled = true;
    }
    if (state.answered) {
      btn.disabled = true;
      if (opt.id === item.correctId) btn.classList.add('correct');
    }

    const box = document.createElement('div');
    box.className = 'mini-3d-box';

    const label = document.createElement('span');
    label.textContent = opt.name;

    btn.appendChild(box);
    btn.appendChild(label);

    btn.addEventListener('click', () => handleObjectPick(opt));
    el.objectsGrid.appendChild(btn);

    const builder = OBJECT_BUILDERS[opt.id];
    if (builder) {
      createMini3DCanvas(box, builder, 4.1, 0.3);
    }
  });
}

function renderRound() {
  const item = CHALLENGES[state.index];
  state.wrongIds = new Set();
  state.hadMistake = false;
  state.answered = false;

  el.roundTag.textContent = 'Desafio ' + (state.index + 1) + ' de ' + TOTAL_ROUNDS;
  el.comboTitle.textContent = item.title;
  el.comboDesc.textContent = item.desc;
  el.linkStatus.textContent = '🔗 Escolha o objeto 3D ao lado que usa essas formas';
  el.hintBox.hidden = true;
  el.feedbackBox.hidden = true;
  el.nextBtn.hidden = true;

  renderDots();
  renderFormula();
  renderObjectsGrid();
}

function spawnConfetti() {
  el.confettiLayer.innerHTML = '';
  const colors = ['#FF5D5D', '#3AA0FF', '#2FCB8B', '#FFC93C', '#9B6BFF'];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = (1.8 + Math.random() * 1.9) + 's';
    piece.style.animationDelay = (Math.random() * 0.65) + 's';
    el.confettiLayer.appendChild(piece);
  }
}

function getAllPhasesSummary() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem('formas3d-progress') || '{}');
  } catch (err) {}

  const p3Percent = Math.round((state.score / TOTAL_ROUNDS) * 100);
  const p1 = saved.fase1 || { score: 10, total: 10, percent: 100, simulated: true };
  const p2 = saved.fase2 || { score: 6, total: 6, percent: 100, simulated: true };
  const p3 = { score: state.score, total: TOTAL_ROUNDS, percent: p3Percent };

  return [
    {
      id: 'fase1',
      badge: 'FASE 1',
      title: 'Reconhecimento 3D',
      scoreText: `${p1.score}/${p1.total} (${p1.percent}%)`,
      percent: p1.percent,
      message: p1.simulated
        ? 'Fase 1 concluída! Reconhecer cubos, esferas, cilindros, cones e pirâmides em objetos do dia a dia é a base de tudo.'
        : `Na Fase 1 você acertou ${p1.score} de ${p1.total} rodadas! Girar em 360° e usar o Raio-X ajuda a enxergar faces e vértices.`
    },
    {
      id: 'fase2',
      badge: 'FASE 2',
      title: 'Composição 3D',
      scoreText: `${p2.score}/${p2.total} (${p2.percent}%)`,
      percent: p2.percent,
      message: p2.simulated
        ? 'Fase 2 concluída! Separar as peças de um modelo 3D mostra como formas simples viram objetos completos.'
        : `Na Fase 2 você mandou bem em ${p2.score} de ${p2.total} montagens! Separar as peças deixa super claro onde cada sólido encaixa.`
    },
    {
      id: 'fase3',
      badge: 'FASE 3',
      title: 'Associação 3D',
      scoreText: `${p3.score}/${p3.total} (${p3.percent}%)`,
      percent: p3.percent,
      message: `Na Fase 3 você concluiu ${p3.score} de ${p3.total} associações com maior sequência de ${state.bestStreak}! Conectar fórmulas geométricas a objetos reais é coisa de arquiteto e designer.`
    }
  ];
}

function getStarsForPercent(pct) {
  if (pct >= 90) return '⭐⭐⭐';
  if (pct >= 65) return '⭐⭐☆';
  return '⭐☆☆';
}

function showSummary() {
  clearMiniScenes();
  el.gameScreen.hidden = true;
  el.summaryScreen.hidden = false;
  renderDots();

  const phases = getAllPhasesSummary();
  const overallPercent = Math.round((phases[0].percent + phases[1].percent + phases[2].percent) / 3);

  el.finalScore.textContent = `${state.score}/${TOTAL_ROUNDS}`;
  el.finalPercent.textContent = `${overallPercent}%`;
  el.finalStreak.textContent = String(state.bestStreak);

  if (overallPercent >= 85) {
    el.summaryEmoji.textContent = '🏆';
    el.rankBadge.textContent = '👑 Mestre Supremo da Geometria 3D';
    el.summaryTitle.textContent = 'Espetacular! Você dominou as 3 fases!';
    el.summarySub.textContent = 'Você observou em 360°, separou peças complexas e associou formas 3D como um verdadeiro explorador espacial!';
  } else if (overallPercent >= 60) {
    el.summaryEmoji.textContent = '🎉';
    el.rankBadge.textContent = '🚀 Explorador 3D em Alta';
    el.summaryTitle.textContent = 'Mandou muito bem na jornada 3D!';
    el.summarySub.textContent = 'Você completou todas as etapas! Clique em cada fase abaixo para ver seu desempenho e continuar evoluindo.';
  } else {
    el.summaryEmoji.textContent = '🌟';
    el.rankBadge.textContent = '🧭 Aprendiz Geométrico 3D';
    el.summaryTitle.textContent = 'Jornada concluída com garra!';
    el.summarySub.textContent = 'Cada tentativa deixa seu olhar geométrico mais afiado. Veja o resumo de cada fase abaixo!';
  }

  el.phasesShowcase.innerHTML = '';
  phases.forEach((ph, idx) => {
    const card = document.createElement('div');
    card.className = 'phase-result-card' + (idx === 2 ? ' active-inspect' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="phase-card-top">
        <span class="phase-tag">${ph.badge}</span>
        <span class="phase-stars">${getStarsForPercent(ph.percent)}</span>
      </div>
      <h3>${ph.title}</h3>
      <div class="phase-score-line">${ph.scoreText}</div>
      <div class="phase-bar-track">
        <div class="phase-bar-fill" data-width="${ph.percent}"></div>
      </div>
    `;

    const selectCard = () => {
      document.querySelectorAll('.phase-result-card').forEach((c) => c.classList.remove('active-inspect'));
      card.classList.add('active-inspect');
      el.phaseDetailText.textContent = `${ph.badge} — ${ph.message}`;
      playTone('select');
    };

    card.addEventListener('click', selectCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCard();
      }
    });

    el.phasesShowcase.appendChild(card);
  });

  el.phaseDetailText.textContent = `${phases[2].badge} — ${phases[2].message}`;

  requestAnimationFrame(() => {
    document.querySelectorAll('.phase-bar-fill').forEach((bar) => {
      bar.style.width = `${bar.getAttribute('data-width')}%`;
    });
  });

  playTone('fanfare');
  spawnConfetti();
}

function startGame() {
  state.index = 0;
  state.wrongIds = new Set();
  state.hadMistake = false;
  state.answered = false;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.results = [];
  el.confettiLayer.innerHTML = '';
  el.summaryScreen.hidden = true;
  el.gameScreen.hidden = false;
  renderRound();
}

el.hintBtn.addEventListener('click', () => {
  const item = CHALLENGES[state.index];
  if (!item) return;
  el.hintBox.hidden = false;
  el.hintBox.textContent = 'Dica: ' + item.hint;
  playTone('select');
});

el.celebrateBtn.addEventListener('click', () => {
  playTone('fanfare');
  spawnConfetti();
});

el.nextBtn.addEventListener('click', () => {
  if (state.index < TOTAL_ROUNDS - 1) {
    state.index += 1;
    renderRound();
  } else {
    showSummary();
  }
});

el.restartBtn.addEventListener('click', () => {
  playTone('select');
  startGame();
});

el.soundToggle.addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  el.soundToggle.textContent = state.soundOn ? '🔊' : '🔇';
  el.soundToggle.title = state.soundOn ? 'Som ligado' : 'Som desligado';
  try {
    localStorage.setItem('formas3d-sound', state.soundOn ? 'on' : 'off');
  } catch (err) {}
  if (state.soundOn) playTone('select');
});

el.themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark =
    root.getAttribute('data-theme') === 'dark' ||
    (!root.hasAttribute('data-theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  const nextTheme = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('formas3d-theme', nextTheme);
  } catch (err) {}
  playTone('select');
});

applySavedPrefs();
startGame();