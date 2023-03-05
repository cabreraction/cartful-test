import './index.css';

function Card({ img, color, title }) {
  return (
    <div className={`Card ${color}`}>
      {title}
    </div>
  );
}

export default Card;