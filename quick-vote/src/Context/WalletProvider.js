import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react"

export const WalletContext = createContext({
    provider: undefined,
    signer: undefined,
    address: undefined,
    connectWallet: async () => undefined,
    disconnectWallet: async () => undefined
});

export const WalletProvider = ({ children }) => {
    const [provider, setProvider] = useState();
    const [signer, setSigner] = useState();
    const [address, setAddress] = useState();

    if (!window.ethereum) {
        console.log("There is no ethereum object found");
        return;
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                setAddress(accounts[0]);
                console.log("Connected to account with address ", accounts[0]);
                const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
                setProvider(ethersProvider);
                const signer = ethersProvider.getSigner();
                setSigner(signer);
            } else {
                return;
            }
        } catch (error) {
            console.log("Ethereum object not found");
        }
    }

    const disconnectWallet = async () => {
        setProvider(null);
        setSigner(null);
        setAddress(null);
    }

    return (
        <WalletContext.Provider
            value={{
                address: address,
                provider: provider,
                signer: signer,
                connectWallet: connectWallet,
                disconnectWallet: disconnectWallet
            }}>
            {children}
        </WalletContext.Provider>
    )
}