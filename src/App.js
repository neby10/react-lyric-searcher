// import logo from './logo.svg';
import './App.css';
import TrackCard from './components/TrackCard';

function App() {
  return (
    <div className="App">
      <p className='text'>Search Lyrics</p>
      <p className='text'>Use API to Fetch results</p>
      <TrackCard ></TrackCard>
    </div>
  );
}

export default App;
