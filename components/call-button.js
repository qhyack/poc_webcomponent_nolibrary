if (!customElements.get("call-button"))
    customElements.define("call-button", class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });

            const render = () => {
                const val = parseInt(this.getAttribute("value") ?? 0);

                const background = val < 10 ? `background: var(--color-primary);` : `background: var(--color-danger);`;

                shadowRoot.innerHTML = `
            <style>
                button {`
                    +
                    background
                    +
                    `color: var(--color-on-primary);
                }
            </style>
            <button>Call Button ${val}</button>
            `;
                const button = shadowRoot.querySelector('button');
                button.onclick = () => {
                    const ontap = this.getAttribute('ontap');
                    if (ontap) {
                        new Function(ontap).call(this);
                        render();
                    }
                };
            };
            render();
        }
    });