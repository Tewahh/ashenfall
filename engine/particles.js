export function startFog() {
  const canvas = document.getElementById('fog');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.2,
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.y += p.speed;

      if (p.y > canvas.height) p.y = 0;

      ctx.fillStyle = 'rgba(255,255,255,.1)';
      ctx.fillRect(p.x, p.y, 2, 2);
    });

    requestAnimationFrame(loop);
  }

  loop();
}
