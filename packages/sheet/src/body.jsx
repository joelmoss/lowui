import PropTypes from 'prop-types'
import exact from 'prop-types-exact'

import styles from './index.module.css'

const SheetBody = ({ children, className }) => {
  return <div className={[styles.body, className].join(' ')}>{children}</div>
}

SheetBody.propTypes = exact({
  children: PropTypes.any.isRequired,
  className: PropTypes.string
})

export default SheetBody
