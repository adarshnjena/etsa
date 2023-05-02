/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import Brands from "@/components/Brands";
import FaqSec from "@/components/Contact/Faq";
import Gallery from "@/components/gallery";
import Contact from "@/components/Contact";

const Horizon = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[25vh] 2xl:pt-[20vh] 2xl:pb-[200px]"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ">
            <div>
              <h1 class="text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                Expand your
                <div class="relative inline-flex">
                  <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-white"></span>
                  <h1 class="relative text-4xl font-bold text-primary sm:text-6xl lg:text-7xl">
                    Horizon.
                  </h1>
                </div>
              </h1>

              <p class="mt-8 text-base text-body-color sm:text-xl">
                Horizon is the official/annual event under the umbrella of ETSA.
                Every year various technical as well as non technical
                competitions are organised for the students to put their skills
                to test,display their mettle as well as get some recreation.
                Some competitions previously held under Horizon are Talk the
                talk in the non technical domain where student&apos;s showcased
                their oratory skills and Avishkar in the technical domain where
                students presented research papers on various topics.
              </p>

              <div className="flex flex-col gap-4 pt-10 xs:flex-row">
                <Link
                  href="https://nextjstemplates.com/templates/startup"
                  className="glowBtn text-base font-semibold text-white"
                >
                  Register
                </Link>

                <Link
                  href="https://github.com/NextJSTemplates/startup-nextjs"
                  className="nonGlowBtn text-base font-semibold text-white"
                >
                  Events
                </Link>
              </div>
            </div>

            <div>
              <img
                class="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>

            <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
              <svg
                width="450"
                height="556"
                viewBox="0 0 450 556"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="277"
                  cy="63"
                  r="225"
                  fill="url(#paint0_linear_25:217)"
                />
                <circle
                  cx="17.9997"
                  cy="182"
                  r="18"
                  fill="url(#paint1_radial_25:217)"
                />
                <circle
                  cx="76.9997"
                  cy="288"
                  r="34"
                  fill="url(#paint2_radial_25:217)"
                />
                <circle
                  cx="325.486"
                  cy="302.87"
                  r="180"
                  transform="rotate(-37.6852 325.486 302.87)"
                  fill="url(#paint3_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="184.521"
                  cy="315.521"
                  r="132.862"
                  transform="rotate(114.874 184.521 315.521)"
                  stroke="url(#paint4_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="356"
                  cy="290"
                  r="179.5"
                  transform="rotate(-30 356 290)"
                  stroke="url(#paint5_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="191.659"
                  cy="302.659"
                  r="133.362"
                  transform="rotate(133.319 191.659 302.659)"
                  fill="url(#paint6_linear_25:217)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_25:217"
                    x1="-54.5003"
                    y1="-178"
                    x2="222"
                    y2="288"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_25:217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                  >
                    <stop
                      offset="0.145833"
                      stopColor="#9247d6"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopColor="#9247d6" stopOpacity="0.08" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_25:217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                  >
                    <stop
                      offset="0.145833"
                      stopColor="#9247d6"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopColor="#9247d6" stopOpacity="0.08" />
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear_25:217"
                    x1="226.775"
                    y1="-66.1548"
                    x2="292.157"
                    y2="351.421"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_25:217"
                    x1="184.521"
                    y1="182.159"
                    x2="184.521"
                    y2="448.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" />
                    <stop offset="1" stopColor="black" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_25:217"
                    x1="356"
                    y1="110"
                    x2="356"
                    y2="470"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" />
                    <stop offset="1" stopColor="black" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_25:217"
                    x1="118.524"
                    y1="29.2497"
                    x2="166.965"
                    y2="338.63"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 z-[-1] opacity-100">
              <svg
                width="364"
                height="201"
                viewBox="0 0 364 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                  stroke="url(#paint0_linear_25:218)"
                />
                <path
                  d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                  stroke="url(#paint1_linear_25:218)"
                />
                <path
                  d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                  stroke="url(#paint2_linear_25:218)"
                />
                <path
                  d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                  stroke="url(#paint3_linear_25:218)"
                />
                <circle
                  opacity="0.8"
                  cx="214.505"
                  cy="60.5054"
                  r="49.7205"
                  transform="rotate(-13.421 214.505 60.5054)"
                  stroke="url(#paint4_linear_25:218)"
                />
                <circle
                  cx="220"
                  cy="63"
                  r="43"
                  fill="url(#paint5_radial_25:218)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_25:218"
                    x1="184.389"
                    y1="69.2405"
                    x2="184.389"
                    y2="212.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" stopOpacity=".01" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_25:218"
                    x1="156.389"
                    y1="69.2405"
                    x2="156.389"
                    y2="212.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" stopOpacity=".01" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_25:218"
                    x1="125.389"
                    y1="69.2405"
                    x2="125.389"
                    y2="212.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" stopOpacity=".01" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_25:218"
                    x1="93.8507"
                    y1="67.2674"
                    x2="89.9278"
                    y2="210.214"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" stopOpacity=".01" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_25:218"
                    x1="214.505"
                    y1="10.2849"
                    x2="212.684"
                    y2="99.5816"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9247d6" />
                    <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint5_radial_25:218"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(220 63) rotate(90) scale(43)"
                  >
                    <stop offset="0.145833" stopColor="black" stopOpacity="0" />
                    <stop offset="1" stopColor="black" stopOpacity="0.08" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-col flex-nowrap md:flex-row xl:flex-row 2xl:flex-row ">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-12 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  What is ETSA ?
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  ETSA is the student body of Electronic and Telecommunication
                  engineering branch of the Government college of engineering,
                  Nagpur. ETSA is responsible for organising both academic and
                  extra-curricular activities such as technical seminars,
                  hands-on session industrial visits, quizzes and competitions
                  throughout the year.
                </p>
                <div className="flex flex-col gap-4 xs:flex-row">
                  <Link
                    href="https://nextjstemplates.com/templates/startup"
                    className="glowBtn text-base font-semibold text-white"
                  >
                    mneskfjsjbgf
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="nonGlowBtn text-base font-semibold text-white"
                  >
                    sgsrgdrgdsr
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full px-4 py-14 sm:py-[10%] md:py-[30%] lg:py-[10%] xl:py-0 2xl:py-0">
                <div className="columns-2 gap-3">
                  <img
                    className=" aspect-video w-full object-none duration-100 hover:opacity-90"
                    src="/images/hero/dummy.avif"
                  />
                  <img
                    className="aspect-square w-full object-none pt-3 duration-100 hover:opacity-90"
                    src="/images/hero/dummy.avif"
                  />
                  <img
                    className=" h-full w-full object-none duration-100 hover:opacity-90"
                    src="/images/hero/dummy.avif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" />
                <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#9247d6" stopOpacity="0" />
                <stop offset="1" stopColor="#9247d6" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#9247d6" stopOpacity="0" />
                <stop offset="1" stopColor="#9247d6" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" />
                <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" />
                <stop offset="1" stopColor="black" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" />
                <stop offset="1" stopColor="black" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" />
                <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" stopOpacity=".01" />
                <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" stopOpacity=".01" />
                <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" stopOpacity=".01" />
                <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" stopOpacity=".01" />
                <stop offset="1" stopColor="#9247d6" stopOpacity=".32" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9247d6" />
                <stop offset="1" stopColor="#9247d6" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="black" stopOpacity="0" />
                <stop offset="1" stopColor="black" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section> */}
      {/* <section className=" pb-[120px]">
        <div className="top-section-timeline">
          <Text
            h1
            className="title-timeline"
            weight={"semibold"}
            css={{
              textGradient:
                "to right, #3361AD -20%,#6061AC 5%,#39B8C8 80%,#6AC5AA -90%",
            }}
          >
            Past Horizons
          </Text>
          <Spacer x={1} />
          <Text h2 i weight={"medium"} className="subTitle-timeline">
            all the events we offer
          </Text>
          <Spacer x={1} />
        </div>
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="mb-4 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          ></div>
        </div>
      </section> */}
      <Timeline />
      <Brands />
      <FaqSec />
      <Gallery />
      <Contact />
    </>
  );
};

export default Horizon;
