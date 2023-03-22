const rootPath = document.getElementsByName("root-path")[0].content
const select = document.querySelector("#previewSelect")
if (select) {
  select.addEventListener("change", (event) => {
    if (event.target.value) {
      window.location = `${rootPath}${event.target.value}`
    } else {
      window.location = "/"
    }
  })
}
