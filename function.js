 // function without parameters
        function userName(){
            console.log("kritisinha123@gmail.com");

        }
        userName();
// function with parameters
        function studentName(Name){
            console.log(Name);
        }
        studentName("kriti")
// login function
function login(userId , password){
    const correctUserId="Admin";
    const correctPassword="123";
    if(userId===correctUserId && password===correctPassword){
        console.log("login successful");
        return true;
    }
    else{
        console.log("invalid credentials");
        return false;
    }
}
let result = login("Admin", "123");

if (result) {
    console.log("Welcome user!");
} else {
    console.log("Access denied!");
}