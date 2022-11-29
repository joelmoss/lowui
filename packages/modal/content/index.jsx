import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {any} props.children
 * @param {boolean} [props.isLoading]
 */
const Content = ({ isLoading, children }) => {
  return (
    <div className={styles.base}>
      {isLoading && (
        <div className={styles.loading}>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

export default Content
