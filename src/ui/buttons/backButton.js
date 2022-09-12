import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ router, backTo }) {
  return (
    <div
      className="flex self-start items-center gap-2 text-white text-xl cursor-pointer"
      onClick={() => router.push(`/${backTo}`)}
    >
      <FaArrowLeft />
      <div>{`Back to ${backTo}`}</div>
    </div>
  );
}
