// navigation functions
import { tacs } from 'publican';

// <article> link
export function articleLink( data, headTag = 'h2' ) {

  if (!data?.link || !data?.title) return '';

  return `
    <article>
      <a href="${ data.link }">
        <${ headTag }>${ tacs.lib.feed.escape( data.title ) }</${ headTag }>

        <p class="meta">
          ${ data.modified || data.date ? `<time datetime="${ tacs.lib.format.dateISO( data.modified || data.date ) }">${ tacs.lib.format.dateHuman( data.modified || data.date ) }</time>` : '' }
          ${ data?.wordCount ? ` :: ${ tacs.lib.format.numberRound( data.wordCount ) } words, ${ tacs.lib.format.numberRound( Math.ceil( data.wordCount / 200 ) ) }-minute read` : ''}
        </p>

        ${ data.description ? `<p class="description">${ tacs.lib.feed.escape( data.description ) }</p>` : '' }
      </a>
    </article>
  `;

}
