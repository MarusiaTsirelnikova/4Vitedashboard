import * as React from "react";
import Root from "../routes/root.jsx";

function Reception() {
  return (
    <div>
      <div className='navbar'>
        <Root />
      </div>
      <div className='recep'>
        <div className='informCard'>
          <h3>Прием ведет: Иннокентий, врач-ветеринар высшей категории</h3>
        </div>
        <div className='reception'>
          Жалобы:
          <form action="" method="get" className="form-reception">
            <div class="form-reception-cb">
              {['Зуд', 'Нарушения кожного покрова', 'Судороги', 'Потеря активности', 'Отказ от еды',
              'Послеоперационные проблемы', 'Укус другого животного', 'Травмы',
              'Потеря веса', 'Кашель и хрипы', 'Новообразование'].map((text, index) => (
                <label>
                  <input type="checkbox" id={index}/>
                    {text}
                </label>
              ))}
            </div>
            <div className="form-reception-an">
              {['Анамнез', 'Рекомендации по лечению', 'Рекомендации по содержанию'].map((text) => (
                <div> 
                  <label htmlFor={text}>{text}:</label>
                  <input type="text" name={text} id={text} required />
                </div>
              ))}
            </div>
            <div className="form-reception">
              <input className='submit' type="submit" value="Распечатать заключение" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reception;