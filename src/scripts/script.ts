export function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + "%";
  });
}

export function initClickToCopy() {
  const copyElements = document.querySelectorAll<HTMLElement>('.copyable');

  copyElements.forEach((el) => {
    el.addEventListener('click', () => {
      const textToCopy = el.getAttribute('data-copy');
      
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          el.classList.add('copied');
          
          setTimeout(() => {
            el.classList.remove('copied');
          }, 1400);
        }).catch(err => {
          console.error('Ошибка при копировании: ', err);
        });
      }
    });
  });
}