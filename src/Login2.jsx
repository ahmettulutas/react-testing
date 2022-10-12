import axios from 'axios';
import React, { useState } from 'react';

  const Login2 = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [person, setPerson] = useState({});
	const [error, setError] = useState(false);

	
	const handleLogin = async(e) => {
		e.preventDefault()
		setLoading(true);
		try {
			const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1")
			setPerson(data);
		} catch (error) {
			setError(true)
		}
		setLoading(false);
	}
	return (
		<form>
			<span>{person?.name}</span>
			<input placeholder="name" onChange={e => setName(e.target.value)} value={name}/>
			<input placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
			<button onClick={handleLogin} disabled={!name || !password}>{loading ? "Loading" : "Login"}</button>
		</form>
	)
}
export default Login2;  

