import { WEEK_DAYS } from "../constants.ts";
import { MONTHS } from "../constants.ts";

export const getDate = (date: string) => {

    

    let newDate = date.split(".");
    let middleValue;

    middleValue = newDate[0];
    newDate[0] = newDate[1];
    newDate[1] = middleValue;
  

    let modifyDate = new Date(newDate.join(" "));
    let day = (modifyDate.getDay()).toString();
  

    newDate[0] = MONTHS[+newDate[0] - 1]
    newDate[2] = WEEK_DAYS[+day];
  
    newDate.reverse();

    let result = newDate.join(" ")

    return result;

}
