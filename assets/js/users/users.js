const ALL_USERS_URL = "https://dummyjson.com/users";
const GET_USER = "https://dummyjson.com/users/";
const USER_LOGIN = 'https://dummyjson.com/user/login';

export const getAllUsers = async () => {
  try {
    const allUsersUrl = await fetch(ALL_USERS_URL);
    const allUserJson = await allUsersUrl.json();
    return allUserJson;
  } catch (error) {}
};

export const getUser = async (id) => {
  try {
    const getUser = await fetch(GET_USER + id);
    return await getUser.json();
  } catch (error) {
    "This is a Error", error;
  }
};

export const loginUser = async (username, password) => {
  const loginUserResponse = await fetch(USER_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
   return await loginUserResponse.json()
};



