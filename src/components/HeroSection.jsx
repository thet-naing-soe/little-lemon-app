import { replace } from "formik";
import HeroImg from "../assets/gourmet.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#495e57", width: "100%" }}>
      <div className="container d-flex justify-content-between position-relative">
        <div className="w-75 my-5">
          <h1 className="text-warning">Little Lemon</h1>
          <h2 className="text-light">Chicago</h2>
          <p className="text-light">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className="btn btn-warning"
            onClick={() => navigate("/reservations", { replace: true })}
          >
            Reserve a Table
          </button>
        </div>
        <div className="w-25 mt-3 rounded-3 end-0 top-0 position-absolute overflow-hidden">
          <img
            src={HeroImg}
            alt="HeroImg"
            height="300px"
            className="w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
