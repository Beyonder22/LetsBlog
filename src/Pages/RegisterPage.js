import React,{useState} from 'react';
import {useNavigate  } from 'react-router-dom';

function RegisterPage() {
	const navigate = useNavigate ();
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");
	async function register(e){
		e.preventDefault();
		//way to directly print the error message from api
		// await fetch('http://localhost:9000/register',{
		// 	method: 'POST',
		// 	body: JSON.stringify({username,password}),
		// 	headers: {'Content-Type':'application/json'},
		// })
		// .then(res => {
	    //   if(!res.ok) {
	    //     return res.text().then(text => { throw new Error(text) })
	    //    }
	    //   else {
	    //    return res.json();
	    //  }    
	    // })
	    // .catch(err => {
	    //    alert(err.message);
	    // });
	    const response = await fetch('http://localhost:9000/register',{
			method: 'POST',
			body: JSON.stringify({username,password}),
			headers: {'Content-Type':'application/json'},
		});
		setUsername("")
		setPassword("")
		if(response.status === 200){
			navigate('/login', { replace: true })
			alert('Registration Successful');
		}
		else{
			alert('Registration Failed')
		}
	}
	return (
		<form className='register' onSubmit={register}>
			<h1>Register</h1>
			<input 
			value={username} 
			onChange={(e)=>setUsername(e.target.value)}
			type="text" 
			placeholder='username'/>
			<input 
			value={password}
			onChange={(e)=>setPassword(e.target.value)}
			type="password" 
			placeholder='password'/>
			<button>Register</button>
		</form>
	)
}

export default RegisterPage