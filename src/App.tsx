import { Button } from '@/components/ui/button';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (

    <>
      <div className="p-5">
        <Button onClick={handleClick}>Click me {counter}</Button><br />
      </div>

      <div className='p-5'>

        The counter is: {counter}
      </div>

      <div className='p-5'>
        <Button onClick={() => setCounter(0)}>Reset</Button>
      </div>

    </>
    
  );
}

export default App;
