import './index.css';

function ResultsCard({ img, title, description, big }) {
  return (
    <div className='detailsCard'>
      <p className='detailsCardTitle'>
        {title}
      </p>
      <div className='detailsCardContainerForImg'>
        { img && <img src={img} alt={`not found: ${title}`}/> }
        <p className={`detailsCardDescription ${big ? 'descriptionBig' : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ResultsCard;