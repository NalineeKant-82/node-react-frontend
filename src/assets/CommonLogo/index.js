import Glogo from "../../assets/google-logo.png";
import flogo from "../../assets/facebook-logo.png";
const CommonLogo = () => {
  return (
    <div>
      <div className="flex items-center mt-10">
        <div className="bg-black h-[1px] w-full"></div>
        <div className="p-1 border rounded-lg">OR</div>
        <div className="bg-black h-[1px] w-full"></div>
      </div>
      <div className="flex gap-4 justify-center mt-5 ">
        <div
          onClick={() => window.open("http://www.google.com", "_blank")}
          className="cursor-pointer"
        >
          <img style={{ height: "40px" }} src={Glogo} alt="google" />
        </div>
        <div
          onClick={() => window.open("http://www.facebook.com", "_blank")}
          className="cursor-pointer"
        >
          <img style={{ height: "40px" }} src={flogo} alt="facebook" />
        </div>
        <div
          onClick={() => window.open("http://www.linkedin.com", "_blank")}
          className="cursor-pointer"
        >
          <svg
            fill="#0077b5"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default CommonLogo;
