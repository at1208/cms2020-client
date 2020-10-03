export const createDepartment = (body) => {
    return fetch(`${process.env.REACT_APP_API}/create/department`, {
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
