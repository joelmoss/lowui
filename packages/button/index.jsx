import { forwardRef } from "react"

import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {any} children
 * @param {"button", "submit", "reset"} [type=button]
 * @param {"normal", "small", "mini", "tiny", "icon", "link"} [size=normal]
 * @param {boolean} [props.isLoading]
 */
const Button = forwardRef(
  ({ children, type = "button", size = "normal", className, isLoading, ...props }, ref) => {
    let classNames = className
    if (!classNames) {
      classNames = size === "normal" ? styles.base : styles[size]
    }

    if (isLoading) {
      classNames += ` ${styles._loading}`
      props.disabled = isLoading
    }

    return (
      <button ref={ref} className={classNames} {...props}>
        {children}
      </button>
    )
  }
)

export default Button
