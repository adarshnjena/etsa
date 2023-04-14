import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Page" description="" />
      <div className="container">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          ETSA is the student body of Electronic and Telecommunication
          engineering branch of the Government college of engineering, Nagpur.
          ETSA is responsible for organising both academic and extra-curricular
          activities such as technical seminars, hands-on session industrial
          visits, quizzes and competitions throughout the year.
          <strong className="text-primary dark:text-white"> ETSA </strong>
          aims to provide the students with better opportunities for personal
          and professional growth by fostering leadership skills, promoting
          social and cultural engagement, and creating a sense of community
          among the students. ETSA also conducts “Horizon” , the annual
          technical extravaganza which is spearheaded with zeal and passion.
        </p>
      </div>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
