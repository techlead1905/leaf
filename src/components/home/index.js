import React, { useState } from 'react';
import Leaf from '../../assets/images/logo.png';
import ConnectionModal from '../modals/account-connection';
import './home.scss';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleConnect = () => {
    setOpen(false);
  };

  return (
    <div className='content'>
      <div className='leaf-circle'>
        <img src={Leaf} alt='leaf' />
        <button onClick={handleOpenModal}>Start</button>
      </div>
      <ConnectionModal open={open} onConnect={handleConnect} />
    </div>
  );
};

export default Home;
