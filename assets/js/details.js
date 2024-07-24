import { getUser } from "./users/users";
const userDetailEl = document.querySelector("#userDetail")

const predictedUserId = location.search.split("user=")[1];

const userId = parseInt(predictedUserId);

if(isNaN(userId)){
    window.location.href = "/";
}

const userDetail = await getUser(userId);

userDetailEl.textContent = `Hello ${userDetail.firstName}`

