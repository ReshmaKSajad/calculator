function clearScreen() {
    result.value = ""
  }


function displayValue(e){
  result.value += e.target.value;
}

function performOperation(){
  let curValue = result.value;
  let res = eval(curValue)
  result.value = res
}

function backSpace(){
  let res = result.value.slice(0,-1)
  result.value = res
}


  // Swaps the style sheet in order to  achieve dark mode.
  function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "light.css") {
      theme.href = "dark.css";
      darkMode.innerHTML = "Light Mode 🌞";
    } else {
      theme.href = "light.css";
      darkMode.innerHTML = "Dark Mode 🌙";
    }
  }