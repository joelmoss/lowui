import isFunction from "is-fn"

import { useModal } from "../hooks"
import DefaultHeader from "./default"

import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {function | object} [props.header]
 */
const Header = ({ header, ...props }) => {
  const { toggleModal } = useModal()
  props.onClose = () => toggleModal(false)

  return (
    <div className={styles.base}>
      {header ? isFunction(header) ? header(props) : header : <DefaultHeader {...props} />}
    </div>
  )
}

export default Header
