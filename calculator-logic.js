///
///

function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  screen = screen + input;
  if (screen == "" && input == 0) {
   } else if (input == "." && screen.includes(".")) {
  }else if (input == "c") {
    //c erase screen
    screen = null;
    document.getElementById("screen").value = screen;
  } else
  document.getElementById("screen").value = screen;
  //screen += screen.setAttribute("value", input);
}
