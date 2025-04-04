class Navigator {
    constructor() {
    }

    static goTo(path, params={}) {
        window.history.pushState(params, '', path);
        window.history.pushState({}, '', '/');
        window.history.back();
    }
}