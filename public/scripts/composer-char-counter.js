$(document).ready(function() {
  console.log("hello from the script file");
  const $element = $(".title");
  console.log($element);
  $element.on('click', () => {
    console.log('this title was clicked');
  });
});

// document.addEventListener("click", () => {
//   // eslint-disable-next-line no-undef
//   alert("You clicked somewhere on the page!");
// });

