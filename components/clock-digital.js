if (!customElements.get("clock-digital"))
    customElements.define("clock-digital", class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });

            function render() {
                const currentdate = new Date();
                const hours = ((currentdate.getHours() < 10) ? '0' : '') + currentdate.getHours();
                const minutes = ((currentdate.getMinutes() < 10) ? '0' : '') + currentdate.getMinutes();
                const seconds = ((currentdate.getSeconds() < 10) ? '0' : '') + currentdate.getSeconds();
                shadowRoot.innerHTML = /*html*/ ` <style>
    :host {
    display: inline-block;
    text-align: center;
    background-color: whitesmoke;
    font-style: italic;
    border: 1px solid lightgray;
    padding: var(--spacing);
    }
    </style>
    <div>
        ${hours}:${minutes}:${seconds}
    </div>
    `;
                setTimeout(render, 1000);
            };
            render();
        }
    });