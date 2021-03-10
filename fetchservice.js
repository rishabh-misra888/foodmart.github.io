"use strict";
export async function getUsers() {
    let url = './users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log("error to connect api");
    }
}