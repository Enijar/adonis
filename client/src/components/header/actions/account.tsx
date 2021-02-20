import React from "react";
import { HeaderAction } from "../styles";
import vars from "../../../styles/vars";

export default function Account() {
  return (
    <HeaderAction>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g
          fill="none"
          stroke={vars.color.white}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        >
          <path d="m20 21v-2a4 4 0 0 0 -4-4h-8a4 4 0 0 0 -4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </g>
      </svg>
    </HeaderAction>
  );
}
