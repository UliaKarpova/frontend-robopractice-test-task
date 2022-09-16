const url = 'http://localhost:8080/api/users';
function getWorkers() {
    return fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
    },
    }).then((res) => {
        if(!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }).catch((err) => console.log(err));
};

export default getWorkers;
