
import ResultsCard from '../ResultsCard';

import product from '../../assets/product.png'
import tastingNotes from '../../assets/tasting-notes.svg';
import roastLevel from '../../assets/roast-level.svg';
import sippingStyle from '../../assets/sipping-style.svg';
import brewMethod from '../../assets/brew-method.svg';
import './index.css';

function Results() {
  return (
    <div className='Results'>
      <h2 className='title'>MEET YOUR NEW FAVORITE COFFEE</h2>
      <p className='subtitle'>
        Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.
      </p>
      <div className='resultsLinksSection'>
        <span className='link'>
          Email my results
        </span>
        <span className='link'>
          Retake the quiz
        </span>
      </div>
      <div className='resultsFrame'>
        <div className='bestMatch'>
          <p className='bestMatchTitle'>BEST MATCH</p>
          <img src={product} width="200px" />
          <p className='bestMatchName'>GUATEMALA COFFEE</p>
          <p className='bestMatchPrice'>$20.50</p>
        </div>
        <div className='loveIt'>
          <ResultsCard title='WHY YOU’LL LOVE IT' description="IF YOU'VE EVER TAKEN A BITE FROM A RIPE RED APPLE, YOU'LL KNOW THE WAY THIS COFFEE TASTES." big/>
          <div className='detailsFrame'>
            <ResultsCard title='TASTING NOTES' description='Red Apple, Lemongrass, Malt Chocolate' img={tastingNotes} />
            <ResultsCard title='ROAST LEVEL' description='Medium' img={roastLevel} />
            <ResultsCard title='SIPPING STYLE' description='Great with milk/cream' img={sippingStyle} />
            <ResultsCard title='BREW METHOD' description='Brews a delicious cup with a pour over' img={brewMethod} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;