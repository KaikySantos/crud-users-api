import React from 'react';
import './style.css';

function Form() {
    return(
        <div className="form-container">
            <form>
                <p>
                <label>Nome:</label><br/>
                <input type="text" name="nome" id="nome" autoComplete="none"/>
                </p>
                <p>
                <label>Telefone:</label><br/>
                <input type="text" name="telefone" id="telefone" autoComplete="none"/>
                </p>
                <p>
                <label>Email:</label><br/>
                <input type="text" name="email" id="email" autoComplete="none"/>
                </p>
                <button>CADASTRAR</button>
            </form>
        </div>
    );
}

export default Form;