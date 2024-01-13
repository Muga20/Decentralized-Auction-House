import { useState } from "react";
import {
  useContract,
  useContractWrite,
  useAddress,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../config/Contract";
import Image from "../styles/img/gradient_light.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateItem = () => {
  // State variables
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [image, setImage] = useState("");

  // Ethereum-related hooks
  const { contract } = useContract(CONTRACT_ADDRESS);
  const address = useAddress();
  const { mutateAsync: createAuction } = useContractWrite(
    contract,
    "createAuction"
  );

  const auctionEndTimeInSeconds = Math.floor(
    new Date(auctionEndTime).getTime() / 1000
  );

  // Prepare data object
  const dataTo = {
    _owner: address,
    _title: title,
    _description: description,
    _startingPrice: ethers.utils.parseEther(startingPrice || "0"),
    _auctionEndTime: auctionEndTimeInSeconds,
    _image: image,
  };

  // Function to handle the auction creation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createAuction({ args: Object.values(dataTo) });
      toast.success("Item added successfully");
    } catch (error) {
      if (error) {
        toast.error("Contract call failure");
      }
    } finally {
      setIsLoading(false);
    }
    
  };

  //clearing the form optional

  const clearFormFields = () => {
    setTitle("");
    setDescription("");
    setStartingPrice("");
    setAuctionEndTime("");
    setImage("");
  };

  const isFormNotEmpty =
    title || description || startingPrice || auctionEndTime || image;

  return (
    <div>
      <section class="relative py-24">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src={Image} alt="gradient" class="h-full w-full" />
        </picture>
        <div class="container">
          <h1 class="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
            Create
          </h1>

          <form onSubmit={handleSubmit}>
            <div class="mx-auto max-w-[48.125rem]">
              <div class="mb-6">
                <label
                  for="item-name"
                  class="mb-2 block font-display text-jacarta-700 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="item-name"
                  class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                  placeholder="Item name"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div class="mb-6">
                <label
                  for="item-image-url"
                  class="mb-2 block font-display text-jacarta-700 dark:text-white"
                >
                  Image URL
                </label>
                <p class="mb-3 text-2xs dark:text-jacarta-300">
                  Please provide a direct URL to the image of this item.
                </p>
                <input
                  type="url"
                  id="item-image-url"
                  class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                  placeholder="https://yoursite.io/images/itemimage.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  for="item-price"
                  class="mb-2 block font-display text-jacarta-700 dark:text-white"
                >
                  Price in Ether (ETH)
                </label>
                <div class="mb-3 flex items-center space-x-2">
                  <p class="text-2xs dark:text-jacarta-300">
                    Enter the price for the item in Ether.
                    <span
                      class="inline-block"
                      data-tippy-content="This is the cost users will pay in Ether for the item."
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        class="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
                <input
                  type="number"
                  step="any"
                  id="item-price"
                  class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                  placeholder="0.1"
                  value={startingPrice}
                  onChange={(e) => setStartingPrice(e.target.value)}
                />
              </div>

              <div class="mb-6">
                <label
                  for="item-auction-end-date"
                  class="mb-2 block font-display text-jacarta-700 dark:text-white"
                >
                  Auction End Date
                </label>
                <div class="mb-3 flex items-center space-x-2">
                  <p class="text-2xs dark:text-jacarta-300">
                    Please select the end date for the auction.
                    <span
                      class="inline-block"
                      data-tippy-content="This is when the auction will conclude."
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        class="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
                <input
                  type="date"
                  id="item-auction-end-date"
                  className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                  placeholder="YYYY-MM-DD"
                  value={auctionEndTime}
                  onChange={(e) => setAuctionEndTime(e.target.value)}
                />
              </div>

              <div class="mb-6">
                <label
                  for="item-description"
                  class="mb-2 block font-display text-jacarta-700 dark:text-white"
                >
                  Description
                </label>
                <p class="mb-3 text-2xs dark:text-jacarta-300">
                  The description will be included on the item's detail page
                  underneath its image. Markdown syntax is supported.
                </p>
                <textarea
                  id="item-description"
                  class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                  rows="4"
                  required
                  placeholder="Provide a detailed description of your item."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              {ConnectWallet ? (
                <div className="grid gap-4">
                  <button
                    type="submit"
                    className="rounded-full py-3 px-8 text-center font-semibold text-white transition-all bg-accent-lighter"
                  >
                    Create
                  </button>

                  {isFormNotEmpty && (
                    <button
                      type="button"
                      onClick={clearFormFields}
                      className="rounded-full py-3 px-8 text-center font-semibold text-white transition-all bg-accent-lighter"
                    >
                      Clear Form
                    </button>
                  )}
                </div>
              ) : (
                <span>Connect Your wallet </span>
              )}
            </div>
          </form>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </div>
  );
};

export default CreateItem;
