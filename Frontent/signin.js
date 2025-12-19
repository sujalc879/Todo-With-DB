async function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await axios.post("https://todo-with-db-dzxy.vercel.app/signin", {
      email,
      password
    })

    localStorage.setItem("token", response.data.token);

    window.location.href = "todo.html";
    
  } catch (error) {
    alert("please enter valid email id & password");
  }
}