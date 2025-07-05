async function handleSignup() {
    const firstName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (firstName.length <= 2) {
        alert("please enter minimum 3 letters in Name feild");
    } else if (email.length <=2 || !email.includes("@") || !email.includes(".")) {
        alert("please enter a valid email address");
    } else if (password.length <= 2) {
        alert("password length should be minimum 3");
    } else {
        
    try {
        await axios.post("http://localhost:3001/signup", {
            firstName,
            email,
            password
        });
        
        alert("signup successfull"); // alert (remember)

        window.location.href = "signin.html";
        


    } catch (error) {
        alert("the email is already exist please enter different one"); // alert (remember)
    }
}
}