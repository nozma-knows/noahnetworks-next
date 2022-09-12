import React, { useEffect } from "react";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import _ from "lodash";
import useWindowDimensions from "../utils/useWindowDimensions";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    right: 0,
    top: 50,
    borderRadius: 15,
  },
});
export default function HeaderDropDown({ pages, close }) {
  const { width } = useWindowDimensions; // Window size
  const classes = useStyles(); // Styles for dropdown menu

  // Close dropdown if screen transitions to large mode
  useEffect(() => {
    if (width > 1024) {
      close();
    }
  }, [close, width]);

  return (
    <Dialog
      classes={{
        paper: classes.dialog,
      }}
      open
      onClose={() => close()}
      sx={{
        "& .MuiDialog-container": {
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
      }}
    >
      <div
        className="flex flex-col px-8 py-4 gap-2"
        style={{
          background:
            "linear-gradient(to bottom, #79B473, #70A37F, #41658A, #414073, #4C3957)",
        }}
      >
        {pages.map((page, i) => (
          <Link key={i} href={`/${page}`}>
            <div
              className="p-2 rounded-lg font-fredoka text-white hover:text-black hover:underline font- text-xl font-semibold hover:text-[#523249] hover:cursor-pointer hover:underline"
              onClick={() => close()}
            >
              {_.capitalize(page)}
            </div>
          </Link>
        ))}
      </div>
    </Dialog>
  );
}
