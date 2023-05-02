import React, { useState } from "react";
import faqData from "./faqData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section class="relative z-10 bg-body-color-dark py-10 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8">
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
                class="cursor-pointer rounded-xl border border-purple-200 bg-white text-black shadow-lg transition-all duration-200  hover:bg-secondary hover:text-white"
                onClick={() => {
                  setOpenIndex(data.index);
                }}
              >
                {openIndex == data.index ? (
                  <button
                    type="button"
                    class="flex w-full items-center justify-between px-4 py-5 transition-all duration-200 sm:p-6"
                  >
                    <span class="flex text-lg font-semibold ">{data.que}</span>

                    <svg
                      class="h-6 w-6 rotate-180 "
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
                    class="flex w-full items-center justify-between px-4 py-5 text-black transition-all duration-200  hover:text-white sm:p-6"
                  >
                    <span class="flex text-lg font-semibold"> {data.que} </span>

                    <svg
                      class="h-6 w-6 "
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
                  <div class="px-4 pb-5  transition-all duration-200 sm:px-6 sm:pb-6">
                    <p>{data.ans}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>

          <p class="textbase mt-9 text-center text-gray-600">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
            >
              Contact our support
            </a>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <img src="/images/video/shape.svg" alt="shape" className="w-full" />
        </div>
      </section>
    </>
  );
}
