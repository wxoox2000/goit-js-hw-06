const categoriesList = document.querySelector("#categories");
const allCategories = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach((category) => {
  const categoryElements = category.querySelectorAll("li");
  console.log(
    `Category: ${category.firstElementChild.textContent} \n Elements: ${categoryElements.length}`
  );
});

