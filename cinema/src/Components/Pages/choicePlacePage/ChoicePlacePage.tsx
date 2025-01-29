import "./choicePlacePage.css"
import { selectedTime } from "@/@types/interfacesFilms";
import HallMaket from "./hallMaket/HallMaket";


import { useLocation } from "react-router-dom"

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
                            <progress value="0" max="100"></progress>
                        </div>
                        <HallMaket 
                        places={getDatas}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChoicePlacePage;