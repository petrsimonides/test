const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snail = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 40,
  speed: 2
};

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

document.addEventListener('keydown', (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = true;
  }
});

document.addEventListener('keyup', (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = false;
  }
});

function update() {
  if (keys.ArrowUp) snail.y -= snail.speed;
  if (keys.ArrowDown) snail.y += snail.speed;
  if (keys.ArrowLeft) snail.x -= snail.speed;
  if (keys.ArrowRight) snail.x += snail.speed;

  snail.x = Math.max(0, Math.min(canvas.width - snail.size, snail.x));
  snail.y = Math.max(0, Math.min(canvas.height - snail.size, snail.y));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = snail.size + 'px serif';
  ctx.textBaseline = 'top';
  ctx.fillText('🐌', snail.x, snail.y);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
