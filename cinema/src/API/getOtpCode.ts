import { createOtp } from "@/@types/interfacesFilms";
 

export const getOtpCode = async (body: createOtp) => {
    const header = {
        "Content-Type": "application/json"
    };

    const response = await fetch(`https://shift-intensive.ru/api/auth/otp`, {
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