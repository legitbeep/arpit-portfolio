import React from "react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    link: "",
  },
  {
    label: "Twitter",
    link: "",
  },
  {
    label: "LinkedIn",
    link: "",
  },
];

const Footer = () => {
  return (
    <div className="border-t-2 border-white mt-12 pt-20 pb-12 mx-12 flex justify-between flex-col md:flex-row">
      <h4>Copyright © {new Date().getFullYear()} Arpit Yadav</h4>
      <div className="flex gap-10 flex-col md:flex-row">
        {SOCIAL_LINKS.map((link) => (
          <a href={link.link} key={link.link} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
