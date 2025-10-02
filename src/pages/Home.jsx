import delivery from "../assets/images/delivery.svg";
import car from "../assets/images/car.svg";
import homelove from "../assets/images/homelove.svg";
import { Card } from "../components/Card/card";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const { products } = useOutletContext();

  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main__title">Рекомендации для вас</h2>

            <div className="content-main__list">
              {products.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  addres={card.addres}
                  date={card.date}
                  image={card.image}
                />
              ))}
            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side__title">Сервисы и услуги</h3>
            <div className="content-side__box">
              <div className="content-side__list">
                <div className="content-side-item">
                  <img src={delivery} alt="delivery" />
                  <h5 className="content-side-item--title">Доставка</h5>
                  <p className="content-side-item--text">
                    Проверка при получении и возможность бесплатно вернуть товар
                  </p>
                </div>
                <div className="content-side-item">
                  <img src={car} alt="car" />
                  <h5 className="content-side-item--title">Автотека</h5>
                  <p className="content-side-item--text">
                    Отчёт с историей авто: пробег, владельцы, сведения о залоге,
                    ДТП и ремонтах
                  </p>
                </div>
                <div className="content-side-item">
                  <img src={homelove} alt="homelove" />
                  <h5 className="content-side-item--title">
                    Онлайн-бронирование жилья
                  </h5>
                  <p className="content-side-item--text">
                    Посуточная аренда квартир и домов: большой выбор вариантов
                    для поездок по России
                  </p>
                </div>
              </div>
              <div className="content-side__footer">
                <p className="content-side__footer--item">
                  © ООО «Абито», 2011–2021
                </p>
                <a href="#!" className="content-side__footer--item">
                  Политика конфиденциальности
                </a>
                <a href="#!" className="content-side__footer--item">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
