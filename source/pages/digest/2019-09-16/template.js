const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины сентября 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.caniemail.com">Can I&nbsp;email&hellip;</a></h3>
<p class="paragraph">Таблица доступности возможностей веб-платформы в&nbsp;email-движках.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/revolut/how-we-learned-to-stop-worrying-and-love-graphql-80a5f83f36d9">How we&nbsp;learned to&nbsp;stop worrying and love GraphQL</a></h3>
<p class="paragraph">Инженеры Revolut о&nbsp;том, почему и&nbsp;как они начали использовать GraphQL.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/">Bottom Navigation Pattern On&nbsp;Mobile Web Pages: A&nbsp;Better Alternative?</a></h3>
<p class="paragraph">Артур Леонов предлагает улучшить UX&nbsp;мобильных сайтов, перенеся навигацию вниз.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://instagram-engineering.com/making-instagram-com-faster-part-2-f350c8fba0d4">Making Instagram.com faster: Part&nbsp;2</a></h3>
<p class="paragraph">Вторая часть рассказа об&nbsp;ускорении веб-версии Instagram, посвящённая прогрессивной загрузке HTML.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/">Overflow And Data Loss In&nbsp;CSS</a></h3>
<p class="paragraph">Рэйчел Эндрю о&nbsp;ситуациях, в&nbsp;которых может возникнуть переполнение контейнера содержимым, и&nbsp;современных средствах CSS для более надёжной вёрстки под неизвестное количество содержимого.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/09/migrating-design-systems-sketch-figma/">Moving From Sketch To&nbsp;Figma: A&nbsp;Case Study Of&nbsp;Migrating Design Systems</a></h3>
<p class="paragraph">Переход со&nbsp;Sketch на&nbsp;Figma, опыт дизайнеров Help Scout: мотивация, пошаговый план переезда и&nbsp;выводы.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/viraptor/reverse-interview">Reverse interview</a></h3>
<p class="paragraph">Список вопросов, которые соискателю стоит задать компании на&nbsp;собеседовании.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));