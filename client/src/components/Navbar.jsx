import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header class="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div class="flex items-center px-6 py-6 xl:px-24">
         <Link to="/" class="shrink-0">
            <span class="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700  dark:text-white  lg:px-5">
              Decentralized-Auction-House
            </span>
         
         </Link>

          <div class="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <div class="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
             <Link to="/" class="shrink-0">
                <span class="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700  dark:text-white  lg:px-5">
                  Decentralized-Auction-House
                </span>
             </Link>

              <button
                class="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                aria-label="close mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            <nav class="navbar w-full">
              <ul class="flex flex-col lg:flex-row">
                <li class="group">
                 <Link
                    to="/auctions"
                    class="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Auctions
                 </Link>
                </li>
                <li class="group">
                 <Link
                    to="/create"
                    class="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Create
                 </Link>
                </li>
                <li class="group">
                 <Link
                    to="/profile"
                    class="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Profile
                 </Link>
                </li>
              </ul>
            </nav>

            <div class="ml-8 hidden lg:flex xl:ml-12">
              <ConnectWallet />
            </div>
          </div>

          <div class="ml-auto flex lg:hidden">
            <button
              class="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
              aria-label="open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
