import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { WalletContext } from './Context/WalletProvider';
import useOrbisClient from './hooks/useOrbisClient';

function App() {
  const walletContext = useContext(WalletContext);
  const hookOrbisClient = useOrbisClient();

  return (
    <>
      {walletContext.address ? (
        <>
          <p>connected to wallet</p>
          <button onClick={() => hookOrbisClient.connectOrbis()}>Connect Orbis</button>
        </>
      ) : (<>
        <p>not connected to wallet</p>
        <button onClick={() => walletContext.connectWallet()}>Connect Wallet</button>
      </>)}
    </>
  );
}

export default App;
