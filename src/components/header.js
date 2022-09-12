import React, { useState } from "react";
import Link from "next/link";
import _ from "lodash";
import { IoMenu, IoClose } from "react-icons/io5";
import useWindowDimensions, { smallWidth } from "../utils/useWindowDimensions";
import HeaderDropDown from "./headerDropDown";

const pages = ["about", "projects", "blog", "contact"];

export default function Header({ page }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <div
      className="relative flex justify-center w-screen h-14 px-8 text-white font-urbanist"
      style={{
        background:
          "linear-gradient(to right, #79B473, #70A37F, #41658A, #414073, #4C3957)",
      }}
    >
      <div className="flex w-full h-full justify-between items-center">
        <Link href="/">
          <div className="text-4xl font-bold cursor-pointer">noah networks</div>
        </Link>
        {width <= smallWidth ? (
          <div className="flex justify-center text-3xl">
            <button onClick={() => setDropDownOpen(!dropDownOpen)}>
              {dropDownOpen ? <IoClose /> : <IoMenu />}
            </button>
            {dropDownOpen && (
              <HeaderDropDown
                pages={pages}
                close={() => setDropDownOpen(false)}
              />
            )}
          </div>
        ) : (
          <div className="flex gap-8">
            {pages.map((item) => {
              return (
                <Link key={item} href={`/${item}`}>
                  <a
                    className={`${
                      item === page && "text-black"
                    } text-lg font-semibold`}
                  >
                    {_.capitalize(item)}
                  </a>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
