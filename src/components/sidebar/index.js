import React from 'react';
import { Row, Col } from 'react-bootstrap';
import routes from '../../routes';
import Logo from '../../assets/images/logo.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import Facebook from '../../assets/images/facebook.png';
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
      <Row className='social'>
        <Col><img src={Instagram} alt='i' width={24} /></Col>
        <Col><img src={Twitter} alt='t' width={24} /></Col>
        <Col><img src={Facebook} alt='f' width={24} /></Col>
      </Row>
    </section>
  );
};

export default Sidebar;
