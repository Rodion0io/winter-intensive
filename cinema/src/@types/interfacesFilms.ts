export interface Film{
    id: string,
    name: string,
    releaseDate: string, 
    genres: string[],
    userRatings: string[],
    ageRating: string,
    img: string,
    country: object
}

export interface FilmAbout extends Film{
    description: string
}

export interface scheduleResponse{
    success: boolean,
    reason: string,
    schedules:{
        date: string,
        seances: seance[]
    }[]
}

export interface seance{
    time: string,
    hall:{
        name: string,
        places: Place[]
    }
}

export interface Place{
    price: number,
    type: string
}

export interface selectedTime{
    hall: string,
    time: string,
    date: string,
    seance: Place[][]
}

export interface selectedPlace{
    place: string,
    row: string,
    price: number
}

// export interface metaInfaPlace{
//     place: string,
//     row: string, 
//     price: number
// }