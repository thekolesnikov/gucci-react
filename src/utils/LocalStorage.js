export function addToLocalStorage(arr) {
    localStorage.setItem('shoes', JSON.stringify(arr));
}

export function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('shoes'));
}
