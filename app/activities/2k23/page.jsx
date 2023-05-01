import Breadcrumb from "@/components/Common/Breadcrumb";
import data2k23 from "./data";

const Activities2k23 = () => {
  return (
    <>
      <Breadcrumb
        pageName="Activities(2022-2023)"
        description="The Electronics and Telecommunications Student Association promotes academic excellence through engaging activities that foster professional development and networking opportunities among students"
      />
      <section
        id="home"
        className="relative z-10 overflow-hidden px-4 pt-[100px] pb-0 md:pt-[80px] md:pb-[80px] xl:pt-[150px] xl:pb-[80px] 2xl:pt-[8vh] 2xl:pb-[80px]"
      >
        <div className="container">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            {data2k23.map((data) => (
              <li key={data.id} class="mb-10 ml-6">
                <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  {data.title}
                </h3>
                <span class="rounded bg-blue-100 px-0.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {data.author}
                </span>
                <time class="mb-2 mt-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {data.conductedDate}
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {data.paragraph}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Activities2k23;
