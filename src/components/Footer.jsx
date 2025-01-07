import React from "react";

const SOCIAL_LINKS = [
  {
    label: "Behance",
    link: "https://www.behance.net/arpitkumaryadav",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/arpit-yadav-a6a8b8171/",
  },
];

const Footer = () => {
  return (
    <div className=" mt-12 pt-20 pb-24 mx-12 flex justify-between flex-col gap-10 md:flex-row">
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
