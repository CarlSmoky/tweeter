$(document).ready(function () {
  console.log("hello from the script file");
  // const $element = $(".title");
  // console.log($element);
  const $tweetText = $("#tweet-text");
  // console.log($tweetText);
  // $tweetText.on('blur', () => {
  //   console.log('this textarea was blured');
  // });
  // $tweetText.on('keydown', () => {
  //   console.log('this textarea was keydown');
  // });
  $tweetText.on('keyup', () => {
    console.log('this textarea was keyup');
  });
  // $tweetText.on('keypress', () => {
  //   console.log('this textarea was keypress');
  // });
  // $tweetText.on('change ', () => {
  //   console.log('this textarea was change ');
  // });
  // $tweetText.on('input', () => {
  //   console.log('this textarea was input');
  // });
});

// document.addEventListener("click", () => {
//   // eslint-disable-next-line no-undef
//   alert("You clicked somewhere on the page!");
// });

