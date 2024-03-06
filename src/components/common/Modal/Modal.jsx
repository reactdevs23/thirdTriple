import { IoCloseSharp } from "react-icons/io5";

import classes from "./Modal.module.css";
import clsx from "clsx";

const Modal = ({
  isActive,
  onClose,
  className,
  styled,
  xShort,
  children,
  ...rest
}) => {
  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          className,
          isActive && classes.active,
          xShort && classes.xShort,
          styled && classes.styled,
          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        <div onClick={onClose} className={classes.close}>
          <IoCloseSharp className={classes.icon} />
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
