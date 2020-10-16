import React from 'react';
import Relogio from './Relogio'
import Cronometro from './Cronometro';
import Temporizador from './Temporizador';

class App extends React.Component 
{
  render(){
    return (
      <div>
        <div className="header"> 

          <div className="relogio">
            <Relogio />
          </div>

          <div className="cronometro">
            <Cronometro />
          </div>

          <div className="temporizador">
            <Temporizador />
          </div>

        </div>
      </div>
    );
  }
}

export default App;