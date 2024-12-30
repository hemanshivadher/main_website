import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12" id="footer">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-8">Lets Connect!</h2>

        {/* Subscription Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
          method="POST"
          action="https://formsubmit.co/hemanshivadher123@gmail.com"
        >
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-start"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              required
              className="border-b border-black outline-none focus:ring-0 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-start"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{10}"
              name="Phone"
              required
              className="border-b border-black outline-none focus:ring-0 py-2"
            />
          </div>

          <div className="col-span-full text-start">
            <label htmlFor="email" className="text-sm font-medium text-start">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              className="w-full border-b border-black outline-none focus:ring-0 py-2"
            />
          </div>
          <div className="col-span-full text-start">
            <label htmlFor="email" className="text-sm font-medium text-start">
              Message *
            </label>
            <input
              type="textarea"
              id="message"
              name="Message"
              required
              className="w-full border-b border-black outline-none focus:ring-0 py-2"
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            value="New submission! at Maitri Associates"
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thankyou"
          />
          <input type="hidden" name="_template" value="table" />
          <div className="col-span-full text-right">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Social Media Links */}
        {/* <div className="flex justify-center mt-12 gap-4">
          <a
            href="#"
            className="p-2 bg-black text-white rounded-full hover:bg-gray-700"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-black text-white rounded-full hover:bg-gray-700"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 bg-black text-white rounded-full hover:bg-gray-700"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div> */}

        {/* Footer Bottom */}
        <p className="text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Maitri Associates. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
