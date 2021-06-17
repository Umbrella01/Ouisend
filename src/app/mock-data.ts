export interface Shipment {
    id: number,
    type: string,
    company: string,
    price: number,
    startDate: string,
    startHour: string,
    startCity: string,
    startAirport: string,
    endDate: string,
    endHour: string,
    endCity: string,
    endAirport: string,
    weightLimit: number,
    carrier: Carrier,
}

export interface Carrier {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    idCard: boolean,
    experienceYears: number,
    image: string,
    memberYear: number,
    ratings: Rating,
}

export interface Rating {
    rate: number,
    review: number
}