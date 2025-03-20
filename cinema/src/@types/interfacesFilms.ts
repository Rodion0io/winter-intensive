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

interface pearson{
    firstname: string,
    lastname: string,
    middlename: string
    phone: string
}

export interface debitCard{
    pan: string,
    expireDate: string,
    cvv: string
}

interface seanc{
    date: string,
    time: string
}

export interface ticket{
    row: number,
    column: number
}

export interface orderTicket{
    filmId: string,
    person: pearson,
    debitCard: debitCard,
    seance: seanc,
    tickets: ticket[]
}

export interface personalDate{
    lastname: string,
    firstname: string,
    middlename: string
    phone: string,
    email?: string,
    address?: string
}

export interface middleOrderTimePlace{
    data: seanc,
    place: ticket[]
}

export interface middlePersDate{
    pearson: personalDate,
    placeInfo: middleOrderTimePlace
}

interface orderSeanceModel{
    date: string,
    time: string
}

interface orderTicketInformation{
    filmId: string,
    row: number,
    column: number,
    seance: orderSeanceModel,
    phone: string,
    status: string,
    _id: string,
    created: string,
    updated: string
}

interface personShortModel{
    firstName: string,
    lastName: string,
    middlename: string,
    phone: string
}

interface personResponseModel extends personShortModel{
    _id: string,
    city: string,
    email: string
}

export interface order{
    filmName: string,
    orderNumber: number,
    tickets: orderTicketInformation[],
    person: personShortModel,
    status: string,
    _id: string,
    created: string,
    updated: string
}

export interface authDatas{
    phone: string,
    code: number
}

export interface signInRespnse{
    success: boolean,
    user: personResponseModel,
    token: string
}

export interface createOtp{
    phone: string
}

export interface UpdateProfileDto{
    firstname: string,
    middlename: string,
    lastname: string,
    email: string,
    city?: string,
    phone: string,
}

export interface SessionResponse{
    success: boolean,
    reason?: string[],
    user: UpdateProfileDto
}

export interface UpdateProfileResponse{
    success: boolean,
    reason: string,
    user: UpdateProfileDto
}

export interface Ticket{
    filmId: string,
    row: number,
    column: number,
    seance: seanc,
    phone: string,
    status: string    
}

export interface CinemaOrder{
    filmName: string,
    orderNumber: number,
    orders: Ticket[]
}