;(env) => {
  const reactVersion = "18.2.0"
  const devSuffix = env === "development" ? "dev." : ""

  return {
    imports: {
      // react: `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}index.js`,
      // "react-dom": `https://ga.jspm.io/npm:react-dom@${reactVersion}/${devSuffix}index.js`,
      // "react-dom/client": `https://ga.jspm.io/npm:react-dom@${reactVersion}/${devSuffix}client.js`,
      // "react/jsx-dev-runtime": `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}jsx-dev-runtime.js`,
      // "react/jsx-runtime": `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}jsx-runtime.js`,

      "prop-types": `https://ga.jspm.io/npm:prop-types@15.8.1/${devSuffix}index.js`,

      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react-dom/client": "preact/compat/client",
      "react/jsx-runtime": "preact/jsx-runtime",
      "react/jsx-dev-runtime": "preact/jsx-dev-runtime",

      "@lowui/modal": "/packages/modal/src"
    },
    scopes: {
      "https://ga.jspm.io/": {
        "object-assign": "https://ga.jspm.io/npm:object-assign@4.1.1/index.js",
        process: "https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.27/nodelibs/browser/process.js",
        "react-is": "https://ga.jspm.io/npm:react-is@16.13.1/dev.index.js",
        scheduler: "https://ga.jspm.io/npm:scheduler@0.23.0/dev.index.js"
      }
    }
  }
}
