import React from "react";
import styles from "./UsersList.module.scss";



const UsersList: any = ({ user, onClickBtnInfo }: any): any => {
  const restartPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <h2 onClick={restartPage} className={styles.wrapper_h2}>
        Список пользователей
      </h2>
      {user.map((item: any, index: number) => (
        <div key={item.id} className={styles.wrapper_divUser}>
          <div className={styles.wrapper_divUser_info}>
            <p>
              ФИО: <span>{item.name}</span>
            </p>
            <p>
              город: <span>{item.address.city}</span>
            </p>
            <p>
              компания: <span>{item.company.name}</span>
            </p>
          </div>
          <div className={styles.wrapper_divUser_btnInfo}>
            <h2
              onClick={() => onClickBtnInfo(item)}
              className={styles.wrapper_divUser_btnInfo_buttonInfoOnUser}
            >
              Подробнее
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
