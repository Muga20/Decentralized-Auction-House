import React from "react";
import Image from "../styles/img/products/item_5.jpg";
import Image2 from "../styles/img/gradient_light.jpg";
import { Link } from "react-router-dom";


function Items() {
  return (
    <div>
      <section class="relative py-24 pt-20">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src={Image2} alt="gradient" class="h-full w-full" />
        </picture>
        <div class="container">
          <ul
            class="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                id="on-sale-tab"
                data-bs-toggle="tab"
                data-bs-target="#on-sale"
                type="button"
                role="tab"
                aria-controls="on-sale"
                aria-selected="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="mr-1 h-5 w-5 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                </svg>
                <span class="font-display text-base font-medium">On Sale</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                id="owned-tab"
                data-bs-toggle="tab"
                data-bs-target="#owned"
                type="button"
                role="tab"
                aria-controls="owned"
                aria-selected="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="mr-1 h-5 w-5 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 8h3l-4 4-4-4h3V9h2v4z" />
                </svg>
                <span class="font-display text-base font-medium">Owned</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                id="created-tab"
                data-bs-toggle="tab"
                data-bs-target="#created"
                type="button"
                role="tab"
                aria-controls="created"
                aria-selected="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="mr-1 h-5 w-5 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
                </svg>
                <span class="font-display text-base font-medium">
                  Created (20)
                </span>
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                id="activity-tab"
                data-bs-toggle="tab"
                data-bs-target="#activity"
                type="button"
                role="tab"
                aria-controls="activity"
                aria-selected="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="mr-1 h-5 w-5 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
                </svg>
                <span class="font-display text-base font-medium">Activity</span>
              </button>
            </li>
          </ul>

          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="on-sale"
              role="tabpanel"
              aria-labelledby="on-sale-tab"
            >
              <div class="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                <article>
                  <div class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                    <figure class="relative">
                      <Link to="/item">
                        <img
                          src={Image}
                          alt="item 5"
                          class="w-full rounded-[0.625rem]"
                          loading="lazy"
                        />
                      </Link>
                      <div class="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                        <span
                          class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                          data-tippy-content="Favorite"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                          >
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                          </svg>
                        </span>
                        <span class="text-sm dark:text-jacarta-200">15</span>
                      </div>
                    </figure>
                    <div class="mt-7 flex items-center justify-between">
                      <Link to="/item">
                        <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                          Flourishing Cat #180
                        </span>
                      </Link>
                      <div class="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                        <a
                          href="#"
                          class="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                          role="button"
                          id="itemActions"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width="16"
                            height="4"
                            viewBox="0 0 16 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="fill-jacarta-500 dark:fill-jacarta-200"
                          >
                            <circle cx="2" cy="2" r="2" />
                            <circle cx="8" cy="2" r="2" />
                            <circle cx="14" cy="2" r="2" />
                          </svg>
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                          aria-labelledby="itemActions"
                        >
                          <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                            New bid
                          </button>
                          <hr class="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                          <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                            Refresh Metadata
                          </button>
                          <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                            Share
                          </button>
                          <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 text-sm">
                      <span class="mr-1 text-jacarta-700 dark:text-jacarta-200">
                        From 8.49 ETH
                      </span>
                      <span class="text-jacarta-500 dark:text-jacarta-300">
                        2/8
                      </span>
                    </div>

                    <div class="mt-8 flex items-center justify-between">
                      <button
                        class="font-display text-sm font-semibold text-accent"
                        data-bs-toggle="modal"
                        data-bs-target="#buyNowModal"
                      >
                        Buy now
                      </button>
                      <a href="item.html" class="group flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          class="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                        </svg>
                        <span class="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                          View History
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Items;
