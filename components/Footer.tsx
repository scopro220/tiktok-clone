import React from "react";

import { footerList1, footerList2, footerList3 } from "../utils/constants";
import List from "./List";

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <p className="text-gray-400 text-sm mt-5">2022 TikTik &copy;</p>
    </div>
  );
};

export default Footer;
