import { Orbis } from "@orbisclub/orbis-sdk";
import { useState } from "react";

const useOrbisClient = () => {
    const orbis = new Orbis();

    const [user, setUser] = useState();

    const connectOrbis = async () => {
        try {
            let res = await orbis.connect();
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

    return {
        user: user,
        connectOrbis: connectOrbis
    }
}
export default useOrbisClient;