/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import * as styles from "./about.content.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}> About this App</h1>
          <h3 css={styles.aboutPageSubHeader}>Summary</h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>
              Aplikasi ini adalah sebuah mini project atau study kasus yang
              dibuat dalam menerapkan pengenalan framework React JS yang
              membahas tentang beberapa method dalam React, ex: component,
              props, function, emotion CSS, styling in React, CSS in JS, React
              Router, dll...
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.goHome}>kembali ke halaman utama</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
