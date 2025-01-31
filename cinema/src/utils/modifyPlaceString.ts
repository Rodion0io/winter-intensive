import { selectedPlace } from "@/@types/interfacesFilms"

export const modifyPlaceString = (placesArray: selectedPlace[]) => {
    let str = "";
    let arrPlaces = [];
    
    placesArray.sort((a,b) => +a.row - +b.row);
    
    let prevRow = placesArray[0].row;
    
    
    placesArray.map((item) => {
        if (item.row !== prevRow){
            arrPlaces.push(str);
            str = '';
            prevRow = item.row;
        }
        str += str !== "" ? `,${+item.place + 1}` : `${+item.row + 1} ряд - ${+item.place + 1}`
        
    });
    
    arrPlaces.push(str);
    
    return arrPlaces;
}