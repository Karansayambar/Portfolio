import { useState } from "react";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message send successfully to ${formData.email}` );
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="lg:flex lg:px-40 xl:px-20 md:px-20 p-5 bg-[#1A1A29] pt-20 items-start justify-between">
      <div>
        <p className="text-[32px] font-semibold text-[#7562E0]">
          Connect with me:
        </p>
        <p>Satisfied with me? Please contact me</p>
        <span className="flex gap-4 text-3xl p-2 text-[#7562E0]">
          <a href="linkedin.com/in/karan-sayambar-1125581ab">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Karansayambar">
            <FaGithub />
          </a>
          <FaDribbble />
          <MdOutlineMailOutline />
        </span>
      </div>
      <div>
        <p className="text-[20px] md:p-4">
          Contact me, let’s make magic together
        </p>
        <form className=" bg-transparent" onSubmit={handleSubmit}>
          <div className="bg-[#848191] mb-5 rounded">
            <input
              type="text"
              placeholder="Name:"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="text-white border-none bg-transparent p-2 w-[90%] outline-none"
            />
          </div>
          <div className="bg-[#848191] mb-5 rounded">
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email:"
              onChange={handleInputChange}
              className="border-none bg-transparent p-2 w-[90%] outline-none"
            />
          </div>
          <div className="bg-[#848191] rounded mb-5">
            <textarea
              type="text"
              name="message"
              value={formData.message}
              placeholder="Message:"
              onChange={handleInputChange}
              className="border-none bg-transparent p-2 w-[90%] outline-none"
            />
          </div>
          <button type="submit" className="py-2 px-4 bg-[#7562E0] rounded-lg flex items-center justify-between gap-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
