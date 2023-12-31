export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo;
}

interface Geo {
    lat: number ;
    lng: number ;
}