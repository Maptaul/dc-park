import Footer from "@/layout/footer";
import styles from "./services.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";

export default function Home() {
  return (
    <>
      <Head>
        <title>e-Services | অনলাইনে টিকেট ক্রয়</title>
      </Head>
      <Header />
      <main className={styles.page}>
        {/* Banner Section */}
        <section className={styles.banner}>
          <Container>
            <div className={styles.content}>
              <h1>অনলাইনে টিকেট ক্রয় করুন</h1>
              <p>
                ডিসি পার্ক, চট্টগ্রাম এখন আরও সহজ ও দ্রুত সেবার জন্য অনলাইন
                টিকেটিং ব্যবস্থা চালু করেছে। দর্শনার্থীরা ঘরে বসেই টিকেট কিনতে
                পারবেন, যা সময় সাশ্রয় করবে এবং প্রবেশ সহজতর করবে। এছাড়াও, আমরা
                বিভিন্ন আকর্ষণীয় প্যাকেজ সংযুক্ত করছি, যাতে দর্শনার্থীরা তাদের
                পছন্দ অনুযায়ী সুবিধা নিতে পারেন।
              </p>
            </div>
          </Container>
        </section>

        {/* Ticket Purchase Section */}
        <section className={styles.ticketSection}>
          <Container>
            <div className={styles.ticketContainer}>
              {/* Left Side - Ticket Information */}
              <div className={styles.ticketInfo}>
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
              </div>

              {/* Right Side - Ticket Purchase Form */}
              <div className={styles.ticketFormContainer}>
                <h2 className="text-center">টিকেট ক্রয় করুন</h2>
                <form>
                  <label>তারিখ</label>
                  <input type="date" required />

                  <label>টিকেটের ধরণ</label>
                  <select required>
                    <option value="general">সাধারণ টিকেট</option>
                    <option value="vip">ভিআইপি টিকেট</option>
                  </select>

                  <label>আপনার নাম</label>
                  <input type="text" placeholder="আপনার নাম লিখুন" required />

                  <label>মোবাইল নাম্বার</label>
                  <input
                    type="tel"
                    placeholder="মোবাইল নাম্বার লিখুন"
                    required
                  />
                  <label>টিকেটের মূল্য </label>
                  <input type="text" value="50" disabled />

                  <label>টিকেট সংখ্যা</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="টিকেট সংখ্যা লিখুন"
                    required
                  />

                  <label>মোট টাকার পরিমাণ</label>
                  <input type="text" value="50" disabled />

                  <button type="submit" className={styles.purchaseBtn}>
                    ক্রয় করুন
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
