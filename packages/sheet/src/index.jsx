/* eslint-disable react/prop-types */

import { Suspense, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"

import { SheetContext, useSheet } from "./hooks"

import styles from "./index.module.css"

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

  // Make sure changes to the `isOpen` prop toggle the sheet.
  useEffect(() => toggleSheet(isOpen), [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  // Allow a click on the overlay to close the sheet.
  useEffect(() => {
    const ele = containerRef.current
    const onOutsideClick = event => event.target === ele && toggleSheet(false)
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
          onEnter={() => document.body.classList.toggle(styles.window)}
          onExit={() => document.body.classList.toggle(styles.window)}
          onExited={() => {
            onExit?.()
          }}
          classNames={{
            enter: styles.enter,
            exitActive: styles.exitActive,
            exitDone: styles.exitDone,
            enterActive: styles[`${openFrom}EnterActive`],
            enterDone: styles[`${openFrom}EnterDone`],
            exit: styles[`${openFrom}Exit`]
          }}
          timeout={500}
        >
          <div className={styles.container} ref={containerRef}>
            {isLoading ? <div className={styles.disabledLoading} /> : null}
            {isDisabled ? <div className={styles.disabled} /> : null}
            <section className={[styles.base, styles[`${openFrom}Base`]].join(" ")}>
              <Suspense
                fallback={
                  <div className={styles.loading}>
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

Sheet.displayName = "LowUI.Sheet"

export default Sheet
