const SHAPES = [
  {
    id: 'cubo',
    name: 'Cubo',
    hint: 'Tem 6 faces quadradas iguais, 12 arestas iguais e 8 vértices.',
    fact: 'O cubo tem 6 faces quadradas iguais, 12 arestas e 8 vértices.',
    xray: ['⬜ 6 faces quadradas', '📏 12 arestas iguais', '📍 8 vértices'],
    icon: '<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 35,13 20,21 5,13" fill="#FF8585" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="5,13 20,21 20,35 5,27" fill="#FF5D5D" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="35,13 20,21 20,35 35,27" fill="#D93B3B" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>'
  },
  {
    id: 'paralelepipedo',
    name: 'Bloco Retangular',
    hint: 'Tem 6 faces retangulares e 8 vértices, mas suas dimensões não são todas iguais.',
    fact: 'O bloco retangular (paralelepípedo) tem 6 faces e 8 vértices, com comprimentos diferentes.',
    xray: ['▬ Faces retangulares', '📏 12 arestas', '📍 8 vértices'],
    icon: '<svg viewBox="0 0 40 40" fill="none"><polygon points="18,6 36,13 22,20 4,13" fill="#FF9E6D" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="4,13 22,20 22,34 4,27" fill="#FF7847" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="36,13 22,20 22,34 36,27" fill="#D95326" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>'
  },
  {
    id: 'esfera',
    name: 'Esfera',
    hint: 'Não tem faces planas, arestas nem vértices; é arredondada em qualquer direção.',
    fact: 'A esfera não tem faces planas nem vértices e rola para qualquer lado.',
    xray: ['⭕ Superfície curva', '🚫 0 vértices', '⚽ Rola em tudo'],
    icon: '<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" fill="#3AA0FF" stroke="#1B2559" stroke-width="2.6"/><ellipse cx="15" cy="14" rx="4.5" ry="2.8" transform="rotate(-28 15 14)" fill="#BFE1FF"/></svg>'
  },
  {
    id: 'cilindro',
    name: 'Cilindro',
    hint: 'Tem 2 bases circulares paralelas e lateral curva, sem vértices.',
    fact: 'O cilindro tem 2 bases circulares, lateral curva e 0 vértices.',
    xray: ['🔵 2 bases circulares', '🌀 Lateral curva', '🚫 0 vértices'],
    icon: '<svg viewBox="0 0 40 40" fill="none"><path d="M8 11V29C8 32.3 13.4 35 20 35C26.6 35 32 32.3 32 29V11" fill="#2FCB8B" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><ellipse cx="20" cy="11" rx="12" ry="5" fill="#7BE8BA" stroke="#1B2559" stroke-width="2.6"/></svg>'
  },
  {
    id: 'cone',
    name: 'Cone',
    hint: 'Tem 1 base circular, lateral curva e 1 vértice no topo.',
    fact: 'O cone possui 1 base circular e 1 vértice na ponta superior.',
    xray: ['🔵 1 base circular', '🔺 1 vértice no topo', '🌀 Lateral curva'],
    icon: '<svg viewBox="0 0 40 40" fill="none"><path d="M20 6L7 30C9.8 33.2 14.5 35 20 35C25.5 35 30.2 33.2 33 30L20 6Z" fill="#FFB020" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>'
  },
  {
    id: 'piramide',
    name: 'Pirâmide',
    hint: 'Tem base poligonal e faces triangulares que se encontram em um vértice superior.',
    fact: 'A pirâmide tem faces laterais triangulares unidas em um vértice no topo.',
    xray: ['🔺 Faces triangulares', '📍 Vértice no topo', '📐 Base poligonal'],
    icon: '<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 7,29 22,35" fill="#9B6BFF" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="20,5 22,35 34,27" fill="#7644E8" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>'
  }
];

const OBJECTS = [
  { id: 'dado', shape: 'cubo', kind: 'dado', name: 'Dado de Jogo', clue: 'Cubo com pontinhos nas faces e volume 3D.', color: 0xff5d5d, accent: 0xfff8e7 },
  { id: 'cubo-magico', shape: 'cubo', kind: 'cubo-magico', name: 'Cubo Mágico', clue: 'Blocos coloridos organizados em um cubo.', color: 0xffc93c, accent: 0x3aa0ff },
  { id: 'caixa-sapato', shape: 'paralelepipedo', kind: 'caixa', name: 'Caixa de Sapatos', clue: 'Formato alongado com faces retangulares.', color: 0xd9a066, accent: 0xffc93c },
  { id: 'tijolo', shape: 'paralelepipedo', kind: 'tijolo', name: 'Tijolo', clue: 'Bloco retangular firme usado em construções.', color: 0xd95338, accent: 0xffb899 },
  { id: 'bola', shape: 'esfera', kind: 'bola', name: 'Bola de Futebol', clue: 'Esfera perfeita para rolar em qualquer direção.', color: 0xffffff, accent: 0x1b2559 },
  { id: 'laranja', shape: 'esfera', kind: 'laranja', name: 'Laranja', clue: 'Fruta arredondada de casca alaranjada.', color: 0xff8c24, accent: 0x2fcb8b },
  { id: 'lata', shape: 'cilindro', kind: 'lata', name: 'Lata de Suco', clue: 'Cilindro com topo e base circulares.', color: 0x2fcb8b, accent: 0xffc93c },
  { id: 'pilha', shape: 'cilindro', kind: 'pilha', name: 'Pilha', clue: 'Cilindro com polo positivo no topo.', color: 0x3aa0ff, accent: 0xff5d5d },
  { id: 'chapeu', shape: 'cone', kind: 'chapeu', name: 'Chapéu de Festa', clue: 'Base circular que sobe até uma ponta.', color: 0x9b6bff, accent: 0xffc93c },
  { id: 'cone-rua', shape: 'cone', kind: 'cone-rua', name: 'Cone de Trânsito', clue: 'Base larga com faixa e ponta no alto.', color: 0xff7a1a, accent: 0xffffff },
  { id: 'piramide-egito', shape: 'piramide', kind: 'piramide', name: 'Pirâmide do Egito', clue: 'Base quadrada com quatro lados triangulares.', color: 0xf6c453, accent: 0xd99b26 },
  { id: 'peso-papel', shape: 'piramide', kind: 'piramide', name: 'Peso de Papel', clue: 'Pirâmide de mesa com lados inclinados.', color: 0x67d5e8, accent: 0x3aa5bd }
];

const TOTAL_ROUNDS = 10;

const state = {
  rounds: [],
  index: 0,
  wrongShapes: new Set(),
  hadMistake: false,
  answered: false,
  score: 0,
  streak: 0,
  bestStreak: 0,
  xrayOn: false,
  autoSpin: false,
  dragging: false,
  lastX: 0,
  lastY: 0,
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
  xrayBtn: document.getElementById('xray-btn'),
  hintBtn: document.getElementById('hint-btn'),
  stageViewport: document.getElementById('stage-viewport'),
  webglMount: document.getElementById('webgl-mount'),
  xrayOverlay: document.getElementById('xray-overlay'),
  objectName: document.getElementById('object-name'),
  objectClue: document.getElementById('object-clue'),
  hintBox: document.getElementById('hint-box'),
  spinBtn: document.getElementById('spin-btn'),
  autoBtn: document.getElementById('auto-btn'),
  resetViewBtn: document.getElementById('reset-view-btn'),
  choicesGrid: document.getElementById('choices-grid'),
  feedbackBox: document.getElementById('feedback-box'),
  nextBtn: document.getElementById('next-btn'),
  summaryEmoji: document.getElementById('summary-emoji'),
  summaryTitle: document.getElementById('summary-title'),
  summarySub: document.getElementById('summary-sub'),
  finalScore: document.getElementById('final-score'),
  finalPercent: document.getElementById('final-percent'),
  finalStreak: document.getElementById('final-streak'),
  shapeBreakdown: document.getElementById('shape-breakdown'),
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
    if (savedSound === 'off') {
      state.soundOn = false;
    } else if (savedSound === 'on') {
      state.soundOn = true;
    }
  } catch (err) {}
  el.soundToggle.textContent = state.soundOn ? '🔊' : '🔇';
  el.soundToggle.title = state.soundOn ? 'Som ligado' : 'Som desligado';
}

let scene, camera, renderer, rootGroup, pedestalGroup, solidMaterials = [], wireframeLines = [], targetSpinY = 0;

function initThree() {
  if (!window.THREE) return;
  const width = el.webglMount.clientWidth || 360;
  const height = el.webglMount.clientHeight || 255;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 1.38, 4.35);
  camera.lookAt(0, -0.1, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  el.webglMount.innerHTML = '';
  el.webglMount.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 1.2));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.55);
  keyLight.position.set(3.8, 5.2, 4.2);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x7cc4ff, 0.9);
  rimLight.position.set(-4.2, -1.8, -3.5);
  scene.add(rimLight);

  pedestalGroup = new THREE.Group();
  const grid = new THREE.GridHelper(5.2, 10, 0x3aa0ff, 0x8fb8e3);
  grid.position.y = -1.36;
  pedestalGroup.add(grid);

  const ringGeo = new THREE.RingGeometry(1.42, 1.54, 48);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x3aa0ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -1.34;
  pedestalGroup.add(ring);
  scene.add(pedestalGroup);

  rootGroup = new THREE.Group();
  scene.add(rootGroup);

  window.addEventListener('resize', () => {
    if (!renderer || !camera) return;
    const w = el.webglMount.clientWidth || 360;
    const h = el.webglMount.clientHeight || 255;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  animateThree();
}

function clearGroup(group) {
  while (group.children.length > 0) {
    const child = group.children[0];
    group.remove(child);
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
      else child.material.dispose();
    }
  }
  solidMaterials = [];
  wireframeLines = [];
}

function addWireframe(mesh, colorHex) {
  const edges = new THREE.EdgesGeometry(mesh.geometry, 18);
  const lineMat = new THREE.LineBasicMaterial({
    color: colorHex || 0x1b2559,
    transparent: true,
    opacity: 0.42
  });
  const line = new THREE.LineSegments(edges, lineMat);
  mesh.add(line);
  wireframeLines.push(lineMat);
}

function build3DObject(item) {
  if (!rootGroup) return;
  clearGroup(rootGroup);

  const makeMat = (hex, roughness = 0.32, metalness = 0.1) => {
    const mat = new THREE.MeshStandardMaterial({
      color: hex,
      roughness,
      metalness,
      transparent: true,
      opacity: 1
    });
    solidMaterials.push(mat);
    return mat;
  };

  if (item.shape === 'cubo') {
    const geo = new THREE.BoxGeometry(1.65, 1.65, 1.65);
    const mesh = new THREE.Mesh(geo, makeMat(item.color));
    addWireframe(mesh, 0x1b2559);
    rootGroup.add(mesh);

    if (item.kind === 'cubo-magico') {
      const stripGeo = new THREE.BoxGeometry(1.7, 0.12, 1.7);
      const stripMat = makeMat(item.accent, 0.3);
      rootGroup.add(new THREE.Mesh(stripGeo, stripMat));
    }
  } else if (item.shape === 'paralelepipedo') {
    const geo = item.kind === 'tijolo'
      ? new THREE.BoxGeometry(2.3, 0.92, 1.22)
      : new THREE.BoxGeometry(2.2, 1.12, 1.42);
    const mesh = new THREE.Mesh(geo, makeMat(item.color));
    addWireframe(mesh, 0x1b2559);
    rootGroup.add(mesh);
  } else if (item.shape === 'esfera') {
    const geo = new THREE.SphereGeometry(1.15, 36, 28);
    const mesh = new THREE.Mesh(geo, makeMat(item.color, 0.26, 0.12));
    addWireframe(mesh, 0xffe66d);
    rootGroup.add(mesh);

    if (item.kind === 'laranja') {
      const leafGeo = new THREE.BoxGeometry(0.45, 0.12, 0.25);
      const leaf = new THREE.Mesh(leafGeo, makeMat(item.accent));
      leaf.position.set(0.2, 1.18, 0);
      leaf.rotation.z = 0.4;
      rootGroup.add(leaf);
    }
  } else if (item.shape === 'cilindro') {
    const h = item.kind === 'pilha' ? 1.9 : 1.8;
    const r = item.kind === 'pilha' ? 0.82 : 0.95;
    const geo = new THREE.CylinderGeometry(r, r, h, 36);
    const mesh = new THREE.Mesh(geo, makeMat(item.color, 0.3));
    addWireframe(mesh, 0x1b2559);
    rootGroup.add(mesh);

    if (item.kind === 'pilha') {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.22, 24), makeMat(0xc0cadb, 0.2, 0.6));
      cap.position.y = h / 2 + 0.11;
      rootGroup.add(cap);
    } else {
      const band = new THREE.Mesh(new THREE.CylinderGeometry(r + 0.02, r + 0.02, 0.45, 36, 1, true), makeMat(item.accent, 0.4));
      rootGroup.add(band);
    }
  } else if (item.shape === 'cone') {
    const geo = new THREE.ConeGeometry(1.12, 2.0, 36);
    const mesh = new THREE.Mesh(geo, makeMat(item.color, 0.34));
    addWireframe(mesh, 0x1b2559);
    rootGroup.add(mesh);

    if (item.kind === 'cone-rua') {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(1.38, 1.38, 0.18, 36), makeMat(item.color, 0.4));
      base.position.y = -0.98;
      rootGroup.add(base);
    }
  } else if (item.shape === 'piramide') {
    const geo = new THREE.ConeGeometry(1.38, 1.9, 4);
    const mesh = new THREE.Mesh(geo, makeMat(item.color, 0.36));
    mesh.rotation.y = Math.PI / 4;
    addWireframe(mesh, 0x1b2559);
    rootGroup.add(mesh);
  }

  rootGroup.rotation.set(0.34, 0.58, 0);
  targetSpinY = rootGroup.rotation.y;
  updateThreeXray();
}

function updateThreeXray() {
  solidMaterials.forEach((mat) => {
    mat.opacity = state.xrayOn ? 0.26 : 1;
    mat.depthWrite = !state.xrayOn;
    mat.needsUpdate = true;
  });
  wireframeLines.forEach((lineMat) => {
    lineMat.opacity = state.xrayOn ? 0.96 : 0.28;
    lineMat.color.setHex(state.xrayOn ? 0xffd23f : 0x1b2559);
  });
}

function animateThree() {
  requestAnimationFrame(animateThree);
  if (!renderer || !scene || !camera || !rootGroup) return;

  if (state.autoSpin && !state.dragging) {
    rootGroup.rotation.y += 0.015;
    targetSpinY = rootGroup.rotation.y;
  } else if (!state.dragging) {
    rootGroup.rotation.y += (targetSpinY - rootGroup.rotation.y) * 0.12;
  }

  renderer.render(scene, camera);
}

function shuffle(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function buildRounds() {
  const pool = shuffle(OBJECTS);
  const list = [];
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    list.push(pool[i % pool.length]);
  }
  return list;
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
    }
  } catch (err) {}
}

function renderXray() {
  const item = state.rounds[state.index];
  const shapeObj = SHAPES.find((s) => s.id === item.shape);
  el.xrayBtn.setAttribute('aria-pressed', String(state.xrayOn));
  el.xrayOverlay.hidden = !state.xrayOn;
  updateThreeXray();
  if (state.xrayOn && shapeObj) {
    el.xrayOverlay.innerHTML = shapeObj.xray
      .map((tag) => '<span class="xray-chip">' + tag + '</span>')
      .join('');
  }
}

function renderDots() {
  el.dots.innerHTML = '';
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const li = document.createElement('li');
    li.textContent = String(i + 1);
    if (i < state.results.length) {
      li.classList.add(state.results[i].correct ? 'ok' : 'bad');
    } else if (i === state.index && !el.gameScreen.hidden) {
      li.classList.add('current');
    }
    el.dots.appendChild(li);
  }
  el.scorePill.textContent = 'Acertos: ' + state.score + ' / ' + TOTAL_ROUNDS;
  el.streakPill.textContent = '🔥 ' + state.streak;
}

function handleShapeClick(shapeId) {
  if (state.answered) return;
  const item = state.rounds[state.index];
  const shapeObj = SHAPES.find((s) => s.id === item.shape);

  if (shapeId === item.shape) {
    state.answered = true;
    state.score += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    playTone('ok');

    el.feedbackBox.className = 'feedback-box ok';
    el.feedbackBox.textContent = 'Mandou bem! O(A) ' + item.name + ' tem forma de ' + shapeObj.name + '. ' + shapeObj.fact;
    el.feedbackBox.hidden = false;
    el.nextBtn.hidden = false;
    el.nextBtn.textContent = state.index === TOTAL_ROUNDS - 1 ? 'Ver resultado final 🏆' : 'Próxima rodada →';

    state.results.push({ shape: item.shape, correct: !state.hadMistake });
    renderDots();
    renderChoices();
  } else {
    state.hadMistake = true;
    state.streak = 0;
    state.wrongShapes.add(shapeId);
    playTone('bad');
    renderDots();

    el.feedbackBox.className = 'feedback-box bad';
    el.feedbackBox.textContent = 'Ainda não é essa! Continue na rodada e tente outra forma.';
    el.feedbackBox.hidden = false;
    renderChoices();
  }
}

function renderChoices() {
  el.choicesGrid.innerHTML = '';
  const item = state.rounds[state.index];

  SHAPES.forEach((shape) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-btn';

    if (state.wrongShapes.has(shape.id)) {
      btn.classList.add('wrong');
      btn.disabled = true;
    }
    if (state.answered) {
      btn.disabled = true;
      if (shape.id === item.shape) {
        btn.classList.add('correct');
      }
    }

    btn.innerHTML = '<span class="shape-badge">' + shape.icon + '</span><span>' + shape.name + '</span>';
    btn.addEventListener('click', () => handleShapeClick(shape.id));
    el.choicesGrid.appendChild(btn);
  });
}

function renderRound() {
  const item = state.rounds[state.index];
  state.wrongShapes = new Set();
  state.hadMistake = false;
  state.answered = false;

  el.roundTag.textContent = 'Rodada ' + (state.index + 1) + ' de ' + TOTAL_ROUNDS;
  el.objectName.textContent = item.name;
  el.objectClue.textContent = item.clue;

  el.hintBox.hidden = true;
  el.feedbackBox.hidden = true;
  el.nextBtn.hidden = true;

  build3DObject(item);
  renderDots();
  renderChoices();
  renderXray();
}

function spawnConfetti() {
  el.confettiLayer.innerHTML = '';
  const colors = ['#FF5D5D', '#3AA0FF', '#2FCB8B', '#FFC93C', '#9B6BFF'];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = (1.8 + Math.random() * 1.8) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    el.confettiLayer.appendChild(piece);
  }
}

function showSummary() {
  el.gameScreen.hidden = true;
  el.summaryScreen.hidden = false;
  renderDots();

  const percent = Math.round((state.score / TOTAL_ROUNDS) * 100);
  el.finalScore.textContent = state.score + '/' + TOTAL_ROUNDS;
  el.finalPercent.textContent = percent + '%';
  el.finalStreak.textContent = String(state.bestStreak);

  try {
    const prev = JSON.parse(localStorage.getItem('formas3d-progress') || '{}');
    prev.fase1 = {
      score: state.score,
      total: TOTAL_ROUNDS,
      percent,
      bestStreak: state.bestStreak
    };
    localStorage.setItem('formas3d-progress', JSON.stringify(prev));
  } catch (err) {}

  if (state.score >= 9) {
    el.summaryEmoji.textContent = '🏆';
    el.summaryTitle.textContent = 'Mestre das Formas 3D!';
    el.summarySub.textContent = 'Desempenho de alto nível! Você já pode avançar para a Fase 2 ou jogar novamente.';
    spawnConfetti();
  } else if (state.score >= 6) {
    el.summaryEmoji.textContent = '🎉';
    el.summaryTitle.textContent = 'Mandou muito bem!';
    el.summarySub.textContent = 'Você concluiu a Fase 1! Avance para o próximo jogo ou tente novamente.';
  } else {
    el.summaryEmoji.textContent = '🌟';
    el.summaryTitle.textContent = 'Boa tentativa!';
    el.summarySub.textContent = 'Use o Raio-X e gire o modelo em 360° para treinar ainda mais.';
  }

  el.shapeBreakdown.innerHTML = '';
  SHAPES.forEach((s) => {
    const items = state.results.filter((r) => r.shape === s.id);
    if (!items.length) return;
    const hits = items.filter((r) => r.correct).length;
    const chip = document.createElement('div');
    chip.className = 'breakdown-chip';
    chip.textContent = s.name + ': ' + hits + '/' + items.length;
    el.shapeBreakdown.appendChild(chip);
  });
}

function startGame() {
  state.rounds = buildRounds();
  state.index = 0;
  state.wrongShapes = new Set();
  state.hadMistake = false;
  state.answered = false;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.xrayOn = false;
  state.results = [];
  el.confettiLayer.innerHTML = '';
  el.summaryScreen.hidden = true;
  el.gameScreen.hidden = false;
  renderRound();
}

el.stageViewport.addEventListener('pointerdown', (e) => {
  if (!rootGroup) return;
  state.dragging = true;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  el.stageViewport.classList.add('dragging');
  if (el.stageViewport.setPointerCapture) {
    el.stageViewport.setPointerCapture(e.pointerId);
  }
});

el.stageViewport.addEventListener('pointermove', (e) => {
  if (!state.dragging || !rootGroup) return;
  const dx = e.clientX - state.lastX;
  const dy = e.clientY - state.lastY;
  state.lastX = e.clientX;
  state.lastY = e.clientY;

  rootGroup.rotation.y += dx * 0.012;
  rootGroup.rotation.x = Math.max(-1.1, Math.min(1.1, rootGroup.rotation.x + dy * 0.01));
  targetSpinY = rootGroup.rotation.y;
});

function stopDragging() {
  if (!state.dragging) return;
  state.dragging = false;
  el.stageViewport.classList.remove('dragging');
}

el.stageViewport.addEventListener('pointerup', stopDragging);
el.stageViewport.addEventListener('pointercancel', stopDragging);

el.xrayBtn.addEventListener('click', () => {
  state.xrayOn = !state.xrayOn;
  playTone('select');
  renderXray();
});

el.hintBtn.addEventListener('click', () => {
  const item = state.rounds[state.index];
  const shapeObj = SHAPES.find((s) => s.id === item.shape);
  if (!shapeObj) return;
  el.hintBox.hidden = false;
  el.hintBox.textContent = 'Dica: ' + shapeObj.hint;
  playTone('select');
});

el.spinBtn.addEventListener('click', () => {
  targetSpinY += Math.PI / 2;
  playTone('select');
});

el.autoBtn.addEventListener('click', () => {
  state.autoSpin = !state.autoSpin;
  el.autoBtn.setAttribute('aria-pressed', String(state.autoSpin));
  el.autoBtn.textContent = state.autoSpin ? '⏸️ Pausar giro' : '▶️ Giro contínuo';
  playTone('select');
});

el.resetViewBtn.addEventListener('click', () => {
  if (!rootGroup) return;
  rootGroup.rotation.x = 0.34;
  targetSpinY = 0.58;
  playTone('select');
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
  const isDark = root.getAttribute('data-theme') === 'dark' ||
    (!root.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const nextTheme = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('formas3d-theme', nextTheme);
  } catch (err) {}
  playTone('select');
});

applySavedPrefs();
initThree();
startGame();