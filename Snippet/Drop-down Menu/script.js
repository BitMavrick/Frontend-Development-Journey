const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

// Showing and hiding options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
});

// Select Options
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("selected");
    });
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
  });
});
