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
        achievementsTitle: "ДОСТИЖЕНИЯ",

        job_name_0: "ООО «Максима» – референс сервиса на Go для миграции легаси",
          job_list_0: `
            <li class="achievement-item">Интегрировал Firebird SQL как основную БД, настроив connection pool (MaxOpenConns, MaxIdleConns, ConnMaxLifetime) и thread-safe закрытие соединений через mutex.</li>
            <li class="achievement-item">Организовал миграции базы данных с использованием golang-migrate, создав версионированные миграции для таблиц, а также автоматическое применение миграций при старте приложения.</li>
            <li class= "achievement-item">Настроил структурированное логирование через uber-go/zap с контекстом операций, graceful shutdown по сигналам ОС с таймаутом 30 секунд и валидацию входящих DTO.</li>
            <li class="achievement-item">Настроил SSL/TLS termination в Nginx с поддержкой TLSv1.2 и TLSv1.3, cipher suite HIGH, что обеспечило безопасное HTTPS-соединение и сняло нагрузку криптографических операций с backend-сервиса.</li>
            <li class="achievement-item">Реализовал reverse proxy маршрутизацию с разделением трафика: API-запросы проксируются на Go backend, а остальной трафик — на фронтенд, с полной настройкой CORS (preflight, credentials, custom headers) для взаимодействия SPA с backend.</li>
          `,
          job_name_1: "Мессенджер для кафедры «Minor» – курсовой/дипломный проект",
          job_list_1: `
            <li class="achievement-item">Спроектировал и внедрил комплексную микросервисную архитектуру, объединившую межсервисное взаимодействие по gRPC, высокоскоростную шину данных NATS JetStream и гибридную систему хранения (PostgreSQL, Cassandra, Redis).</li>
            <li class="achievement-item">Спроектировал и развернул единый API-шлюз на базе Traefik, обеспечивший централизованную маршрутизацию HTTP и WebSocket трафика, балансировку нагрузки и терминацию SSL.</li>
            <li class="achievement-item">Спроектировал и развернул единый API-шлюз на базе Traefik, обеспечивший централизованную маршрутизацию HTTP и WebSocket трафика, балансировку нагрузки и терминацию SSL.</li>
            <li class="achievement-item">Разработал Gateway-сервис на языке Go для обеспечения мгновенного обмена данными через протокол WebSocket./li>
            <li class="achievement-item">Спроектировал и реализовал на языке Go микросервис уведомлений, обеспечивший мгновенную доставку Pushуведомлений и Email-оповещений.</li>
          `,
          job_name_2: "Менеджер паролей «Password manager» – пет-проект",
          job_list_2: `
            <li class="achievement-item">В контексте BubbleTea TUI спроектировал State Machine для переключения между экранами. Применил принцип Dependency Injection, чтc позволило подключать различные провайдеры хранилищ без изменения логики интерфейса.</li>
            <li class="achievement-item">Спроектировал и реализовал слой безопасности приложения, использовав алгоритм Argon2id. Реализовал шифрование базы данных по стандарту AES-256. Применил практики минимизации времени хранения открытых секретов в оперативной памяти.</li>
            <li class="achievement-item">Разработал высокопроизводительный модуль интеграции с S3-совместимыми объектными хранилищами, обеспечив надежную синхронизацию зашифрованных данных между локальным клиентом и облаком.</li>
            <li class="achievement-item">Реализовал механизм безопасного управления конфигурационными секретами, интегрировав приложение с системными хранилищами ОС (Linux Secret Service), что позволило полностью отказаться от хранения чувствительных данных в открытом виде.</li>
            <li class="achievement-item">Интегрировал инструмент golangci-lint, настроив более 15 линтеров. Это позволило на ранних этапах выявлять потенциальные утечки ресурсов, ошибки типизации и некорректное использование конкурентности.</li>
          `,
          job_name_3: "Курсовой проект «Rose Bank»",
          job_list_3: `
            <li class="achievement-item">Спроектировал и реализовал REST API на базе Gin и пула БД соединений pgx. Вынес сложные транзакционные процессы на уровень хранимых процедур PostgreSQL.</li>
            <li class="achievement-item">Обеспечил безопасное хранение учетных данных в базе, внедрив хеширование паролей с помощью bcrypt. Написал middleware для фреймворка Gin, которые осуществляют строгий ролевой контроль доступа (RBAC).</li>
            <li class="achievement-item">Разработал модуль автоматических E-mail уведомлений с использованием стандартного пакета net/smtp, который отвечает за рассылку сгенерированных паролей новым клиентам и оповещения безопасности при входе сотрудников в систему.</li>
            <li class="achievement-item">Реализовал надежный механизм создания бэкапов базы данных из Go-приложения, используя пакет os/exec для вызова утилиты pg_dump. Разработал фоновый планировщик на базе time.Ticker и горутин для автоматического запуска резервного копирования.</li>
            <li class="achievement-item">Настроил надежную обработку входящих HTTP-запросов со строгой валидацией JSON-структур на стороне сервера. Сконфигурировал CORS-политики для клиент-серверного взаимодействия. Написал оптимизированный Dockerfile с Multi-stage build.</li>
          `,
          job_name_4: `Хакатон НовГУ в сотрудничестве с АО "Корпорация Сплав" – призер (3 место)`,
          job_list_4: `
            <li class="achievement-item">Реализовал API Gateway, который агрегирует данные из БД, формирует строгий JSON-контракт и отправляет его нашему AI-агенту.</li>
            <li class="achievement-item">Спроектировал и внедрил PostgreSQL и написал оптимизированные SQL-запросы, которые собирают контекст для AI-агента: агрегируют историю сообщений текущего чата и список метаданных загруженных файлов пользователя.</li>
            <li class="achievement-item">Реализовал потоковую загрузку файлов (PDF, Word, RTF). Одной из сложнейших задач стало исправление кодировки имен файлов: вручную реализовал перекодирование из Latin-1 в UTF-8 на уровне буферов Node.js.</li>
            <li class="achievement-item">Реализовал механизм динамической сборки System Prompt. В зависимости от состояния бизнес-флагов (например, separate_conflicts), бэкенд на лету модифицирует инструкции для AI-агента, внедряя в них правила обработки противоречий, список доступных файлов и специфические требования к формату ответа (Markdown + HTML).</li>
          `,

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
        achievementsTitle: "ACHIEVEMENTS",

        job_name_0: "Maxima LLC – a reference service for Go legacy migration",
          job_list_0: `
            <li class="achievement-item">Integrated Firebird SQL as the main database, setting up a connection pool (MaxOpenConns, MaxIdleConns, ConnMaxLifetime) and thread-safe connection closure via mutex.</li>
            <li class="achievement-item">Organized database migrations using golang-migrate, creating versioned migrations for tables, as well as automatically applying migrations at application startup.</li>
            <li class="achievement-item">Configured structured logging via uber-go/zap with operation context, graceful shutdown on OS signals with a 30-second timeout, and validation of incoming DTOs.</li>
            <li class="achievement-item">I configured SSL/TLS termination in Nginx with support for TLSv1.2 and TLSv1.3, and the HIGH cipher suite, which ensured a secure HTTPS connection and reduced the burden of cryptographic operations on the backend service.</li>
            <li class="achievement-item">Implemented reverse proxy routing with traffic splitting: API requests are proxied to the Go backend, and other traffic is proxied to the frontend, with full CORS configuration (preflight, credentials, custom headers) for interaction between the SPA and the backend.</li>
          `,
        
          // Вторая карточка (index 1) - если добавите в массив еще одну работу
          job_name_1: "Messenger for the Minor Department – ​​coursework/graduation project",
          job_list_1: `
            <li class="achievement-item">Designed and implemented a comprehensive microservice architecture that combined gRPC interservice communication, a high-speed NATS JetStream data bus, and a hybrid storage system (PostgreSQL, Cassandra, Redis).</li>
            <li class="achievement-item">Designed and deployed a unified API gateway based on Traefik, providing centralized routing of HTTP and WebSocket traffic, load balancing, and SSL termination.</li>
            <li class="achievement-item">Implemented a secure session management mechanism based on JWT using Redis to implement Token Rotation.</li>
            <li class="achievement-item">Developed a Gateway service in Go to provide instant data exchange via the WebSocket protocol.</li>
            <li class="achievement-item">Designed and implemented a notification microservice in Go, ensuring instant delivery of Push notifications and email alerts.</li>
          `,
          job_name_2: "Password manager is a pet project.",
          job_list_2: `
            <li class="achievement-item">In the context of BubbleTea, TUI designed a state machine for switching between screens. Dependency injection was applied, allowing for the integration of different storage providers without changing the interface logic.</li>
            <li class="achievement-item">Designed and implemented the application's security layer using the Argon2id algorithm. Implemented database encryption using the AES-256 standard. Applied practices to minimize the time open secrets are stored in RAM.</li>
            <li class="achievement-item">Developed a high-performance integration module with S3-compatible object storage, ensuring reliable synchronization of encrypted data between the local client and the cloud.</li>
            <li class="achievement-item">Implemented a mechanism for securely managing configuration secrets by integrating the application with OS system storage (Linux Secret Service), which completely eliminated the need to store sensitive data in plain text.</li>
            <li class="achievement-item">I integrated the golangci-lint tool, configuring over 15 linters. This enabled early detection of potential resource leaks, type errors, and incorrect use of concurrency.</li>
          `,
          job_name_3: `Course project "Rose Bank"`,
          job_list_3: `
            <li class="achievement-item">Designed and implemented a REST API based on Gin and the pgx database connection pool. Moved complex transaction processes to PostgreSQL stored procedures.li>
            <li class="achievement-item">Ensured secure storage of credentials in the database by implementing password hashing using bcrypt. Wrote middleware for the Gin framework that implements strict role-based access control (RBAC).</li>
            <li class="achievement-item">Developed an automatic email notification module using the standard net/smtp package, which is responsible for sending generated passwords to new clients and security alerts when employees log into the system.</li>
            <li class="achievement-item">Implemented a reliable database backup mechanism from a Go application using the os/exec package to invoke the pg_dump utility. Developed a background scheduler based on time.Ticker and a goroutine for automatically running backups.</li>
            <li class="achievement-item">Configured reliable processing of incoming HTTP requests with strict validation of JSON structures on the server side. Configured CORS policies for client-server interactions. Wrote an optimized Dockerfile with a multi-stage build.</li>
          `,
          job_name_4: "The NovSU Hackathon in collaboration with JSC Splav Corporation – winner (3rd place)",
          job_list_4: `
            <li class="achievement-item">Implemented an API Gateway that aggregates data from the database, generates a strict JSON contract, and sends it to our AI agent.</li>
            <li class="achievement-item">Designed and implemented PostgreSQL and wrote optimized SQL queries that gather context for the AI ​​agent: they aggregate the current chat message history and the list of metadata for the user's uploaded files.</li>
            <li class="achievement-item">Implemented streaming file uploads (PDF, Word, RTF). One of the most challenging tasks was correcting filename encoding: I manually implemented conversion from Latin-1 to UTF-8 at the Node.js buffer level.</li>
            <li class="achievement-item">Implemented a dynamic build mechanism for System Prompt. Depending on the state of business flags (e.g., separate_conflicts), the backend modifies instructions for the AI agent on the fly, incorporating conflict handling rules, a list of available files, and specific response format requirements (Markdown + HTML).</li>
          `,

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
        <li>Graylog</li>
        <li>Prometheus</li>
        <li>VicrotiaMetrics</li>
        <li>Grafana</li>
        <li>OpenTelemetry</li>
        <li>Jaeger</li>
        </ul>
      </div>
      and logging, designing CI/CD pipelines. Covering code with unit, integration, e2e, and load tests.
      In my spare time, I am interested in
      <div class="has-details">
      DevOps
      <ul class="details-popup">
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Helm</li>
        <li>Terraform</li>
        <li>Ansible</li>
        <li>Zabbix</li>
    </ul>
      </div>
      and network engineering, slightly studying
      <div class="has-details">
        Frontend
        <ul class="details-popup">
          <li>TypeScript</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>
      , as well as practicing
      <div class="has-details">
        Linux
        <ul class="details-popup">
        <li>bash</li>
        <li>systemd</li>
        <li>htop</li>
        <li>grep</li>
        <li>wireshark</li>
        <li>strace</li>
        </ul>
      </div>.
    `,
    },
};
