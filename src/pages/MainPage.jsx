import * as React from "react";
import { Link } from 'react-router-dom';
import Root from "../routes/root.jsx";

function MainPage() {
  return (
    <div className='main'>
      <div className='navbar'>
        <Root />
      </div>
      <div className='content'>
        <div className='GreetingCard'>
          <img src='./public/PetsImages/Start.png'></img>
          <h4>
            Приветствуем, Иннокентий!
          </h4>
            Вас ждет продуктивный день!
        </div>
          <div className='News'>
            <Link to='https://ria.ru/tag_veterinarija/'>Последние новости</Link>
          </div>
      </div>
    </div>
  );
}

export default MainPage;