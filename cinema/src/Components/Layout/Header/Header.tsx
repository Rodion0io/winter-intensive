import { NavLink } from "react-router-dom";
import cinemaLogo from '../../../assets/CinemaLogo.svg'
import humanIcon from '../../../assets/Human.svg'
import ticketIcon from '../../../assets/Ticket.svg'
import entranceIcon from '../../../assets/EntranceIcon.png'
import { logout } from "../../../utils/logout";
import './Header.css'
import React from "react";

// Ссылки временные
const Header = () => {

    const token = localStorage.getItem('token');

    return (
        <>
            <header className="hero">
                <div className="container">
                    <div className="nav-container">
                        <nav className="navbar">
                            <div className="navbar_left">
                                <NavLink to="/" className="link logo">
                                    <div className="text-block">
                                        <span className="logo-text">ШИФТ</span>
                                        <span className="logo-text">CINEMA</span>
                                    </div>
                                    <img src={cinemaLogo} alt="logo" className="pict-logo"/>
                                </NavLink>

                                {token ? 
                                    <>
                                    <NavLink to="/profile" className="link navbar-link">
                                    <img src={humanIcon} alt="humanIcon" className="link-pict"/>
                                    <span className="link-text">Профиль</span>
                                    </NavLink>
                                    <NavLink to="/tickets" className="link navbar-link">
                                        <img src={ticketIcon} alt="ticketIcon" className="link-pict"/>
                                        <span className="link-text">Билеты</span>
                                    </NavLink></>:
                                    null
                                }
                                
                                {/*</div>*/}
                            </div>
                            <div className="navbar_right">
                                {!token ? 
                                    <NavLink to="/login" className="link navbar-link">
                                        <img src={entranceIcon} alt="" className="link-pict"/>
                                        <span className="link-text">Войти</span>
                                    </NavLink>:
                                    <button className="navber-link-logout" onClick={() => logout()}>
                                        <span className="link-text">Выйти</span>
                                    </button>
                                    // <NavLink to="/" className="link navbar-link" onClick={() => logout()}>
                                    //     <img src={entranceIcon} alt="" className="link-pict"/>
                                    //     <span className="link-text">Выйти</span>
                                    // </NavLink>
                                }
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;