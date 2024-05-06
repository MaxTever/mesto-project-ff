
export const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-magistr-2',
    headers: {
        authorization: '2c52cbd0-8443-48a6-b868-b477d1541e37',
        'Content-Type': 'application/json'
    }
};



const handleResponse = (res) => { 
    if (res.ok) { 
        return res.json(); 
    } else { 
    return Promise.reject(res.status); 
} 
};


export const getUser = () => {

    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })

    // .then ((res) => {
    //     if (res.ok) {
    //         return res.json();
    //     } else {
    //         return Promise.reject(res.status);
    //     }
    // })
    .then(handleResponse);

};




export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
})
    // .then ((res) => {if (res.ok) {
    //        return res.json();
    //    } else {
    //        return Promise.reject(res.status);
    //    }
    //    })
    .then(handleResponse);
};



export const patchEditProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name,
            about,
        }),
    },
)
    .then(handleResponse);
};






export const postNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name,
            link
        }),
    },
    )
    .then(handleResponse);
};





export const putLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers,
    },
    )
    // .then ((res) => {
    //     if (res.ok) {
    //         return res.json();
    //     } else {
    //         return Promise.reject(res.status);
    //     }
    // })
    .then(handleResponse);
};

export const deleteCardLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    },
    )
    // .then ((res) => {
    //     if (res.ok) {
    //         return res.json();
    //     } else {
    //         return Promise.reject(`Ошибка: ${res.status}`);
    //     }
    // })
    .then(handleResponse);
};


export const deleteCardApi = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    },
    )
    // .then ((res) => {
    //     if (res.ok) {
    //         return res.json();
    //     } else {
    //         return Promise.reject(`Ошибка: ${res.status}`);
    //     }
    // })
    .then(handleResponse);
};


export function editNewAvatar (link) {
    return fetch (`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: `${link}`
       
    }),
})
    .then(handleResponse);
};
