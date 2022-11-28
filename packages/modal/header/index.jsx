import PropTypes from 'prop-types'
import { isFunction } from 'lodash'

import { useModal } from '../hooks'
import DefaultHeader from './default'

import styles from './index.css'

const Header = ({ header, ...props }) => {
  const { toggleModal } = useModal()
  props.onClose = () => toggleModal(false)

  return (
    <div className={styles.base}>
      {header ? isFunction(header) ? header(props) : header : <DefaultHeader {...props} />}
    </div>
  )
}

Header.propTypes = {
  header: PropTypes.any
}

export default Header
