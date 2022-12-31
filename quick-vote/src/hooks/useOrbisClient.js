import { Orbis } from "@orbisclub/orbis-sdk";
import { useContext, useEffect, useState } from "react";
import { WalletContext } from "../Context/WalletProvider";

const useOrbisClient = () => {
  const orbis = new Orbis();
  const walletContext = useContext(WalletContext);

  const [user, setUser] = useState();
  const [userGroups, setUserGroups] = useState([]);

  const connectOrbis = async () => {
      try {
        const options = {
          provider: window.ethereum,
          chain: "ethereum",
          lit: false,
        };
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
  };

  const checkConnectionToOrbis = async() => {
    let res = await orbis.isConnected();
    if (res.status == 200) {
      setUser(res.did);
      console.log("The user is already connected", res);
      return;
    } else {
        connectOrbis();
    }
  }

  useEffect(() => {
    if (walletContext.address) {
        checkConnectionToOrbis();
        console.log("checkin done");
    }
    walletContext.setIsLoading(false);
  }, [walletContext.address]);

  const disconnectOrbis = async () => {
    let res = await orbis.logout();
    console.log("Orbis disconnected ", res);
    setUser(null);
  };

  const getUserGroups = async () => {
    let { data, error } = await orbis.getDids(walletContext.address);
    if (data) {
      console.log("Current user's did", data);
      // fetching the user groups
    } else if (error) {
      console.log("Error in fetching user did ", error);
      return;
    }
    let groups = await orbis.getProfileGroups(data.did);
    console.log("The groups belonging to user ", groups);
    if (groups.data) {
      if (groups.data.length > 0) setUserGroups(groups.data);
      else {
        console.log("The user has no associated groups");
        return;
      }
    } else {
      console.log("An error has occured in getUserGroups ", error);
    }
  };

  const setUpGroup = async (name, description, pfp = "") => {
    let content = {
      pfp: pfp,
      name: name,
      description: description,
    };
    let res = await orbis.createGroup(content);
    if (res.status == 200) {
      console.log("New Group Created");
    } else {
      console.log("Some error occured ", res);
    }
  };

  const setUpChannel = async (
    groupId,
    channelName,
    channelType,
    channelDescription = ""
  ) => {
    if (!groupId) {
      console.log("Channels can be created in a group only");
      return;
    }
    let group = await orbis.getGroup(groupId);
    if (user != group?.creator) {
      console.log("You are not the creator of this group");
      return;
    }
    // after the group is created, we have to create a default channel init
    let newChannel = await orbis.createChannel(groupId, {
      group_id: groupId,
      name: channelName,
      description: channelDescription,
      type: channelType,
    });
    if (newChannel.status == 200) {
      console.log("New channel created", newChannel);
    } else {
      console.log("Some error occured in channel creation ", newChannel);
    }
    console.log("Default channel created");
  };

  const sendFeedPost = async () => {
    let res = await orbis.createPost({ body: "gm" });
  };

  return {
    user: user,
    connectOrbis: connectOrbis,
    disconnectOrbis: disconnectOrbis,
    getUserGroups: getUserGroups,
    setUpGroup: setUpGroup,
    setUpChannel: setUpChannel,
  };
};
export default useOrbisClient;
