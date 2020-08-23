import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import userImg from '../../assets/user-img.svg';

const Market = () => (
  <div>
    <header>
      <div className='logo-area'>
        <div id='logo'>
          <img src={logo} alt='Ecoleta' />
          <p>SOK</p>
        </div>
        <div id='search'>
          <input type='text' />
          <span className='search-icon'>
            <FiSearch />
          </span>
        </div>
      </div>
      <div className='user-area'>
        <p>nome do usuário</p>
        <img src={userImg} alt='aaaa' />
      </div>
    </header>
    <div id='main'>
      <section id='container' className='center'>
        <div className='item'>lorem</div>
        <div className='item'>lorem</div>
        <div className='item'>lorem</div>
        <div className='item'>lorem</div>
      </section>

      <div className='container'>
        <div id='card2'>
          <h1 id='card-title'>Preencha seus dados</h1>
          <hr />
          <form action=''>
            <div className='row'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='produto'>Tipo de produto</label>
                  <input
                    type='text'
                    id='produto'
                    className='form-control'
                    placeholder='Escolha o seu tipo de produto'
                  />
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='valor'>Valor</label>
                  <input
                    type='text'
                    id='valor'
                    className='form-control'
                    placeholder='Insira o valor'
                  />
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='taxacao'>Taxação</label>
                  <input
                    type='text'
                    id='taxacao'
                    className='form-control'
                    placeholder='Insira a taxação escolhida'
                  />
                </div>
              </div>
              <div className='col'>
                <div className='form-group'>
                  <label htmlFor='cotacao'>Cotação de mercado</label>
                  <select className='custom-select'>
                    <option selected>Escolha a sua commodity</option>
                    <option value='1'>Açucar</option>
                    <option value='2'>Café</option>
                    <option value='3'>Castanha de caju</option>
                    <option value='3'>Minério de ferro</option>
                    <option value='3'>Milho</option>
                    <option value='3'>Ouro</option>
                    <option value='3'>Petróleo</option>
                    <option value='3'>Prata</option>
                  </select>
                </div>
              </div>
            </div>
            <Link to='/table' className='btn btn-primary btn-custom'>
              Procurar
              <span className=''>
                <FiSearch></FiSearch>
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Market;
