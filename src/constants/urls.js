
const carBaseURL = 'http://owu.linkpc.net/carsAPI/v1';


const cars =  '/cars';

const carUrl = {
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    carBaseURL, carUrl
}
