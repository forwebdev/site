const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины июля 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://eng.uber.com/web-booking-flow/">Building a&nbsp;More Seamless Web Booking Flow for Uber</a></h3>
<p class="paragraph">Веб-приложение Uber 2 года спустя: Fusion.js вместо самописного фреймворка поверх Preact, десктопная версия, улучшенная производительность. Подробный рассказ о&nbsp;нововведениях и&nbsp;их&nbsp;предпосылках.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://jeffwilcox.blog/2019/06/scaling-25k/">Scaling from 2,000 to&nbsp;25,000 engineers on&nbsp;GitHub at&nbsp;Microsoft</a></h3>
<p class="paragraph">Как в&nbsp;Microsoft используют ГитХаб и&nbsp;как был пройден путь от&nbsp;2&nbsp;000 до&nbsp;25&nbsp;000 инженеров в&nbsp;организации на&nbsp;ГитХабе: подробнейший рассказ Джеффа Вилкокса.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/07/margins-in-css/">Everything You Need To&nbsp;Know About CSS Margins</a></h3>
<p class="paragraph">Рейчел Эндрю с&nbsp;обзором неочевидных, но&nbsp;важных нюансов маржинов вроде схлопывания и&nbsp;поведения внутри флекс-контейнеров.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/yandex/blog/460373/">&laquo;Под капотом&raquo; Турбо-страниц: архитектура технологии быстрой загрузки веб-страниц</a></h3>
<p class="paragraph">Стас Макеев с&nbsp;детальным обзором технических решений и&nbsp;метрик, стоящих за&nbsp;сервисом доставки облегчённых версий сайтов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://dev.to/vitalets/what-s-wrong-with-promise-allsettled-and-promise-any-5e6o">What&rsquo;s wrong with Promise.allSettled () and Promise.any ()?</a></h3>
<p class="paragraph">Виталий Потапов о&nbsp;неконсистентности и&nbsp;чрезмерном усложнении API новых комбинаторов промисов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4">When a&nbsp;rewrite isn&rsquo;t: rebuilding Slack on&nbsp;the desktop</a></h3>
<p class="paragraph">Подробный рассказ о&nbsp;том, как десктопный клиент Slack был постепенно модернизирован от&nbsp;jQuery и&nbsp;ручного управления DOM до&nbsp;новой архитектуры с&nbsp;Реактом и&nbsp;Редаксом.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://samsaccone.com/posts/why-is-my-webpack-build-slow.html">Why is&nbsp;my&nbsp;webpack build slow?</a></h3>
<p class="paragraph">Сэм Сакконе с&nbsp;обзором способов профилирования webpack-сборки для поиска узких мест.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/yandex/blog/459924/">Полный цикл тестирования React-приложений</a></h3>
<p class="paragraph">Наталья Стусь и&nbsp;Алексей Андросов рассказали, как устроено тестирование фронтенда в&nbsp;auto.ru.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://overreacted.io/algebraic-effects-for-the-rest-of-us/">Алгебраические эффекты для простых смертных</a></h3>
<p class="paragraph">Дэн Абрамов объясняет новую концепцию, которая в&nbsp;будущем может качественно изменить подход к&nbsp;программированию.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/yandex/blog/460811/">Общие компоненты силами разных команд</a></h3>
<p class="paragraph">Запись и&nbsp;расшифровка доклада Владимира Гриненко об&nbsp;эволюции подхода к&nbsp;разработке общей библиотеки компонентов в&nbsp;Яндексе.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/buildingfasterwithcomponents.html">How using component-based design helps us&nbsp;build faster</a></h3>
<p class="paragraph">Инженеры Twitter рассказали, как переход к&nbsp;компонентному подходу позволил им&nbsp;ощутимо ускорить разработку.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));