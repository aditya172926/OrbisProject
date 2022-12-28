import { Orbis } from "@orbisclub/orbis-sdk";
import { useState } from "react";

const useOrbisClient = () => {
    const orbis = new Orbis();

    const [user, setUser] = useState();

    const connectOrbis = async () => {
        let res = await orbis.isConnected();
        if (res.status == 200) {
            setUser(res.did);
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

    }

    return {
        user: user,
        connectOrbis: connectOrbis,
        disconnectOrbis: disconnectOrbis
    }
}
export default useOrbisClient;