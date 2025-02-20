import { NavLink } from "react-router-dom";
import cinemaLogo from '../../../assets/CinemaLogo.svg'
import humanIcon from '../../../assets/Human.svg'
import ticketIcon from '../../../assets/Ticket.svg'
import entranceIcon from '../../../assets/EntranceIcon.png'
import './Header.css'
import React from "react";

// Ссылки временные
const Header = () => {
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
                                {/*<div className="user-links-block">*/}
                                <NavLink to="/profile" className="link navbar-link">
                                    <img src={humanIcon} alt="humanIcon" className="link-pict"/>
                                    <span className="link-text">Профиль</span>
                                </NavLink>
                                <NavLink to="/tickets" className="link navbar-link">
                                    <img src={ticketIcon} alt="ticketIcon" className="link-pict"/>
                                    <span className="link-text">Билеты</span>
                                </NavLink>
                                {/*</div>*/}
                            </div>
                            <div className="navbar_right">
                                <NavLink to="/login" className="link navbar-link">
                                    <img src={entranceIcon} alt="" className="link-pict"/>
                                    {/*Добавить проверку на авторизацию, если не авторизован-текст ссылки 'Вход'*/}
                                    <span className="link-text">Войти</span>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;