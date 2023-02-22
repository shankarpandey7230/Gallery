function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }
  throw new Error(
    `please check "${selection}", selecor, no such element exists`
  );
}

//constructor function
function Gallery(element) {
  this.conatiner = element;
  //   console.log(element);
  this.list = [...element.querySelectorAll(".img")];
  //   console.log(this.list);
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  //   let self = this;
  //bind functions
  //   this.openModal = this.openModal.bind(this);
  //container event
  this.conatiner.addEventListener(
    "click",
    function (e) {
      //   console.log(this);
      //self.openModal();
      this.openModal();
    }.bind(this)
  );
}
Gallery.prototype.openModal = function () {
  console.log(this);
  console.log("open modal");
  this.modal.classList.add("open");
};
//instances
const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
