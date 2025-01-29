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

interface seance{
    time: string,
    hall:{
        name: string,
        places: {
            price: number,
            type: string
        }[]
    }
}

// export interface FilmTimes{

// }