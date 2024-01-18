/**
 * Script Description:
 * 
 * Title: Kerific Glossary Highlighter and Popup Generator
 * 
 * Purpose:
 * This script is designed to enhance web pages by highlighting specific terms 
 * related to the 'Keri' project and displaying informative popups when these terms are clicked.
 * It dynamically injects CSS for styling and utilizes JSON data for glossary terms.
 * 
 * Key Features:
 * - Dynamically highlights glossary terms found in the web page content.
 * - Generates popups with definitions and additional information for each highlighted term.
 * - Fetches glossary data from a JSON source and processes it to combine and manage terms.
 * - Provides a clean-up mechanism to remove or update highlights and popups upon re-injection.
 * - Ensures compatibility and non-intrusiveness by using scoped variables and styles.
 * - Includes version control for extension updates and consistency in data display.
 * 
 * Usage:
 * Intended for use as part of a browser extension. The script is injected into web pages 
 * when the extension icon is clicked, enabling real-time highlighting and information display.
 * 
 * Implementation Details:
 * - Utilizes JavaScript and CSS for DOM manipulation and styling.
 * - Employs AJAX for fetching remote JSON data.
 * - Adopts best practices for performance, such as avoiding global variables and minimizing DOM access.
 * 
 * Note:
 * This script is optimized for reuse and designed to gracefully handle multiple injections 
 * into the same page without causing conflicts or errors.
 */

/* 
    Use Immediately Invoked Function Expressions(IIFE): Wrap your entire code in an IIFE.This creates a new scope each time the script is run, preventing variable and function redeclarations. This is a common pattern for bookmarklets and scripts injected into pages:

    (function () {
        // Your code here
    })();
*/
(function () {

    /*
     * CONFIGURATION
     */


    const glossaryJsonUrl = "https://weboftrust.github.io/WOT-terms/json/external-glosseries/glossaries-combined/all-glossaries.json";

    const versionNumberUrl = "https://weboftrust.github.io/WOT-terms/js/kerific/manifest.json";

    // const headerStyle is created from options.scss manually
    const headerStyle = `
.close-cross{font-size:1.5em;display:block;top:.5em;right:1em;cursor:pointer;position:absolute;top:10px;right:10px;}.kerific-popup{all:initial;font:100% georgia,sans-serif;line-height:1.88889;color:#555753;margin:0;padding:0;box-sizing:border-box;background-color:#fff;display:none;position:fixed;top:10px;right:10px;width:25%;max-height:50%;overflow:scroll;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;box-shadow:0 0 10px rgba(0,0,0,.035),0 0 80px rgba(0,0,0,.07);z-index:1000;}.kerific-popup h2{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif!important;font-size:1.7em;letter-spacing:2px;margin-bottom:0;color:#f38787;}.kerific-popup h1,.kerific-popup h3,.kerific-popup h4,.kerific-popup h5,.kerific-popup h6{font:italic normal 1.4em georgia,sans-serif;color:#337dbe;}.kerific-popup h3{font-size:1.3em;letter-spacing:1px;margin-bottom:0;}.kerific-popup h4,.kerific-popup h5,.kerific-popup h6{font-size:1.1em;letter-spacing:1px;margin-bottom:0;}.kerific-popup p{margin-top:0;}.kerific-popup a:link{font-weight:bold;text-decoration:none;color:#B7A5DF;}.kerific-popup a:visited{font-weight:bold;text-decoration:none;color:#D4CDDC;}.kerific-popup a:hover,.kerific-popup a:focus,.kerific-popup a:active{text-decoration:underline;color:#9685BA;}.kerific-popup abbr{border-bottom:none;}.kerific-popup hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25;}.kerific-popup .card-header,.kerific-popup .card-body,.kerific-popup .card-footer{padding:20px;}.kerific-popup .card-header{position:sticky;top:0!important;background-color:#eee;text-align:center;}.kerific-popup .card-header h2{font-size:25px;margin:0;}.kerific-popup .card-header p{margin:0;}.kerific-popup .card-body h3{font-size:25px;margin:0 0 1em 0;text-align:center;}.kerific-popup .card-footer{position:sticky;bottom:0;background-color:#eee;}span.kerific-match{position:relative;background:rgba(241,209,255,.3176470588);padding:0 .5em;}button.kerific-match{display:inline-block;font-size:.8em;border:1px solid #ffa0d6;border-radius:5px;padding:.1em .6em;margin:.5em .5em 1.5em 0;cursor:pointer;background:#f1d1ff;box-shadow:0 0 .3px rgba(0,0,0,.02),0 0 .8px rgba(0,0,0,.028),0 0 1.5px rgba(0,0,0,.035),0 0 2.7px rgba(0,0,0,.042),0 0 5px rgba(0,0,0,.05),0 0 12px rgba(0,0,0,.07);}#loading-indicator{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;border:1px solid #333;border-radius:20px;background:#e5ecff;padding:3em;z-index:10000000000000000;}.displayBlock{display:block!important;}.displayNone{display:none!important;}
    `;

    /*
     * END CONFIGURATION
     */


    let popUpLedger = [];


    // Insert https://animate.style/ via CDN
    const animateCss = document.createElement('link');
    animateCss.rel = 'stylesheet';
    animateCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(animateCss);

    /*
     * CSS
     */

    // // A: Insert local css for testing
    // const generalCss = document.createElement('link');
    // generalCss.rel = 'stylesheet';
    // generalCss.href = 'http://localhost:3000/WOT-terms/js/kerific/styles/options.css';
    // document.head.appendChild(generalCss);

    // B: Insert <style> element into page: headerStyle
    const headerStyleElement = document.createElement('style');
    headerStyleElement.innerHTML = headerStyle;
    document.head.appendChild(headerStyleElement);

    /*
     * END CSS
     */



    // In case the script runs multiple times on the same page, remove all previous popups and highlights
    // Remove all elements with class="kerific-popup" and class="kerific-term-highlight"
    document.querySelectorAll('.kerific-popup').forEach(element => {
        element.remove();
    });
    document.querySelectorAll('.kerific-term-highlight').forEach(element => {
        element.remove();
    });

    // Find every .kerific-match and remove the span around it
    document.querySelectorAll('.kerific-match').forEach(element => {
        element.outerHTML = element.innerHTML;
    }
    );

    // Add loading indicator
    const loadingIndicator = document.createElement('h1');
    loadingIndicator.id = 'loading-indicator';

    // loadingIndicator.style.cssText = cssTextLoadingIndicator;
    loadingIndicator.textContent = 'Loading glossaries…';
    document.body.appendChild(loadingIndicator);

    // Combine JSON objects with identical terms.
    function combineJSONObjects(jsonArray) {
        const combined = {};

        jsonArray.forEach(item => {
            // Check if the term already exists in the combined object
            if (!combined[item.term]) {
                // If not, initialize it
                combined[item.term] = {
                    term: item.term,
                    anchor: item.anchor,
                    definitions: [...item.definitions]
                };
            } else {
                // If exists, concatenate the anchor and merge the definitions
                combined[item.term].anchor += "-" + item.anchor;
                combined[item.term].definitions = combined[item.term].definitions.concat(item.definitions);
            }
        });

        // Convert the combined object back to an array
        return Object.values(combined);
    }

    let glossaryPopups = new Map();
    let extensionVersionNumber;

    // Fetch and process glossary data
    // First, fetch the version number
    fetch(versionNumberUrl)
        .then(response => response.json())
        .then(versionData => {
            // Process the version data
            extensionVersionNumber = versionData.version;

            // Now that you have the version number, fetch the glossary
            return fetch(glossaryJsonUrl);
        })
        .then(response => response.json())
        .then(glossaries => {
            // Make all combinedGlossaries terms lowercase and join identical terms to one term
            glossaries.forEach(eachTerm => {
                eachTerm.term = eachTerm.term.toLowerCase();
            });

            // Combine JSON objects with identical terms. Needed since terms are now all lowercase.
            let combinedGlossaries = combineJSONObjects(glossaries);

            // Loop through all terms in the glossary
            combinedGlossaries.forEach(combinedGlossariesEntry => {
                // Example glossaryEntry:
                // {
                //   "term": "aal",
                //   "anchor": "h.l6kidod3jk1m",
                //   "definitions": [
                //     {
                //       "organisation": "ToIP",
                //       "definition": "<p class=\"c2\"><span>See: <a href=\"foo\">authenticator surance level</a></p>",
                //       "url": "bar"
                //     }
                //   ]
                // }

                function wrapTextWithTreeWalker(rootElement, string, spanClass) {
                    const escapedString = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regexPattern = `\\b${escapedString}\\b`;
                    const searchRegex = new RegExp(regexPattern, 'gi');

                    const walker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, null, false);

                    let nodesToReplace = [];
                    let node;
                    while ((node = walker.nextNode())) {
                        let matches = [];
                        let match;
                        let lastOffset = 0;

                        while ((match = searchRegex.exec(node.nodeValue)) !== null) {
                            matches.push({
                                start: match.index,
                                end: searchRegex.lastIndex
                            });
                            lastOffset = searchRegex.lastIndex;
                        }

                        if (matches.length > 0) {
                            nodesToReplace.push({ node, matches });
                        }
                    }

                    nodesToReplace.forEach(({ node, matches }) => {
                        let parentNode = node.parentNode;
                        let lastOffset = 0;

                        matches.forEach(match => {
                            // Text before the match
                            if (match.start > lastOffset) {
                                parentNode.insertBefore(document.createTextNode(node.nodeValue.substring(lastOffset, match.start)), node);
                            }

                            // The match
                            const span = document.createElement('span');
                            span.className = spanClass;
                            span.textContent = node.nodeValue.substring(match.start, match.end);
                            parentNode.insertBefore(span, node);

                            lastOffset = match.end;
                        });

                        // Text after the last match
                        if (lastOffset < node.nodeValue.length) {
                            parentNode.insertBefore(document.createTextNode(node.nodeValue.substring(lastOffset)), node);
                        }

                        // Remove the original node
                        parentNode.removeChild(node);
                    });
                }

                wrapTextWithTreeWalker(document.querySelector('body'), combinedGlossariesEntry.term.toLowerCase(), "kerific-match");
            });

            function createButtonsInContainers() {
                let uniqueButtons = {};

                // Find all elements with the class 'kerific-match'
                const matches = document.querySelectorAll('.kerific-match');

                matches.forEach(match => {
                    const text = match.innerText;

                    // Skip creating a button if one with the same text already exists
                    if (uniqueButtons[text]) {
                        return;
                    }

                    // Create a new button element with the same class
                    const button = document.createElement('button');
                    button.innerText = text;
                    button.className = 'kerific-match';
                    uniqueButtons[text] = button;

                    // Find the nearest ancestor with 'display: block'
                    let parent = match.parentElement;
                    while (parent && getComputedStyle(parent).display !== 'block') {
                        parent = parent.parentElement;
                    }

                    // Check if the next sibling is a valid element and has the class 'kerific-match-buttons-container'
                    let container = parent.nextSibling instanceof HTMLElement && parent.nextSibling.classList.contains('kerific-match-buttons-container')
                        ? parent.nextSibling
                        : null;

                    // Create a new container div if it doesn't exist
                    if (!container) {
                        container = document.createElement('div');
                        container.className = 'kerific-match-buttons-container';

                        // Insert the container after the block element
                        if (parent.nextSibling) {
                            parent.parentNode.insertBefore(container, parent.nextSibling);
                        } else {
                            parent.parentNode.appendChild(container);
                        }
                    }

                    // Append the button to the container
                    container.appendChild(button);
                });
            }

            createButtonsInContainers();





            function setupCanvasAndDrawLines() {
                var canvas = document.createElement('canvas');
                canvas.id = 'dynamicLineCanvas';
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.zIndex = '10000';
                canvas.style.pointerEvents = 'none';
                document.body.appendChild(canvas);

                const ctx = canvas.getContext('2d');

                function drawLineBetweenElements(button, span) {
                    if (!button || !span) return;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    const buttonRect = button.getBoundingClientRect();
                    const spanRect = span.getBoundingClientRect();

                    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
                    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
                    const spanCenterX = spanRect.left + spanRect.width / 2;
                    const spanCenterY = spanRect.top + spanRect.height / 2;

                    ctx.beginPath();
                    ctx.moveTo(buttonCenterX, buttonCenterY);
                    ctx.lineTo(spanCenterX, spanCenterY);
                    ctx.strokeStyle = 'black';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }

                function findNearestSpan(button) {
                    const container = button.closest('.kerific-match-buttons-container');
                    let previousElement = container ? container.previousElementSibling : null;
                    let nearestSpan = null;
                    let nearestDistance = Infinity;

                    while (previousElement) {
                        if (previousElement.classList.contains('kerific-match')) {
                            const distance = Math.abs(previousElement.getBoundingClientRect().top - button.getBoundingClientRect().top);
                            if (distance < nearestDistance) {
                                nearestSpan = previousElement;
                                nearestDistance = distance;
                            }
                        }
                        previousElement = previousElement.previousElementSibling;
                    }
                    return nearestSpan;
                }

                document.querySelectorAll('button.kerific-match, span.kerific-match').forEach(element => {
                    element.addEventListener('mouseover', () => {
                        const nearestSpan = findNearestSpan(element);
                        drawLineBetweenElements(element, nearestSpan);
                    });
                    element.addEventListener('mouseout', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
                });
            }

            return combinedGlossaries
        })
        .then((combinedGlossaries) => {
            handleMatch(combinedGlossaries, glossaryPopups, extensionVersionNumber)

            // Add glossaryPopups to body
            glossaryPopups.forEach(glossaryPopup => {
                document.body.appendChild(glossaryPopup);
            });

            // Event delegation for term highlights
            document.body.addEventListener('click', function (event) {
                // document.body.addEventListener('mouseover', function (event) {
                // if (event.target.classList.contains('kerific-term-highlight')) {
                if (event.target.classList.contains('kerific-match') && event.target.tagName === 'BUTTON') {
                    let term = event.target.innerText; // Assuming the innerText is the term
                    document.querySelectorAll('.kerific-popup').forEach(popup => {
                        popup.classList.remove('displayBlock');
                    });

                    let uniquId = event.target.innerText;
                    // replace spaces with dashes
                    uniquId = uniquId.replace(/\s+/g, '-').toLowerCase();
                    uniqueClass = 'kerific-popup-' + uniquId;
                    document.querySelector('.' + uniqueClass).classList.add('displayBlock');
                    document.querySelector('.' + uniqueClass + ' h2').classList.add('animate__pulse');
                }
            });

            // Event delegation for closing popups
            document.body.addEventListener('click', function (event) {
                if (event.target.classList.contains('close-cross')) {
                    event.target.parentElement.parentElement.classList.remove('displayBlock');
                }
            });

            // Hide loading indicator
            loadingIndicator.classList.add('displayNone');
        })

    function handleMatch(combinedGlossaries, glossaryPopups, extensionVersionNumber) {
        const allHits = document.querySelectorAll('.kerific-match');

        allHits.forEach(hit => {
            let glossaryPopupHeaderContent = `<h2 class='animate__animated'>“${hit.innerText}”</h2>`;
            let glossaryPopupBodyContent = ``;

            combinedGlossaries.forEach(combinedGlossariesEntry => {
                if (hit.innerText.toLowerCase() === combinedGlossariesEntry.term && !popUpLedger.includes(hit.innerText)) {
                    glossaryPopupHeaderContent += `<p>${combinedGlossariesEntry.definitions.length} definitions found.</p>`;
                    combinedGlossariesEntry.definitions.forEach((glossaryEntryDefinitionsEntry, index) => {
                        let counter = index + 1;
                        // With redirect after SEE
                        // If the definition contains a link to another term, replace the link with the definition of the other term
                        if (findLinkTextAfterSee(glossaryEntryDefinitionsEntry.definition) !== null) {
                            // Go through all terms in the glossary
                            combinedGlossaries.forEach(combinedGlossariesEntry2 => {
                                // If the term in the glossary is the same as the term found after “See”
                                if (combinedGlossariesEntry2.term === findLinkTextAfterSee(glossaryEntryDefinitionsEntry.definition)) {
                                    combinedGlossariesEntry2.definitions.forEach((eachDefinitions2, index2) => {
                                        glossaryPopupBodyContent += `
                                            <h3>${counter}: ${eachDefinitions2.organisation}</h3>
                                            <div>[Redirected to this definition: “${combinedGlossariesEntry2.term}”] ${eachDefinitions2.definition}</div>
                                            <hr>
                                        `;
                                    });
                                }
                            });
                        } else {
                            glossaryPopupBodyContent += `
                            <h3>${counter}: ${glossaryEntryDefinitionsEntry.organisation}</h3>
                            <div>${glossaryEntryDefinitionsEntry.definition}</div>
                            <hr>
                        `;
                        }
                    });
                }
            });

            const glossaryPopupContent =
                `
                <div class="card-header p-1" >
                    ${glossaryPopupHeaderContent}
                    <span class="close-cross">✕</span></ >
                </div >
                <div class="card-body">
                    ${glossaryPopupBodyContent}
                </div>
                <div class="card-footer p-1">
                    <small>Kerific version: ${extensionVersionNumber} – More info on <a target='_blank' rel='noopener' href='https://kerisse.org'>kerisse.org</a></small>
                </div>
                `;

            let uniquId = hit.innerText;
            // replace spaces with dashes
            uniquId = uniquId.replace(/\s+/g, '-').toLowerCase();
            uniqueClass = 'kerific-popup-' + uniquId;

            let glossaryPopup = document.createElement('div');
            glossaryPopup.innerHTML = glossaryPopupContent;
            glossaryPopup.classList.add('kerific-popup', uniqueClass, 'card', 'p-0');
            glossaryPopup.style.display = 'none';
            document.body.appendChild(glossaryPopup);

            popUpLedger.push(hit.innerText);

        });

    } // End function handleMatch()


    // The pattern looks for the occurrence of the word "See" followed by an optional colon and space, then a link enclosed in <a> tags. It captures the text inside the <a> tags and returns it as the result. If there is no match, it returns null.
    function findLinkTextAfterSee(str) {
        const pattern = /See\s?:? ?<.*?<a.*?>(.*?)<\/a>/is;
        const match = pattern.exec(str);
        return match ? match[1] : null;
    }
    // // Example usage:
    // const exampleString = 'Random text See <a href="link.html">Link Text</a> more text';

})();