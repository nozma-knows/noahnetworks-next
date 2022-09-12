import Header from "../src/components/header";
import useWindowDimensions from "../src/utils/useWindowDimensions";

const message =
  "Hi, my name is Noah. I’m a passionate learner, creator and friend. My goal is to make the world happier. I choose to do it through innovation.";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-b from-[#000000] to-[#18251C] font-urbanist">
      <Header page="home" />
      <div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex justify-center items-center w-[400px] h-[400px] rounded-full flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front rounded-full"
              style={{
                backgroundImage: `url(/home-background-lg.jpeg)`,
                backgroundPosition: "0% 70%",
                backgroundSize: "cover",
              }}
            />
            <div
              className="flip-card-back rounded-full"
              style={{
                backgroundImage: `url(/home-background-sm.jpeg)`,
                backgroundPosition: "0% 70%",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
        <div
          className="w-[400px] text-white text-center text-lg lg:text-2xl p-8 rounded-xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
