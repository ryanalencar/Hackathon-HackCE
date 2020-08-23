import React from 'react';

import Header from '../../components/Header';

const Research = () => (
  <div>
    <Header></Header>

    <div id='main'>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Mercado</th>
              <th scope='col'>Média de vendas</th>
              <th scope='col'>Mínimo</th>
              <th scope='col'>Máximo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>EUA</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
            <tr>
              <th scope='row'>Canadá</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
            <tr>
              <th scope='row'>China</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
            <tr>
              <th scope='row'>Alemanha</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
            <tr>
              <th scope='row'>França</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
            <tr>
              <th scope='row'>Argentina</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
            <tr>
              <th scope='row'>Holanda</th>
              <td>$0,00</td>
              <td>$0,00</td>
              <td>$0,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Research;
