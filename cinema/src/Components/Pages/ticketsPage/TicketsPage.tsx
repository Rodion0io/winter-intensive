import "./ticketPage.css"

import { useOrders } from "./hooks/useOrders";

const TicketsPage = () => {

    const order = useOrders();
    
    return (
        <>
            <section className="ticket-page">
                <div className="container">
                    <div className="ticket-page_container">
                        <h1 className="section-title">Заказы</h1>
                        <div className="types-tickets-block">
                            <button className="first">Активные</button>
                            <button className="second">История</button>
                            <div className="orders-crad-container">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )   
}

export default TicketsPage;