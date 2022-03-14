import React from "react";
import styles from "./UserProfile.module.scss";

import classNames from "classnames";


//это можно было очень круто реализовать, но у меня с редаком на ts вышли проблемки и я не хотел в данном проекте использовать  useReducer useContext
const UserProfile: any = ({ user }: any): any => {
  const [valueTextarea, setValueTextarea] = React.useState("");
  const [disableInput, setDisableInput] = React.useState(true);
  const [disableButtonGet, setDisableButtonGet] = React.useState(true);
  const [changeNewUserMain, setChangeNewUserMain] = React.useState<any>(user);

  const [changeNewUserAdress, setChangeNewUserAdress] = React.useState<any>({
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  });
  const [changeNewUserCompany, setChangeNewUserCompany] = React.useState<any>({
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  });

  const onChangeInputValueMain = React.useMemo(
    () => (e: any) => {
      const { value, name } = e.target;
      setChangeNewUserMain({ ...changeNewUserMain, [name]: value });

      if (!value) {
        setDisableButtonGet(true);
      } else {
        setDisableButtonGet(false);
      }
    },
    [changeNewUserMain]
  );
  const onChangeInputValueAdress = (e: any) => {
    const { value, name } = e.target;
    setChangeNewUserAdress({ ...changeNewUserAdress, [name]: value });
  };
  const onChangeInputValueCompany = (e: any) => {
    const { value, name } = e.target;
    setChangeNewUserCompany({ ...changeNewUserCompany, [name]: value });
  };

  const onChangeTextareaValue = (e: any): void => {
    setValueTextarea(e.target.value);
    console.log(valueTextarea);
  };
  const onClickButtonRedact = () => {
    setDisableButtonGet((disableButtonGet) => !disableButtonGet);
    setDisableInput((setDisableInput) => !setDisableInput);
  };
  const onClickFormBtn = async () => {
    const g = {
      ...changeNewUserMain,
      changeNewUserMain: (changeNewUserMain.address = changeNewUserAdress),
      ...(changeNewUserMain.company = changeNewUserCompany),
    };

    // const res = axios.patch('....',{

    // },
    // {token})

    console.log(g);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_header}>
        <h2 className={styles.wrapper_header_h2}>Профиль пользоваетля</h2>
        <button
          onClick={onClickButtonRedact}
          className={styles.wrapper_header_button}
        >
          Редактировать
        </button>
      </div>

      <div className={styles.wrapper_userInfo}>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>Name</p>
          <input
            disabled={disableInput}
            name="name"
            value={changeNewUserMain.name}
            onChange={onChangeInputValueMain}
            type="text"
            placeholder="Иван Иванов"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserMain.name &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>User name</p>
          <input
            disabled={disableInput}
            name="username"
            value={changeNewUserMain.username}
            onChange={onChangeInputValueMain}
            type="text"
            placeholder="Ivan"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserMain.username &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>E-mail</p>
          <input
            disabled={disableInput}
            value={changeNewUserMain.email}
            name="email"
            onChange={onChangeInputValueMain}
            type="email"
            placeholder="example@mail.com"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserMain.email &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>Street</p>
          <input
            disabled={disableInput}
            value={changeNewUserAdress.street}
            name="street"
            onChange={onChangeInputValueAdress}
            type="text"
            placeholder="ул. Пример"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserAdress.street &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>City</p>
          <input
            disabled={disableInput}
            value={changeNewUserAdress.city}
            name="city"
            onChange={onChangeInputValueAdress}
            type="text"
            placeholder="Москва"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserAdress.city &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>Zip code</p>
          <input
            disabled={disableInput}
            value={changeNewUserAdress.zipcode}
            name="zipcode"
            onChange={onChangeInputValueAdress}
            type="text"
            placeholder="1234234"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserAdress.zipcode &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>Phone</p>
          <input
            disabled={disableInput}
            value={changeNewUserMain.phone}
            name="phone"
            onChange={onChangeInputValueMain}
            type="text"
            placeholder="89991112233"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserMain.phone &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>
        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>Website</p>
          <input
            disabled={disableInput}
            value={changeNewUserMain.website}
            name="website"
            onChange={onChangeInputValueMain}
            type="text"
            placeholder="www.example.com"
            className={classNames(
              styles.wrapper_userInfo_div_input,
              !changeNewUserMain.website &&
                styles.wrapper_userInfo_div_input_noValue
            )}
          />
        </div>

        <div className={styles.wrapper_userInfo_div}>
          <p className={styles.wrapper_userInfo_div_p}>Comment</p>
          <textarea
            onChange={onChangeTextareaValue}
            value={valueTextarea}
            className={styles.wrapper_userInfo_div_texarea}
          ></textarea>
        </div>
      </div>

      <div className={styles.wrapper_footer}>
        <button
          onClick={() => onClickFormBtn()}
          disabled={disableButtonGet}
          className={classNames(
            styles.wrapper_footer_button,
            disableButtonGet && styles.wrapper_footer_button_disable
          )}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
