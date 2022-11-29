// import BackIcon from "assets/images/icons/chevron-left-regular.svg"
// import CloseIcon from "assets/images/icons/times-regular.svg"
// import Icon from "components/lib/icon"
// import Button from "components/lib/html_elements/button"

import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {string | object} [props.title]
 * @param {boolean} [props.canClose]
 * @param {function} [props.onClose]
 */
const DefaultHeader = ({ onClose, title, canClose }) => {
  return (
    <>
      {canClose && (
        <button className={styles.closeButtonMobile} onClick={onClose} title="Close">
          {/* <Icon icon={<BackIcon />} /> */}
          back
        </button>
      )}
      <h2>{title}</h2>
      {canClose && (
        <button className={styles.closeButtonDesktop} onClick={onClose} title="Close">
          {/* <Icon icon={<CloseIcon />} /> */}
          close
        </button>
      )}
    </>
  )
}

export default DefaultHeader
