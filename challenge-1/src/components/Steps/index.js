import './index.css';

function Steps({ currentStep }) {
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <div className='Steps'>
      {
        steps.map((step, index) => {
          const styles = step < currentStep ? 'previousStep' : step === currentStep ? 'currentStep' : 'nextStep';
          const last = index === steps.length - 1 ? 'last' : ''
          return (
            <span className={`step ${styles} ${last}`}>
              {step}
            </span>
          )
        })
      }
    </div>
  );
}

export default Steps;