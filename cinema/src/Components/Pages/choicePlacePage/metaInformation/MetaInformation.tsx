import "./metaInformation.css"
import { selectedPlace } from "@/@types/interfacesFilms"

interface MetaInformationProps{
    props: selectedPlace
}

const MetaInformation = ({ props }: MetaInformationProps) => {

    return (
        <>
            <div className="meta-block">
                <p className="text-price">{`${props.price} ₽`}</p>
                <p className="text-place">{`${props.row} ряд, ${props.place} место`}</p>
            </div>
        </>
    )
}

export default MetaInformation;