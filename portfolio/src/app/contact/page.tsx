import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1>Cntact me!</h1>
      <section>
        {/*single social link */}
        <div>
          <a
            href="https://x.com/"
            target="_blank"
            className="flex items-center gap-2 border-gray-300 p-2 rounded-md w-max hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <FaXTwitter />
            <span>Twitter</span>
          </a>
        </div>
        {/*End of social link */}
      </section>

      <section>
        {/*single social link */}
        <div>
          <a
            href="https://github.com/Ighere2022"
            target="_blank"
            className="flex items-center gap-2 border-gray-300 p-2 rounded-md w-max hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        {/*End of social link */}
      </section>
    </div>
  );
};

export default Contact;
