var questions = document.querySelectorAll("h2");

questions.forEach((question) => question.addEventListener("click", function() {
  this.classList.toggle("bold");
  this.nextElementSibling.classList.toggle("fa-angle-up");
  this.nextElementSibling.classList.toggle("fa-angle-down");
  this.parentNode.nextElementSibling.classList.toggle("show");
})
);
