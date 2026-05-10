import { translations } from './languages';

export function initLanguageSwitcher() {
  const ruBtn = document.getElementById('lang-ru');
  const enBtn = document.getElementById('lang-en');
  const elements = document.querySelectorAll<HTMLElement>('[data-key]');
  
  let currentLang: 'ru' | 'en' = 'ru';

  const switchLang = (newLang: 'ru' | 'en') => {
    if (currentLang === newLang) return;

    elements.forEach(el => el.classList.add('switching'));

    setTimeout(() => {
      elements.forEach(el => {
        const key = el.getAttribute('data-key') as keyof typeof translations.ru;
        if (translations[newLang][key]) {
          el.innerText = translations[newLang][key];
        }
      });

      ruBtn?.classList.toggle('active');
      enBtn?.classList.toggle('active');
      currentLang = newLang;

      elements.forEach(el => el.classList.remove('switching'));
    }, 300);
  };

  ruBtn?.addEventListener('click', () => switchLang('ru'));
  enBtn?.addEventListener('click', () => switchLang('en'));
}

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