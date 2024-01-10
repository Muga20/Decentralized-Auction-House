import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useWallet,
  useContractWrite,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x17CC598810C1218414dc498C1BCec59c21409aD5"
  );

  const { mutateAsync: createAuction } = useContractWrite(
    contract,
    "createAuction"
  );

  const address = useAddress();
  const connect = useWallet();

  const startAuction = async (formData) => {
    try {
      const auctionEndTimeInSeconds = Math.floor(
        new Date(formData._auctionEndTime).getTime() / 1000
      );
  
      const { data } = await createAuction(
        address, 
        formData._title,
        formData._description,
        ethers.utils.parseEther(formData._startingPrice),
        auctionEndTimeInSeconds,
        formData._image
      );
  
      console.log("Auction creation success", data);
    } catch (error) {
      console.log("Auction creation failed", error);
    }
  };
  
  
  
  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createAuction: startAuction,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);
