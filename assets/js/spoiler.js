document.querySelectorAll('.character-voice').forEach(char => {
  if (char.querySelector('.season-tag.spoil')) {
    const mainImg = char.querySelector('img:not(.overlay-img)');
    if (!mainImg) return;

    // blur only the main character image
    mainImg.style.filter = 'blur(8px)';

    // create reveal button
    const btn = document.createElement('button');
    btn.className = 'reveal-button';
    btn.textContent = 'Reveal';

    // position button centered over the image
    char.style.position = 'relative';
    btn.style.position = 'absolute';
    btn.style.top = '50%';
    btn.style.left = '50%';
    btn.style.transform = 'translate(-50%, -50%)';
    btn.style.zIndex = '10';
    btn.style.padding = '6px 12px';
    btn.style.background = 'rgba(0,0,0,0.6)';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '6px';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
      mainImg.style.filter = 'none';
      btn.remove();
    });

    char.appendChild(btn);
  }
});
