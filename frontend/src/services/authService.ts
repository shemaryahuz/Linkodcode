
export function saveToken(token: string) {
    localStorage.setItem("token", token);
    console.log(`token: ${token}`);
}

export function getToken() {
    const token = localStorage.getItem("token");
    console.log(`token: ${token}`);
    return token;
}

export function deleteToken() {
    localStorage.removeItem("token");
}