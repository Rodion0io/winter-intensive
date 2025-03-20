import "./personalDatePage.css"
import InputBlock from "../../inputBlock/InputBlock"
import { personalDate, middleOrderTimePlace, middlePersDate } from "@/@types/interfacesFilms"
import ErrorMessage from "../../errorMessage/ErrorMessage"
import { PERSONAL_DATE_MASK, EMAIL_MASK, PHONE_NUMBER_MASK,
     PHONE_NUMBER_PLACEHOLDER } from "../../../constants.ts";

import { Link, useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react";

const PersonalDatePage = () => {

    const location = useLocation();
    const getDatas: middleOrderTimePlace = location.state;

    const {id} = useParams();

    const [personalDate, setPersonalDate] = useState<personalDate>({
        lastname: "",
        firstname: "",
        middlename: "",
        phone: "",
        email: undefined,
        address: undefined
    });

    const [statusCode, setStatusCode] = useState(100);
    const [statusError, setStatusError] = useState<boolean>(false);
    const [middleObjOrder, setMiddleObjOrder] = useState<middlePersDate>({
        pearson: personalDate,
        placeInfo: getDatas
    })

    const handleChange = (fieldName: string, value: string) => {
           setPersonalDate((prevDate) => (
            {
                ...prevDate,
                [fieldName]: value
            }
           ))
    }


    const checkValidate = (): boolean => {
        let result: boolean = PERSONAL_DATE_MASK.test(personalDate.lastname) &&
            PERSONAL_DATE_MASK.test(personalDate.firstname) && 
            (personalDate.email !== undefined ? EMAIL_MASK.test(personalDate.email) : true) && 
            PHONE_NUMBER_MASK.test((personalDate.phone).replace(/[()-]/g,""));
        
        return result;
    }



    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {        
        
        if (checkValidate() === false){
            event.preventDefault();
            setStatusCode(5);
            setStatusError(true);
        }
        else{
            setStatusCode(100);
            setStatusError(false); 
        }
    }

    useEffect(() => {
        setMiddleObjOrder((prevState) => ({
            ...prevState,
            pearson: personalDate
        }));
    },[personalDate])


    return (
        <>
            <main className="personal-date-block">
                <div className="container">
                    <div className="personal-date-container">
                        <h1 className="section-title">Введите ваши данные</h1>
                        <div className="progress-bar-block">
                            <div className="progress-bar-block-head">Шаг 2 из 3</div>
                            <progress className="progress-bar" value="70" max="100"></progress>
                        </div>

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="lastName"
                            labelValue="Фамилия*"
                            inputType="text"
                            placeholderValue="Фамилия"
                            inputId="lastNId"
                            isRequred={true}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('lastname', value)}
                        />


                    <InputBlock
                        inputBlockClass="input-block"
                        forName="Name"
                        labelValue="Имя*"
                        inputType="text"
                        placeholderValue="Имя"
                        inputId="NId"
                        isRequred={true}
                        inputClass="inputcl personalDataClass"
                        onInputChange={(value) => handleChange('firstname', value)}
                        maxLength={60}
                    />

                    <InputBlock
                        inputMask={PHONE_NUMBER_PLACEHOLDER}
                        inputBlockClass="input-block"
                        forName="phone"
                        labelValue="Номер телефона*"
                        inputType="text"
                        placeholderValue="+7"
                        inputId="PhoneId"
                        isRequred={true}
                        inputClass="inputcl personalDataClass"
                        onInputChange={(value) => handleChange('phone', value)}
                        maxLength={17}
                    />

                    <InputBlock
                        inputBlockClass="input-block"
                        forName="mail"
                        labelValue="Email"
                        inputType="email"
                        placeholderValue="Email"
                        inputId="MailId"
                        isRequred={false}
                        inputClass="inputcl personalDataClass"
                        onInputChange={(value) => handleChange('email', value)}
                        maxLength={30}
                    />

                    <InputBlock
                        inputBlockClass="input-block"
                        forName="address"
                        labelValue="Адрес"
                        inputType="text"
                        placeholderValue="Адрес"
                        inputId="AdresId"
                        isRequred={false}
                        inputClass="inputcl personalDataClass"
                        onInputChange={(value) => handleChange('address', value)}
                        maxLength={60}
                    /> 

                        {statusError ? <ErrorMessage errorCode={statusCode}/> : null}

                        <div className="buttons-block">
                            <Link to={`#`} className="link btn back">Назад</Link>
                            <Link to={`/film/${id}/paydate`} className="link btn buy" onClick={handleClick} state={middleObjOrder}>Продолжить</Link>
                        </div>
                    </div>

                    
                </div>
            </main>
        </>
    )
}

export default PersonalDatePage