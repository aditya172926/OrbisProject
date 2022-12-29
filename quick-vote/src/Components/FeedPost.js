import { useContext } from "react";
import useOrbisClient from "../hooks/useOrbisClient";

const FeedPost = (props) => {
    const hookOrbisClient = useOrbisClient();
    return (
        <>
            <p>The connect wallet is {props.address}</p>
            <button className="btn btn-primary" onClick={hookOrbisClient.connectOrbis}>
                Connect to Orbis
            </button>
            <button className="btn btn-primary" onClick={hookOrbisClient.getUserGroups}>
                Get User groups
            </button>
        </>
    )
}
export default FeedPost;