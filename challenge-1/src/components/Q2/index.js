import Card from '../Card';

import './index.css';

const options = [
  {
    color: 'yellow',
    title: 'Coffee Maker'
  },
  {
    color: 'green',
    title: 'French Press'
  },
  {
    color: 'pink',
    title: 'Pour Over'
  },
  {
    color: 'orange',
    title: 'AeroPress'
  },
  {
    color: 'blue',
    title: 'Expresso' 
  },
  {
    color: 'brown',
    title: 'Pods'
  },
  {
    color: 'grey',
    title: 'Moka Pot'
  }
];

function Q2() {
  return (
    <div className='Q2'>
      <h2 className='Q2Title'>How do you brew at home?</h2>
      <div className='cardsFrame'>
        {
          options.map(option => (
            <Card color={option.color} title={option.title} />
          ))
        }
      </div>
    </div>
  );
}

export default Q2;