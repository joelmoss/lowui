// import BackIcon from "assets/images/icons/chevron-left-regular.svg"
// import CloseIcon from "assets/images/icons/times-regular.svg"
// import Icon from "components/lib/icon"
import Button from "@lowui/button"

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
        <Button className={styles.closeButtonMobile} onClick={onClose} title="Close">
          {/* <Icon icon={<BackIcon />} /> */}
          back
        </Button>
      )}
      <h2>{title}</h2>
      {canClose && (
        <Button className={styles.closeButtonDesktop} onClick={onClose} title="Close">
          {/* <Icon icon={<CloseIcon />} /> */}
          close
        </Button>
      )}
    </>
  )
}

export default DefaultHeader
