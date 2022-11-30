import init from "@proscenium/component-manager?bundle"
import { RAILS_ENV } from "env"

init({
  debug: RAILS_ENV === "development",
  buildComponentPath(comp) {
    return `/app/components${comp}.jsx`
  }
})
