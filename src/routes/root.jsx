function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Vet Dashboard</h1>
          <nav>
            <ul className='nav'>
              <li>
                <a href={`/main`}>Главная</a>
              </li>
              <li>
                <a href={`/patients`}>Пациенты</a>
              </li>
              <li>
                <a href={`/reception`}>Прием</a>
              </li>
              <li>
                <a href={`/usefullinks`}>Полезные ресурсы</a>
              </li>
            </ul>
          </nav>
            <div id="detail">
              @MarusiaTsirelnikova
            </div>
          </div>
      </>
    );
  }

export default Root;