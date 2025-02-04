import "./errorMessage.css"

interface ErrorProps{
    errorCode: number
}

const ErrorMessage = ({ errorCode }: ErrorProps) => {


    // Record-дженерик, которые указывает тип ключа и значения у объекта
    const errosObj: Record<number, string> = 
        {1: "Некорректное имя или фамилия",
        2: "Некорректный номер телефона",
        3: "Некорректный email",
        4: "Некорректный адрес",
        5: "Некорректный данные"}

    return (
        <>
            <div className="error-block">
                <p className="error-text">{errosObj[errorCode]}</p>
            </div>
        </>
    )
}


export default ErrorMessage;