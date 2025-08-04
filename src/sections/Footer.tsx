import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black max-h-screen w-full flex justify-evenly max-xl:flex-col gap-5">
        <div className=" flex flex-col gap-10">
          <img src={footerLogo} alt="" className="w-[120px]" />
          <p className="text-white sm:max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit atque
            voluptatum odio eum cum nihil consectetur minus. Laudantium vitae,
          </p>
          <div className="flex gap-6">
            {socialMedia.map((soc) => (
              <div className="flex justify-center cursor-pointer items-center w-12 h-12 bg-white rounded-full">
                <img src={soc.src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6 justify-between">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-6">
              <h2 className="text-white font-bold"> {link.title}</h2>
              <div className="text-white flex flex-col gap-2">
                {link.links.map((lin) => (
                  <a href={lin.link}>{lin.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
      <div className="flex mt-15 justify-between flex-1 max-sm:items-center max-sm:flex-col">
        <div className="flex gap-2">
          {" "}
          <img src={copyrightSign} width={24} alt="" />{" "}
          <span className="text-white"> copyright. All rights reserved </span>{" "}
        </div>
        <p className="text-white">Terms & conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
