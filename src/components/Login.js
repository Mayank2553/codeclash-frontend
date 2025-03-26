import { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await loginUser({ email, password });
    //         localStorage.setItem('token', res.accessToken);
    //         navigate('/dashboard');
    //     } catch (error) {
    //         console.error("Login Failed", error);
    //     }
    // };

    const login = () => {

        if(!email || !password){
            alert("Bhagg bsdk");
            return;
        }

        fetch('http://192.168.9.31:8788/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: email,
                    password: password
                }
            )
        }).then(res => res.json())
        .then(data => {
            if(data?.error){
                console.log("Error");
            }else{
                console.log("Yeahh!");
                navigate('/');
            }
        })

    }


    const check = ()=>{
        console.log(email);
        console.log(password);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
                <div className="space-y-4">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none" 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none" 
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        onClick={()=> {login()}}
                    >
                        Login
                    </button>
                </div>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account? 
                    <a href="/register" className="text-blue-600 hover:underline ml-1">Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;