import { getOrdersList } from "../../../../API/getOrdersList"

import { CinemaOrder } from "@/@types/interfacesFilms";

import { useEffect, useState } from "react";

export const useOrders = () => {
    const token = localStorage.getItem("token");

    const [orders, setOrders] = useState<CinemaOrder>({filmName: "", orderNumber: 0, orders: []});

    useEffect(() => {
       const request = async () => {
            try{
                if (token){
                    const response = await getOrdersList(token);
                    setOrders((await response.json()).orders);
                }
            }
            catch (error){
                console.error(error)
            }
       }
       request();
    },[])

    return orders;
}