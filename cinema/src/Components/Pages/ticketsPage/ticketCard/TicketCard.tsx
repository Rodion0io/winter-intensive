import "./ticketCard.css"

import { Ticket } from "@/@types/interfacesFilms";

interface OrderProps{
    props: Ticket,
    filmName: string,
    orderNumber: number
}

const TicketCard = ({ props, filmName, orderNumber }: OrderProps) => {
    
    return (
        <>
            <article className="ticket-card">
                <div className="card-container">
                    <div className="card-header">
                        <p className="date">{props.seance.date}</p>
                        <p className="time">{props.seance.time}</p>
                    </div>
                    <div className="main-card-inforamtion">
                        <h2 className="name">{filmName}</h2>
                        <p className="place">{props.row}</p>
                    </div>
                    <div className="card-footer">
                        <p className={`${props.status === "PAYED" ? "status-success" : "status-error"}`}>{props.status === "PAYED" ? "Оплачен" : "Отменен"}</p>
                        <p className="order-number">{orderNumber}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default TicketCard;