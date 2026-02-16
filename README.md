# Landing для Netlify Forms (статичний сайт)

Це статичний сайт (HTML/CSS/JS) з формою заявок через Netlify Forms.

## Структура
- index.html - головна
- about.html - про нас
- privacy.html - політика конфіденційності (noindex, без посилань у меню/футері)
- terms.html - умови використання (noindex, без посилань у меню/футері)
- styles.css
- script.js
- assets/favicon.svg
- assets/og-placeholder.png (заглушка)

## Як запустити локально
Відкрий index.html у браузері або підніми будь-який простий локальний сервер.

## Деплой на Netlify (безкоштовно)
1) Створи репозиторій на GitHub і залий ці файли в корінь репо.
2) Netlify -> Add new site -> Import from Git -> вибери репо.
3) Build settings:
   - Build command: (порожньо)
   - Publish directory: / (корінь)
4) Після деплою зайди в Netlify -> Forms:
   - Побачиш форму "lead" після першої відправки або після деплою (інколи з'являється після тестового submit).
   - Налаштуй email notifications у Forms -> Settings/Notifications (в інтерфейсі Netlify).

## Підключення купленого домену
1) Netlify -> Domain management -> Add domain.
2) Netlify підкаже DNS записи.
3) У реєстратора домену пропиши ці DNS записи.
4) Дочекайся оновлення DNS.
5) SSL (https) Netlify вмикає автоматично.

## Як "активувати" сторінки privacy/terms
Зараз вони не в меню і не у футері. Коли треба - додай посилання вручну, наприклад у футер:
- privacy.html
- terms.html

## Де міняти контент
У всіх сторінках стоїть текст-заглушка. Шукай "Текст-заглушка" і замінюй.
Також заміни "BRAND_NAME" на свою назву.
