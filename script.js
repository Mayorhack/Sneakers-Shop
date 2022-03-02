// Cart display
document.querySelector(".cart").addEventListener("click", function () {
  document.querySelector(".showcart").classList.toggle("hidden");
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".showcart").classList.add("hidden");
});
// Ratings

const rateShopping = function (star, i, allStars) {
  if (i === 0) {
    if (this.classList.contains("fas"))
      return allStars
        .slice(i)
        .map((innerStar) => innerStar.classList.remove("fas"));
    this.classList.add("fas");
    // return ;
  }
  if (i > 0) {
    if (this.classList.contains("fas"))
      return allStars
        .slice(i)
        .map((innerStar) => innerStar.classList.remove("fas"));
    allStars
      .slice(0)
      .splice(0, i + 1)
      .map((innerStar) => innerStar.classList.add("fas"));
  }
};

// NEsting forEach inside forEach is a bad practise though; we would look for a better solution in the future
document.querySelectorAll(".rating").forEach((rating) => {
  Array.from(rating.querySelectorAll(".fa-star")).forEach((star, i, allStars) =>
    star.addEventListener("click", function () {
      rateShopping.call(this, star, i, allStars);
    })
  );
});
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
// console.log(document.querySelector(".delete"));
// document.querySelector(".delete").addEventListener("click", function () {
//   this.parentNode.classList.add("hidden");
// });
