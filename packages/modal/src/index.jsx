import { lazy, Suspense, useCallback, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import PropTypes from "prop-types"
import exact from "prop-types-exact"

import { ModalContext, useModal } from "./hooks"

import styles from "./index.module.css"

const Container = lazy(() => import("./container"))

const Modal = ({ id, isDismissible, children, onExit, isOpen }) => {
  const { toggleModal, isModalOpen } = useModal(id)
  const nodeRef = useRef(null)
  const { base, loading, ...transitions } = styles

  // Allow a click on the overlay to close the modal.
  const onOutsideClick = useCallback(() => {
    isModalOpen && event.target === nodeRef.current && toggleModal(false)
  }, [isModalOpen, toggleModal])

  // Allow a click on the overlay to close the sheet.
  useEffect(() => {
    const onEscape = (ev) => ev.key === "Escape" && toggleModal(false)

    isDismissible && isModalOpen && document.addEventListener("keydown", onEscape)

    return () => isDismissible && document.removeEventListener("keydown", onEscape)
  }, [isDismissible, isModalOpen, toggleModal])

  // Make sure changes to the `isOpen` prop toggle the modal.
  useEffect(() => toggleModal(isOpen), [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ModalContext.Provider value={id}>
      {createPortal(
        <CSSTransition
          nodeRef={nodeRef}
          classNames={transitions}
          in={isModalOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onExit={onExit}
        >
          <div className={base} ref={nodeRef} onClick={isDismissible ? onOutsideClick : null}>
            <Suspense
              fallback={
                <div className={loading}>
                  <div>
                    <div />
                    <div />
                  </div>
                </div>
              }
            >
              <Container>{children}</Container>
            </Suspense>
          </div>
        </CSSTransition>,
        document.body
      )}
    </ModalContext.Provider>
  )
}

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  children: PropTypes.node.isRequired,

  // Set to true to open the modal. This is only really intended to be used to set the default open
  // state. It is recommended to use the `useModal` hook to toggle the modal open/closed.
  // (default: false)
  isOpen: PropTypes.bool,

  // If true, can be dismissed (closed) by clicking oustide the modal, or by hitting escape.
  // (default: true)
  isDismissible: PropTypes.bool,

  // Callback triggered after modal exits, and CSS transition has ended.
  onExit: PropTypes.func
}

const defaultProps = {
  isDismissible: true,
  isOpen: false,
  onExit: undefined
}

Modal.displayName = "LowUI.Modal"
Modal.propTypes = exact(propTypes)
Modal.defaultProps = defaultProps

export default Modal
export { defaultProps, propTypes }
