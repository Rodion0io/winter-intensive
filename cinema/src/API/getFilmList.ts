import { URL } from "../constants";

export const getFilmList = async () => {
    const header = {
        "Content-Type": "application/json"
    };

    const response = await fetch(`${URL}today`, {
        method: "GET",
        headers: header
    });
    return response;
}