import { useState } from 'react';

import Q2 from './components/Q2';
import Results from './components/Results';
import NavigationBar from './components/NavigationBar';
import Steps from './components/Steps';

import './App.css';

function App() {
  const [ step, setStep ] = useState(2);

  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Steps currentStep={step} />
        {
          step === 2 ? 
            <Q2 onContinue={() => setStep(7)}/>
            : <Results />
        }
      </main>
    </div>
  );
}

export default App;
