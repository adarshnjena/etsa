import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/vairagadeMaam.jpg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[570px]" data-wow-delay=".2s">
              <SectionTitle
                title="Faculty coordinator of the ENTc Students Association"
                paragraph="Dear Electronics and Telecommunication Engineering Students"
                mb="10px"
              />
              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap text-justify">
                  As the faculty coordinator of the Electronics and
                  Telecommunication Engineering Students Association, I would
                  like to extend a warm welcome to all of you. I hope this
                  message finds you well. As a student association, our primary
                  goal is to provide a platform for students to develop their
                  skills, share their knowledge, and engage in meaningful
                  activities to bring out the best in the students. We aim to
                  create a community of enthusiastic and hardworking individuals
                  who are passionate and committed to academic and professional
                  growth. ETSA is actively involved in organizing a multitude of
                  activities spanning guest lectures, workshops, seminars, and
                  technical competitions, as well as social events and
                  networking opportunities throughout the year. We are committed
                  to ensuring that your experience with the association is a
                  positive and enriching one and we welcome your feedback and
                  suggestions for improvement. As the faculty coordinator of
                  ETSA, I encourage you to take full advantage of the
                  opportunities that the association offers and to actively
                  participate in our events and activities. Once again, I extend
                  my warmest welcome to all of you and wish you a successful and
                  fulfilling academic year ahead.
                  <div className=" justify-endtext-base mt-5 flex w-screen flex-col items-end !leading-relaxed text-body-color md:text-lg">
                    <div>Sincerely,</div>
                    <div>-Prof. Rekha Vairagade Faculty Coordinator,  ETSA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
