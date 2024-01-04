import React from 'react'

function CreateItem() {
  return (
    <div>
    <section class="relative py-24">
    <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
      <img src="img/gradient_light.jpg" alt="gradient" class="h-full w-full" />
    </picture>
    <div class="container">
      <h1 class="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">Create</h1>

      <div class="mx-auto max-w-[48.125rem]">
       
        <div class="mb-6">
          <label class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >Image, Video, Audio, or 3D Model<span class="text-red">*</span></label
          >
          <p class="mb-3 text-2xs dark:text-jacarta-300">Drag or choose your file to upload</p>

          <div
            class="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700"
          >
            <div class="relative z-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="mb-4 inline-block fill-jacarta-500 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z"
                />
              </svg>
              <p class="mx-auto max-w-xs text-xs dark:text-jacarta-300">
                JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
              </p>
            </div>
            <div
              class="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"
            ></div>
            <input
              type="file"
              accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
              id="file-upload"
              class="absolute inset-0 z-20 cursor-pointer opacity-0"
            />
          </div>
        </div>

        
        <div class="mb-6">
          <label for="item-name" class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >Name<span class="text-red">*</span></label
          >
          <input
            type="text"
            id="item-name"
            class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
            placeholder="Item name"
            required
          />
        </div>

       
        <div class="mb-6">
          <label for="item-external-link" class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >External link</label
          >
          <p class="mb-3 text-2xs dark:text-jacarta-300">
            We will include a link to this URL on this item's detail page, so that users can click to learn more
            about it. You are welcome to link to your own webpage with more details.
          </p>
          <input
            type="url"
            id="item-external-link"
            class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
            placeholder="https://yoursite.io/item/123"
          />
        </div>

  
        <div class="mb-6">
          <label for="item-supply" class="mb-2 block font-display text-jacarta-700 dark:text-white">Supply</label>

          <div class="mb-3 flex items-center space-x-2">
            <p class="text-2xs dark:text-jacarta-300">
              The number of items that can be minted. No gas cost to you!
              <span
                class="inline-block"
                data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                  ></path>
                </svg>
              </span>
            </p>
          </div>

          <input
            type="text"
            id="item-supply"
            class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
            placeholder="1"
          />
        </div>


       
        <div class="mb-6">
          <label for="item-description" class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >Description</label
          >
          <p class="mb-3 text-2xs dark:text-jacarta-300">
            The description will be included on the item's detail page underneath its image. Markdown syntax is
            supported.
          </p>
          <textarea
            id="item-description"
            class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
            rows="4"
            required
            placeholder="Provide a detailed description of your item."
          ></textarea>
        </div>

        <button
          disabled
          class="cursor-default rounded-full bg-accent-lighter py-3 px-8 text-center font-semibold text-white transition-all"
        >
          Create
        </button>
      </div>
    </div>
  </section>
    </div>
  )
}

export default CreateItem