import { useState } from "react";

import { IMaskInput } from "react-imask";

import "./inputBlock.css";
import React from "react";

interface InputBlockParams {
    inputMask?: string,
    inputBlockClass: string;
    forName: string;
    labelValue?: string;
    inputType: string;
    placeholderValue?: string;
    inputId: string;
    isRequred: boolean;
    inputClass: string;
    onInputChange?: (value: string) => void;
    maxLength?: number;
    value?: string
}

const InputBlock = ({
    inputMask,
    inputBlockClass,
    forName,
    labelValue,
    inputType,
    placeholderValue,
    inputId,
    isRequred,
    inputClass,
    onInputChange,
    maxLength,
    value
}: InputBlockParams) => {
    const [inputValue, setInputValue] = useState(value ? value : "");

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;


        if (maxLength && value.length > maxLength) {
            return;
        }

        setInputValue(value);


        if (onInputChange) {
            onInputChange(value);
        }
    };


    const handleAccept = (value: string) => {
        if (maxLength && value.length > maxLength) {
            return;
        }

        setInputValue(value);

        if (onInputChange) {
            onInputChange(value);
        }
    };

    return (
        <div className={inputBlockClass}>
            {labelValue !== undefined ? 
                <label htmlFor={forName} className="label">
                {labelValue}
                </label>
                : null
        }
            {inputMask ? <IMaskInput
                mask={inputMask}
                className={inputClass}
                id={inputId}
                name={forName}
                type={inputType}
                placeholder={placeholderValue || ""}
                required={isRequred}
                onAccept={handleAccept}
                maxLength={maxLength}
                value={inputValue}
            /> :
            <input
                type={inputType}
                className={inputClass}
                placeholder={placeholderValue || ""}
                name={forName}
                required={isRequred}
                id={inputId}
                onChange={handleChangeInput}
                maxLength={maxLength}
                value={inputValue}
            />
        }
            
        </div>
    )
};

export default InputBlock;
