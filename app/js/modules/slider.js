export default class slider {
  constructor() {
    this.createBound();
    this.addListener();
    this.grabDom();

    this.count = 1;
    this.h = 100;
  }
  createBound() {
    let arr = ["onSlider", "onLoad"];
    arr.forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  onSlider() {
    if (this.count < this.dom.items.length) {
      this.dom.list.style.transform =
        "translate3d(0%, -" + this.h + "%, 0px)";
      this.count++;
      this.h += 100;
    } else {
      clearInterval(this.onSlider);
      this.count = 0;
      this.h = 0;
    }
  }

  onLoad() {
    setInterval(this.onSlider, 2300);
  }

  addListener() {
    window.addEventListener("load", this.onLoad);
  }

  grabDom() {
    this.dom = {};
    this.dom.list = document.querySelector(".slider__list");
    this.dom.items = document.querySelectorAll(".slider__item");
  }
}
