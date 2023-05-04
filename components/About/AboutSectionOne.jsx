import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="dark:border-white/[.15] border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full px-4">
              <SectionTitle
                title="Feelings from the Head of the Department"
                paragraph="Feel extremely happy and delighted to lead and guide the organization of an event that I had given a name."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap text-justify">
                  Giving a name “HORIZON”, to The Installation Ceremony of ETSA
                  had an intense intention, I wanted my children (students) to
                  perceive a world beyond the physical vision; March ahead after
                  every destination; in the pursuit of real happiness for self,
                  family, friends, society and the whole nation. Here we
                  envision building human relations, by working as a team,
                  bringing out all that is good in the other, standing hand in
                  hand to meet challenges, and assuring a successful
                  organization. We believe success is the one where who is at
                  the top of the ladder is not important, much more important is
                  how many are holding the success ladder. Feel extremely happy
                  and proud about the pre-installation ventures of Team ETSA
                  22-23 and expect the same in the future. Wishing for a
                  cherishing experience.
                  <div className=" justify-endtext-base mt-5 flex w-screen flex-col items-end !leading-relaxed text-body-color md:text-lg">
                    <div>Yours truly</div>
                    <div>-Rajeshree</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/hodMaam.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
