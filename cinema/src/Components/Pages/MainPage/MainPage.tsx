import './MainPage.css'
import { getFilmList } from '../../../API/getFilmList'
import { useEffect, useState } from 'react';
import FilmCard from './FilmCard/FilmCard';

const MainPage = () => {

    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            const films = await getFilmList();
            setFilmsList((await films.json()).films);
        }
        getFilms();
    }, []);

    return (
        <>
            <section className="poster-section">
                <div className="container">
                    <div className="main-container">
                        <main className="main-block">
                            <h1 className="section-title">Афиша</h1>
                            <div className="film-cards-container">
                                {filmsList.map((item, index) => (
                                    <FilmCard 
                                    key={index}
                                    film={item}
                                    />
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;