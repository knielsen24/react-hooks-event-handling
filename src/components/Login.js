import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.one.value);
	 console.log(event.target.two.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="one" type="text" name="username" placeholder="Enter username..." required />
      <input id="two" type="password" name="password" placeholder="Enter password..." required />
      <button>Login</button>
    </form>
  );
}

export default Login;
