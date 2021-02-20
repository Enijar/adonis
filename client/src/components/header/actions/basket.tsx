import React from "react";
import { HeaderAction } from "../styles";
import vars from "../../../styles/vars";
import { useBasket } from "../../../state/basket";

export default function Basket() {
  const { items } = useBasket();

  return (
    <HeaderAction style={{ width: "2em" }}>
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{width: "1.2em"}}>
        <path
          clipRule="evenodd"
          d="m43 46h-38c-2.209 0-4-1.791-4-4l4-24c.678-3.442 2.668-4 4.877-4h2.652c1.508-6.948 6.073-12 11.471-12s9.963 5.052 11.471 12h2.652c2.209 0 4.199.558 4.877 4l4 24c0 2.209-1.791 4-4 4zm-19-42c-4.352 0-8.045 4.178-9.418 10h18.837c-1.374-5.822-5.066-10-9.419-10zm17 14c-.308-1.351-.957-2-2.37-2h-2.828c.123.976.198 1.975.198 3 0 .552-.447 1-1 1s-1-.448-1-1c0-1.027-.069-2.031-.201-3h-19.598c-.131.969-.201 1.973-.201 3 0 .552-.447 1-1 1s-1-.448-1-1c0-1.025.075-2.024.197-3h-2.828c-1.412 0-2.06.649-2.369 2l-4 24c0 1.104.896 2 2 2h38c1.104 0 2-.896 2-2z"
          fill={vars.color.white}
          fillRule="evenodd"
        />
      </svg>
      <span style={{ marginLeft: "0.25em" }}>{items.length}</span>
    </HeaderAction>
  );
}
