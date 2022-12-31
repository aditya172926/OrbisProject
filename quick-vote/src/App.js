import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { WalletContext } from './Context/WalletProvider';
import useOrbisClient from './hooks/useOrbisClient';
import FeedList from './Components/js/FeedList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  const walletContext = useContext(WalletContext);
  const hookOrbisClient = useOrbisClient();

  return (
    <>
      <FeedList />
    </>
  );
}

export default App;
