import "./paymantPage.css"

import okLogo from "../../../assets/OkLogo.svg"

import OrderInformationCard from "../../orderInformationCard/OrderInformationCard"

import { useSelector } from "react-redux"

import { RootState } from "@/store/store"
import { Link } from "react-router-dom"
import React from "react"

const SuccessPaymantPage = () => {

    const orderInformation = useSelector((state : RootState) => state.payment.orderObject);

    return (
        <>
            <main className="success-payment-block">
                <div className="container">
                    <div className="success-payment-container">
                        <div className="title">
                            <img src={okLogo} alt="logo" />
                            <h1 className="text-title">Оплата прошла успешно!</h1>
                        </div>
                        <OrderInformationCard
                            key={orderInformation?._id}
                            props={orderInformation}
                        />
                        <div className="buttons-block payment">
                            <Link to="#" className="link btn details">Детали заказа</Link>
                            <Link to="/" className="link btn toMain">На главную</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SuccessPaymantPage;