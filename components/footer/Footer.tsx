import React from "react";
import { Container, Link } from "@mui/material";
import styles from "./styles.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footerContent}>
        <p>© 2024 Your Website Name</p>
        <nav>
          <Link href="#" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="#" className={styles.footerLink}>
            Terms of Service
          </Link>
        </nav>
      </div>
    </Container>
  </footer>
);

export default Footer;
