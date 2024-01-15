import welcome from "../assets/image.jpeg";
const Homepage = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <img src={welcome} alt="welcome" />
    </div>
  );
};

export default Homepage;
