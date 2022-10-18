import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Sub} from './types'

interface appState{
  subs: Sub[];
}

const INITIAL_STATE = [
  {
    nick: 'Illio',
    subMonths: 3,
    avatar:'https://i.pravatar.cc/150?u=Illio',
    description: 'Illio es vip'
  },
  {
    nick: 'lucio_fernandez',
    subMonths:5,
    avatar: 'https://i.pravatar.cc/150?u=lucio_fernandez',

  },
]
function App() {
  const [subs, setSubs] = useState<appState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSubs = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  } 

  return (
    <div className="App" ref={divRef}>
      <h1>Shikzia Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSubs}/>
    </div>
  );
}

export default App;
