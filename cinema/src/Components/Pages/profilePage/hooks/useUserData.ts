import { UpdateProfileDto } from "@/@types/interfacesFilms";

import { useEffect, useState } from "react";

import { useUserDatasRequest } from "./useUserDataRequest";

export const useUserData = () => {

    const userRequest = useUserDatasRequest();

    const [userDatas, setUserDatas] = useState<UpdateProfileDto>(userRequest);

    useEffect(() => {
        setUserDatas(userRequest)
    },[userRequest]);

    const handleChange = (fieldName: string, value: string) => {
        let formattedValue = value;
    
        setUserDatas((prevDate) => ({
            ...prevDate,
            [fieldName]: fieldName === "phone" ? formattedValue.replace(/[()-]/g,"") : formattedValue
        }));
    };

    return {userDatas, handleChange};
}