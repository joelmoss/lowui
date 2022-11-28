import PropTypes from 'prop-types'

import styles from './index.css'

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

Content.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.any.isRequired
}

export default Content
