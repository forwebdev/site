const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины мая 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-live.ru/vecssti-s-polej/w3c-i-whatwg-neuzheli-dolgozhdannyj-mir.html">W3C и&nbsp;WHATWG: неужели долгожданный&nbsp;мир?</a></h3>
<p class="paragraph">W3C и&nbsp;WHATWG наконец договорились объединить свои спецификации HTML и&nbsp;DOM и&nbsp;работать над ними совместно!</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.cloudflare.com/binary-ast/">Faster script loading with BinaryAST?</a></h3>
<p class="paragraph">Binary AST&nbsp;&mdash; новый формат, ускоряющий загрузку скриптов за&nbsp;счёт переноса фазы синтаксического разбора с&nbsp;клиента на&nbsp;сервер. Инженеры Mozilla, Facebook, Bloomberg и&nbsp;Cloudflare подготовили его первые реализации и&nbsp;поделились предварительными результатами.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/452974/">Асинхронное программирование (полный курс)</a></h3>
<p class="paragraph">Серия видеоуроков и&nbsp;сопутствующих примеров кода по&nbsp;всем аспектам асинхронного программирования от&nbsp;Тимура Шемсединова.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://cssgrid-generator.netlify.com/">CSS Grid Generator</a></h3>
<p class="paragraph">Визуальный генератор раскладки на&nbsp;CSS-гридах&nbsp;от&nbsp;Сары Дрэснер.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/vk/blog/449720/">Как оседлать радугу: история создания тёмной темы</a></h3>
<p class="paragraph">Дизайнеры VK&nbsp;рассказали, как они сделали тёмную тему и&nbsp;попутно сформировали глобальный подход к&nbsp;работе с&nbsp;цветами на&nbsp;всех платформах.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://rushjs.io/">Rush: a&nbsp;scalable monorepo manager for the web</a></h3>
<p class="paragraph">Альтернатива Lerna для работы с&nbsp;JavaScript-монорепозиториями, разрабатываемая и&nbsp;используемая в&nbsp;Microsoft.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));