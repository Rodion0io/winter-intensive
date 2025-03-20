export const getOrdersList = async (token: string) => {
    const header = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const response = await fetch(`https://shift-intensive.ru/api/cinema/orders`, {
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