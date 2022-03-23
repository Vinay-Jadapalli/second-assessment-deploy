import React,{useState} from 'react';
import LoginForm from './LoginForm';


function Login() {
    const User = {
        email:"vinay@gmail.com",
        password:"vinay@123"
    }

    const [user,setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = data => {
        console.log(data);

        if(data.email == User.email && data.password == User.password) {
            console.log("Logged in");
            setUser({
                name:data.name,
                email:data.email
            })
        }else {
            console.log("Please Enter Correct Credentials");
            setError ("Please Enter Correct Credentials ");
        }
    }

    const Logout = () => {
        setUser({name: "", email: ""});
    }

    return(
        <div className='App'>
            {(user.email != "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}

        </div>
    )
}

export default Login;