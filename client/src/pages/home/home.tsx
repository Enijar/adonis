import React from "react";
import { HomeWrapper } from "./styles";
import { Container } from "../../styles/elements";
import Page from "../../components/page/page";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <HomeWrapper>
      <Page>
        <Header />
        <Container>
          <h1>Home</h1>
        </Container>
        <Footer />
      </Page>
    </HomeWrapper>
  );
}
