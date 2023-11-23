const paths = require('../docusaurus.paths.js');
const baseUrl = paths.baseUrl;

const isGlossaryMenuItem = () => {
    // When are we in the glossary?
    const urlIsGlossary = baseUrl + 'docs/glossary'
    // And, are we in the glossary? Test if urlIsGlossary is in window.location.pathname
    const urlIsGlossaryInPathname = window.location.pathname.includes(urlIsGlossary);

    // if we are not in the glossary, return
    if (!urlIsGlossaryInPathname) {
        return;
    }

    // everything after the last slash in the url pathname
    const pathname = window.location.pathname.split('/').pop();

    // in pathname remove everything after the first hash and everything after the first question mark
    const pathnameWithoutHash = pathname.split('#')[0];
    const pathnameWithoutQuestionMark = pathnameWithoutHash.split('?')[0];

    // create a url to the wiki page
    const urlToWiki = baseUrl + 'wiki/' + pathnameWithoutQuestionMark + '/';

    // create a link to the wiki page
    const linkToWiki = document.createElement('a');

    // add classes to the link
    linkToWiki.classList.add('btn', 'btn-outline-secondary');

    // set the link's href TODO: 'https://github.com/WebOfTrust' in a variable
    linkToWiki.setAttribute('href', 'https://github.com/WebOfTrust' + urlToWiki);

    // set the link's text
    linkToWiki.innerText = 'Edit this page on GitHub Wiki';

    // create a paragraph element
    const paragraphElement = document.createElement('p');

    // append the link to the paragraph
    paragraphElement.appendChild(linkToWiki);

    // add the paragraph to the page at the end of the page
    document.querySelector('.markdown').appendChild(paragraphElement);
};

// function to call when the route changes
export function onRouteDidUpdate({ location, previousLocation }) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    // if (location.pathname === previousLocation?.pathname) return;
    isGlossaryMenuItem();
}

