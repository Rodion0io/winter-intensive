import { URL } from "../constants";

export const getFilmSchedule = async (id:number) => {
    const header = {
        "Content-Type": "application/json"
    };

    const response = await fetch(`${URL}film/${id}/schedule`, {
        method: "GET",
        headers: header
    });
    return response;
}