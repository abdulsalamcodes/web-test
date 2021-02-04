import Navbar from './components/Navbar/Navbar';
import TimeContextProvider from './contexts/TimeContext';
import DatePicker from './widgets/DatePicker/DateAndTimePicker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TimeContextProvider>
        <DatePicker />
      </TimeContextProvider>
    </div>
  );
}

export default App;
