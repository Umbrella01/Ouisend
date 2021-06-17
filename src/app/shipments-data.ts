import { Shipment } from './mock-data';

export const shipments: Shipment[] = [
    {
        id: 1,
        type: 'avion',
        company: 'Air France',
        price: 9.85,
        startDate: 'Ven. 2 avril',
        startHour: '11:00',
        startCity: 'Paris',
        startAirport: 'Aéroport Charles de Gaulle',
        endDate: 'Ven. 2 avril',
        endHour: '22:00',
        endCity: 'Abidjan',
        endAirport: 'Aéroport Felix Houphouët Boigny',
        weightLimit: 45,
        carrier: {
            id: 1,
            firstName: 'Andrea',
            lastName: 'Piacquadio',
            age: 35,
            idCard: false,
            experienceYears: 10,
            image: '../../../assets/img/1.jpg',
            memberYear: 2018,
            ratings: {
                    rate: 4.3,
                    review: 40
                }
        }
    },
    {
        id: 2,
        type: 'avion',
        company: 'Air Royal MAROC',
        price: 7.25,
        startDate: 'Sam. 3 avril',
        startHour: '16:00',
        startCity: 'Paris',
        startAirport: 'Aéroport Charles de Gaulle',
        endDate: 'Dim. 4 avril',
        endHour: '22:00',
        endCity: 'Abidjan',
        endAirport: 'Aéroport Felix Houphouët Boigny',
        weightLimit: 35,
        carrier: {
            id: 2,
            firstName: 'Marcelo',
            lastName: 'Chagas',
            age: 24,
            idCard: true,
            experienceYears: 1,
            image: '../../../assets/img/2.jpg',
            memberYear: 2020,
            ratings: {
                    rate: 4,
                    review: 9
                }
        }
    },
    {
        id: 6,
        type: 'bateau',
        company: 'HAROPA PORT',
        price: 4,
        startDate: 'Ven. 2 avril',
        startHour: '08:00',
        startCity: 'Paris',
        startAirport: 'HAROPA PORT de Paris',
        endDate: 'Mer. 7 avril',
        endHour: '16:30',
        endCity: 'Abidjan',
        endAirport: 'Port Autonome d\'Abidjan',
        weightLimit: 200,
        carrier: {
            id: 6,
            firstName: 'Cottonbro',
            lastName: 'de Pexels',
            age: 30,
            idCard: true,
            experienceYears: 4,
            image: '../../../assets/img/6.jpg',
            memberYear: 2019,
            ratings: {
                    rate: 5,
                    review: 3
                }
        }
    },
    {
        id: 3,
        type: 'avion',
        company: 'CORSAIR',
        price: 10,
        startDate: 'Ven. 2 avril',
        startHour: '16:10',
        startCity: 'Paris',
        startAirport: 'Aéroport de Orly',
        endDate: 'Dim. 4 avril',
        endHour: '21:40',
        endCity: 'Abidjan',
        endAirport: 'Aéroport Felix Houphouët Boigny',
        weightLimit: 50,
        carrier: {
            id: 3,
            firstName: 'Spencer',
            lastName: 'Selover',
            age: 32,
            idCard: true,
            experienceYears: 10,
            image: '../../../assets/img/3.jpg',
            memberYear: 2017,
            ratings: {
                    rate: 4.8,
                    review: 2061
                }
        }
    },
    {
        id: 4,
        type: 'avion',
        company: 'Tunisair',
        price: 5.99,
        startDate: 'Ven. 2 avril',
        startHour: '12:50',
        startCity: 'Paris',
        startAirport: 'Aéroport de Orly',
        endDate: 'Ven. 2 avril',
        endHour: '23:30',
        endCity: 'Abidjan',
        endAirport: 'Aéroport Felix Houphouët Boigny',
        weightLimit: 70,
        carrier: {
            id: 4,
            firstName: 'Artem',
            lastName: 'Podrez',
            age: 28,
            idCard: false,
            experienceYears: 2,
            image: '../../../assets/img/4.jpg',
            memberYear: 2020,
            ratings: {
                    rate: 3.7,
                    review: 3
                }
        }
    },
    {
        id: 5,
        type: 'avion',
        company: 'Brussel Airlines',
        price: 8.56,
        startDate: 'Ven. 2 avril',
        startHour: '22:00',
        startCity: 'Paris',
        startAirport: 'Aéroport Charles de Gaulle',
        endDate: 'Sam. 3 avril',
        endHour: '09:00',
        endCity: 'Abidjan',
        endAirport: 'Aéroport Felix Houphouët Boigny',
        weightLimit: 50,
        carrier: {
            id: 5,
            firstName: 'Irina',
            lastName: 'Iriser',
            age: 55,
            idCard: true,
            experienceYears: 16,
            image: '../../../assets/img/5.jpg',
            memberYear: 2019,
            ratings: {
                    rate: 4.9,
                    review: 253
                }
        }
    },
    {
        id: 7,
        type: 'bateau',
        company: 'HAROPA PORT',
        price: 6.3,
        startDate: 'Ven. 2 avril',
        startHour: '08:00',
        startCity: 'Paris',
        startAirport: 'HAROPA PORT de Paris',
        endDate: 'Mer. 7 avril',
        endHour: '16:30',
        endCity: 'Abidjan',
        endAirport: 'Port Autonome d\'Abidjan',
        weightLimit: 120,
        carrier: {
            id: 7,
            firstName: 'John',
            lastName: 'Doe',
            age: 35,
            idCard: false,
            experienceYears: 6,
            image: '../../../assets/img/7.jpg',
            memberYear: 2019,
            ratings: {
                    rate: 4,
                    review: 1
                }
        }
    }
]