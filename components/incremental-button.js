if (!customElements.get("incremental-button"))
    customElements.define("incremental-button", class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });

            let count = 0;

            shadowRoot.addEventListener('click', () => {
                count++;
                render();
            });

            function render() {
                shadowRoot.innerHTML = `
                <button>Click: ${count}</button>
            `;
            };
            render();
        }
    });