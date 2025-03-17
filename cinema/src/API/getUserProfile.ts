import { PART_URL_PHOTO } from "../constants"

import { SessionResponse } from "@/@types/interfacesFilms";

export const getUserProfile = async (token: string) => {
    const header = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const response = await fetch(`https://shift-intensive.ru/api/users/session`, {
        method: "GET",
        headers: header
    });

    if (response.ok){
        return response;
    }
    else{
        throw new Error("Request failed");
    }
}  