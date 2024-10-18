if (!customElements.get("logic-component"))
    customElements.define("logic-component", class extends HTMLElement {

        variants = {
            _base: 'btn',
            default: 'btn-primary',
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            success: 'btn-success',
            danger: 'btn-danger',
            warning: 'btn-warning font-weight-bold text-uppercase',
            info: 'btn-info',
        };

        constructor() {
            super();
            console.log('COMPONENT CREATED');
            const sr = this.attachShadow({
                mode: 'open'
            });

            this.value = this.getAttribute('value') || 'Button';

            console.log('COMPONENT INITIALIZED');

            this._build = () => {
                const { value } = this.useValue;

                const variant = this.getAttribute('variant') || 'default';
                this.classList = this.variants._base + ' ' + this.variants[variant];

                sr.innerHTML = `
                <style>
                    *:not(style) {
                       all:unset;
                    }                 
                </style>
                <button>${value}</button>
                `;

                console.log('COMPONENT BUILDED');
            };
            this._build();

            const oninit = this.getAttribute('oninit');
            if (!oninit) return;
            const fn = new Function("ref", oninit);
            fn(this);
        }

        get _value() {
            return this.value;
        }

        set _value(value) {
            this.value = value;
            this.refresh();
        }

        get useValue() {
            return {
                value: this._value,
                setValue: (value) => this._value = value
            };
        }

        refresh = () => this._build();
    });