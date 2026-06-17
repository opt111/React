import { useState, useEffect } from 'react';

const DeletionTimer = ({ setIsActive }) => {
  const [list, setList] = useState(['Fix login bug', 'Write unit tests', 'Code review PR#12', 'Update README', 'Deploy to staging']);
  const [isRunning, setIsRunning] = useState(false)


  useEffect(() => {
    console.log("🟢 mount");
    return () => {
      console.log("🔴 unmount");
    }
  }, [])

  useEffect(() => {
    let id;

    if (isRunning) {
      id = setInterval(() => { setList(prevList => prevList.slice(0, -1)) }, 1000)
    }
    return () => { clearInterval(id) }
  }, [isRunning])

  useEffect(() => {
    let timeoutId;

    if (list.length === 0) {
      timeoutId = setTimeout(() => setIsActive(false), 3000)
    }
    return () => clearTimeout(timeoutId)
  },[list.length])

  return (
    <div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Зупинити' : 'Запустити'}
      </button>

      {(list.length > 0) ? <ul>{list.map((item) =>
        <li>{item}</li>
      )}</ul> : <p>Всі задачі виконано, компонент закриється через 3с...</p>}
    </div>
  );
};

export default DeletionTimer;