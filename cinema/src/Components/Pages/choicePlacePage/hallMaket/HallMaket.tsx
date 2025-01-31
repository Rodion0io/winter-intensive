import { selectedTime, selectedPlace } from "@/@types/interfacesFilms";
import "./hallMaket.css"
import MetaInformation from "../metaInformation/MetaInformation";

import { useEffect, useState } from "react";

interface Props{
    places: selectedTime,
    choosePlace:(currentPlace: selectedPlace[]) => void;
}

const HallMaket = ({ places, choosePlace }: Props) => {
    
    const [selectePlaces, setSelectePlaces] = useState<selectedPlace[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<selectedPlace | null>(null);
    
    const handlePlace = (place: selectedPlace) => {
        setSelectePlaces((prevPlace) => (
            (prevPlace.find((item) => place.place === item.place 

            && place.row === item.row) !== undefined ? 
            prevPlace.filter((item) => item.place !== place.place

            || item.row !== place.row) : [...prevPlace, place])


        ));
            
    }

    useEffect(() => {
        choosePlace(selectePlaces);
        setSelectedPlace(null)
    },[selectePlaces])

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
                                            {item.map((place, pointIndex) => {                                                

                                                return (
                                                    <>
                                                        {/* {selectePlace.find((item) => item.row === index.toString()
                                                            && item.place === pointIndex.toString() ?  */}
                                                            
                                                        <button 
                                                        className={`point${place.type === "BLOCKED" ? " sold" : ""} ${selectePlaces.find((item) => item.row === index.toString()
                                                            && item.place === pointIndex.toString()) !== undefined ? "choosen" : ""}`}
                                                        id={`${index}-${pointIndex}`}
                                                        disabled={place.type === "BLOCKED" ? true : false}
                                                        onClick={() => {
                                                            handlePlace({row: index.toString(), place: pointIndex.toString(), price: place.price});
                                                            
                                                        }}
                                                        onMouseEnter={() => {
                                                            if (place.type !== "BLOCKED"){
                                                                setSelectedPlace({row: index.toString(), place: pointIndex.toString(), price: place.price})
                                                            }
                                                        }}
                                                        onMouseLeave={() => setSelectedPlace(null)}
                                                        ></button>
                                                        {selectedPlace && selectedPlace.row === index.toString() && selectedPlace.place === pointIndex.toString() && !(selectePlaces.find((item) => item.row === index.toString()
                                                            && item.place === pointIndex.toString())) && 
                                                        <MetaInformation 
                                                            props={{place: (pointIndex + 1).toString(), 
                                                            row: (index + 1).toString(), price: place.price}}/>}
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