// NOTE: Changes made here require a Rails server restart for them to take effect.
env => {
  const reactVersion = "18.2.0"
  const devSuffix = env === "development" ? "dev." : ""

  return {
    imports: {
      react: `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}index.js`,
      "react-dom": `https://ga.jspm.io/npm:react-dom@${reactVersion}/${devSuffix}index.js`,
      "react-dom/client": `https://ga.jspm.io/npm:react-dom@${reactVersion}/${devSuffix}client.js`,
      "react/jsx-dev-runtime": `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}jsx-dev-runtime.js`,
      "react/jsx-runtime": `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}jsx-runtime.js`,
      scheduler: `https://ga.jspm.io/npm:scheduler@0.23.0/${devSuffix}index.js`

      // Aliased to the source code, avoiding a build.
      // "@lowui/modal": "/packages/modal",
      // "@lowui/sheet": "/packages/sheet"

      // Ensure we use our own Object.assign polyfill which simply always returns the browser's
      // built-in implementation.
      // "object-assign": "/lib/polyfills/object_assign",

      // ESM only packages
      // "prop-types":
      //   "https://rawcdn.githack.com/joelmoss/prop-types/bb5feb34343360573de764b0128673d5c32c512e/index.js",
      // "prop-types-exact":
      //   "https://rawcdn.githack.com/joelmoss/prop-types-exact/2326b01b24421db8ca0c7e2e21d8fc81f717d7bb/src/index.js"
    },
    scopes: {}
  }
}
