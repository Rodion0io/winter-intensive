import "./orderInformationCard.css"

import { getDate } from "../../utils/getDate";

import { order } from "@/@types/interfacesFilms";

interface OrderInformationCardProps{
    props: order
}

const OrderInformationCard = ({ props } : OrderInformationCardProps) => {

    
    return (
        <>
        
            <article className="order-information-card" key={props._id}>
                <div className="order-information-card-container">
                    <div className="block-infa">
                        <h2 className="block-title">Номер билета</h2>
                        <p className="block-information">{props.orderNumber}</p>
                    </div>
                    <div className="block-infa">
                        <h2 className="block-title">Фильм</h2>
                        <p className="block-information">{props.filmName}</p>
                    </div>
                    <div className="block-infa">
                        <h2 className="block-title">Дата и время</h2>
                        <p className="block-information">{`${getDate(props.tickets[0].seance.date)} 
                            ${props.tickets[0].seance.time}`}</p>
                    </div>
                    <div className="block-infa">
                        <h2 className="block-title">Ряд</h2>
                        <p className="block-information">{[...new Set(props.tickets.map(item => 
                            item.row))].join(",")}</p>
                    </div>
                    <div className="block-infa">
                        <h2 className="block-title">Места</h2>
                        <p className="block-information">{[...new Set(props.tickets.map(item => 
                            item.column))].join(",")}</p>
                    </div>
                    <p className="other-infa">Вся информация была продублирована в SMS</p>
                </div>
            </article>
        </>
    )
}

export default OrderInformationCard;