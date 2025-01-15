import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full mb-24 max-h-[600px]">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl pl-32 flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white max-w-[460px] space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-accent mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide -2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl pl-32 flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white max-w-[460px] space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-accent mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl pl-32 flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white max-w-[460px] space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-accent mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl pl-32 flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white max-w-[460px] space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-accent mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
