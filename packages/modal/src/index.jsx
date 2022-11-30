import { createPortal } from "react-dom"
import { useRef, lazy, Suspense, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

const Container = lazy(() => import("./container"))
import { ModalContext, useModal } from "./hooks"

import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {string | number} props.id
 * @param {any} props.children
 * @param {boolean} [props.canClose=true] If false, the close buttons in the header will not be
 *  shown. (default: true)
 * @param {boolean} [props.isOpen=false] Open the modal if true.
 * @param {boolean} [props.isLoading] If true, will display a loading indicator overlay over the
 *  modal content. (default: false)
 * @param {function} [props.onExit] Callback triggered after modal exits, and CSS transition has ended.
 */
const Modal = ({ canClose = true, id, children, onExit, isOpen, ...props }) => {
  const { toggleModal, isModalOpen } = useModal(id)
  const nodeRef = useRef(null)
  const { base, loading, ...transitions } = styles

  // Make sure changes to the `isOpen` prop toggle the modal.
  useEffect(() => toggleModal(isOpen), [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ModalContext.Provider value={{ id }}>
      {createPortal(
        <CSSTransition
          nodeRef={nodeRef}
          classNames={transitions}
          in={isModalOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onExited={() => {
            onExit?.()
          }}
        >
          <div className={base} ref={nodeRef}>
            <Suspense
              fallback={
                <div className={loading}>
                  <div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              }
            >
              <Container canClose={canClose} {...props}>
                {children}
              </Container>
            </Suspense>
          </div>
        </CSSTransition>,
        document.body
      )}
    </ModalContext.Provider>
  )
}

export { useModal }
export default Modal
