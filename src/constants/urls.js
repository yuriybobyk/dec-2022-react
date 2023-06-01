const placeBaseURL = 'https://jsonplaceholder.typicode.com';

const carBaseURL = 'http://owu.linkpc.net/carsAPI/v1';

const placeUrls = {
    users: '/users',
    comments: '/comments'
}

const cars =  '/cars';

const carUrl = {
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    placeBaseURL,
    placeUrls,
    carBaseURL, carUrl
}