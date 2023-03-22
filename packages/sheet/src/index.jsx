/* eslint-disable react/prop-types */

import { Suspense, useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"

import { SheetContext, useSheet } from "./hooks"

import styles from "./index.module.css"
import autoTransitions from "./transitions/auto.module.css"
import bottomTransitions from "./transitions/bottom.module.css"
import leftTransitions from "./transitions/left.module.css"
import rightTransitions from "./transitions/right.module.css"

const {
  disabled: disabledStyle,
  disabledLoading: disabledLoadingStyle,
  container: containerStyle,
  loading: loadingStyle,
  window: windowStyle
} = styles

/**
 * @param {object} props
 * @param {string} props.id - Unique sheet identifier.
 * @param {any} props.children
 * @param {boolean} [props.isOpen=false] Default is `false`
 * @param {boolean} [props.isDisabled=false] - When true, will disable and block the UI of the
 *   entire sheet. Default is `false`
 * @param {boolean} [props.isLoading=false] - When true, will enter into a loading state, with
 *   loading indicators, and disabling the UI of the entire sheet. Default is `false`
 * @param {function} [props.onExit] - A function to be called after the sheet has exited, and CSS
 *   transition has ended.
 * @param {'auto' | 'bottom' | 'left' | 'right'} [props.openFrom='auto'] - The direction that the
 *   sheet will animate from. The 'auto' option will open the sheet from the right, and from the
 *   bottom on mobile. Default is `'auto'`
 */
const Sheet = ({
  id,
  isOpen = false,
  isDisabled,
  isLoading,
  onExit,
  openFrom = "auto",
  children
}) => {
  const containerRef = useRef()
  const { toggleSheet, isSheetOpen } = useSheet(id)

  const { base: baseStyle, ...transitions } = useMemo(() => {
    switch (openFrom) {
      case "auto": {
        return autoTransitions
      }
      case "bottom": {
        return bottomTransitions
      }
      case "right": {
        return rightTransitions
      }
      case "left": {
        return leftTransitions
      }
    }
  }, [openFrom])

  // Make sure changes to the `isOpen` prop toggle the sheet.
  useEffect(() => toggleSheet(isOpen), [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  // Allow a click on the overlay to close the sheet.
  useEffect(() => {
    const ele = containerRef.current
    const onOutsideClick = (event) => event.target === ele && toggleSheet(false)
    isSheetOpen && ele.addEventListener("click", onOutsideClick)

    return () => ele?.removeEventListener("click", onOutsideClick)
  }, [isSheetOpen, toggleSheet])

  return (
    <SheetContext.Provider value={{ id }}>
      {createPortal(
        <CSSTransition
          in={isSheetOpen}
          mountOnEnter
          unmountOnExit
          onEnter={() => document.body.classList.toggle(windowStyle)}
          onExit={() => document.body.classList.toggle(windowStyle)}
          onExited={() => {
            onExit?.()
          }}
          classNames={{ ...transitions }}
          timeout={500}
        >
          <div className={containerStyle} ref={containerRef}>
            {isLoading ? <div className={disabledLoadingStyle} /> : null}
            {isDisabled ? <div className={disabledStyle} /> : null}
            <section className={baseStyle}>
              <Suspense
                fallback={
                  <div className={loadingStyle}>
                    <div>
                      <div />
                      <div />
                    </div>
                  </div>
                }
              >
                {children}
              </Suspense>
            </section>
          </div>
        </CSSTransition>,
        document.body
      )}
    </SheetContext.Provider>
  )
}

export default Sheet
