import React from "react";
import { HomeWrapper } from "./styles";
import Page from "../../components/page/page";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <HomeWrapper>
      <Page>
        <Header />
        <h1>Home</h1>
        <Footer />
      </Page>
    </HomeWrapper>
  );
}
