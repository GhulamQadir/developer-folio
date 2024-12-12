import Link from "next/link";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoLogoGithub, IoMail } from "react-icons/io5";

function Contact({ headingTwoColor }: { headingTwoColor: string }) {
  return (
    <div id="contact" className="text-center py-8">
      <p className={`text-4xl font-bold ${headingTwoColor}`}>Get in Touch</p>
      <ul className="flex mt-5 justify-center px-1 gap-x-4 text-white items-center">
        <li className="bg-[#0077B5] px-2 py-2 rounded-full">
          <Link
            href={"www.linkedin.com/in/ghulam-qadir-a076b8212"}
            target="_blank"
          >
            <FaLinkedinIn size={20} />
          </Link>
        </li>
        <li className="bg-[#000] px-2 py-2 rounded-full">
          <Link href={"https://github.com/GhulamQadir"} target="_blank">
            <IoLogoGithub size={25} />
          </Link>
        </li>
        <li className="bg-[#ea4335] px-2 py-2 rounded-full">
          <Link href={"mailto:ghulamqadirsakaria25@gmail.com"} target="_blank">
            <IoMail size={20} />
          </Link>
        </li>
        <li className="bg-[#3b5998] px-2 py-2 rounded-full">
          <Link
            href={"https://www.facebook.com/ghulamqadirsakaria"}
            target="_blank"
          >
            <FaFacebookF size={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Contact;
