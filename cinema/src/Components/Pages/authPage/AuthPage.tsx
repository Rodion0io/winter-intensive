import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./authPage.css"

import InputBlock from "../../inputBlock/InputBlock";
import { 
    PHONE_NUMBER_PLACEHOLDER,
    PHONE_NUMBER_MASK,
    NOT_VALID_PHONE,
    NOT_VALID_CODE,
    OTP_CODE_MASK } from "../../../constants";

import { authDatas } from "../../../@types/interfacesFilms";

import { signin } from "../../../API/signin";
import { getOtpCode } from "../../../API/getOtpCode"

import { changeStatus } from "../../../store/slices/authSlice";


const AuthPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    

    const [visibleCodeInput, setVisibleCodeInput] = useState(false);
    const [authDatas, setAuthDatas] = useState<authDatas>({phone: "", code: 0});
    const [visibilityErrorMessage, setVisibilityErrorMessage] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [buttonVisibility, setButtonVisibility] = useState(true);
    const [currentTime, setCurrentTime] = useState(120);
    const [requestFlag, setRequestFlag] = useState(false);

    const handleChange = (fieldName: string, value: string) => {
        let formattedValue = value;
    
        setAuthDatas((prevDate) => ({
            ...prevDate,
            [fieldName]: fieldName === "phone" ? formattedValue.replace(/[()-]/g,"") : formattedValue
        }));
    };

    const getCode = async () => {
        if (PHONE_NUMBER_MASK.test(authDatas.phone)){
            setVisibleCodeInput(true)
            setVisibilityErrorMessage(false)
            setStatusCode(0)
            setButtonVisibility(false)
            await getOtpCode({phone: authDatas.phone});
            setCurrentTime(120);
        }
        else{
            setVisibilityErrorMessage(true)
            setStatusCode(1)
        }       
    }

    const LogIn = async () => {
        if (OTP_CODE_MASK.test(authDatas.code.toString())){
            try{
                const bearerToken = (await ((await signin(authDatas)).json())).token;
                setVisibilityErrorMessage(false)
                setStatusCode(0);
                dispatch(changeStatus());
                localStorage.setItem("token", bearerToken);
                navigate("/");
            }
            catch{
                // Временно
                throw Error("Увы")
            }
        }
        else{
            setVisibilityErrorMessage(true)
            setStatusCode(2)
        }
    }

    useEffect(() => {
        if (currentTime > 0 && requestFlag) {
            const timer = setInterval(() => {
                setCurrentTime(time => time - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (currentTime === 0) {
            setRequestFlag(false);
        }
    }, [currentTime, requestFlag]);

    return (
        <>
            <section className="auth-page">
                <div className="container">
                    <div className="auth-container">
                        <h1 className="section-title">Авторизация</h1>
                        <h3 className="subtitle">Введите номер телефона для входа в личный кабинет</h3>

                        <InputBlock
                            inputMask={PHONE_NUMBER_PLACEHOLDER}
                            inputBlockClass="input-block"
                            forName="phone"
                            inputType="text"
                            placeholderValue="+7"
                            inputId="PhoneId"
                            isRequred={true}
                            inputClass="inputcl auth"
                            onInputChange={(value) => handleChange('phone', value)}
                            maxLength={17}
                        />

                        {visibleCodeInput ? 
                            <InputBlock
                            inputBlockClass="input-block"
                            forName="term"
                            inputType="text"
                            placeholderValue="Проверочный код"
                            inputId="otpCodeId"
                            isRequred={true}
                            inputClass="inputcl auth"
                            onInputChange={(value) => handleChange('code', value)}
                            maxLength={6}
                            />
                            : null
                        }

                        <div className="action-block">
                            {buttonVisibility ?
                                <button className="btn send-phone" onClick={() => getCode()}>Продолжить</button>
                                : null
                            }
                            {!buttonVisibility ? 
                                <button className="btn enter" onClick={() => LogIn()}>Войти</button>
                                : null
                            }
                            {!buttonVisibility && currentTime !== 0 ? 
                                <p className="resend-timer">{`Запросить код повторно можно через ${currentTime} секунд`}</p>
                                : null
                            }
                        </div>
                        {visibilityErrorMessage ? 
                            <p className="error-message">{statusCode === 1 ? NOT_VALID_PHONE : NOT_VALID_CODE}</p> 
                            : null
                        }
                        {!buttonVisibility && currentTime === 0 ? 
                            (<p className="resend-button">Отправить еще раз</p>)
                            : null
                        }
                    </div>
                </div>
            </section>
        </>
    )
};

export default AuthPage;