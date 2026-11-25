import * as THREE from 'three';

const SHAPES = [
  {
    id: 'cubo',
    name: 'Cubo',
    icon: `<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 35,13 20,21 5,13" fill="#FF8585" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="5,13 20,21 20,35 5,27" fill="#FF5D5D" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="35,13 20,21 20,35 35,27" fill="#D93B3B" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'esfera',
    name: 'Esfera',
    icon: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" fill="#3AA0FF" stroke="#1B2559" stroke-width="2.6"/><ellipse cx="15" cy="14" rx="4.5" ry="2.8" transform="rotate(-28 15 14)" fill="#BFE1FF"/></svg>`
  },
  {
    id: 'cilindro',
    name: 'Cilindro',
    icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M8 11V29C8 32.3 13.4 35 20 35C26.6 35 32 32.3 32 29V11" fill="#2FCB8B" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><ellipse cx="20" cy="11" rx="12" ry="5" fill="#7BE8BA" stroke="#1B2559" stroke-width="2.6"/></svg>`
  },
  {
    id: 'cone',
    name: 'Cone',
    icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 6L7 30C9.8 33.2 14.5 35 20 35C25.5 35 30.2 33.2 33 30L20 6Z" fill="#FFB020" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'piramide',
    name: 'Pirâmide',
    icon: `<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 7,29 22,35" fill="#9B6BFF" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/><polygon points="20,5 22,35 34,27" fill="#7644E8" stroke="#1B2559" stroke-width="2.6" stroke-linejoin="round"/></svg>`
  }
];

function makePart(geo, color, pos, rot = [0, 0, 0], explodeOffset = [0, 0, 0]) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.34, metalness: 0.08 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.userData.basePos = pos.slice();
  mesh.userData.explodeOffset = explodeOffset.slice();

  const edges = new THREE.EdgesGeometry(geo, 24);
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x1b2559, transparent: true, opacity: 0.35 })
  );
  mesh.add(line);
  return mesh;
}

const LEVELS = [
  {
    name: 'Sorvete de Casquinha',
    hint: 'Olhe embaixo para a casquinha e em cima para as bolas arredondadas.',
    answer: ['cone', 'esfera'],
    explain: 'A casquinha é um Cone e as bolas de sorvete são Esferas!',
    build() {
      const g = new THREE.Group();
      g.add(makePart(new THREE.ConeGeometry(0.85, 1.9, 28), 0xf4a261, [0, -0.58, 0], [Math.PI, 0, 0], [0, -0.75, 0]));
      g.add(makePart(new THREE.SphereGeometry(0.78, 28, 22), 0xff6b8b, [0, 0.56, 0], [0, 0, 0], [0, 0.35, 0]));
      g.add(makePart(new THREE.SphereGeometry(0.6, 28, 22), 0x6ee7b7, [0, 1.36, 0], [0, 0, 0], [0, 1.05, 0]));
      return g;
    }
  },
  {
    name: 'Lápis',
    hint: 'O corpo comprido tem base circular e a ponta afina no topo.',
    answer: ['cilindro', 'cone'],
    explain: 'O corpo do lápis é um Cilindro e a ponta apontada é um Cone!',
    build() {
      const g = new THREE.Group();
      g.add(makePart(new THREE.CylinderGeometry(0.46, 0.46, 2.1, 28), 0xffc93c, [0, -0.22, 0], [0, 0, 0], [0, -0.7, 0]));
      g.add(makePart(new THREE.ConeGeometry(0.46, 0.78, 28), 0xf5cba7, [0, 1.22, 0], [0, 0, 0], [0, 0.75, 0]));
      g.add(makePart(new THREE.ConeGeometry(0.16, 0.28, 20), 0x1b2559, [0, 1.47, 0], [0, 0, 0], [0, 1.2, 0]));
      return g;
    }
  },
  {
    name: 'Casinha',
    hint: 'A parede tem formato de cubo e o telhado forma uma pirâmide.',
    answer: ['cubo', 'piramide'],
    explain: 'A casinha combina um Cubo na base com uma Pirâmide no telhado!',
    build() {
      const g = new THREE.Group();
      g.add(makePart(new THREE.BoxGeometry(1.55, 1.35, 1.55), 0xffd166, [0, -0.45, 0], [0, 0, 0], [0, -0.65, 0]));
      g.add(makePart(new THREE.ConeGeometry(1.34, 1.12, 4), 0xff5d5d, [0, 0.78, 0], [0, Math.PI / 4, 0], [0, 0.8, 0]));
      return g;
    }
  },
  {
    name: 'Foguete',
    hint: 'Repare no corpo comprido, no bico pontudo e na janela redonda.',
    answer: ['cilindro', 'cone', 'esfera'],
    explain: 'O foguete junta Cilindro (corpo), Cone (bico) e Esfera (janela)!',
    build() {
      const g = new THREE.Group();
      g.add(makePart(new THREE.CylinderGeometry(0.56, 0.56, 1.75, 28), 0xf8f9fa, [0, -0.1, 0], [0, 0, 0], [0, -0.55, 0]));
      g.add(makePart(new THREE.ConeGeometry(0.56, 0.88, 28), 0xff5d5d, [0, 1.22, 0], [0, 0, 0], [0, 0.85, 0]));
      g.add(makePart(new THREE.SphereGeometry(0.28, 20, 18), 0x3aa0ff, [0, 0.18, 0.5], [0, 0, 0], [0, 0.15, 0.75]));
      return g;
    }
  },
  {
    name: 'Boneco de Neve',
    hint: 'O corpo é feito de bolas arredondadas e o nariz parece um cone.',
    answer: ['esfera', 'cone'],
    explain: 'O boneco de neve usa Esferas no corpo e um Cone no nariz!',
    build() {
      const g = new THREE.Group();
      g.add(makePart(new THREE.SphereGeometry(0.92, 28, 22), 0xffffff, [0, -0.65, 0], [0, 0, 0], [0, -0.7, 0]));
      g.add(makePart(new THREE.SphereGeometry(0.64, 28, 22), 0xffffff, [0, 0.64, 0], [0, 0, 0], [0, 0.55, 0]));
      g.add(makePart(new THREE.ConeGeometry(0.16, 0.65, 18), 0xff7b00, [0, 0.64, 0.85], [Math.PI / 2, 0, 0], [0, 0.55, 0.85]));
      return g;
    }
  },
  {
    name: 'Torre',
    hint: 'Tem uma base quadrada embaixo e um cilindro no topo.',
    answer: ['cubo', 'cilindro'],
    explain: 'A torre combina um Cubo na base com um Cilindro em cima!',
    build() {
      const g = new THREE.Group();
      g.add(makePart(new THREE.BoxGeometry(1.42, 1.42, 1.42), 0x3aa0ff, [0, -0.45, 0], [0, 0, 0], [0, -0.65, 0]));
      g.add(makePart(new THREE.CylinderGeometry(0.52, 0.52, 1.12, 28), 0x2fcb8b, [0, 0.82, 0], [0, 0, 0], [0, 0.78, 0]));
      return g;
    }
  }
];

let current = 0;
let selected = new Set();
let wrongIds = new Set();
let exploded = false;
let explodeAmount = 0;
let firstTryHits = 0;
let hadError = false;
let hintsUsed = 0;
let results = [];
let soundOn = true;

const levelBadge = document.getElementById('level-badge');
const dotsEl = document.getElementById('progress-dots');
const hintCountEl = document.getElementById('hint-count');
const soundBtn = document.getElementById('sound-toggle');
const themeBtn = document.getElementById('theme-toggle');
const objectTitle = document.getElementById('object-title');
const btnExplode = document.getElementById('btn-explode');
const explodeText = document.getElementById('explode-text');
const btnHint = document.getElementById('btn-hint');
const canvasBox = document.getElementById('canvas-container');
const shapesGrid = document.getElementById('shapes-grid');
const feedbackBox = document.getElementById('feedback-box');
const btnNext = document.getElementById('btn-next');
const gameBoard = document.getElementById('game-board');
const victoryScreen = document.getElementById('victory-screen');
const victorySummary = document.getElementById('victory-summary');
const btnReplay = document.getElementById('btn-replay');
const btnNextGame = document.getElementById('btn-next-game');
const confettiLayer = document.getElementById('confetti-layer');

function applySavedPrefs() {
  try {
    const savedTheme = localStorage.getItem('formas3d-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    const savedSound = localStorage.getItem('formas3d-sound');
    if (savedSound === 'off') soundOn = false;
    else if (savedSound === 'on') soundOn = true;
  } catch (err) {}
  soundBtn.textContent = soundOn ? '🔊' : '🔇';
  soundBtn.title = soundOn ? 'Som ligado' : 'Som desligado';
}

let audioCtx = null;
function playTone(type) {
  if (!soundOn) return;
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

let scene, camera, renderer, modelGroup, animId = null;
let isDragging = false;
let prevX = 0;
let prevY = 0;
let rotX = 0.34;
let rotY = 0.58;

function resizeRenderer() {
  if (!renderer || !camera || !canvasBox) return;
  const w = canvasBox.clientWidth || 380;
  const h = canvasBox.clientHeight || 355;
  if (w > 0 && h > 0) {
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
}

function init3D() {
  const width = canvasBox.clientWidth || 380;
  const height = canvasBox.clientHeight || 355;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 1.45, 4.65);
  camera.lookAt(0, 0.15, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.domElement.style.touchAction = 'none';

  const dragTag = canvasBox.querySelector('.drag-tag');
  if (dragTag) dragTag.style.pointerEvents = 'none';
  canvasBox.innerHTML = '';
  canvasBox.appendChild(renderer.domElement);
  if (dragTag) canvasBox.appendChild(dragTag);

  scene.add(new THREE.AmbientLight(0xffffff, 1.3));
  const dir1 = new THREE.DirectionalLight(0xffffff, 1.65);
  dir1.position.set(3.8, 5.2, 4.2);
  scene.add(dir1);

  const dir2 = new THREE.DirectionalLight(0x7cc4ff, 0.95);
  dir2.position.set(-4.2, -1.8, -3.5);
  scene.add(dir2);

  const grid = new THREE.GridHelper(5.4, 10, 0x3aa0ff, 0x8fb8e3);
  grid.position.y = -1.45;
  scene.add(grid);

  modelGroup = new THREE.Group();
  modelGroup.rotation.order = 'YXZ';
  scene.add(modelGroup);

  window.addEventListener('resize', resizeRenderer);
  if (window.ResizeObserver && canvasBox) {
    const ro = new ResizeObserver(resizeRenderer);
    ro.observe(canvasBox);
  }

  if (animId) cancelAnimationFrame(animId);
  animate3D();
}

function clearModel() {
  if (!modelGroup) return;
  while (modelGroup.children.length > 0) {
    const c = modelGroup.children[0];
    modelGroup.remove(c);
    if (c.geometry) c.geometry.dispose();
    if (c.material) c.material.dispose();
  }
}

function loadLevelModel(levelIndex) {
  resizeRenderer();
  clearModel();
  const lvl = LEVELS[levelIndex];
  const built = lvl.build();
  while (built.children.length > 0) {
    modelGroup.add(built.children[0]);
  }
  rotX = 0.34;
  rotY = 0.58;
  modelGroup.rotation.y = rotY;
  modelGroup.rotation.x = rotX;
  exploded = false;
  explodeAmount = 0;
  btnExplode.classList.remove('active');
  if (explodeText) explodeText.textContent = 'Separar Peças';
}

function animate3D() {
  animId = requestAnimationFrame(animate3D);
  if (!renderer || !scene || !camera || !modelGroup) return;

  const targetExplode = exploded ? 1 : 0;
  explodeAmount += (targetExplode - explodeAmount) * 0.1;

  modelGroup.children.forEach((child) => {
    if (child.userData.basePos && child.userData.explodeOffset) {
      child.position.set(
        child.userData.basePos[0] + child.userData.explodeOffset[0] * explodeAmount,
        child.userData.basePos[1] + child.userData.explodeOffset[1] * explodeAmount,
        child.userData.basePos[2] + child.userData.explodeOffset[2] * explodeAmount
      );
    }
  });

  if (!isDragging) {
    rotY += 0.012;
  }
  modelGroup.rotation.y = rotY;
  modelGroup.rotation.x = rotX;
  renderer.render(scene, camera);
}

canvasBox.addEventListener('pointerdown', (e) => {
  isDragging = true;
  prevX = e.clientX;
  prevY = e.clientY;
  if (canvasBox.setPointerCapture) {
    try { canvasBox.setPointerCapture(e.pointerId); } catch (err) {}
  }
});

canvasBox.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - prevX;
  const dy = e.clientY - prevY;
  prevX = e.clientX;
  prevY = e.clientY;
  rotY += dx * 0.015;
  rotX = Math.max(-1.1, Math.min(1.1, rotX + dy * 0.012));
  if (modelGroup) {
    modelGroup.rotation.y = rotY;
    modelGroup.rotation.x = rotX;
  }
});

function stopDrag(e) {
  isDragging = false;
  if (e && e.pointerId && canvasBox.releasePointerCapture) {
    try { canvasBox.releasePointerCapture(e.pointerId); } catch (err) {}
  }
}
canvasBox.addEventListener('pointerup', stopDrag);
canvasBox.addEventListener('pointercancel', stopDrag);

function renderDots() {
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  for (let i = 0; i < LEVELS.length; i++) {
    const li = document.createElement('li');
    li.textContent = String(i + 1);
    if (i < results.length) li.classList.add(results[i] ? 'done' : 'bad');
    else if (i === current && !gameBoard.classList.contains('hidden')) li.classList.add('active');
    dotsEl.appendChild(li);
  }
  if (hintCountEl) hintCountEl.textContent = String(hintsUsed);
}

function setFeedback(type, msg) {
  feedbackBox.className = 'feedback-box ' + type;
  feedbackBox.textContent = msg;
  feedbackBox.classList.remove('hidden');
  feedbackBox.hidden = false;
}

function clearFeedback() {
  feedbackBox.classList.add('hidden');
  feedbackBox.hidden = true;
  feedbackBox.textContent = '';
}

function isLevelCompleted() {
  const ans = LEVELS[current].answer;
  return ans.every((id) => selected.has(id)) && selected.size === ans.length;
}

function handleShapeToggle(shapeId) {
  if (isLevelCompleted()) return;
  const ans = LEVELS[current].answer;
  const lvl = LEVELS[current];

  if (ans.includes(shapeId)) {
    selected.add(shapeId);
    playTone('select');
    renderShapes();

    if (isLevelCompleted()) {
      firstTryHits += 1;
      results.push(!hadError);
      playTone('ok');
      setFeedback('ok', 'Mandou muito bem! ' + lvl.explain);
      btnNext.textContent = current === LEVELS.length - 1 ? 'Concluir Fase 2 🏆' : 'Próxima fase →';
      btnNext.classList.remove('hidden');
      btnNext.hidden = false;
      renderDots();
    } else {
      const faltam = ans.length - selected.size;
      setFeedback('info', 'Boa! Forma certa marcada — ainda falta(m) ' + faltam + ' forma(s) neste objeto.');
    }
  } else {
    hadError = true;
    wrongIds.add(shapeId);
    playTone('bad');
    setFeedback('bad', 'Essa forma não faz parte do(a) ' + lvl.name + '! Continue aqui e tente outra.');
    renderShapes();
  }
}

function renderShapes() {
  shapesGrid.innerHTML = '';
  const completed = isLevelCompleted();
  const ans = LEVELS[current].answer;

  SHAPES.forEach((shape) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'shape-card';

    const isSelected = selected.has(shape.id);
    const isWrong = wrongIds.has(shape.id);

    if (isSelected) btn.classList.add('selected');
    if (isWrong) {
      btn.classList.add('wrong');
      btn.disabled = true;
    }
    if (completed) {
      btn.disabled = true;
      if (ans.includes(shape.id)) btn.classList.add('correct');
    }

    btn.innerHTML = shape.icon + '<span>' + shape.name + '</span>';
    btn.addEventListener('click', () => handleShapeToggle(shape.id));
    shapesGrid.appendChild(btn);
  });
}

function spawnConfetti() {
  if (!confettiLayer) return;
  confettiLayer.innerHTML = '';
  const colors = ['#FF5D5D', '#3AA0FF', '#2FCB8B', '#FFC93C', '#9B6BFF'];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = (1.8 + Math.random() * 1.8) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    confettiLayer.appendChild(piece);
  }
}

function loadLevel(index) {
  current = index;
  selected.clear();
  wrongIds.clear();
  hadError = false;
  clearFeedback();
  btnNext.classList.add('hidden');
  btnNext.hidden = true;

  const lvl = LEVELS[current];
  if (levelBadge) levelBadge.textContent = 'Fase ' + (current + 1) + ' de ' + LEVELS.length;
  if (objectTitle) objectTitle.textContent = lvl.name;

  renderDots();
  renderShapes();
  loadLevelModel(current);
}

btnExplode.addEventListener('click', () => {
  exploded = !exploded;
  btnExplode.classList.toggle('active', exploded);
  if (explodeText) {
    explodeText.textContent = exploded ? 'Juntar Peças' : 'Separar Peças';
  }
  playTone('select');
});

btnHint.addEventListener('click', () => {
  hintsUsed += 1;
  renderDots();
  setFeedback('info', '💡 Dica: ' + LEVELS[current].hint);
  playTone('select');
});

btnNext.addEventListener('click', () => {
  if (current < LEVELS.length - 1) {
    loadLevel(current + 1);
  } else {
    const percent2 = Math.round((firstTryHits / LEVELS.length) * 100);
    try {
      const prev = JSON.parse(localStorage.getItem('formas3d-progress') || '{}');
      prev.fase2 = {
        score: firstTryHits,
        total: LEVELS.length,
        percent: percent2,
        hintsUsed
      };
      localStorage.setItem('formas3d-progress', JSON.stringify(prev));
    } catch (err) {}

    gameBoard.classList.add('hidden');
    victoryScreen.classList.remove('hidden');
    if (victorySummary) {
      victorySummary.textContent =
        'Você completou ' + firstTryHits + ' de ' + LEVELS.length +
        ' montagens (' + percent2 + '%) usando ' + hintsUsed + ' dica(s)!';
    }
    renderDots();
    spawnConfetti();
  }
});

if (btnReplay) {
  btnReplay.addEventListener('click', () => {
    firstTryHits = 0;
    hintsUsed = 0;
    results = [];
    if (confettiLayer) confettiLayer.innerHTML = '';
    victoryScreen.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    playTone('select');
    loadLevel(0);
  });
}

if (btnNextGame) {
  btnNextGame.addEventListener('click', () => {
    window.location.href = 'fase3.html';
  });
}

soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? '🔊' : '🔇';
  soundBtn.title = soundOn ? 'Som ligado' : 'Som desligado';
  try {
    localStorage.setItem('formas3d-sound', soundOn ? 'on' : 'off');
  } catch (err) {}
  if (soundOn) playTone('select');
});

themeBtn.addEventListener('click', () => {
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
init3D();
loadLevel(0);