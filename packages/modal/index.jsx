import { createPortal } from "react-dom";
import { lazy, Suspense, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Container = lazy(() => import("./container"));
import { ModalContext, useModal } from "./hooks";

import styles from "./index.css";

const Modal = ({ id, children, onClose, onExit, isOpen, ...props }) => {
  const { toggleModal, isModalOpen } = useModal(id);
  const { base, loading, ...transitions } = styles;

  // Make sure changes to the `isOpen` prop toggle the modal.
  useEffect(() => toggleModal(isOpen), [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ModalContext.Provider value={{ id }}>
      {createPortal(
        <CSSTransition
          classNames={{
            ...transitions,
          }}
          in={isModalOpen}
          mountOnEnter
          unmountOnExit
          onExited={() => {
            onClose?.(); // DEPRECATED
            onExit?.();
          }}
          timeout={1000}
        >
          <div className={base}>
            <Suspense
              fallback={
                <span className={loading}>
                  <div></div>
                </span>
              }
            >
              <Container {...props}>{children}</Container>
            </Suspense>
          </div>
        </CSSTransition>,
        document.body
      )}
    </ModalContext.Provider>
  );
};

Modal.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.any.isRequired,

  // Open the modal if true. (default: false)
  isOpen: PropTypes.bool,

  // DEPRECATED: Callback triggered when modal is closed.
  onClose: PropTypes.func,

  // Callback triggered after modal exits, and CSS transition has ended.
  onExit: PropTypes.func,

  // If true, will display a loading indicator overlay over the modal content. (default: false)
  isLoading: PropTypes.bool,

  // If false, the close buttons in the header will not be shown. (default: true)
  canClose: PropTypes.bool,

  // The title to be shown in the header.
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  header: PropTypes.any,
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Modal.defaultProps = {
  isOpen: false,
  isLoading: false,
  canClose: true,
};

export default Modal;
