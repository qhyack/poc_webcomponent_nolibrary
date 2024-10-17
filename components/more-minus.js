if (!customElements.get("more-minus"))
    customElements.define("more-minus", class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });

            let count = 0;

            const render = () => {
                shadowRoot.innerHTML = /*html*/ `
<style>
    :host {
        display: inline-block;
        text-align: center;
        background-color: whitesmoke;
        font-style: italic;
        border: 1px solid lightgray;
        padding: var(--spacing);
    }

    button {
        margin: 0 5px;
    }
</style>
<layout-column>
    You selected: ${count}
    <layout-row style="gap:0;">
        <button type="button" id="decrement">-</button>
        <button type="button" id="increment">+</button>
    </layout-row>
</layout-column>`;

                shadowRoot.getElementById('decrement').addEventListener('click', () => {
                    count--;
                    render();
                });

                shadowRoot.getElementById('increment').addEventListener('click', () => {
                    count++;
                    render();
                });
            };

            render();
        }
    });