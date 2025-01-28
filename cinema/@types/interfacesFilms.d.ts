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