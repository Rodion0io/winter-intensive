import "./choicePlacePage.css"
import { selectedTime, selectedPlace, middleOrderTimePlace, ticket } from "@/@types/interfacesFilms";
import HallMaket from "./hallMaket/HallMaket";
import { colorTranslate } from "../../../constant/colorTranslate.ts";
import { changeDateFormat } from "../../../utils/changeDateFormat.ts";
import { modifyPlaceString } from "../../../utils/modifyPlaceString.ts";




import { useLocation, Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const ChoicePlacePage = () => {

    const location = useLocation();
    const getDatas: selectedTime = location.state;

    const [selectePlace, setSelectePlace] = useState<selectedPlace[]>([]);
    const [currentPrice, setCurrentPrice] = useState<number>(0);

    const tickets: ticket[] = selectePlace.map(place => ({
        row: parseInt(place.row),
        column: parseInt(place.place)
    }));

    const [middleObjOrder, setMiddleObjOrder] = useState<middleOrderTimePlace>({
        data: {date: getDatas.date, time: getDatas.time},
        place: tickets
    })

    const {id} = useParams();

    // ВРЕМЕННО
    // const [sessiosInfa, setSessionInfa] = useState(0);

    

    const handlePlaceChange = (place: selectedPlace[]) => {
        setSelectePlace(place);
    }

    useEffect(() => {
        let newTotalPrice = 0;
        selectePlace.map((item) => {
            newTotalPrice += item.price;
        })

        setCurrentPrice((value) => value !== newTotalPrice ? newTotalPrice : value);
        setMiddleObjOrder((prevState) => ({
            ...prevState,
            place: tickets
        }));
    },[selectePlace])

    // console.log(getDatas)

    // console.log(middleObjOrder);
    


    return (
        <>
            <main className="choice-place-block">
                <div className="container">
                    <div className="choice-place-container">
                        <h1 className="section-title">Выбор места</h1>
                        <div className="progress-bar-block">
                            <div className="progress-bar-block-head">Шаг 1 из 3</div>
                            <progress className="progress-bar" value="30" max="100" color="green"></progress>
                        </div>
                        <HallMaket 
                        places={getDatas}
                        choosePlace={handlePlaceChange}
                        />
                        <div className="order-information">
                            <div className="order-information-block">
                                <p className="title-block">Зал</p>
                                <p className="order-params">{colorTranslate[getDatas.hall]}</p>
                            </div>
                            <div className="order-information-block">
                                <p className="title-block">Дата и время</p>
                                <p className="order-params">{`${changeDateFormat(getDatas.date)} ${getDatas.time}`}</p>
                            </div>
                            <div className="order-information-block">
                                <p className="title-block">Места</p>
                                {selectePlace.length !== 0 ? modifyPlaceString(selectePlace).map((item) => (
                                    <p className="order-params">{item}</p>
                                )) : null}
                                
                            </div>
                            <p className="total-price">{`Сумма:${currentPrice} ₽`}</p>
                        </div>
                        <div className="buttons-block">
                            <Link to={`/film/${id}`} className="link btn back">Назад</Link>
                            <Link to={`/film/${id}/personaldate`} className="link btn buy" state={middleObjOrder}>Купить</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChoicePlacePage;