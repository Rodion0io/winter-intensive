import { useRef, useState } from "react";
import "./Schedule.css";
import { scheduleResponse } from "@/@types/interfacesFilms";
import { colorTranslate } from "../../../../constant/colorTranslate.ts";

interface Props {
    data: scheduleResponse["schedules"];
}

const Schedule = ({ data }: Props) => {
    // Начальное состояние
    const [activeDay, setActiveDay] = useState(data[0]["date"]);
    const [activeTime, setActiveTime] = useState({ hall: "", time: "" });

    const currentHall = useRef<string>("");

    return (
        <>
            <div className="date">

                {data.map((item, index) => (
                    <button
                        key={index}
                        className={`date-btn ${activeDay === item.date ? "btn-active" : ""}`}
                        onClick={() => {setActiveDay(item.date);
                            setActiveTime({ hall: "", time: "" })
                        }}
                    >
                        {item["date"]}
                    </button>
                ))}
            </div>


            {data.map((item) => {
                if (item.date === activeDay) {
                    //Идею с контейнером подкинул gpt
                    let hallCards: JSX.Element[] = [];
                    let currentHallCard: JSX.Element | null = null;
                    let timeContainer: JSX.Element[] = [];

                    item.seances.forEach((time, index) => {
                        if (currentHall.current !== time.hall.name) {

                            if (currentHallCard) {
                                hallCards.push(currentHallCard);
                            }


                            currentHall.current = time.hall.name;


                            timeContainer = [
                                <button
                                    key={`${time.hall.name}-${time.time}-${index}`}
                                    className={`time-btn ${activeTime.hall === time.hall.name && activeTime.time === time.time ? "time-active" : ""}`}
                                    onClick={() =>
                                        setActiveTime({ hall: time.hall.name, time: time.time })
                                    }
                                >
                                    {time.time}
                                </button>,
                            ];
                            currentHallCard = (
                                <div key={currentHall.current} className="hall-card">
                                    <h3 className="hall-title">{`${colorTranslate[time.hall.name]} зал`}</h3>
                                    <div className="time-container">{timeContainer}</div>
                                </div>
                            );
                        } else {

                            timeContainer.push(
                                <button
                                    key={`${time.hall.name}-${time.time}-${index}`}
                                    className={`time-btn ${activeTime.hall === time.hall.name && activeTime.time === time.time ? "time-active" : ""}`}
                                    onClick={() =>
                                        setActiveTime({ hall: time.hall.name, time: time.time })
                                    }
                                >
                                    {time.time}
                                </button>
                            );


                            currentHallCard = (
                                <div key={currentHall.current} className="hall-card">
                                    <h3 className="hall-title">{`${colorTranslate[time.hall.name]} зал`}</h3>
                                    <div className="time-container">{timeContainer}</div>
                                </div>
                            );
                        }
                    });


                    if (currentHallCard) {
                        hallCards.push(currentHallCard);
                    }

                    return <>{hallCards}</>;
                }
                return null;
            })}
        </>
    );
};

export default Schedule;
