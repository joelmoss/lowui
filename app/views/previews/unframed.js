import init from "bundle:@proscenium/component-manager"

init({
  debug: true,
  buildComponentPath(component) {
    return `${component}.jsx`
  }
})
