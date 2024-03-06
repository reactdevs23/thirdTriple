import React, { useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import Text from "../../components/common/Text/Text";
import Button from "../../components/common/Button/Button";
import classes from "./JoinModal.module.css";
import { appStore, placeHolder, playStore, qrCode } from "../../images";

const JoinModal = ({ isActive, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      styled
      className={classes.mainWrapper}
    >
      <div className={classes.wrapper}>
        <Text base950 xl3 semiBold className={classes.heading}>
          Join Waiting List
        </Text>

        <div className={classes.container}>
          <div className={classes.formContainer}>
            <Text base800 lg className={classes.info}>
              Currently our app is under development. Join our waiting list,
              we’ll notify you when it is available.
            </Text>
            <form action="" className={classes.form}>
              <input
                type="text"
                className={classes.input}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <input
                type="email"
                placeholder="Email"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                btnPrimary
                size="md"
                className={classes.button}
                onClick={() => {}}
              >
                Join Now
              </Button>
            </form>{" "}
          </div>
          <div className={classes.downloadContainer}>
            <div className={classes.buttonContainer}>
              <button className={classes.appStore}>
                <img src={appStore} alt="#" className={classes.buttonIcon} />
                <p className={classes.labelAndName}>
                  <span className={classes.label}>Download from the</span>
                  <span className={classes.storeName}>App Store</span>
                </p>
              </button>
              <button className={classes.googlePlay}>
                <img src={playStore} alt="#" className={classes.buttonIcon} />
                <p className={classes.labelAndName}>
                  <span className={classes.label}>GET IT ON</span>
                  <span className={classes.storeName}>Google Play</span>
                </p>
              </button>
            </div>
            <img src={qrCode} alt="#" className={classes.qrCode} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default JoinModal;
