const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины октября 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.chriszacharias.com/a-conspiracy-to-kill-ie6">A&nbsp;Conspiracy To&nbsp;Kill IE6</a></h3>
<p class="paragraph">Захватывающая история о&nbsp;том, как разработчики YouTube практически убили IE6 в&nbsp;2009 году, тайно выложив в&nbsp;продакшен баннер с&nbsp;предложением перейти на&nbsp;другие браузеры.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@__xuorig__/is-graphql-still-relevant-in-an-http2-world-64964f207b8">Is&nbsp;GraphQL Still Relevant in&nbsp;an&nbsp;HTTP2 World?</a></h3>
<p class="paragraph">Марк-Андре Жиру объясняет, чем на&nbsp;самом деле ценен GraphQL и&nbsp;почему получение данных одним запросом&nbsp;&mdash; не&nbsp;главное преимущество.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://web.dev/sms-receiver-api-announcement">Verify Phone Numbers on&nbsp;the Web with the SMS Receiver API</a></h3>
<p class="paragraph">Введение в&nbsp;новый SMS Receiver API, упрощающий ввод одноразовых паролей из&nbsp;SMS в&nbsp;веб-приложениях.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://ru.makefile.site">Make: современное руководство</a></h3>
<p class="paragraph">Краткая выжимка наиболее полезных для современных разработчиков возможностей Make от&nbsp;Ивана Немытченко.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://stripe.com/en-pt/blog/accessible-color-systems">Designing Accessible Color Systems</a></h3>
<p class="paragraph">Дизайнеры Stripe об&nbsp;опыте и&nbsp;проблемах подбора доступных и&nbsp;в&nbsp;то&nbsp;же время красивых цветов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-live.ru/tricks/malenkie-xitrosti-kastomnyx-svojstv-css-peremennyx.html">Маленькие хитрости кастомных свойств</a></h3>
<p class="paragraph">Илья Стрельцын делится неочевидными возможностями и&nbsp;нюансами применения CSS-переменных.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://slack.engineering/gantry-slacks-fast-booting-frontend-framework-fb70c8eed2fd">Gantry: Slack&rsquo;s Fast-booting Frontend Framework</a></h3>
<p class="paragraph">Инженеры Slack рассказали, зачем они разработали внутренний фреймворк для быстрой инициализации приложения и&nbsp;как он&nbsp;им&nbsp;помог.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/GAjoVRmipcU">How to&nbsp;REVERT CSS&nbsp;&mdash; Get Back to&nbsp;Default Browser Style</a></h3>
<p class="paragraph">Мириам Сюзан рассказывает, как работает новое значение revert в&nbsp;CSS и&nbsp;чем оно отличается от&nbsp;inherit/initial/unset.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://cloudfour.com/thinks/all-mixed-up-isomorphic-sorting-gone-wrong/">All Mixed Up: Isomorphic Sorting Gone Wrong</a></h3>
<p class="paragraph">Почему сортировка в&nbsp;изоморфном приложении может сломаться и&nbsp;как это исправить? Пол Геберт по&nbsp;мотивам бага на&nbsp;рабочем проекте.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://justmarkup.com/articles/2019-10-21-image-orientation/">Image Orientation on&nbsp;the Web</a></h3>
<p class="paragraph">Майкл Шарналь объясняет, почему браузеры могут некорректно отображать изображения и&nbsp;как этого избежать.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://hacks.mozilla.org/2019/10/the-two-value-syntax-of-the-css-display-property/">The Two-Value Syntax of&nbsp;the CSS Display Property</a></h3>
<p class="paragraph">Рэйчел Эндрю о&nbsp;причинах рефакторинга спецификации и&nbsp;новых более логичных значениях свойства display.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/samsung-internet-dev/introducing-progressive-web-apps-to-samsung-galaxy-store-47ecd317725b">Introducing Progressive Web Apps to&nbsp;Samsung Galaxy Store</a></h3>
<p class="paragraph">Samsung начали распространять PWA через Galaxy Store: подробности и&nbsp;инструкции для разработчиков по&nbsp;добавлению своих приложений.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));