const category = document.querySelector("#categories");
const categoryList = category.querySelectorAll("li.item");

console.log("Number of categories:", categoryList.length);

categoryList.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.querySelectorAll("li").length);
});
