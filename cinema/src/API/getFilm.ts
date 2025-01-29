import { URL } from "../constants";

export const getFilm = async (id: number) => {
    const header = {
        "Content-Type": "application/json"
    };

    // https://shift-intensive.ru/api/cinema/film/1
    const response = await fetch(`${URL}film/${id}`, {
        method: "GET",
        headers: header
    });
    return response;
}