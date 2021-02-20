import React from "react";
import { HeaderAction, SearchInputWrapper } from "../styles";
import vars from "../../../styles/vars";

export default function Search() {
  const input = React.useRef<HTMLInputElement | null>(null);
  const [expanded, setExpanded] = React.useState(false);
  const [q, setQ] = React.useState("");

  React.useEffect(() => {
    if (!input.current) return;
    if (!expanded) {
      input.current.blur();
      return;
    }
    function onBlur() {
      setExpanded(false);
    }
    input.current.focus();
    input.current.select();
    input.current.addEventListener("blur", onBlur);
    return () => {
      if (input.current) {
        input.current.removeEventListener("blur", onBlur);
      }
    };
  }, [expanded]);

  return (
    <HeaderAction>
      <SearchInputWrapper expanded={expanded}>
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          <path
            d="m344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3-84.1 0-152.2 68.2-152.2 152.3s68.1 152.3 152.1 152.3c30.5 0 58.9-9 82.7-24.4l6.9-4.8 108.6 108.6 33.7-34.3-108.5-108.6zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85-52.9 35.2-85 35.2-62.3-12.5-85-35.2-35.2-52.9-35.2-85 12.5-62.3 35.2-85 52.9-35.2 85-35.2 62.3 12.5 85 35.2z"
            fill={vars.color.white}
          />
        </svg>
        <input
          ref={input}
          name="q"
          value={q}
          onChange={(event) => setQ(event.target.value)}
        />
      </SearchInputWrapper>
      {!expanded && (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          <path
            d="m344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3-84.1 0-152.2 68.2-152.2 152.3s68.1 152.3 152.1 152.3c30.5 0 58.9-9 82.7-24.4l6.9-4.8 108.6 108.6 33.7-34.3-108.5-108.6zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85-52.9 35.2-85 35.2-62.3-12.5-85-35.2-35.2-52.9-35.2-85 12.5-62.3 35.2-85 52.9-35.2 85-35.2 62.3 12.5 85 35.2z"
            fill={vars.color.white}
          />
        </svg>
      )}
    </HeaderAction>
  );
}
