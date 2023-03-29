import { useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import PropTypes from "prop-types"

import { useModal } from "../hooks"

import styles from "./index.module.css"

const { body: bodyStyle, dialog, verticalPad, ...transitions } = styles
const toggleBodyClass = () => document.body.classList.toggle(bodyStyle)

const Container = ({ children }) => {
  const { isModalOpen } = useModal()
  const [isVisible, setVisibility] = useState(false)
  const nodeRef = useRef(null)

  // Toggle visibility when `isModalOpen` changes.
  useEffect(() => void setVisibility(isModalOpen), [isModalOpen])

  // Enable visibility on component mount.
  useEffect(() => setVisibility(true), [])

  return (
    <>
      <div className={verticalPad} />

      <CSSTransition
        nodeRef={nodeRef}
        classNames={transitions}
        in={isVisible}
        timeout={300}
        onEnter={toggleBodyClass}
        onExit={toggleBodyClass}
      >
        <div ref={nodeRef} className={dialog} tabIndex="-1" role="dialog">
          {children}
        </div>
      </CSSTransition>

      <div className={verticalPad} />
    </>
  )
}

Container.displayName = "LowUI.Modal.Container"
Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
