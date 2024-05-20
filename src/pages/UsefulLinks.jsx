import * as React from "react";
import Root from "../routes/root.jsx";
import { Link } from 'react-router-dom';

function Cards() {
    const data = `{
        "links": [
          {"name": "Официальный сайт «Россельхознадзор»", 
          "link": "https://fsvps.gov.ru/"},
          {"name": "Сельскохозяйственная электронная библиотека знаний",  
          "link": "http://www.cnshb.ru/akdil/"},
          {"name": "Законы и постановления о животных",
          "link": "http://www.zooclub.ru/zakon/index.shtml"},
          {"name": "Ветеринарная медицина — Ветеринария для всех",
          "link": "http://www.allvet.ru/"},
          {"name": "Мегаэнциклопедия животных", 
          "link": "http://www.zooclub.ru/"}
        ]
      }`;
    
    const parsedData = JSON.parse(data);
    const pars = parsedData.links

    return(
        <div className='usefullLinks'>
            {pars.map((text) => (
                <div className='linkCard'>
                    <div className='name'>
                        {text.name}
                    </div>
                    <Link to={text.link}>Перейти</Link>
                </div>
            ))}
        </div>
    )
}

function UsefullLinks() {
  return (
    <div>
      <Root />
      <Cards />
    </div>
  );
}

export default UsefullLinks;