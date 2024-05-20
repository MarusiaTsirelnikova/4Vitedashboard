import * as React from "react";
import Root from "../routes/root.jsx";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function BasicModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const diagnosies = data.diagnosies;

  return (
    <div>
      <Button onClick={handleOpen} className='modalBTN'>Посмотреть подробности</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='aboutPet'>
            <div className='cont'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {data.name}, {data.age}
                </Typography>
                <img src={data.photoURL}></img>
            </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div> 
                <div className='ownerData'> 
                    Имя хозяина: {data.ownerName} 
                </div>
                <div className='diagnosies'>
                    <ul>
                        Ранее поставленные диагнозы:
                        {diagnosies.map((text) => (
                            <li>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function PatientCard() {
    const data = `{
        "animals": [
          {"name": "Пушок", "age": 5, "type": "Кот", "photoURL": "./public/PetsImages/Pushok.png", "breed": "Мейн-Кун",
            "ownerName": "Сидоров Петр Иванович", "ownerData": [{"phone": "+7(924)908-09-67", "adress": "Ул. Кайдаловская, 34"}],
            "diagnosies": ["Избыточный вес", "Отит", "Кальцивироз"]},
          {"name": "Пират", "age": 2, "type": "Кот", "photoURL": "./public/PetsImages/Pirat.png", "breed": "Сфинкс",
            "ownerName": "Иванова Елизавета Александровна", "ownerData": [{"phone": "+7(987)098-35-49", "adress": "Ул. Забайкальского Рабочего, 43"}],
            "diagnosies": ["Аллергия на корм"]},
          {"name": "Сильвер", "age": 5, "type": "Собака", "photoURL": "./public/PetsImages/Silver.png", "breed": "Золотистый ретривер",
            "ownerName": "Яков Алексей Васильевич", "ownerData": [{"phone": "+7(924)890-67-35", "adress": "Ул. Баргузинская, 56"}],
            "diagnosies": ["Сердечная недостаточность", "Дерматит"]},
          {"name": "Бусинка", "age": 6, "type": "Собака", "photoURL": "./public/PetsImages/Businka.png", "breed": "Немецкий шпиц",
            "ownerName": "Яковлева Наталья Владимировна", "ownerData": [{"phone": "+7(987)364-38-04","adress": "Ул. Петровско-Заводского, 44"}],
            "diagnosies": []},
          {"name": "Рикардо", "age": 1, "type": "Собака", "photoURL": "./public/PetsImages/Ricardo.png", "breed": "Немецкая овчарка",
            "ownerName": "Федоров Евгений Валентинович", "ownerData": [{"phone": "+7(908)894-98-09", "adress": "Ул. Новозаводская, 89"}],
            "diagnosies": ["Перелом передней правой лапы"]},
          {"name": "Малыш", "age": 2, "type": "Собака", "photoURL": "./public/PetsImages/Malysh.png", "breed": "Американский питбультерьер",
            "ownerName": "Васильева Анна Павловна", "ownerData": [{"phone": "+7(987)734-34-34", "adress": "Ул. Бабушкина, 115"}],
            "diagnosies": ["Травма когтя", "Укус клеща"]},
          {"name": "Илона фон-Барон", "age": 4, "type": "Собака", "photoURL": "./public/PetsImages/Ilona.png", "breed": "Мальтипу",
            "ownerName": "Елисеева Анжелика Антоновна", "ownerData": [{"phone": "+7(987)980-46-48", "adress": "Ул. Ленина, 150"}],
            "diagnosies": ["Бешенство", "Цистит", "Неврит"]},
          {"name": "Боруто", "age": 3, "type": "Собака", "photoURL": "./public/PetsImages/Boruto.png", "breed": "Сиба-Ину",
            "ownerName": "Японцев Наруто Андреевич", "ownerData": [{"phone": "+7(987)756-58-59", "adress": "Ул. Кайдаловская, 16"}],
            "diagnosies": ["Сахарный диабет", "Лишай"]},
          {"name": "Кеша", "age": 1, "type": "Птица", "photoURL": "./public/PetsImages/Kesha.png", "breed": "Попугай Какаду",
            "ownerName": "Иванов Александр Павлович", "ownerData": [{"phone": "+7(916)987-09-09", "adress": "Ул. Балябина, 45"}],
            "diagnosies": ["Чрезмерное отрастание когтей", "Простуда", "Перелом левого крыла"]},
          {"name": "Наташка", "age": 10, "type": "Пресмыкающееся", "photoURL": "./public/PetsImages/Natashka.png", "breed": "Красноухая черепаха",
            "ownerName": "Стрельникова Мария Петровна", "ownerData": [{"phone": "+7(924)298-20-26", "adress": "Ул. Петровско-Заводского, 50"}],
            "diagnosies": ["Конъюктивит"]}
        ]
      }`;
    
    const parsedData = JSON.parse(data);
    const pars = parsedData.animals

    return (
        <div className='card'>
            {pars.map((index) => (
                <div className='patientCard'>
                    <img src={index.photoURL}></img>
                    <div className='data'>
                        <div className='first'>{index.name}, {index.age}</div>
                        <div>Тип и порода животного: {index.type}, {index.breed}</div>
                        <BasicModal data={index} />
                    </div>
                </div>))}
        </div>
    )
};

function Patients() {
  return (
    <div>
      <Root />
      <PatientCard />
    </div>
  );
}

export default Patients;