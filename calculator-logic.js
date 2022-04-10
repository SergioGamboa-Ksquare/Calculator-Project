let dotCounter = false;


function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  // Inputing screeen with general numbers
  if (input == "c") {
    dotCounter = false;
    screen = null;
    document.getElementById("screen").value = screen;
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}

function buttonOp(operator) {
  let screen = document.getElementById("screen").value;

  switch (operator) {
    case "+":
      dotCounter = false;
      console.log(dotCounter);
      if (operator == "+" && screen.includes("+")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));

        Add(screen, operator);
      }
      break;
    case "-":
      dotCounter = false;
      if (operator == "-" && screen.includes("-")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));
        Minus(screen, operator);
      }
      break;
    case "*":
      dotCounter = false;

      if (operator == "*" && screen.includes("*")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));
        Times(screen, operator);
      }
      break;
    case "/":
      dotCounter = false;

      if (operator == "/" && screen.includes("/")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));
        Times(screen, operator);
      }
      break;
    case ".":
      if (dotCounter == true) {
      } else {
        dotCounter = true;
        screen = screen + operator;
        document.getElementById("screen").value = screen;
      }

      break;
    case "=":
      Equals(screen, operator);
      break;

    default:
  }
}
