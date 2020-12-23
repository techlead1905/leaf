import React from 'react';
import routes from '../../routes';
import Logo from '../../assets/images/logo.png';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <img className='logo' src={Logo} alt='leaf' width={96} />
      {routes.map((route) => (
        <div key={route.name}>
          <span className='sub-title'>{route.name}</span>
          <ul>
            {route.children.map((sub) => (
              <li key={sub.name}>{sub.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
