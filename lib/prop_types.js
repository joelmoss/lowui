const zeroWidthSpace = "\u200b";
const specialProperty = `prop-types-exact: ${zeroWidthSpace}`;
const semaphore =
  typeof Symbol === "function" && typeof Symbol["for"] === "function"
    ? Symbol["for"](specialProperty)
    : specialProperty;

function brand(fn) {
  return Object.assign(fn, { [specialProperty]: semaphore });
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!isPlainObject(propTypes)) {
    throw new TypeError("given propTypes must be an object");
  }
  if (
    has(propTypes, specialProperty) &&
    !isBranded(propTypes[specialProperty])
  ) {
    throw new TypeError(
      "Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`"
    );
  }

  return {
    ...propTypes,

    [specialProperty]: brand(function forbidUnknownProps(
      props,
      _,
      componentName
    ) {
      const unknownProps = Object.keys(props).filter(
        (prop) => !has(propTypes, prop)
      );
      if (unknownProps.length > 0) {
        return new TypeError(
          `${componentName}: unknown props found: ${unknownProps.join(", ")}`
        );
      }
      return null;
    }),
  };
}

function isPlainObject(x) {
  return x && typeof x === "object" && !Array.isArray(x);
}

const has = Function.call.bind(Object.prototype.hasOwnProperty);

export { default } from "prop-types?bundle-all";
export { forbidExtraProps as exact };
