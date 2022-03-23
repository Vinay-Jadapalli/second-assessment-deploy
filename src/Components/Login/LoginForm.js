import React, {useState} from  'react';
import './Login.css'

function LoginForm ({Login, error}) {
    const [data,setData] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(data);
    }
    return (
        <div>
            <p><b>Email :</b> vinay@gmail.com</p><br />
            <p><b>Password:</b> vinay@123</p><br />
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name="name" id="name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name="email" id="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type="password" name="password" id="password" value={data.password} onChange={e => setData({ ...data, password: e.target.value })} />
                    </div>
                    <input type="submit" value="Login" />
                    {(error != "") ? (<div className='error'>{error}</div>) : ""}
                </div>
            </form>
        </div>
    )
}

export default LoginForm;