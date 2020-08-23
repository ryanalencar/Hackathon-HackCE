import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => (
  <div id='page-home'>
    <div className='content'>
      <div id='left-content'>
        <header>
          <div id='logo'>
            <img src={logo} alt='Ecoleta' />
            <p>SOK</p>
          </div>
        </header>
        <main>
          <h1>Junte-se a nossa plataforma de inteligência de mercado.</h1>
        </main>
      </div>
      <section>
        <div id='card'>
          <h1 id='card-title'>Preencha seus dados</h1>
          <hr />
          <div className='form'>
            <div id='form-group'>
              <label htmlFor='nome'>Nome Completo</label>
              <input type='text' id='nome' name='nome' />
            </div>
            <div id='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' name='email' />
            </div>
            <div id='form-group'>
              <label htmlFor='senha'>Senha</label>
              <input type='text' id='senha' name='senha' />
            </div>
          </div>
          <div id='card-footer'>
            <div id='alert'>
              <FiAlertOctagon />
              <p>
                Importante! <br />
                Preencha todos os dados
              </p>
            </div>
            <Link to='/info'>
              <button>Inscreva-se</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
