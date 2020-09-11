import React, { useState, FormEvent } from 'react';
import './style.css';
import api from '../../services/api';

function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function handleCreateUser(e: FormEvent){
        e.preventDefault();

        api.post('/users', {
            name,
            phone,
            email
        });

        setName('');
        setPhone('');
        setEmail('');

        console.log({name, phone, email})
    }

    return(
        <div className="form-container">
            <form onSubmit={handleCreateUser}>
                <p>
                <label>Nome:</label><br/>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    autoComplete="none" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }}
                />
                </p>
                <p>
                <label>Telefone:</label><br/>
                <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    autoComplete="none"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                />
                </p>
                <p>
                <label>Email:</label><br/>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    autoComplete="none"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                </p>
                <button type="submit">CADASTRAR</button>
            </form>
        </div>
    );
}

export default Form;