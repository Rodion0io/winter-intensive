import { Link, useParams } from "react-router-dom";
import "./ConcreteFilmPage.css"
import arrow from "../../../assets/arrow.svg"
import AboutFilmInformation from "./AboutFilmInformation/AboutFilmInformation";
import { getFilm } from "../../../API/getFilm.ts";
import { useEffect, useState } from "react";
import { getFilmSchedule } from "../../../API/getFilmSchedule.ts"
import Schedule from "./Schedule/Schedule.tsx";
import { selectedTime, Place } from "@/@types/interfacesFilms.ts";


// Получаем id фильма и прокидываем компоентам выбора даты
const ConcreteFilmPage = () => {

    const [filmObject, setFilmObject] = useState([]);
    const [scheduleObject, setScheduleObject] = useState([]);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTime, setSelectedTime] = useState<selectedTime>({ hall: "", time: "", seance: []});

    const {id} = useParams();

    useEffect(() => {
        const film = async () => {
            const request = await getFilm(id);
            setFilmObject((await request.json()).film);
        }
        film();
    }, [id]);

    useEffect(() => {
        const filmSchedule = async () => {
            const request = await getFilmSchedule(id);
            setScheduleObject((await request.json()).schedules);
        }
        filmSchedule();
    }, [id]);

    const handleDayChange = (data: string) => {
        setSelectedDay(data);
    }

    const handleTimeChange = (time: selectedTime) => {
        setSelectedTime(time)
    }

    // console.log(selectedTime);

    return (
        <>
            <main className="Film-information-block">
                <div className="container">
                    <div className="section-container">
                        <div className="back-btn-block">
                            <Link to="/" className="link back-link">
                                <img src={arrow} alt="" className="back-logo"/>
                                <span className="back-text">Назад</span>
                            </Link>
                        </div>

                        {Object.keys(filmObject).length > 0 && <AboutFilmInformation information={filmObject}/>}

                        <section className="booking">
                            <h2 className="schedule-title">Расписание</h2>
                            <div className="time-block">
                                {Object.keys(scheduleObject).length > 0 &&
                                 <Schedule 
                                 data={scheduleObject}
                                 dateChange={handleDayChange}
                                 timeChange={handleTimeChange}
                                 />}
                            </div>


                            {/* to={`/film/${film.id}`} */}
                            {/* Класс временный, нужно придумать универсальное название */}
                            <Link to="/film/:id/choice" state={selectedTime} className="link full-infa-film">Продолжить</Link>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ConcreteFilmPage;