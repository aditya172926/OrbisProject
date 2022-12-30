import { Orbis } from "@orbisclub/orbis-sdk";
import { useContext, useEffect, useState } from "react";
import { WalletContext } from "../Context/WalletProvider";

const useOrbisClient = () => {
    const orbis = new Orbis();
    const walletContext = useContext(WalletContext);

    const [user, setUser] = useState();
    const [userGroups, setUserGroups] = useState([]);

    const connectOrbis = async () => {
        let res = await orbis.isConnected();
        console.log("Connected to orbis ", res);
        if (res.status == 200) {
            setUser(res.did);
            console.log("The user is already connected");
            return;
        } else {
            try {
                const options = {
                    provider: window.ethereum,
                    chain: "ethereum",
                    lit: false
                }
                let res = await orbis.connect_v2(options);
                if (res.status == 200) {
                    console.log("Orbis connection successful ", res);
                    console.log("Here is the DID ", res.did);
                    setUser(res.did);
                } else {
                    console.log("Error connecting to Ceramic: ", res);
                }
            } catch (error) {
                console.log("Error during connect with Orbis", error);
            }
        }

    }

    const disconnectOrbis = async () => {
        let res = await orbis.logout();
        console.log("Orbis disconnected ", res);
        setUser(null)
    }

    const getUserGroups = async() => {
        let {data, error} = await orbis.getDids(walletContext.address);
        if (data) {
            console.log("Current user's did", data);
            // fetching the user groups
        } else if (error) {
            console.log("Error in fetching user did ", error);
            return;
        }
        let groups = await orbis.getProfileGroups(data.did)
        console.log("The groups belonging to user ", groups);
        if (groups.data) {
            if (groups.data.length > 0)
                setUserGroups(groups.data)
            else {
                console.log("The user has no associated groups");
                return;
            }
        } else {
            console.log("An error has occured in getUserGroups ", error);
        }
    }

    // useEffect(() => {
    //     if (walletContext.address) {
    //         connectOrbis();
    //     }
    // }, [walletContext.address]);

    return {
        user: user,
        connectOrbis: connectOrbis,
        disconnectOrbis: disconnectOrbis,
        getUserGroups: getUserGroups
    }
}
export default useOrbisClient;