import init from "@proscenium/component-manager?bundle";
import { RAILS_ENV } from "env";
RAILS_ENV === "development" && import("preact/debug?bundle");

init({
  debug: RAILS_ENV === "development",
  buildComponentPath(comp) {
    return `/app/components${comp}.jsx`;
  },
});
