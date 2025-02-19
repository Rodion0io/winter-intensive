import { URL } from "../constants";
import { orderTicket } from "@/@types/interfacesFilms";



export const payTicket = async (body: orderTicket) => {
    const header = {
        "Content-Type": "application/json"
    };

    const response = await fetch(`${URL}payment`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: header
    });

    if (response.ok){
        return response;
    }
    else{
        throw new Error("Request failed");
    }
}