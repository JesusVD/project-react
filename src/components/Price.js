import React from 'react';
import { Button } from './Button';
import './Price.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Price() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Planes</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Basico</h3>
                <h4>25 PEN</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>Acceso a todos los cursos</li>
                  <li>Clases en vivo y grabadas</li>
                  <li>Pausa en cualquier momento</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elegir Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Expert+</h3>
                <h4>45 PEN</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>Diploma de finalizacion</li>
                  <li>Participa en sorteos</li>
                  <li>Desafios y proyectos</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Elegir Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Expert</h3>
                <h4>55 PEN</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>Diploma de finalizacion</li>
                  <li>Descuento en proximos cursos</li>
                  <li>Acceso de por vida</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elegir Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Price;