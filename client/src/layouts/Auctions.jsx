import React, { useState, useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../config/Contract";
import { Link } from "react-router-dom";

function Auctions() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [auctionEndTimeInSeconds, setAuctionEndTimeInSeconds] = useState("");
  const [image, setImage] = useState("");
  const [bidders, setBidders] = useState([]);

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: items } = useContractRead(contract, "getItems");
 

  useEffect(() => {
    if (items && items.length > 0) {
      const [
        _owner,
        _title,
        _description,
        _startingPrice,
        _auctionEndTime,
        _image
      ] = items;

      setTitle(_title || "");
      setDescription(_description || "");
      setStartingPrice(ethers.utils.formatEther(_startingPrice?.hex || "0"));
      setAuctionEndTimeInSeconds(_auctionEndTime?.hex || "");
      setImage(_image || "");
    }
  }, [items]);

  

  return (
    <div>
      <section className="py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            <span className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"></span>
            Trending
          </h2>
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            {items &&
              items.map((item, index) => (
                <article key={index}>
                  <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                    <figure className="relative ">
                      <Link to={`/item/${item.title}`}>
                        <img
                          src={item.image}
                          alt={`Item ${item.title}`}
                          className="w-full rounded-[0.625rem]"
                          loading="lazy"
                        />
                      </Link>
                    </figure>
                    <div className="mt-7 flex items-center justify-between">
                      <Link to={`/item/${item.id}`}>
                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                          {item.title}
                        </span>
                      </Link>
                      <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600"></div>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                        From {startingPrice} ETH
                      </span>
                      <span className="text-jacarta-500 dark:text-jacarta-300">
                        {bidders.length} Bidders
                      </span>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex">
                        <button
                          className="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#buyNowModal"
                        >
                          Place Bid
                        </button>
                        <span className="text-jacarta-500 dark:text-jacarta-300 pl-2">
                          {bidders.length} Bids
                        </span>
                      </div>
                      <Link
                        to={`/item/${item.id}`}
                        className="group flex items-center"
                      >
                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                          View
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Auctions;
