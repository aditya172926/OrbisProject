import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { WalletContext } from './Context/WalletProvider';

function App() {
  const walletContext = useContext(WalletContext);

  return (
    <>
      {walletContext.address ? (
        <>
          <p>connected to wallet</p>

        </>
      ) : (<>
        <p>not connected to wallet</p>
        <button onClick={() => walletContext.connectWallet()}>Connect</button>
      </>)}
    </>
  );
}

export default App;
