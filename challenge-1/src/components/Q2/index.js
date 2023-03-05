import { useState } from 'react';

import Card from '../Card';

import coffeMaker from '../../assets/coffee-maker-desktop.svg';
import frenchPress from '../../assets/french-press-desktop.svg';
import pourOver from '../../assets/pour-over-desktop.svg';
import aeroExpress from '../../assets/aeropress-desktop.svg';
import expresso from '../../assets/espresso-desktop.svg';
import pods from '../../assets/pods-desktop.svg';
import mokaPot from '../../assets/moka-pot-desktop.svg';
import './index.css';

const options = [
  {
    color: 'yellow',
    title: 'Coffee Maker',
    img: coffeMaker
  },
  {
    color: 'green',
    title: 'French Press',
    img: frenchPress
  },
  {
    color: 'pink',
    title: 'Pour Over',
    img: pourOver
  },
  {
    color: 'orange',
    title: 'AeroPress',
    img: aeroExpress
  },
  {
    color: 'blue',
    title: 'Expresso',
    img: expresso
  },
  {
    color: 'brown',
    title: 'Pods',
    img: pods
  },
  {
    color: 'grey',
    title: 'Moka Pot',
    img: mokaPot
  }
];

function Q2({ onContinue }) {
  const [ selectedMethod, setSelectedMethod ] = useState(-1);

  return (
    <div className='Q2'>
      <h2 className='Q2Title'>HOW DO YOU BREW AT HOME?</h2>
      <div className='cardsFrame'>
        {
          options.map((option, index) => (
            <Card 
                color={ selectedMethod === -1 || selectedMethod === index ? option.color : 'notSelected' } 
                title={option.title} 
                img={option.img} 
                onClick={() => setSelectedMethod(index)}
            />
          ))
        }
      </div>
      {
        selectedMethod !== -1 &&
          <button className='continueButton' onClick={onContinue}>
            CONTINUE
          </button>
      }
      <div className='linksSection'>
        <span className='link'>
            &lt; Back
        </span>
        <span className='link'>
            Why it Matters +
        </span>
      </div>
    </div>
  );
}

export default Q2;