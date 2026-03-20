  let opened = false;
 
  const colors = ['#fde047','#fbbf24','#f59e0b','#fcd34d','#fef08a','#fde68a'];
  const petalContainer = document.getElementById('petals');
 
  function createPetal() {
    const p = document.createElement('div');
    p.classList.add('petal');
    const x = Math.random() * 100;
    const dur = 4 + Math.random() * 5;
    const delay = Math.random() * 6;
    const size = 10 + Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `left:${x}%;width:${size}px;height:${size*1.4}px;background:${color};animation-duration:${dur}s;animation-delay:${delay}s;`;
    petalContainer.appendChild(p);
    setTimeout(() => p.remove(), (dur + delay) * 1000);
  }
 
  for (let i = 0; i < 18; i++) createPetal();
  setInterval(createPetal, 900);
 
  function openEnvelope() {
    if (opened) {
      showFullLetter();
      return;
    }
    opened = true;
    document.getElementById('envelope').classList.add('open');
    document.getElementById('hint').classList.add('hidden');
    document.getElementById('seal').style.display = 'none';
    setTimeout(() => showFullLetter(), 1100);
  }
 
  function showFullLetter() {
    document.getElementById('fullLetter').classList.add('visible');
  }
 
  function closeLetter() {
    document.getElementById('fullLetter').classList.remove('visible');
    // Reset envelope to original state
    opened = false;
    document.getElementById('envelope').classList.remove('open');
    document.getElementById('hint').classList.remove('hidden');
    document.getElementById('seal').style.display = 'flex';
  }