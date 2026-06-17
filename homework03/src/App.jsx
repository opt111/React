import { useState } from 'react';
import DeletionTimer from './components/DeletionTimer/DeletionTimer';

export default function App() {

  const [isActive, setIsActive] = useState(true);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Деактивувати' : 'Активувати'}
      </button>

      {isActive ? <DeletionTimer setIsActive = {setIsActive}/> : null}

    </div>

  );
}