import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };
  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <h2>
                  <Link href="/">ডিসি পার্ক, চট্টগ্রাম</Link>{" "}
                  {/* Ignore unknown words */}
                </h2>
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    <FaHome />
                  </Link>
                </li>
                {/* Dropdown Menu for "আমাদের কথা" */}{" "}
                {/* Ignore unknown words */}
                <li
                  className={`${styles.navItem} ${styles.dropdown}`}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                  onClick={toggleDropdown}
                >
                  <span className={styles.navLink}>
                    আমাদের কথা <FaChevronDown className={styles.dropdownIcon} />{" "}
                    {/* Ignore unknown words */}
                  </span>
                  <ul
                    className={`${styles.dropdownMenu} ${
                      dropdown ? styles.showDropdown : ""
                    }`}
                  >
                    <li>
                      <Link href="/about">আমাদের সম্পর্কে</Link>{" "}
                      {/* Ignore unknown words */}
                    </li>
                    <li>
                      <Link href="/history">ইতিহাস</Link>{" "}
                      {/* Ignore unknown words */}
                    </li>
                    <li>
                      <Link href="/future-plans">ভবিষ্যৎ পরিকল্পনা</Link>{" "}
                      {/* Ignore unknown words */}
                    </li>
                    <li>
                      <Link href="/vip-visits">গণ্যমান্য ব্যক্তিদের আগমন</Link>{" "}
                      {/* Ignore unknown words */}
                    </li>
                    <li>
                      <Link href="/opening-hours">খোলা থাকার সময়</Link>{" "}
                      {/* Ignore unknown words */}
                    </li>
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/careers">
                    বিশেষ আকর্ষণ {/* Ignore unknown words */}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="#contact">
                    নিউজ ও ইভেন্টস {/* Ignore unknown words */}
                  </Link>
                </li>
                <li
                  className={`${styles.navItem} ${styles.dropdown}`}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                  onClick={toggleDropdown}
                >
                  <span className={styles.navLink}>
                    মিডিয়া <FaChevronDown className={styles.dropdownIcon} />
                  </span>
                  <ul
                    className={`${styles.dropdownMenu} ${
                      dropdown ? styles.showDropdown : ""
                    }`}
                  >
                    <li>
                      <Link href="/gallery">গ্যালারি</Link>
                    </li>
                    <li>
                      <Link href="/videos">ভিডিও</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="#contact">
                    যোগাযোগ
                  </Link>
                </li>
              </ul>
              <div className={styles.btns}>
                <div className={styles.contact}>
                  <Link className={styles.navLink} href="/e-services">
                    অনলাইনে টিকেট কিনুন
                  </Link>
                </div>
                <div className={styles.hamMenu} onClick={toggleClass}>
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
