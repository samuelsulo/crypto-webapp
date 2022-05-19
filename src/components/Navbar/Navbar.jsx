import React from 'react';
import { Typography, Avatar, Menu } from 'antd';
import { Link } from 'react-router-dom';

import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import cryptoIcon from '../../assets/cryptocurrency.png';

const menuItems = [
  { 
    key: 'navbar-home',
    icon: <HomeOutlined />, 
    label: <Link to='/'>Home</Link>,
  },
  { 
    key: 'navbar-cryptocurrencies', 
    icon: <FundOutlined />, 
    label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link> 
  },
  { 
    key: 'navbar-exchanges', 
    icon: <MoneyCollectOutlined />, 
    label: <Link to='/exchanges'>Exchanges</Link> 
  },
  { 
    key: 'navbar-news', 
    icon: <BulbOutlined />, 
    label: <Link to='/news'>News</Link> 
  }
];

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={cryptoIcon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark' items={menuItems} />
    </div>
  );
};

export default Navbar;