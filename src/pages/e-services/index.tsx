import Footer from "@/layout/footer";
import styles from "./services.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
// import NextImage from "@/hooks/NextImage";

export default function Home() {
  return (
    <>
      <Head>
        <title>e-Services | অনলাইনে টিকেট ক্রয়</title>
      </Head>
      <Header />
      <main className={styles.page}>
        {/* Banner Section */}
        <section className={styles.banner}></section>
        {/* Package Pricing Section */}
        <Container>
          <div className={styles.pageContent}>
            <section className={styles.pricingSection}>
              <Container>
                <h2 className="text-center">প্যাকেজসমূহ</h2>
                <div className={styles.pricingContainer}>
                  <div className={styles.pricingCard}>
                    <div className={styles.badge}>BASIC</div>
                    <div className={styles.priceCircle}>৳199</div>
                    <ul>
                      <li>সাধারণ প্রবেশাধিকার</li>
                      <li>বিনোদন জোন অ্যাক্সেস</li>
                      <li>ফুড কুপন অন্তর্ভুক্ত নেই</li>
                    </ul>
                    <button className={styles.buyBtn}>ক্রয় করুন</button>
                  </div>

                  <div className={styles.pricingCard}>
                    <div className={styles.badge}>STANDARD</div>
                    <div className={styles.priceCircle}>৳499</div>
                    <ul>
                      <li>সাধারণ ও ভিআইপি প্রবেশাধিকার</li>
                      <li>বিনোদন ও রাইড অ্যাক্সেস</li>
                      <li>ফুড কুপন (৳100)</li>
                    </ul>
                    <button className={styles.buyBtn}>ক্রয় করুন</button>
                  </div>

                  <div className={styles.pricingCard}>
                    <div className={styles.badge}>PREMIUM</div>
                    <div className={styles.priceCircle}>৳899</div>
                    <ul>
                      <li>সকল প্রবেশাধিকার</li>
                      <li>রাইড, বিনোদন, সুইমিং পুল</li>
                      <li>ফুড কুপন (৳200)</li>
                    </ul>
                    <button className={styles.buyBtn}>ক্রয় করুন</button>
                  </div>
                </div>
              </Container>
            </section>
            {/* Ticket Purchase Section */}
            <section className={styles.ticketSection}>
              <Container>
                <div className={styles.ticketContainer}>
                  {/* Left Side - Ticket Information */}
                  {/* <div className={styles.ticketInfo}>
                <NextImage
                  className={styles.image}
                  src="images/logo.png"
                  alt="Ticket Purchase"
                  width={200}
                  height={200}
                />
                <h2>ডিসি পার্ক টিকেট সংক্রান্ত তথ্য</h2>
                <p>
                  ডিসি পার্কে এখন সহজ ও সুবিধাজনক অনলাইন টিকেট সেবা চালু হয়েছে।
                  ঘরে বসেই অনলাইনে টিকেট কিনে নির্ধারিত তারিখে সরাসরি প্রবেশ
                  করুন।
                </p>
                <p>
                  <strong>যোগাযোগ:</strong> 01777615690
                </p>
              </div> */}

                  {/* Right Side - Ticket Purchase Form */}
                  <div className={styles.ticketFormContainer}>
                    <h2 className="text-center">টিকেট ক্রয় করুন</h2>
                    <form>
                      <label>তারিখ</label>
                      <input type="date" required title="তারিখ নির্বাচন করুন" />

                      <label htmlFor="ticketType">টিকেটের ধরণ</label>
                      <select id="ticketType" required>
                        <option value="general">সাধারণ টিকেট</option>
                        <option value="vip">ভিআইপি টিকেট</option>
                      </select>

                      <label>আপনার নাম</label>
                      <input
                        type="text"
                        placeholder="আপনার নাম লিখুন"
                        required
                      />

                      <label>মোবাইল নাম্বার</label>
                      <input
                        type="tel"
                        placeholder="মোবাইল নাম্বার লিখুন"
                        required
                      />
                      <label>টিকেটের মূল্য </label>
                      <input
                        type="text"
                        value="50"
                        disabled
                        title="টিকেটের মূল্য"
                      />

                      <label>টিকেট সংখ্যা</label>
                      <input
                        type="number"
                        min="1"
                        placeholder="টিকেট সংখ্যা লিখুন"
                        required
                      />

                      <label>মোট টাকার পরিমাণ</label>
                      <input
                        type="text"
                        value="50"
                        disabled
                        title="মোট টাকার পরিমাণ"
                      />

                      <button type="submit" className={styles.purchaseBtn}>
                        ক্রয় করুন
                      </button>
                    </form>
                  </div>
                </div>
              </Container>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
