import React from 'react';

const Login = () => {
  return (
    <div className="Main">
        <div>
            <h1>Insira o logo aqui!</h1>
            <h1>Nome do App</h1>
            <h1>Bem-vindo!</h1>
        </div>
        <div>
        <form>
                E-mail:
                <input type="email" name="nome"/><div/>
                Senha:
                <input type="password" name="nome"/><div/>
                <input type="submit" value="Enviar"/>
            </form> 
        </div>
    </div>
  );
}

export default Login;