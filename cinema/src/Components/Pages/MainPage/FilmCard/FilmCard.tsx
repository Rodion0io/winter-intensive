import star from "../../../../assets/star.svg"
import './FilmCard.css'
import { Link } from "react-router-dom"
import { PART_URL_PHOTO } from "../../../../constants"
import { AgeRating } from "../../../../RaitingList"

interface IFilmCardProp{
    film: Film
}

const FilmCard = ({ film }: IFilmCardProp) => {
    
    return (
        <>
            <article className="card">
                <div className="photo-block">
                    <img src={`${PART_URL_PHOTO}${film.img}`} alt="" className="film-photo"/>
                    <div className="meta-datas">
                        {film.genres.map((item:string) => (
                            <p className="genre">{item}</p>
                        ))}
                        {/* <p className="genre">фантастика</p> */}
                        <p className="country">{film.country.name}, {film.releaseDate.split(" ").slice(-1)}</p>
                        {/* <p className="country">США, 2023</p> */}
                    </div>
                </div>
                <div className="film-data">
                    <h2 className="film-title">{film.name} ({AgeRating[film.ageRating]})</h2>
                    <p className="film-subtitle">Фильм</p>
                </div>
                <div className="film-rating">
                    {/*Здесь нужно накинуть функционал звездного рейтинга*/}
                    <div className="star-rating">
                        <img src={star} alt="star" className="star-logo"/>
                        <img src={star} alt="star" className="star-logo"/>
                        <img src={star} alt="star" className="star-logo"/>
                        <img src={star} alt="star" className="star-logo"/>
                        <img src={star} alt="star" className="star-logo"/>
                    </div>
                    {Object.entries(film.userRatings).map(([key, value], index) => (
                    <p key={index} className="ratio">{key} - {value}</p>
                    ))}
                    {/* {film.userRatings.map((item:object) => (
                            <p className="ratio">{Object.keys(item)}</p>
                        ))} */}
                    {/* <p className="ratio">Kinopoisk - 8.4</p> */}
                </div>
                <Link to="/film" className="link full-infa-film" id={film.id}>Подробнее</Link>
            </article>
        </>
    )
}

export default FilmCard;