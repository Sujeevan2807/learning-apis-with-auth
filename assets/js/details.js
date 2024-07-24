/* import { getUser } from "./users/users";
const userDetailEl = document.querySelector("#userDetail")

const predictedUserId = location.search.split("user=")[1];

const userId = parseInt(predictedUserId);

if(isNaN(userId)){
    window.location.href = "/";
}

const userDetail = await getUser(userId);

userDetailEl.textContent = `Hello ${userDetail.firstName}`
 */
import { getUser } from "./users/users";

async function loadUserDetail() {
  const userDetailEl = document.querySelector("#userDetail");
  const predictedUserId = location.search.split("user=")[1];
  const userId = parseInt(predictedUserId);

  if (isNaN(userId)) {
    window.location.href = "/";
    return;
  }

  try {
    const userDetail = await getUser(userId);
    userDetailEl.textContent = `Hello ${userDetail.firstName}`;
  } catch (error) {
    console.error("Failed to fetch user details", error);
  }
}

loadUserDetail();
