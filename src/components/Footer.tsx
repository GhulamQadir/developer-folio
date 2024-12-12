import { FaHeart } from "react-icons/fa";

function Footer({ textColor }: { textColor: string }) {
  return (
    <div className="mt-3 px-1 py-3">
      <p
        className={`${textColor} text-xl font-roboto flex justify-center items-center gap-x-2`}
      >
        Made with <FaHeart color="red" size={20} /> by Ghulam Qadir
      </p>
    </div>
  );
}
export default Footer;
