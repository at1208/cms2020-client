export const createProject = (body) => {
    return fetch(`${process.env.REACT_APP_API}/create/project`, {
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

export const getProjects = () => {
    return fetch(`${process.env.REACT_APP_API}/get/projects`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            // Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
