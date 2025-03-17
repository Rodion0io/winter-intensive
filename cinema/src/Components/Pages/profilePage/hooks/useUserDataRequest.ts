import { useEffect, useState } from "react"

import { getUserProfile } from "../../../../API/getUserProfile"

import { UpdateProfileDto } from "@/@types/interfacesFilms";

export const useUserDatasRequest = () : UpdateProfileDto => {

    const token = localStorage.getItem('token');

    const [userDatas, setUserDatas] = useState<UpdateProfileDto>({firstname: "", middlename: "", lastname: "", email: "", city: "", phone: ""})

    useEffect(() => {
        const request = async () => {
            if (token){
                try {
                    const response = await getUserProfile(token);
                    setUserDatas((await response.json()).user);
                } 
                catch (error) {
                    console.error(error)
                }
            }
        }
        request();
    },[])

    return userDatas;
}