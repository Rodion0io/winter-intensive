import { MONTHS } from "../constants.ts";

export const changeDateFormat = (date: string) => {
    // 30.01.25
    let splitDate = date.split(".");

    splitDate.splice(-1, 1);

    splitDate[1] = MONTHS[+splitDate[1] - 1];

    return splitDate.join(" ");
}