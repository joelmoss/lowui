const select = document.querySelector("#componentSelect");
if (select) {
  select.addEventListener("change", (event) => {
    if (event.target.value) {
      window.location = `/components/${event.target.value}`;
    } else {
      window.location = "/";
    }
  });
}
