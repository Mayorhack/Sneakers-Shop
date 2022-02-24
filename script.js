// Cart display
document.querySelector(".cart").addEventListener("click", function () {
  document.querySelector(".showcart").classList.toggle("hidden");
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".showcart").classList.add("hidden");
});
// Ratings
document.querySelectorAll(".rating>i").forEach((star) =>
  star.addEventListener("click", function () {
    let prev = this.previousElementSibling;
    if (!this.classList.contains("fas")) {
      while (prev) {
        // if ()
        prev.classList.toggle("fas");
        prev = prev.previousElementSibling;
        continue;
      }
    }
    this.classList.toggle("fas");
  })
);
// Adding cart
const shoppingItems = document.querySelector(".items>ul");

document.querySelectorAll(".buy>a:first-child").forEach((item) => {
  item.addEventListener("click", function (e) {
    const image = this.parentNode.nextElementSibling;
    // big bug down here, try fix it
    const imageElement = `${image.src}`;
    console.log(imageElement);

    const details = image.parentNode.nextElementSibling.children[0].textContent;
    const price = image.parentNode.nextElementSibling.children[2].textContent;
    shoppingItems.insertAdjacentHTML(
      "afterbegin",
      `<li>
        <img src=${imageElement}>
        <p>${details}</p>
        <p>${price}</p>
        <button class="btn delete">X</button>
      </li>`
    );

    // shoppingItems.textContent;
  });
});
console.log(document.querySelector(".delete"));
document.querySelector(".delete").addEventListener("click", function () {
  this.parentNode.classList.add("hidden");
});
