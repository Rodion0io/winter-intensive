import "./successPaymantPage.css"

import okLogo from "../../../assets/OkLogo.svg"

import OrderInformationCard from "../../orderInformationCard/OrderInformationCard"


const SuccessPaymantPage = () => {
    return (
        <>
            <main className="success-payment-block">
                <div className="container">
                    <div className="success-payment-container">
                        <div className="title">
                            <img src={okLogo} alt="logo" />
                            <h1 className="text-title">Оплата прошла успешно!</h1>
                        </div>
                        <article className="order-information-card">

                        </article>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SuccessPaymantPage;