import Chatbot from "@/modules/chatBot";
import styles from "./footer.module.scss";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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
              <p>
                📞{" "}
                <a href="tel:+8801745963840" className="hover:text-gray-300">
                  +880 1745-963840
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:info@dcparkctg.com"
                  className="hover:text-gray-300"
                >
                  info@dcparkctg.com
                </a>
              </p>
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
                  <li key={index}>{item}</li>
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
                  <li key={index}> {item}</li>
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
                <h2 className={styles.visitorCount}>532629</h2>
                <p>মোট দর্শনার্থী</p>
              </div>
            </div>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className={styles.copyright}>
            <p>© DC PARK All Rights Reserved.</p>
            <p>Jionex IT </p>
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
