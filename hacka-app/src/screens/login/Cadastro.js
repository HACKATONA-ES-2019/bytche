import React from 'react';

const Cadastro = () => {
  return (
    <div className="Main">
        <div>
            <h1>Insira o logo aqui!</h1>
            <h1>Nome do App</h1>
            <h1>Cadastro</h1>
        </div>
        <div>
        <form>
                Nome:
                <input type="text" name="nome"/><div/>
                Idade:
                <input type="number" name="nome" min="1"/><div/>
                Sexo:
                <label>
                    <input type="radio" value="option1" />
                    Masculino<div/>
                </label>
                <label>
                    <input type="radio" value="option2" />
                    Feminino<div/>
                </label>
                E-mail:
                <input type="email" name="nome"/><div/>
                Senha:
                <input type="password" name="nome"/><div/>
                <input type="submit" name="Enviar"/>
            </form> 
        </div>
    </div>
  );
}

export default Cadastro;
