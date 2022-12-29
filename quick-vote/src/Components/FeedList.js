import { useContext, useEffect } from "react";
import { WalletContext } from "../Context/WalletProvider";
import FeedPost from "./FeedPost";

// this is our main component
const FeedList = () => {
    const walletContext = useContext(WalletContext);

    return (
        <>
            <div className="container">
                {
                    walletContext.address ? (
                        <FeedPost address={walletContext.address} />
                    ) : (
                        <button className="btn btn-primary" onClick={walletContext.connectWallet}>Connect Wallet</button>
                    )
                }
            </div>
        </>
    )
}
export default FeedList;