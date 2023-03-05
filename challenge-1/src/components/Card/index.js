import './index.css';

function Card({ img, color, title, onClick }) {
  return (
    <div className={`Card ${color}`} onClick={onClick}>
      <img src={img} alt='not found'/>
      <span className='cardTitle'>
        {title}
      </span>
    </div>
  );
}

export default Card;