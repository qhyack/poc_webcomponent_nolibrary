if (!customElements.get("statefull-component"))
    customElements.define("statefull-component", class extends HTMLElement {
        constructor() {
            super();
            this._sr = this.attachShadow({ mode: 'open' });
            this._data = {};
            this._build();

            const template = this.querySelector("template");
            const node = template.content.cloneNode(true);
            template.remove();
            this._sr.replaceChildren(node);

            new MutationObserver((mutationRecords) => {
                let buildFlag = false;
                mutationRecords.forEach(record => {
                    if (record.attributeName != "class") {
                        buildFlag = true;
                        const bindName = record.attributeName;
                        const bindValue = record.target.getAttribute(bindName);
                        if (bindValue) {
                            this._data[bindName] = bindValue;
                        } else {
                            delete this._data[bindName];
                        }
                    }
                });
                if (buildFlag) this._build();
            }).observe(this, { attributes: true });

        }

        _build = () => {
            this._sr.querySelectorAll("bind").forEach((bind) => {
                const bindName = bind.getAttribute("id");
                const e = eval("this.data." + bindName);
                if (e)
                    bind.innerHTML = e;
            });
        };

        connectedCallback() {
            (new Function("ref", this.getAttribute('oninit') ?? (() => { })))(this);
        }

        get data() {
            return this._data;
        }

        set data(value) {
            Object.assign(this._data, { ...this._data, ...value });
            Object.entries(this._data).forEach((e) => this.setAttribute(e[0], e[1]))
        }

        setData = (input) => {
            if (typeof input === 'function') {
                const output = input(this.data);
                this.data = (typeof output) == 'object' ? output : {};
            }
            else
                this.data = input
        };
    });