const template = document.createElement('template');

template.innerHTML = `
    <style>
        div {
            margin-top: 20px;
            color: green;
        }
    </style>
    <div>
        <p> The search result of your request is <a target="_blank" rel="noopener">here</a></p>
    </div>
`;

class SearchResult extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('a').href='';
    }

    static get observedAttributes() {
        return ['search-attribute'];
    }

    attributeChangedCallback(search, oldVal, newValue) {
        if (search === 'search-attribute') {
            this.shadowRoot.querySelector('a').href = `https://www.google.com/search?q=${newValue}`;
        }
    }
}

window.customElements.define('search-result', SearchResult);