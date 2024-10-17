if (!customElements.get("layout-column"))
    customElements.define("layout-column", class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });

            function render() {
                shadowRoot.innerHTML = /*html*/ `
<style>
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        gap: var(--spacing);
    }
</style>
<slot></slot>
`;
            };
            render();
        }
    });

if (!customElements.get("layout-row"))
    customElements.define("layout-row", class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });

            function render() {
                shadowRoot.innerHTML = /*html*/ `
<style>
    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        gap: var(--spacing);
    }
</style>
<slot></slot>
`;
            };
            render();
        }
    });