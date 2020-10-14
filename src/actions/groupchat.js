

export const getGroupChats = (groupId) => {
    return fetch(`${process.env.REACT_APP_API}/get/groupchat/${groupId}`, {
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
