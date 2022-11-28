import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import isFunction from "is-fn";

import Content from "../content";
import Header from "../header";
import { useModal } from "../hooks";

import styles from "./index.css";

const Container = ({ children, isLoading, header, footer, ...props }) => {
  const { isModalOpen } = useModal();
  const { base, body, outer, inner, innerPad, ...transitions } = styles;
  const [isVisible, setVisibility] = useState(false);

  // Toggle visibility when `isModalOpen` changes.
  useEffect(() => void setVisibility(isModalOpen), [isModalOpen]);

  // Enable visibility and set body class on component mount.
  useEffect(() => {
    document.body.classList.toggle(body);
    setVisibility(true);

    return () => document.body.classList.toggle(body);
  }, [body]);

  return (
    <div className={outer}>
      <div className={innerPad}></div>
      <CSSTransition
        classNames={{ ...transitions }}
        in={isVisible}
        timeout={1000}
      >
        <div className={inner} tabIndex="-1" role="dialog">
          <Header {...props} header={header} />
          <Content {...{ isLoading }}>{children}</Content>
          {footer && (isFunction(footer) ? footer(props) : footer)}
        </div>
      </CSSTransition>
      <div className={innerPad}></div>
    </div>
  );
};

// Container.propTypes = {
//   children: PropTypes.any.isRequired,
//   isLoading: PropTypes.bool,
//   canClose: PropTypes.bool,
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   header: PropTypes.any,
//   footer: PropTypes.any
// }

export default Container;
