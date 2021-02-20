import React from "react";
import { PageWrapper, PageInner } from "./styles";

type Props = {
  children: string | number | JSX.Element | JSX.Element[];
};

export default function Page({ children }: Props) {
  return (
    <PageWrapper>
      <PageInner>{children}</PageInner>
    </PageWrapper>
  );
}
