import "./payDatePage.css"
import InputBlock from "../../inputBlock/InputBlock";
import { debitCard, orderTicket, middlePersDate } from "@/@types/interfacesFilms";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import { CARD_NUMBER_MASK, CARD_TERM_MASK, CARD_CVV_MASK,
    CODE_CARD_PLACEHOLDER, EXPIRE_DATE_PLACEHOLDER } from "../../../constants.ts";

import { loadDatas } from "../../../store/slices/payloadInforamtionSlice.ts";

import { payTicket } from "../../../API/payTicket.ts";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { useDispatch } from "react-redux";
import React from "react";


const PayDatePage = () => {

    const location = useLocation();
    const getDatas: middlePersDate = location.state;

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const {id} = useParams();

    const [payDate, setPayDate] = useState<debitCard>({
        pan: "",
        expireDate: "",
        cvv: ""
    });

    const [statusCode, setStatusCode] = useState(100);
    const [statusError, setStatusError] = useState<boolean>(false);
    const [middleObjOrder, setMiddleObjOrder] = useState<orderTicket>({
        filmId: id?.toString(),
        person: getDatas?.pearson,
        debitCard: payDate,
        seance: {date: getDatas?.placeInfo.data.date, time: getDatas?.placeInfo.data.time},
        tickets: getDatas?.placeInfo.place,
    })

    const handleChange = (fieldName: string, value: string) => {
        let formattedValue = value;
    
        setPayDate((prevDate) => ({
            ...prevDate,
            [fieldName]: formattedValue
        }));
    };
    

    useEffect(() => {
        setMiddleObjOrder((prevState) => ({
            ...prevState,
            debitCard: payDate
        }));
    },[payDate])

    const checkValidate = (): boolean => {
        let result: boolean = CARD_NUMBER_MASK.test(payDate.pan) &&
            CARD_TERM_MASK.test(payDate.expireDate) && 
            CARD_CVV_MASK.test(payDate.cvv);
        
        return result;
    }

    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {

        if (checkValidate() === false){
            event.preventDefault();
            setStatusCode(5);
            setStatusError(true);
        }
        else{
            setStatusCode(100);
            setStatusError(false); 
            
            try {
                const response = (await (await payTicket(middleObjOrder)).json()).order;

                // console.log((await response.json()).order);

                dispatch(loadDatas(response))
                navigate(`/success/${response._id}`)
            } 
            catch {
                navigate("/error");
            }
        }
    }

    return (
        <>
            <main className="pay-date-block">
                <div className="container">
                    <div className="pay-date-container">
                        <h1 className="section-title">Введите данные карты для оплаты</h1>
                        <div className="progress-bar-block">
                            <div className="progress-bar-block-head">Шаг 3 из 3</div>
                            <progress className="progress-bar" value="100" max="100" color="green"></progress>
                        </div>

                        <div className="card-block">
                            <InputBlock
                                inputMask={CODE_CARD_PLACEHOLDER}
                                inputBlockClass="input-block pay"
                                forName="cardNum"
                                labelValue="Номер*"
                                inputType="text"
                                placeholderValue="0000 0000"
                                inputId="cardNId"
                                isRequred={true}
                                inputClass="inputcl payDateClass"
                                onInputChange={(value) => handleChange('pan', value)}
                                maxLength={9}
                            />
                            <div className="bottom-part-card">
                                <InputBlock
                                    inputMask={EXPIRE_DATE_PLACEHOLDER}
                                    inputBlockClass="input-block bottom"
                                    forName="term"
                                    labelValue="Срок*"
                                    inputType="text"
                                    placeholderValue="00/00"
                                    inputId="termId"
                                    isRequred={true}
                                    inputClass="inputcl payDateClass bottom"
                                    onInputChange={(value) => handleChange('expireDate', value)}
                                    maxLength={5}
                                />

                                <InputBlock
                                    inputBlockClass="input-block bottom"
                                    forName="cv"
                                    labelValue="CVV*"
                                    inputType="text"
                                    placeholderValue="000"
                                    inputId="cvId"
                                    isRequred={true}
                                    inputClass="inputcl payDateClass bottom"
                                    onInputChange={(value) => handleChange('cvv', value)}
                                    maxLength={3}
                                />
                            </div>
                        </div>

                        {statusError ? <ErrorMessage errorCode={statusCode}/> : null}

                        <div className="buttons-block">
                            <Link to="#" className="link btn buy" onClick={handleClick}>Оплатить</Link>
                        </div>
                    </div>

                    
                </div>
            </main>
        </>
    )
}

export default PayDatePage;