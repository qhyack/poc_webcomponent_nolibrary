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