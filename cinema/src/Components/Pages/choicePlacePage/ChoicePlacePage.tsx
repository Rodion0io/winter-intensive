import "./choicePlacePage.css"
import { selectedTime } from "@/@types/interfacesFilms";
import HallMaket from "./hallMaket/HallMaket";


import { useLocation, Link } from "react-router-dom"

const ChoicePlacePage = () => {

    const location = useLocation();
    const getDatas: selectedTime = location.state

    return (
        <>
            <main className="choice-place-block">
                <div className="container">
                    <div className="choice-place-container">
                        <h1 className="section-title">Выбор места</h1>
                        <div className="progress-bar-block">
                            <div className="progress-bar-block-head">Шаг 1 из 3</div>
                            <progress className="progress-bar" value="70" max="100"></progress>
                        </div>
                        <HallMaket places={getDatas}/>
                        <div className="order-information">
                            <div className="order-information-block">
                                <p className="title-block">Зал</p>
                                <p className="order-params">Синий</p>
                            </div>
                            <div className="order-information-block">
                                <p className="title-block">Дата и время</p>
                                <p className="order-params">3 июля 13:45</p>
                            </div>
                            <div className="order-information-block">
                                <p className="title-block">Места</p>
                                <p className="order-params">2 ряд - 8,9</p>
                            </div>
                            <p className="total-price">Сумма:500 ₽</p>
                        </div>
                        <div className="buttons-block">
                            <Link to="#" className="link btn back">Назад</Link>
                            <Link to="#" className="link btn buy">Купить</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChoicePlacePage;