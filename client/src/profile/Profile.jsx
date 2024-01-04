import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Items from "./Items";
import Image2 from "../styles/img/user/user_avatar.gif";

function Profile() {
  return (
    <div>
      <section class="relative bg-light-base pb-12 pt-28 dark:bg-jacarta-800">
        <div class="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <figure class="relative">
            <img
              src={Image2}
              alt="collection avatar"
              class="rounded-xl border-[5px] border-white dark:border-jacarta-600"
            />
            <div
              class="absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
              data-tippy-content="Verified Collection"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="h-[.875rem] w-[.875rem] fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </div>
          </figure>
        </div>

        <div class="container">
          <div class="text-center">
            <h2 class="mb-2 font-display text-4xl font-medium text-jacarta-700 dark:text-white">
              Sad Ducks
            </h2>
            <div class="mb-8 inline-flex items-center justify-center rounded-full border border-jacarta-100 bg-white py-1.5 px-4 dark:border-jacarta-600 dark:bg-jacarta-700">
              <span data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  class="mr-1 h-4 w-4"
                >
                  <path
                    fill="#8A92B2"
                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                  ></path>
                  <path
                    fill="#62688F"
                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                  ></path>
                  <path
                    fill="#454A75"
                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                  ></path>
                  <path
                    fill="#8A92B2"
                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                  ></path>
                  <path
                    fill="#62688F"
                    d="M959.8 1397.6v441.7l540.1-760.6z"
                  ></path>
                </svg>
              </span>

              <ConnectWallet />
            </div>

            <p class="mx-auto mb-2 max-w-xl text-lg dark:text-jacarta-300">
              I make art with the simple goal of giving you something pleasing
              to look at for a few seconds.
            </p>
            <span class="text-jacarta-400">Joined December 2019</span>

          
          </div>
        </div>
      </section>
      <Items />
    </div>
  );
}

export default Profile;
