import useOrbisClient from "../hooks/useOrbisClient";

const FeedPost = (props) => {
  const hookOrbisClient = useOrbisClient();

  return (
    <>
      <div className="m-5">
        {hookOrbisClient.user ? (
          <>
            <button
              className="btn btn-primary"
              onClick={hookOrbisClient.getUserGroups}
            >
              Get User groups
            </button>
            <button
              className="btn btn-primary"
              onClick={hookOrbisClient.disconnectOrbis}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="btn btn-primary"
            onClick={hookOrbisClient.connectOrbis}
          >
            Connect to Orbis
          </button>
        )}
        <p>The connect wallet is {props.address}</p>
      </div>
    </>
  );
};
export default FeedPost;
