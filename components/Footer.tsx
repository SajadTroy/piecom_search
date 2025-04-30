"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section: Links */}
        <div className={styles.leftLinks}>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/business" className={styles.link}>
            Business
          </Link>
          <Link href="/advertising" className={styles.link}>
            Advertising
          </Link>
        </div>

        {/* Center Section: Colored Lines and Location */}
        <div className={styles.centerSection}>
          <div className={styles.coloredLines}>
            <span className={styles.lineRed}></span>
            <span className={styles.lineYellow}></span>
            <span className={styles.lineGreen}></span>
            <span className={styles.lineBlue}></span>
          </div>
          <div className={styles.location}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.locationIcon}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg> */}
            <span>India</span>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className={styles.rightLinks}>
          <Link href="/privacy" className={styles.link}>
            Privacy
          </Link>
          <Link href="/terms" className={styles.link}>
            Terms
          </Link>
          <Link href="/settings" className={styles.link}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.settingsIcon}
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg> */}
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}