import { selectedTime } from "@/@types/interfacesFilms";
import "./hallMaket.css"

interface Props{
    places: selectedTime
}

const HallMaket = ({ places }: Props) => {

    // console.log(places.seance)

    return (
        <>
            <div className="maket-hall">
                <div className="screen-block">
                    <div className="screen-maket-block">
                        <p className="screen-text">Экран</p>
                        <div className="screen-maket"></div>
                    </div>
                    <div className="places">
                        <span className="places-text">Ряд</span>
                        <div className="places-maket">
                            {places.seance.map((item, index) => {
                                return (
                                    <div className="places-row">
                                        <span className="row-number">{index + 1}</span>
                                        <div className="places-row-container">
                                            {item.map((place, index) => {
                                                return (
                                                    <>
                                                        <button 
                                                        className={`point${place.type === "BLOCKED" ? " sold" : ""}`} 
                                                        id={(index + 1).toString()}
                                                        ></button>
                                                    </>
                                                )
                                                
                                            })}
                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HallMaket;