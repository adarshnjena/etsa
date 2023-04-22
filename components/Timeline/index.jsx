/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";
import "./timeline.css";

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
          <div className="section-timeline">
            <div className="bead bead1"></div>
            <div className="content-timeline card1">
              <div class="container-img">
                <img src="images/hero/dummy.avif" alt="New York"></img>
              </div>
              <div class="details">
                <h3>New York</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium dignissimos, minus aperiam adipisci
                  exercitationem.
                </p>
              </div>
            </div>
          </div>

          <div className="section-timeline">
            <div className="bead bead2"></div>
            <div className="content-timeline card2">
              <div class="container-img">
                <img src="images/hero/dummy.avif" alt="New York"></img>
              </div>
              <div class="details">
                <h3>New York</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium dignissimos, minus aperiam adipisci
                  exercitationem.
                </p>
              </div>
            </div>
          </div>

          <div className="section-timeline">
            <div className="bead bead3"></div>
            <div className="content-timeline card3">
              <div class="container-img">
                <img src="images/hero/dummy.avif" alt="New York"></img>
              </div>
              <div class="details">
                <h3>New York</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium dignissimos, minus aperiam adipisci
                  exercitationem.
                </p>
              </div>
            </div>
          </div>

          <div className="section-timeline">
            <div className="bead bead4"></div>
            <div className="content-timeline card4">
              <div class="container-img">
                <img src="images/hero/dummy.avif" alt="New York"></img>
              </div>
              <div class="details">
                <h3>New York</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium dignissimos, minus aperiam adipisci
                  exercitationem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="timeline.js"></Script>
    </>
  );
}
