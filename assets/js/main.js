import { getAllUsers } from "./users/users";

const ulEl = document.querySelector("#userList");

const allUsers = await getAllUsers();

allUsers.users.map( async (user) => {
  ulEl.innerHTML += `<a href="details.html?user=${user.id}" class="block bg-green-300 rounded py-1 px-1 my-3 hover:bg-green-400">
          <h5 class="py1 px-2">${user.firstName} (${user.age})</h5>
          <div class="py1 px-2">${user.email}</div>
        </a>`;
});
