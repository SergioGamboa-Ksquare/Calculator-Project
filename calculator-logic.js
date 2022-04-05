///
///

function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  screen = screen + input;
  document.getElementById("screen").value = screen;
  //screen += screen.setAttribute("value", input);
}
