const languages = {
    "en": "English",
    "ru": "Русский",
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
    "zh": "中文",
    "jp": "日本語",
    "it": "Italiano",
    "pt": "Português",
    "ar": "العربية",
    "hi": "हिन्दी",
    "tr": "Türkçe",
    "pl": "Polski",
    "ko": "한국어",
    "nl": "Nederlands",
    "he": "עברית",
    "sv": "Svenska",
    "da": "Dansk",
    "no": "Norsk",
    "fi": "Suomi",
    "el": "Ελληνικά",
    "hu": "Magyar",
    "th": "ไทย",
    "cs": "Čeština"
};

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.substring(0, 2);
    if (languages[langCode]) {
        setLanguage(langCode);
    } else {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country_code.toLowerCase();
                if (languages[countryCode]) {
                    setLanguage(countryCode);
                } else {
                    setLanguage("en");
                }
            })
            .catch(() => setLanguage("en"));
    }
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.getElementById('language-selector').value = lang;
    loadContent(lang);
}

function loadContent(lang) {
    const content = {
        "en": `
            <section id="home">
                <div class="container">
                    <h1>Welcome to My Multilingual Website</h1>
                    <p>This is a multilingual website with animations and enhanced security.</p>
                </div>
            </section>
            <section id="about">
                <div class="container">
                    <h2>About Us</h2>
                    <p>Here you will find detailed instructions on how to create a website and the benefits of learning web development.</p>
                </div>
            </section>
            <section id="benefits">
                <div class="container">
                    <h2>Why Learn to Create Websites?</h2>
                    <p>Learning web development has many advantages:</p>
                    <ul>
                        <li><strong>Career Opportunities:</strong> Web development skills are highly valued in the job market. Being able to create and manage websites opens up many career paths.</li>
                        <li><strong>Creative Expression:</strong> Web development provides extensive opportunities to realize creative ideas and projects.</li>
                        <li><strong>Financial Independence:</strong> Knowing how to create websites allows you to work as a freelancer, develop your own projects, and earn from them.</li>
                        <li><strong>Technical Literacy:</strong> Understanding the basics of web development helps you navigate the modern technology world better.</li>
                        <li><strong>Flexibility:</strong> The ability to work from anywhere in the world, providing a flexible work schedule.</li>
                    </ul>
                </div>
            </section>
            <section id="instruction">
                <div class="container">
                    <h2>Instructions for Creating Your Own Website</h2>
                    <section id="step1">
                        <h3>Step 1: Define Purpose and Planning</h3>
                        <p>Before you start creating your website, it's important to understand why you need it and what tasks it will perform...</p>
                    </section>
                    <section id="step2">
                        <h3>Step 2: Choose a Domain Name and Register It</h3>
                        <p>Choose a unique and memorable domain name, and register it using services such as GoDaddy or Namecheap...</p>
                    </section>
                    <!-- Add more sections for each step as outlined in the instructions -->
                </div>
            </section>
        `,
        "ru": `
            <section id="home">
                <div class="container">
                    <h1>Добро пожаловать на мой многоязычный сайт</h1>
                    <p>Это многоязычный сайт с анимацией и усиленной защитой.</p>
                </div>
            </section>
            <section id="about">
                <div class="container">
                    <h2>О нас</h2>
                    <p>Здесь вы найдете подробные инструкции по созданию сайта и узнаете, какие преимущества дает изучение веб-разработки.</p>
                </div>
            </section>
            <section id="benefits">
                <div class="container">
                    <h2>Почему стоит учиться создавать сайты?</h2>
                    <p>Обучение веб-разработке имеет много преимуществ:</p>
                    <ul>
                        <li><strong>Карьера:</strong> Навыки веб-разработки высоко ценятся на рынке труда. Умение создавать и управлять сайтами открывает множество карьерных путей.</li>
                        <li><strong>Творческое самовыражение:</strong> Веб-разработка предоставляет обширные возможности для реализации креативных идей и проектов.</li>
                        <li><strong>Финансовая независимость:</strong> Знание веб-разработки позволяет работать фрилансером, развивать собственные проекты и получать доход от них.</li>
                        <li><strong>Техническая грамотность:</strong> Понимание основ веб-разработки помогает лучше ориентироваться в мире современных технологий.</li>
                        <li><strong>Гибкость:</strong> Возможность работать из любой точки мира, что обеспечивает гибкий график работы.</li>
                    </ul>
                </div>
            </section>
            <section id="instruction">
                <div class="container">
                    <h2>Инструкции по созданию собственного сайта</h2>
                    <section id="step1">
                        <h3>Шаг 1: Определение цели и планирование</h3>
                        <p>Прежде чем приступить к созданию сайта, важно понять, для чего он вам нужен и какие задачи будет выполнять...</p>
                    </section>
                    <section id="step2">
                        <h3>Шаг 2: Выбор доменного имени и регистрация</h3>
                        <p>Выберите уникальное и запоминающееся доменное имя и зарегистрируйте его с помощью сервисов, таких как GoDaddy или Namecheap...</p>
                    </section>
                    <!-- Add more sections for each step as outlined in the instructions -->
                </div>
            </section>
        `,
        // Add more languages here
    };
    document.getElementById('content').innerHTML = content[lang];
}

function createLanguageSelector() {
    const selector = document.getElementById('language-selector');
    const select = document.createElement('select');
    select.onchange = () => setLanguage(select.value);

    for (const [key, value] of Object.entries(languages)) {
        const option = document.createElement('option');
        option.value = key;
        option.text = value;
        select.appendChild(option);
    }
    selector.appendChild(select);
}

document.addEventListener('DOMContentLoaded', () => {
    createLanguageSelector();
    detectLanguage();
});
