
export const inviteonBoard = (body) => {
    return fetch(`${process.env.REACT_APP_API}/invite-on-board`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signup = (body) => {
    return fetch(`${process.env.REACT_APP_API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
