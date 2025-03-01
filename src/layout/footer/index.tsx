import Chatbot from "@/modules/chatBot";
import styles from "./footer.module.scss";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="contact">
        <Container>
          <div className={styles.container}>
            {/* Address Section */}
            <div>
              <h3>ঠিকানা</h3>
              <p>
                বন্দর সংযোগ রোড, ফৌজদারহাট, <br></br> সীতাকুণ্ড, চট্টগ্রাম।
              </p>
              <div className={styles.footermap}>
                {/* Google Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50109.518351194776!2d91.7152037!3d22.3896875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdb5136d14581%3A0x9434603bf88fd42f!2sDC%20Park%20Chittagong!5e1!3m2!1sen!2sbd!4v1740391554300!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  className={styles.iframe}
                  allowFullScreen
                  title="DC Park Chittagong Map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3>কুইক লিঙ্ক</h3>
              <ul>
                {[
                  "আমাদের সম্পর্কে",
                  "ইতিহাস",
                  "ভবিষ্যৎ পরিকল্পনা",
                  "গণ্যমান্য ব্যক্তিদের আগমন",
                  "মিডিয়া",
                ].map((item, index) => (
                  <li key={index}> ➡️ {item}</li>
                ))}
              </ul>
            </div>

            {/* Popular Links */}
            <div>
              <h3>জনপ্রিয় লিঙ্ক</h3>
              <ul>
                {[
                  "খোলা থাকার সময়",
                  "যোগাযোগ করুন",
                  "টিকেট কিনুন",
                  "বিধি এবং শর্তাবলী",
                ].map((item, index) => (
                  <li key={index}> ➡️ {item}</li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className={styles.socialMedia}>
              <h3>ফলো করুন</h3>
              <div className={styles.socialIcons}>
                {[
                  { icon: <FaTwitter />, link: "#" },
                  { icon: <FaFacebookF />, link: "#" },
                  { icon: <FaYoutube />, link: "#" },
                  { icon: <FaLinkedin />, link: "#" },
                ].map((item, index) => (
                  <a key={index} href={item.link}>
                    {item.icon}
                  </a>
                ))}
              </div>
              <div className={styles.visitor}>
                <h2 className={styles.visitorCount}>545948</h2>
                <p>মোট দর্শনার্থী</p>
              </div>
            </div>
          </div>

          {/* Divider before footer bottom */}
          <hr className={styles.divider} />

          {/* Copyright & Scroll to Top */}
          <div className={styles.footerBottom}>
            <p>© DC PARK All Rights Reserved.</p>
            <p className={styles.designedBy}>
              {" "}
              <a href="https://www.jionex.com/">
                <Image
                  src="/images/jionex_logo.png"
                  alt="logo"
                  width={100}
                  height={70}
                />
              </a>
            </p>
            <a
              href="#top"
              className={styles.scrollToTop}
              aria-label="Scroll to Top"
            >
              ↑
            </a>
          </div>
        </Container>
      </footer>
      <Chatbot />
    </>
  );
}
