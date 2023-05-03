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
              <Image src="/images/entc.jpg" alt="about image" fill />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[570px]" data-wow-delay=".2s">
              <SectionTitle
                title="The Department of Electronics and Telecommunications"
                paragraph=""
                mb="10px"
              />
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The E&TC department at Government College of Engineering,
                  Nagpur is known for providing quality education to its
                  students. The undergraduate program offered by the department
                  covers various areas of electronics and telecommunications
                  engineering such as signal processing, communication systems,
                  microprocessors, and microcontrollers, among others. The
                  faculty members are highly qualified and experienced, with
                  expertise in different areas of electronics and
                  telecommunications engineering. They provide individual
                  attention to the students and guide them in their academic and
                  research pursuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
