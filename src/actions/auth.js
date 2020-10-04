import cookie from 'js-cookie';

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

export const signin = (body) => {
    return fetch(`${process.env.REACT_APP_API}/signin`, {
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




export const signout = next => {
    removeCookie('token');
    removeLocalStorage('member');
    next();

    return fetch(`${process.env.NEXT_PUBLIC_API}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};



export const setCookie = (key, value) => {
  cookie.set(key, value, {
      expires: 1
  });
};



export const removeCookie = key => {
  cookie.remove(key, {
      expires: 1
  });
};



export const getCookie = key => {
    return cookie.get(key);
};


export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


export const removeLocalStorage = key => {
    localStorage.removeItem(key);
};

export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('member', data.member);
    next();
};


export const isAuth = () => {
  const cookieChecked = getCookie('token');
  if (cookieChecked) {
      if (localStorage.getItem('member')) {
          return JSON.parse(localStorage.getItem('member'));
      } else {
          return false;
      }
  }
};
