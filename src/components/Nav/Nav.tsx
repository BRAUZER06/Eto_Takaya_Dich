import React from "react";
import styles from "./Nav.module.scss";
import classNames from "classnames";

const Nav = ({ onClickSortCity, onClickSortCompany, user }: any) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper_h2}>Сортировка</h2>
      <button
        onClick={onClickSortCity}
        className={classNames(styles.wrapper_button_1, styles.wrapper_button)}
      >
        по городу
      </button>
      <button
        onClick={onClickSortCompany}
        className={classNames(styles.wrapper_button_2, styles.wrapper_button)}
      >
        по компании
      </button>
    </div>
  );
};

export default Nav;
