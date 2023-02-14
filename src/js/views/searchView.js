class SearchView {
  _parentEl = document.querySelector(".search");
  getQuerry() {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      // "submit" - listens to mouse click and enter button
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
