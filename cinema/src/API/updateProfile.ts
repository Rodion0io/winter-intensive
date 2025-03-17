import { UpdateProfileDto } from "@/@types/interfacesFilms";

export const updateProfile = async (body: UpdateProfileDto, token: string) => {
    const header = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const response = await fetch(`https://shift-intensive.ru/api/users/profile`, {
        method: "PATCH",
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