import img2 from "../../../assets/images/about_us/person.jpg";
import img3 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 max-h[475px] mb-24 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={img3}
            className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-5 top-1/2"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h4 className="text-3xl font-bold text-orange-500">About Us</h4>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};
export default About;
