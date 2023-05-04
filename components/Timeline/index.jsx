/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";
import "./timeline.css";
import Link from "next/link";

export default function Timeline() {
  return (
    <>
      <div className="container-timeline">
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
            Explore Events
          </Text>
          <Spacer x={2} />
          <Text h2 i weight={"medium"} className="subTitle-timeline">
            all the events we offer
          </Text>
          <Spacer x={2} />
        </div>

        <div className="timeline">
          <div className="horizontalLine"></div>

          <div className="section-timeline" id="IDEATHON">
            <div className="bead bead3"></div>
            <div className="content-timeline card3">
              <div class="container-img">
                <img src="images/events/ideathon.webp" alt="New York"></img>
              </div>
              <div class="details">
                <h3>Ideathon</h3>
                <p>
                  Ideathon is a platform where students can showcase their
                  technical genius. Ideathon presents the students with a
                  platform where they can put their projects through
                  professional scrutiny and get constructive feedback. It
                  inculcates an innovative zeal among participants bringing out
                  the best of technical talents to the fore.
                </p>
                <div className="mt-4 flex">
                  <Link
                    href={"https://bit.ly/41BVKKL"}
                    class="w-100% group relative m-auto flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
                  >
                    <span class="md:py-2.5 relative w-screen rounded-md bg-white px-5 py-1.5 text-center transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Register Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section-timeline">
            <div className="bead bead1"></div>
            <div className="content-timeline card1">
              <div class="container-img">
                <img src="images/events/futsal.webp" alt="New York"></img>
              </div>
              <div class="details">
                <h3>Futsal </h3>
                <p>
                  Wanna show off your sporty side? We&apos;ve got you covered.
                  Futsal is a mini-sized version of a thrilling soccer game with
                  a smaller field but greater fun. Sure to attract sports
                  enthusiasts, this is the latest addition to Horizon&apos;s
                  platter of events.
                </p>
                <div className="mt-4 flex">
                  <Link
                    href={"https://bit.ly/3Ls2DIO"}
                    class="w-100% group relative m-auto flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
                  >
                    <span class="md:py-2.5 relative w-screen rounded-md bg-white px-5 py-1.5 text-center transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Register Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section-timeline">
            <div className="bead bead2"></div>
            <div className="content-timeline card2">
              <div class="container-img">
                <img src="images/events/botmania.webp" alt="New York"></img>
              </div>
              <div class="details">
                <h3>Bot Mania</h3>
                <p>
                  A unique obstacle race for the bots, this is the ultimate
                  championship for the steadiest and sturdiest of robots. This
                  challenging race trace is treacherous and will definitely keep
                  you on the edge of your seat!
                </p>
                <div className="mt-4 flex">
                  <Link
                    href={"https://bit.ly/BOTMANIA"}
                    class="w-100% group relative m-auto flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
                  >
                    <span class="md:py-2.5 relative w-screen rounded-md bg-white px-5 py-1.5 text-center transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Register Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section-timeline">
            <div className="bead bead3"></div>
            <div className="content-timeline card3">
              <div class="container-img">
                <img src="images/events/taskmaker.webp" alt="New York"></img>
              </div>
              <div class="details">
                <h3>Taskmaster</h3>
                <p>
                  Taskmaster is a game where the participants will face a series
                  of tasks that will require them to think critically, solve
                  problems, and work collaboratively. The challenges will range
                  from physical challenges to mental puzzles and will keep the
                  participants on their toes throughout the event
                </p>
                <div className="mt-4 flex">
                  <Link
                    href={"https://bit.ly/3V8VKzC"}
                    class="w-100% group relative m-auto flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
                  >
                    <span class="md:py-2.5 relative w-screen rounded-md bg-white px-5 py-1.5 text-center transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Register Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="timeline.js"></Script>
    </>
  );
}
