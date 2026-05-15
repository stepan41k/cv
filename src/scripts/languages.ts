export const translations = {
    ru: {
        // Хедер и статус
        name: "РАСПОПОВ СТЕПАН",
        role: "Golang Backend Developer",
        status: "Открыт к предложениям",

        // Заголовки секций
        skills: "НАВЫКИ",
        education: "ОБРАЗОВАНИЕ",
        about: "О СЕБЕ",
        experience: "ОПЫТ РАБОТЫ",
        achievements: "ДОСТИЖЕНИЯ",

        // Контакты и уведомления
        copied: "Скопировано!",
        github: "GitHub",
        telegram: "Telegram",

        // Образование
        eduInstitution:
            "Новгородский государственный университет им. Ярослава Мудрого",
        eduCity: "Великий Новгород",
        eduFaculty: "Институт электронных и информационных систем",
        eduSpecialty: "Информатика и вычислительная техника",
        eduPeriod: "2022 — 2027",

        achievementsFullText: `

        `,

        // Сложный блок "О себе" с HTML
        // ВАЖНО: используйте те же классы, что в index.astro
        aboutFullText: `
      Разрабатываю backend-сервисы на <b>Go</b>. Работаю с построением
      <div class="has-details">
        асинхронных пайплайнов
        <ul class="details-popup">
          <li>Kafka</li>
          <li>NATS</li>
          <li>RabbitMQ</li>
        </ul>
      </div>
      и идемпотентной обработкой. Настраиваю
      <div class="has-details">
        Observability
        <ul class="details-popup">
          <li>Prometheus</li>
          <li>Grafana</li>
          <li>Jaeger</li>
          <li>VictoriaMetrics</li>
        </ul>
      </div>
      и логирование, выстраиваю CI/CD пайплайны. Покрываю написанный код юнит, интеграционными, e2e, нагрузочными тестами.
      В свободное время интересуюсь <b>DevOps</b> и сетевой инженерией, немного изучаю
      <div class="has-details">
        Frontend
        <ul class="details-popup">
          <li>TypeScript</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>, а также интересуюсь и практикуюсь в
      <div class="has-details">
        Linux
        <ul class="details-popup">
          <li>Bash scripting</li>
          <li>Systemd</li>
          <li>Nginx / IP Tables</li>
        </ul>
      </div>.
    `,
    },

    en: {
        // Header & Status
        name: "STEPAN RASPOPOV",
        role: "Golang Backend Developer",
        status: "Open to offers",

        // Section Titles
        skills: "SKILLS",
        education: "EDUCATION",
        about: "ABOUT ME",
        experience: "EXPERIENCE",
        achievements: "ACHIEVEMENTS",

        // Contacts & Tooltips
        copied: "Copied!",
        github: "GitHub",
        telegram: "Telegram",

        // Education
        eduInstitution: "Yaroslav-the-Wise Novgorod State University",
        eduCity: "Veliky Novgorod",
        eduFaculty: "Institute of Electronic and Information Systems",
        eduSpecialty: "Computer Science and Engineering",
        eduPeriod: "2022 — 2027",

        // About Me Block (English HTML)
        aboutFullText: `
      Developing backend services in <b>Go</b>. Working on building
      <div class="has-details">
        asynchronous pipelines
        <ul class="details-popup">
          <li>Kafka</li>
          <li>NATS</li>
          <li>RabbitMQ</li>
        </ul>
      </div>
      and idempotent processing. Setting up
      <div class="has-details">
        Observability
        <ul class="details-popup">
          <li>Prometheus</li>
          <li>Grafana</li>
          <li>Jaeger</li>
          <li>VictoriaMetrics</li>
        </ul>
      </div>
      and logging, designing CI/CD pipelines. Covering code with unit, integration, e2e, and load tests.
      In my spare time, I am interested in <b>DevOps</b> and network engineering, slightly studying
      <div class="has-details">
        Frontend
        <ul class="details-popup">
          <li>TypeScript</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>, as well as practicing
      <div class="has-details">
        Linux
        <ul class="details-popup">
          <li>Bash scripting</li>
          <li>Systemd</li>
          <li>Nginx / IP Tables</li>
        </ul>
      </div>.
    `,
    },
};
