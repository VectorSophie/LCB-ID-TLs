document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  document.querySelectorAll('.character-gallery a.character-voice').forEach(a => {
    const hasSpoiler = a.querySelector('.spoil');

    if (hasSpoiler) {
      a.classList.add('spoiler');

      const btn = document.createElement('button');
      btn.textContent = 'Reveal Spoiler';
      btn.className = 'reveal-button';
      a.appendChild(btn);

      btn.addEventListener('click', e => {
        e.preventDefault();
        a.classList.add('revealed');       // Reveal character image
        body.classList.add('bg-revealed'); // Reveal body background
      });
    }

    a.addEventListener('click', e => {
      e.preventDefault();
      const bgUrl = a.dataset.background;
      if (bgUrl) {
        body.style.backgroundImage = `url('${bgUrl}')`;
        // Add blur initially if spoiler
        if (hasSpoiler) {
          body.classList.add('blurred-bg');
        } else {
          body.classList.remove('blurred-bg');
        }
      }
    });
  });
});
