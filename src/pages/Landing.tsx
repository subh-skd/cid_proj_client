import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-between p-5">
      <div className="flex flex-col gap-3 text-black-primary">
        <h1 className="text-5xl font-bold leading-tight">
          Motor <span className="text-primary">Condition</span>
          <br />
          Monitoring
        </h1>
        <div className="flex flex-col gap-1 font-medium text-xl">
          <p>Project under:</p>
          <p>GAIL (India) Limited</p>
        </div>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          className="w-fit bg-primary hover:bg-secondary text-white p-5 text-lg cursor-pointer"
        >
          Login/Register
        </Button>
      </div>
      <img
        loading="eager"
        decoding="async"
        fetchPriority="high"
        alt="landing page image"
        src="/landing_page_img.png"
      />
    </div>
  );
};

export default Landing;
