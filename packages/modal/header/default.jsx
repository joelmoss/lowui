import BackIcon from "assets/images/icons/chevron-left-regular.svg";
import CloseIcon from "assets/images/icons/times-regular.svg";
import Button from "components/lib/html_elements/button";
import Icon from "components/lib/icon";

import styles from "./index.css";

const DefaultHeader = ({ onClose, title, canClose }) => {
  return (
    <>
      {canClose && (
        <Button
          className={styles.closeButtonMobile}
          onClick={onClose}
          title="Close"
        >
          <Icon icon={<BackIcon />} />
        </Button>
      )}
      <h2>{title}</h2>
      {canClose && (
        <Button
          className={styles.closeButtonDesktop}
          onClick={onClose}
          title="Close"
        >
          <Icon icon={<CloseIcon />} />
        </Button>
      )}
    </>
  );
};

// DefaultHeader.propTypes = {
//   onClose: PropTypes.func,
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   canClose: PropTypes.bool
// }

export default DefaultHeader;
