;(env) => {
  const reactVersion = "18.2.0"
  const devSuffix = env === "development" ? "dev." : ""

  return {
    imports: {
      react: `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}index.js`,
      "react-dom": `https://ga.jspm.io/npm:react-dom@${reactVersion}/${devSuffix}index.js`,
      "react-dom/client": `https://ga.jspm.io/npm:react-dom@${reactVersion}/${devSuffix}client.js`,
      "react/jsx-dev-runtime": `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}jsx-dev-runtime.js`,
      "react/jsx-runtime": `https://ga.jspm.io/npm:react@${reactVersion}/${devSuffix}jsx-runtime.js`,
      "react-is": `https://ga.jspm.io/npm:react-is@18.2.0/${devSuffix}index.js`,

      // "@lowui/modal": "/packages/modal/src"

      // "prop-types": "https://cdn.jsdelivr.net/gh/joelmoss/prop-types@esm/index.js"
      "prop-types": "https://raw.githack.com/joelmoss/prop-types/esm/index.js"
    },
    scopes: {
      "https://ga.jspm.io/": {
        process: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/process.js",
        scheduler: "https://ga.jspm.io/npm:scheduler@0.23.0/dev.index.js"
      }
    }
  }
}
