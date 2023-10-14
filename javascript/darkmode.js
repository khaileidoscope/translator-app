let darkMode = document.getElementById("dark-mode");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkMode.src = "images/sun.png";
  } else {
    darkMode.src = "images/moon.png";
  }
};
