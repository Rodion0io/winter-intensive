import { useRef, useState } from "react";
import "./Schedule.css";
import { scheduleResponse, Place, selectedTime } from "@/@types/interfacesFilms";
import { colorTranslate } from "../../../../constant/colorTranslate.ts";


interface Props {
    data: scheduleResponse["schedules"];
    dateChange:(date: string) => void;
    timeChange:(time: selectedTime) => void;

}

const Schedule = ({ data, dateChange, timeChange }: Props) => {
    // Начальное состояние
    const [activeDay, setActiveDay] = useState(data[0]["date"]);
    const [activeTime, setActiveTime] = useState<selectedTime>({ hall: "", time: "", seance: []});

    const currentHall = useRef<string>("");
    

    const handleDate = (date: string) => {
        setActiveDay(date);
        setActiveTime({ hall: "", time: "", seance: []});
        dateChange(date);
    }

    const handleTime = (time: selectedTime) => {
        setActiveTime(time);
        timeChange(time);
    }

    return (
        <>
            <div className="date">

                {data.map((item, index) => (
                    <button
                        key={index}
                        className={`date-btn ${activeDay === item.date ? "btn-active" : ""}`}
                        onClick={() => {handleDate(item.date)}}
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
                                        handleTime({ hall: time.hall.name, time: time.time, seance: time.hall.places})
                                        // setActiveTime({ hall: time.hall.name, time: time.time})
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
                                        handleTime({ hall: time.hall.name, time: time.time, seance: time.hall.places})
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
