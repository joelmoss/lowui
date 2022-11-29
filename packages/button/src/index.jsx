import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {any} children
 * @param {string} [type] (Default: 'button')
 * @param {"normal", "small", "mini", "tiny", "icon", "link"} [size=normal] (default: 'normal')
 * @param {boolean} [props.isLoading]
 */
const Button = ({ type = "button", size = "normal", children, className, isLoading, ...props }) => {
  let classNames = className
  if (!classNames) {
    classNames = size === "normal" ? styles.base : styles[size]
  }

  if (isLoading) {
    classNames += ` ${styles._loading}`
    props.disabled = isLoading
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default Button
