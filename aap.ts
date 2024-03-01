// TypeScript 30 Problem

let usernames = ["admin","Mahad","Zohaib","Musab","hasan"]
usernames.forEach(username =>{
if (username === "admin"){
    console.log("Hello admin, would you like to check the report")

} else {
    console.log(`Hello ${username.charAt(0).toUpperCase() + username.slice(1)}, thank you for logging in again"`)
}
})