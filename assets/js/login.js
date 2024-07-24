import { loginUser } from "./users/users";
const userNameInputEl = document.querySelector("#username");
const passWordInputEl = document.querySelector("#password");
const loginBtnEl = document.querySelector("#loginButton")
const greetingEl = document.querySelector("#greeting");


    loginBtnEl.addEventListener("click", async (e) =>{
        e.preventDefault();

        if(userNameInputEl && passWordInputEl){
            try {
                const userInfo = await loginUser(
                  userNameInputEl.value,
                  passWordInputEl.value
                );
                if (userInfo.message === "Invalid credential") {
                  console.log(userInfo.message);
               
                } else {
                  console.log("success");
                  greetingEl.textContent = userInfo.firstName
                }
              } catch (error) {
                console.log(error);
                
              }
        
        }
    }) 
    





