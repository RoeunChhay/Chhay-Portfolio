import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">
      <div>
        <img
          src="/images/shape.svg"
          alt="logo"
          className="w-8 h-8 size-8 object-cover object-center"
        />
      </div>
      <div className="flex items-center md:gap-16 gap-8">
        {footerIconsList.map((icon, index) => (
          <div
            key={index}
            className="cursor-pointer hover:-translate-y-5 transition-all duration-700"
          >
            <a href={icon.href}><img
              src={icon.icon}
              alt={icon.name}
              className="md:size-10 size-8" 
            /></a>
          </div>
        ))}
      </div>
      <p className="font-regular md:text-lg text-sm">
        2025 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;