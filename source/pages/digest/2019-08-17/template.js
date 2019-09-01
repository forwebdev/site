const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины августа 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://learn.javascript.ru/">Современный учебник JavaScript</a></h3>
<p class="paragraph">Вышла новая редакция современного учебника JavaScript: используется ES2019, убраны устаревшие темы, добавлено множество новых тем, улучшена структура изложения.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/updates/2019/08/contact-picker">A&nbsp;Contact Picker for the Web</a></h3>
<p class="paragraph">Введение в&nbsp;Contact Picker, новый экспериментальный API для доступа к&nbsp;контактам пользователя.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/directum/blog/462055/">Опыт перевода большого проекта с&nbsp;Flow на&nbsp;TypeScript</a></h3>
<p class="paragraph">Инженеры DIRECTUM о&nbsp;причинах, процессе и&nbsp;проблемах перевода большого проекта с&nbsp;Flow на&nbsp;TypeScript.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://instagram-engineering.com/making-instagram-com-faster-part-1-62cc0c327538">Making Instagram.com faster: Part&nbsp;1</a></h3>
<p class="paragraph">Первая часть рассказа об&nbsp;ускорении веб-версии Instagram: предзагрузка ресурсов и&nbsp;механизм подгрузки изображений в&nbsp;ленте.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-live.ru/css/fantasticheskie-veb-specifikacii-i-gde-oni-obitayut.html">Фантастические веб-спецификации и&nbsp;где они обитают</a></h3>
<p class="paragraph">Илья Стрельцын о&nbsp;том, что нужно знать для ориентирования в&nbsp;спецификациях.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/lanit/blog/460625/">Как я&nbsp;не&nbsp;занял первое место в&nbsp;конкурсе для JavaScript-разработчиков от&nbsp;Telegram</a></h3>
<p class="paragraph">Валерий Шибанов об&nbsp;опыте разработки библиотеки для рисования графиков для конкурса Telegram.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/462945/">Генерируем одноразовые пароли для 2FA в&nbsp;JS&nbsp;с&nbsp;помощью Web Crypto API</a></h3>
<p class="paragraph">Александр Хованский на&nbsp;практике разобрался, как устроена двухфакторная аутентификация и&nbsp;как реализовать генерацию одноразовых паролей на&nbsp;JS.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://web.dev/largest-contentful-paint/">Largest Contentful Paint</a></h3>
<p class="paragraph">Филип Уолтон о&nbsp;новой метрике быстродействия для измерения скорости отрисовки значимого содержимого страницы.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.algolia.com/netinfo-api-algolia-javascript-client/">Using NetInfo API to&nbsp;Improve Algolia&rsquo;s JavaScript Client</a></h3>
<p class="paragraph">Инженеры Algolia об&nbsp;опыте применения Network Information API для определения скорости сети и&nbsp;динамической настройки таймаутов.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));