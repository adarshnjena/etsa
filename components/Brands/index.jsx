import Image from "next/image";

const brandsData = [
  {
    id: 1,
    name: "UIdeck",
    href: "/",
    image: "/images/brands/ElectroHouse.png",
  },
  {
    id: 2,
    name: "unique-logo",
    href: "/",
    image: "/images/brands/unique-logo.png",
  },
  {
    id: 3,
    name: "Robo Studio",
    href: "",
    image: "/images/brands/third.jpg",
  },
  {
    id: 4,
    name: "emertxe",
    href: "",
    image: "/images/brands/forth.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px] flex flex-wrap items-center justify-center rounded-md bg-dark px-8 py-8 dark:bg-primary dark:bg-opacity-5 sm:px-10"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 xl:mx-6 2xl:mx-8">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-16 w-full "
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
