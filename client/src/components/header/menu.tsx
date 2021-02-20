import { MenuWrapper, MenuContent, MenuToggle } from "./styles";
import vars from "../../styles/vars";

type Props = {
  children: JSX.Element | JSX.Element[];
  open: boolean
};

export default function Menu({ children, open }: Props) {
  return (
    <MenuWrapper open={open}>
      <MenuContent>{children}</MenuContent>
    </MenuWrapper>
  );
}

type ToggleProps = {
  onClick: () => void;
};

Menu.Toggle = function ({ onClick }: ToggleProps) {
  return (
    <MenuToggle onClick={onClick}>
      <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <g fill={vars.color.white}>
          <path d="m3 7c0-.55229.44772-1 1-1h20c.5523 0 1 .44771 1 1s-.4477 1-1 1h-20c-.55228 0-1-.44771-1-1z" />
          <path d="m3 14c0-.5523.44772-1 1-1h20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-20c-.55228 0-1-.4477-1-1z" />
          <path d="m4 20c-.55228 0-1 .4477-1 1s.44772 1 1 1h20c.5523 0 1-.4477 1-1s-.4477-1-1-1z" />
        </g>
      </svg>
    </MenuToggle>
  );
};
