import { useRef, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import isFunction from "is-fn"

import { useModal } from "../hooks"

import styles from "./index.module.css"

/**
 * @param {Object} props
 * @param {any} props.children
 * @param {boolean} [props.canClose=true]
 */
const Container = ({ children, isLoading, header, footer, ...props }) => {
  const { isModalOpen } = useModal()
  const [isVisible, setVisibility] = useState(false)
  const nodeRef = useRef(null)
  const { base, body, dialog, ...transitions } = styles

  // Toggle visibility when `isModalOpen` changes.
  useEffect(() => void setVisibility(isModalOpen), [isModalOpen])

  // Enable visibility on component mount.
  useEffect(() => setVisibility(true), [])

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={transitions}
      in={isVisible}
      timeout={300}
      onEnter={() => document.body.classList.toggle(body)}
      onExit={() => document.body.classList.toggle(body)}
    >
      <div ref={nodeRef} className={dialog} tabIndex="-1" role="dialog">
        {children}
      </div>
    </CSSTransition>
  )
}

export default Container
