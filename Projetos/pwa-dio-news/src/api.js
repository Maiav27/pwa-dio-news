const params = {
    header : {
        Accpet : 'aplication/json',
        'Content-Type' : 'aplication/json' 
    }
}

const URL = 'http://stormy-brook-79548.herokuapp.com/api'

const getNews = (subject) =>{
    return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) =>{
        console.error('Ocorreu um errro', err)
    })
}

 const getNewsById = (subject, id) =>{
    return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) =>{
        console.error('Ocorreu um errro', err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getNews,
    getNewsById
}
