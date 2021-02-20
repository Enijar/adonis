import styled, { css } from "styled-components";
import { fluidRange } from "polished";
import vars from "../../styles/vars";

const MOBILE_MENU_VISIBLE = 1100;
const ICON_WIDTH = 1.2;

export const HeaderLogo = styled.div`
  width: 100%;
  max-width: ${200 / vars.rootSize}em;
  margin-right: ${30 / vars.rootSize}em;
`;

export const HeaderActionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  user-select: none;
  flex: 1 0;
`;

export const HeaderLinks = styled.div`
  margin-right: auto;

  @media (max-width: ${MOBILE_MENU_VISIBLE}px) {
    display: none;
  }

  a {
    margin-right: 1.2em;
    text-transform: uppercase;
    font-weight: lighter;
    transition: color ${vars.transitionTime}ms ease;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: ${vars.color.primary};
    }
  }
`;

export const HeaderAction = styled.div`
  margin-right: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: ${ICON_WIDTH}em;
  margin-left: auto;
  position: relative;

  svg {
    width: ${ICON_WIDTH}em;
  }

  &:last-child {
    margin-right: 0;
  }

  svg {
    path {
      transition: fill ${vars.transitionTime}ms ease;
    }

    g {
      transition: stroke ${vars.transitionTime}ms ease;
    }
  }

  span {
    transition: color ${vars.transitionTime}ms ease;
  }

  &:hover {
    color: ${vars.color.primary};

    path {
      fill: ${vars.color.primary};
    }

    g {
      stroke: ${vars.color.primary};

      path {
        fill: none;
      }
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

type SearchInputWrapperProps = {
  expanded: boolean;
};
export const SearchInputWrapper = styled.div<SearchInputWrapperProps>`
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  top: 50%;
  right: 0;
  transform: translate(0px, -50%);
  transition: width ${vars.transitionTime}ms ease-out;
  width: 0;
  background-color: ${vars.color.black};

  svg {
    width: ${ICON_WIDTH}em !important;

    path {
      fill: ${vars.color.primary};
    }
  }

  ${({ expanded }) => {
    if (expanded) {
      return css`
        width: 810px;
      `;
    }
  }}

  input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${vars.color.primary};
    outline: none;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: transparent;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  max-width: ${vars.responsiveMax}px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const MenuActions = styled.div`
  margin-top: 1.35em;
  flex: 1 0;
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  align-items: center;
  width: ${ICON_WIDTH * 1.5}em;
  margin-left: auto;

  svg {
    g {
      transition: fill ${vars.transitionTime}ms ease;
    }

    path {
      transition: opacity ${vars.transitionTime}ms ease,
        transform ${vars.transitionTime}ms ease;
    }

    &:hover {
      g {
        fill: ${vars.color.primary};
      }
    }
  }

  @media (max-width: ${MOBILE_MENU_VISIBLE}px) {
    display: flex;
  }
`;

export const HeaderWrapper = styled.div`
  background-color: ${vars.color.black};
  font-size: ${25 / vars.rootSize}em;
  color: ${vars.color.white};
  padding: 1em 1.2em;

  svg {
    width: 100%;
  }
`;

type MenuWrapperProps = {
  open: boolean;
};
export const MenuWrapper = styled.div<MenuWrapperProps>`
  ${({ open }) => {
    if (open) {
      return css`
        // transform burger menu into an x shape
        ${MenuToggle} {
          svg path {
            opacity: 0;

            &:first-child,
            &:last-child {
              opacity: 1;
            }

            &:first-child {
              transform: translate(10px, -1px) rotate(45deg);
            }

            &:last-child {
              transform: translate(-10px, 9px) rotate(-45deg);
            }
          }
        }
      `;
    }
  }};

  @media (max-width: ${MOBILE_MENU_VISIBLE}px) {
    ${HeaderAction}, ${MenuToggle} {
      font-size: ${30 / vars.rootSize}em;
    }

    ${HeaderActionGroup} {
      display: none;
    }
  }

  ${HeaderActionGroup} {
    ${({ open }) => {
      if (open) {
        return css`
          //
        `;
      }
    }}
  }
`;
