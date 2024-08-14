const links = document.getElementsByClassName("project-link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    console.log("clicked");
    e.stopPropagation();
  });
}
