alert("hey would you like my site");
var name = prompt("what is your name");
var name1 = name;
var age = prompt("Are you above 18+");
if (age === "yes") {
  alert("Hi " + name1 + " ,my name is Amandeep Srivastava welcome to my site");
} else {
  alert("Sorry you are not eligible");
}
for (
  let index = 0;
  index < document.querySelectorAll(".java").length;
  index++
) {
  document
    .querySelectorAll(".java")
    [index].addEventListener("click", function () {
      alert("Thank you for downloading");
    });
}
