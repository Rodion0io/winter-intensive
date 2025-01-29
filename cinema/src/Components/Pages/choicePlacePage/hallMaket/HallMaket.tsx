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
                    <p className="screen-text">Экран</p>
                    <div className="screen-maket"></div>
                    <div className="places">
                        <span className="places-text">Ряд</span>
                        <div className="places-maket">
                            {places.seance.map((item, index) => {
                                return (
                                    <div className="places-row">
                                        <span className="row-number">{index + 1}</span>
                                        {item.map((place, index) => {
                                            return (
                                                <>
                                                    <button 
                                                    className={`point ${place.type === "BLOCKED" ? "sold" : ""}`} 
                                                    id={(index + 1).toString()}
                                                    ></button>
                                                </>
                                            )
                                            
                                        })}
                                        
                                    </div>
                                )
                                // console.log(item);
                                // return 0;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HallMaket;