function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Select the img element
  const img = document.querySelector("#profile img");

  // Replace img source based on the presence of 'light' class
  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
