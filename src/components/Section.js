export class Section {
    constructor({cardData, renderer}, containerSelector) {
        this._renderedItems = cardData;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    addItem (element) {
        this._container.prepend(element);
    }

    renderItems () {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        })
    }
}