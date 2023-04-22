import React, { useState } from "react";
import faqData from "./faqData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section class="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p class="mx-auto mt-4 max-w-xl leading-relaxed text-body-color">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div class="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {faqData.map((data) => (
              <div
                key={data.index}
                class="border-purple-200 hover:bg-gray-50 cursor-pointer border bg-white shadow-lg transition-all duration-200"
                onClick={() => {
                  setOpenIndex(data.index);
                }}
              >
                {openIndex == data.index ? (
                  <button
                    type="button"
                    class="flex w-full items-center justify-between px-4 py-5 transition-all duration-200 sm:p-6"
                  >
                    <span class="flex text-lg font-semibold text-black">
                      {data.que}
                    </span>

                    <svg
                      class="h-6 w-6 rotate-180 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    class="flex w-full items-center justify-between px-4 py-5 transition-all duration-200 sm:p-6"
                  >
                    <span class="flex text-lg font-semibold text-black">
                      {" "}
                      How can I reach to support?{" "}
                    </span>

                    <svg
                      class="h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}

                {openIndex === data.index ? (
                  <div class="px-4 pb-5 text-black transition-all duration-200 sm:px-6 sm:pb-6">
                    <p>{data.ans}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>

          <p class="text-gray-600 textbase mt-9 text-center">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              class="text-blue-600 hover:text-blue-700 focus:text-blue-700 font-medium transition-all duration-200 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
