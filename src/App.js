import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';

import { Navbar } from './components';
import { Home, Exchanges, Cryptocurrencies, CryptoDetails, News } from './pages';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/exchanges' element={<Exchanges/>} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>} />
              <Route exact path='/news' element={<News/>} />
            </Routes>
          </div>
        </Layout>
        <div className='footer' level={5}>
          <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
          Cryptoverse <br />
          All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;