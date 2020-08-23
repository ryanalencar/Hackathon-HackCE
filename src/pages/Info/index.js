import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

const Info = () => (
  <div>
    <header>
      <div id='logo'>
        <img src={logo} alt='Ecoleta' />
        <p>SOK</p>
      </div>
    </header>
    <section>
      <div id='card'>
        <h1 id='card-title'>Preencha seus dados</h1>
        <hr />
        <div className='form'>
          <div id='form-group'>
            <label htmlFor='empresa'>Qual o nome da sua empresa?</label>
            <input type='text' id='empresa' name='empresa' />
          </div>
          <div id='form-group'>
            <label htmlFor='produto'>
              Qual o produto que a sua empresa importa?
            </label>
            <input type='text' id='produto' name='produto' />
          </div>
          <div id='form-group'>
            <label htmlFor='produto'>Qual produto?</label>
            <input type='text' id='produto' name='produto' />
          </div>
          <div id='form-group'>
            <label htmlFor='certificados'>
              Qual(is) certificado(s) seu produto possui?
            </label>
            <input type='text' id='certificados' name='certificados' />
          </div>
          <div id='form-group'>
            <label htmlFor='paises'>Quais países você importa?</label>
            <input type='text' id='paises' name='paises' />
          </div>
        </div>
        <div id='card-footer'>
          <Link to='/market'>
            <button>Cadastrar</button>
          </Link>
          <div className='alert2'>
            <span>
              <Link to='/'>
                <FiArrowLeft /> Voltar
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Info;
