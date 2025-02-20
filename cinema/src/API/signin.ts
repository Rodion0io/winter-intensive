import { authDatas } from "@/@types/interfacesFilms";


export const signin = async (body: authDatas) => {
    const header = {
        "Content-Type": "application/json"
    };

    const response = await fetch(`https://shift-intensive.ru/api/users/signin`, {
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