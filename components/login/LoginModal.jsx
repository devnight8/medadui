import React from "react";

function LoginModal() {
  return (
    <div>
      <button
        data-dialog-target="sign-in-modal"
        class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Open Modal Form
      </button>
      <div
        data-dialog-backdrop="sign-in-modal"
        data-dialog-backdrop-close="true"
        class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="sign-in-modal"
          class="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm"
        >
          <div class="relative flex flex-col bg-white">
            <div class="relative m-2.5 items-center flex justify-center text-white h-24 rounded-md bg-slate-800">
              <h3 class="text-2xl">Sign In</h3>
            </div>
            <div class="flex flex-col gap-4 p-6">
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">Email</label>
                <input
                  type="email"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Your Email"
                />
              </div>

              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Your Password"
                />
              </div>

              <div class="inline-flex items-center mt-2">
                <label
                  class="flex items-center cursor-pointer relative"
                  htmlFor="check-2"
                >
                  <input
                    type="checkbox"
                    class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                    id="check-2"
                  />
                  <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  class="cursor-pointer ml-2 text-slate-600 text-sm"
                  htmlFor="check-2"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div class="p-6 pt-0">
              <button
                className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Sign In
              </button>
              <p class="flex justify-center mt-6 text-sm text-slate-600">
                Don&apos;t have an account?
                <a
                  href="#signup"
                  class="ml-1 text-sm font-semibold text-slate-700 underline"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
