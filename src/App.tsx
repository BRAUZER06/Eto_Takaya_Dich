import * as React from "react";

import style from "./App.module.scss";
import Nav from "./components/Nav/Nav";

import { Routes, Route, useNavigate } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile";
import UsersList from "./pages/UsersList/UsersList";
import axios from "axios";

//Ты скажешь а зачем ты все в app сделал, а я скажу потому что надо было брат 
//когда нет норм взаимодействия с бэка, когда из-за этого  гребанного ts сломал психику и не смогу понять как работать с  redux: вот что получается 
//Я не буду это чудо сегодня  тестить, с меня на сегодня хватит  

const App:React.FC = (): JSX.Element => {
  const [user, setUser] = React.useState<any[]>([]);
  const [sortUser, setSortUser]=React.useState<any>([])
  const [checkUserInfoBtn, setCheckUserInfoBtn]=React.useState([])
  const navigate = useNavigate()



  React.useEffect(() => {
    try {
      (async () => {
        await axios
          .get<any>("https://61d153f0da87830017e591da.mockapi.io/aweqweqwe")
          .then((respons:any) => setUser(respons.data));
      })();
      setSortUser(user)
    } catch (error) {
      alert("Не удалось получить посты");
      console.log(
        `Ошибка в блоке с получением постов UserList. Ошибка  ${error}`
      );
    }
  }, []);
  
  

  const onClickBtnInfo = (item: any) => {
    navigate(`/userProfile/${item.id}`);
    setCheckUserInfoBtn(item)
  };

  const onClickSortCity = () => {
    setSortUser([])
    setUser(user.sort((a: any, b: any) => (a.address.city > b.address.city ? 1 : -1)))
  };
 
  
  const onClickSortCompany = () => {
    setSortUser([])
    setSortUser(user.sort((a: any, b: any) => (a.company.name > b.company.name ? 1 : -1)))
  };
  

  return (
    <div className={style.App}>
      <Nav onClickSortCompany={onClickSortCompany} onClickSortCity={onClickSortCity} user={user}/>
      <Routes>
        <Route path="/userProfile/:id" element={<UserProfile  user={checkUserInfoBtn}/>} />
        <Route path="/userList" element={<UsersList onClickBtnInfo={onClickBtnInfo} user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
