import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Calendar from 'react-calendar';
import Header from './components/Header';
import 'react-calendar/dist/Calendar.css';

const currentDate = new Date();

function App() {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
    console.log(value);
  };
  return (
    <>
      <Paper>
        <Calendar onChange={onChange} value={value} />
        <Header />
      </Paper>
    </>
  );
}

export default App;
