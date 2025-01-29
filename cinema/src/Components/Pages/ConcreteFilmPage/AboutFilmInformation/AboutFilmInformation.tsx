import star from "../../../../assets/star.svg"
import { FilmAbout } from "@/@types/interfacesFilms"
import { AgeRating } from "../../../../RaitingList.ts"
import { PART_URL_PHOTO } from "../../../../constants.ts"
import "./AboutFilmInformation.css"

interface IFilmInfaProp{
    information: FilmAbout
}

const AboutFilmInformation = ({ information }: IFilmInfaProp) => {
    return (
        <>
            <article className="film-about">
                        <div className="photo-block concrete-film">
                            <img src={`${PART_URL_PHOTO}${information.img}`} alt="" className="film-photo"/>
                            <div className="meta-datas">
                                {information.genres.map((item:string, index) => (
                                    <p className="genre" key={index}>{item}</p>
                                ))}
                                {/* <p className="genre">фантастика</p> */}
                                <p className="country">{information.country.name}, {information.releaseDate.split(" ").slice(-1)}</p>
                                {/* <p className="country">США, 2023</p> */}
                            </div>
                        </div>
                             <div className="film-information">
                             <div className="film-data">
                             <h2 className="infa-title film-title">{information.name} ({AgeRating[information.ageRating]})</h2>
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
                                     {Object.entries(information.userRatings).map(([key, value], index) => (
                                        <p key={index} className="ratio">{key} - {value}</p>
                                    ))}
                                     {/* <p className="ratio">Kinopoisk - 8.4</p> */}
                                 </div>
                                 <p className="film-description">{information.description}</p>
                             </div>
                        </article>
        </>
    )
}

export default AboutFilmInformation;