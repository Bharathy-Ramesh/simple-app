import React from 'react';
import './App.css';
import FirstFunction from './RenderProps/FirstFunction';
import SecondFunction from './RenderProps/SecondFunction';
import Common from './RenderProps/Common';
import ClassA from './ClassC/ClassA';
import Func from './Func/Func';
// import First from './HOC/First';
// import Second from './HOC/Second';

function App () {  
    return(
     <>
      {/* <First />
      <Second /> */}
      <Common render={(passValue, handler) => <FirstFunction multipleValue={passValue} clickHandler={handler} /> } />
      <Common render={(passValue, handler) => <SecondFunction multipleValue={passValue} clickHandler={handler} /> } />

      <ClassA />
      <Func />
     </>
    );
  }

export default App;
