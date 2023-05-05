export class Section {
  constructor({ renderer }, containerSelector) {
    // this._renderedItems = cardData;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.reverse().forEach((data) => {
      this._renderer(data);
    });
  }
}
