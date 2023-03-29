import { useCallback } from "react"
import PropTypes from "prop-types"
import exact from "prop-types-exact"

import { useSheet } from "./hooks"

import styles from "./index.module.css"

const Header = ({ title, isLoading, children }) => {
  const { toggleSheet } = useSheet()
  const onButtonClick = useCallback(() => toggleSheet(false), [toggleSheet])

  return (
    <div className={styles.header}>
      {isLoading ? (
        <div className={styles.headerLoading}>
          <div>
            <div />
            <div />
          </div>
        </div>
      ) : null}

      {!isLoading && (
        <button type="button" className={styles.headerCloseButton} onClick={onButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" />
          </svg>
        </button>
      )}
      {title ? <h2>{title}</h2> : null}
      <div className={styles.headerChildren}>{children}</div>
    </div>
  )
}

Header.displayName = "LowUI.Sheet.Header"
Header.propTypes = exact({
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isLoading: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.any
})

export default Header
