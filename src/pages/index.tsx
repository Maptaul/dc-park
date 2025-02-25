import { ongoingProjects } from "@/constants/ongoingProjects";
import NextImage from "@/hooks/NextImage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Notice from "@/modules/notice";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Lottie from "react-lottie";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { images } from "@/constants/images";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return (
    <>
      <Head>
        <title>DC PARK, Chattogram </title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <video
              className={styles.video}
              width="640"
              height="360"
              autoPlay
              loop
              muted
            >
              <source src="/images/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Container>
        </section>
        <Notice />
        <section className={styles.welcome}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.content}>
                <h2>ডিসি পার্কের সংক্ষিপ্ত ইতিহাস</h2>
                <p>
                  চট্টগ্রাম জেলাস্থ সীতাকুণ্ড উপজেলাধীন সলিমপুর মৌজার ১৯৪.১৩ একর
                  সরকারি খাস সম্পত্তিতে কিছু দুষ্কৃতকারী অবৈধভাবে দখল করে মাদক ও
                  নানাবিধ অবৈধ কর্মকাণ্ড পরিচালনা করত। পরবর্তীতে জনাব আবুল বাসার
                  মোহাম্মদ ফখরুজ্জামান চট্টগ্রাম জেলার জেলা প্রশাসক হিসেবে
                  দায়িত্ব গ্রহণের মাত্র ১ (এক) মাসের মধ্যে এই বিস্তীর্ণ ভূমি হতে
                  অবৈধ দখলদারদের উচ্ছেদের ব্যবস্থা গ্রহণ করেন। জেলা প্রশাসন,
                  চট্টগ্রাম জলারণ্য শোভিত এই স্থানটি সর্বসাধারণের ব্যবহার উপযোগী
                  করতে বিভিন্ন ধরণের স্বল্প ও দীর্ঘ মেয়াদী পরিকল্পনা গ্রহণ
                  করেন।
                  <br />
                  <br />এ পরিকল্পনার অংশ হিসেবে সাধারণ জনগণ যেন নিরাপদ পরিবেশে
                  প্রাকৃতিক সৌন্দর্য উপভোগ, শরীরচর্চা ও অবসর সময় কাটাতে পারেন
                  সেই প্রচেষ্টা গ্রহণ করা হয়। এখানে বাংলাদেশে প্রথমবারের মতো
                  <strong> ফুল উৎসব-২০২৩ </strong> আয়োজন করা হয়; যা ব্যাপকভাবে
                  জনসাধারণের প্রশংসা কুড়িয়েছে। এরই ধারাাহিকতায় ডিসি পার্কে
                  দ্বিতীয়বারের মত বৃহৎ পরিসরে <strong> ফুল উৎসব-২০২৪ </strong>{" "}
                  এর আয়োজন করা হয়।
                  <br />
                  <br />
                  চট্টগ্রাম জেলার বর্তমান জেলা প্রশাসক জনাব ফরিদা খানম ডিসি
                  পার্কের সার্বিক উন্নয়নে ইতোমধ্যে বিভিন্ন উদ্যোগ গ্রহণ করেছেন।
                  ভবিষ্যতে এখানে সাইক্লিং ট্র্যাক, ওয়াকওয়ে, ডেস্টিনেশন ওয়েডিং,
                  ফেরীস হুইল, সমুদ্র পর্যন্ত উডেন ওয়াকওয়ে, কনভেনশন সেন্টার,
                  রেস্টুরেন্ট, বন্যপ্রাণী সংরক্ষণ কেন্দ্র গড়ে তোলার পরিকল্পনা
                  রয়েছে।
                </p>
              </div>
              <div className={styles.image}>
                <AwesomeSlider>
                  <div data-src="/images/bannerdc.jpg" />
                  <div data-src="/images/image2.jpg" />
                  <div data-src="/images/image3.jpg" />
                  <div data-src="/images/image4.jpg" />
                </AwesomeSlider>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.vission} id="vision">
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>আমাদের ভিশন</h2>
              <p>
                ডিসি পার্ক চট্টগ্রামকে একটি বিশ্বস্বীকৃত স্মার্ট ও টেকসই পার্কে
                রূপান্তরিত করা, যা আধুনিক প্রযুক্তির ব্যবহার, <br></br>{" "}
                পরিবেশবান্ধব উদ্যোগ এবং সকলের জন্য অন্তর্ভুক্তিমূলক উন্নয়ন
                নিশ্চিত করবে।
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.mayor}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট পক্ষ থেকে বার্তা</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/dc.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <h3>
                  <span>ফরিদা খানম</span>
                  জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট <br /> চট্টগ্রাম জেলা
                </h3>
                <p>
                  চট্টগ্রাম জেলাস্থ সীতাকুণ্ড উপজেলাধীন সলিমপুর মৌজার ১৯৪.১৩ একর
                  সরকারি খাস সম্পত্তিতে কিছু দুষ্কৃতকারী অবৈধভাবে দখল করে মাদক ও
                  নানাবিধ অবৈধ কর্মকাণ্ড পরিচালনা করত। পরবর্তীতে জনাব আবুল বাসার
                  মোহাম্মদ ফখরুজ্জামান চট্টগ্রাম জেলার জেলা প্রশাসক হিসেবে
                  দায়িত্ব গ্রহণের মাত্র ১ (এক) মাসের মধ্যে এই বিস্তীর্ণ ভূমি হতে
                  অবৈধ দখলদারদের উচ্ছেদের ব্যবস্থা গ্রহণ করেন। জেলা প্রশাসন,
                  চট্টগ্রাম জলারণ্য শোভিত এই স্থানটি সর্বসাধারণের ব্যবহার উপযোগী
                  করতে বিভিন্ন ধরণের স্বল্প ও দীর্ঘ মেয়াদী পরিকল্পনা গ্রহণ
                  করেন। এ পরিকল্পনার অংশ হিসেবে সাধারণ জনগণ যেন নিরাপদ পরিবেশে
                  প্রাকৃতিক সৌন্দর্য উপভোগ, শরীরচর্চা ও অবসর সময় কাটাতে পারেন
                  সেই প্রচেষ্টা গ্রহণ করা হয়। এখানে বাংলাদেশে প্রথমবারের মতো ফুল
                  উৎসব-২০২৩ আয়োজন করা হয়; যা ব্যাপকভাবে জনসাধারণের প্রশংসা
                  কুড়িয়েছে। এরই ধারাাহিকতায় ডিসি পার্কে দ্বিতীয়বারের মত বৃহৎ
                  পরিসরে ফুল উৎসব-২০২৪ এর আয়োজন করা হয়। উক্ত ফুল উৎসবে দেশের
                  বিভিন্ন প্রান্ত থেকে প্রায় আট লক্ষাধিক দর্শনার্থী ডিসি পার্ক
                  পরিদর্শন করেন ।
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.progress}>
          <Container>
            <h2> ফুল উৎসবের ভিড়িও চিত্র </h2>
            <div className={styles.row}>
              <div className={styles.videos}>
                <iframe
                  src="https://www.youtube.com/embed/cDcaih7VHiU?si=ZrArBRqaFILMgVa9"
                  title="চট্টগ্রামের ডিসি পার্কে ফুল উৎসবে হাজারো দর্শনার্থী"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videos}>
                <iframe
                  src="https://www.youtube.com/embed/_0HXuOMaV4c?si=w_n5xHEo0mPl6tz1"
                  title="ডিসি পার্কে শুরু হচ্ছে ১৩৬ প্রজাতির ফুলের মেলা | Chittagong"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.gallery}>
          <Container>
            <h2 className={styles.heading}>পার্কের বিশেষ আকর্ষণ</h2>
            <div className={styles.grid}>
              {images.map((item, index) => (
                <div
                  key={index}
                  className={styles.imageContainer}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={200}
                    height={200}
                  />
                  <div className={styles.caption}>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {selectedImage !== null && (
              <div
                className={styles.modal}
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className={styles.prev}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev! > 0 ? prev! - 1 : images.length - 1
                    );
                  }}
                >
                  ❮
                </button>
                <div className={styles.modalContent}>
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].text}
                    width={600}
                    height={600}
                  />
                </div>
                <button
                  className={styles.next}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev! < images.length - 1 ? prev! + 1 : 0
                    );
                  }}
                >
                  ❯
                </button>
              </div>
            )}
          </Container>
        </section>
        <section className={styles.ongoingProjects} id="projects">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>চলমান প্রকল্প সমূহ</h2>
            </div>
            <div className={styles.row}>
              {ongoingProjects.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.icon}>
                    <h3>{category.icon}</h3>
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        {/* <section className={styles.getInvolved}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Get Involved</h2>
              <p>
                Transforming Chattogram into a smart and sustainable city is a
                collective effort. Here’s how you can contribute:
              </p>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/image5.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <span>Residents</span>: Adopt sustainable practices,
                    participate in community programs, and stay informed about
                    city initiatives.
                  </li>
                  <li>
                    <span>Businesses</span>: Invest in green technologies,
                    support local innovation, and collaborate with the
                    government on DC Park projects.
                  </li>
                  <li>
                    <span>Government and NGOs</span>: Partner with stakeholders
                    to implement policies and programs that drive sustainable
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section> */}
        <section className={styles.parkGallery}>
          <div className={styles.container}>
            <h2 className={styles.title}>পার্কের কিছু ছবি</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <Image
                  src="/images/ban.png"
                  alt="Park Image 1"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban1.png"
                  alt="Park Image 2"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban2.png"
                  alt="Park Image 3"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban3.png"
                  alt="Park Image 4"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban4.png"
                  alt="Park Image 5"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban5.png"
                  alt="Park Image 6"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban6.png"
                  alt="Park Image 7"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban7.png"
                  alt="Park Image 8"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban8.png"
                  alt="Park Image 9"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/ban1.png"
                  alt="Park Image 10"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
            </div>
            <a href="#" className={styles.loadMore}>
              আরও ছবি অনুন্ধান করুন
            </a>
          </div>
        </section>
        <section className={styles.visitorMoments}>
          <div className={styles.container}>
            <h2 className={styles.title}>
              পার্কে আগত দর্শনার্থীদের স্মরণীয় কিছু মুহূর্ত
            </h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (1).jpg"
                  alt="Visitor Image 1"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (2).jpg"
                  alt="Visitor Image 2"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (3).jpg"
                  alt="Visitor Image 3"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (4).jpg"
                  alt="Visitor Image 4"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (5).jpg"
                  alt="Visitor Image 5"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (6).jpg"
                  alt="Visitor Image 6"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (7).jpg"
                  alt="Visitor Image 7"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (8).jpg"
                  alt="Visitor Image 8"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (9).jpg"
                  alt="Visitor Image 9"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/visitor (10).jpg"
                  alt="Visitor Image 10"
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.newsSection}>
          <div className={styles.container}>
            <h2 className={styles.title}>বিভিন্ন সংবাদ মাধ্যমে প্রকাশিত</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <Image
                  src="/images/news1.jpg"
                  alt="News Coverage"
                  width={350}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/news2.jpg"
                  alt="News Coverage"
                  width={350}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/news3.jpg"
                  alt="News Coverage"
                  width={350}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/news4.jpg"
                  alt="News Coverage"
                  width={350}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/news5.jpg"
                  alt="News Coverage"
                  width={350}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/news6.jpg"
                  alt="News Coverage"
                  width={350}
                  height={250}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.openingHours}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Opening Hours Section */}
              <div className={styles.column}>
                <h2>খোলা থাকার সময়</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>শুক্রবার</td>
                      <td>সকাল ৯:০০ - সন্ধ্যা ৮:০০</td>
                    </tr>
                    <tr>
                      <td>শনিবার</td>
                      <td>সকাল ৯:০০ - সন্ধ্যা ৮:০০</td>
                    </tr>
                    <tr>
                      <td>সোমবার</td>
                      <td>সকাল ৯:০০ - সন্ধ্যা ৮:০০</td>
                    </tr>
                    <tr>
                      <td>মঙ্গলবার</td>
                      <td>সকাল ৯:০০ - সন্ধ্যা ৮:০০</td>
                    </tr>
                    <tr>
                      <td>বুধবার</td>
                      <td>সকাল ৯:০০ - সন্ধ্যা ৮:০০</td>
                    </tr>
                    <tr>
                      <td>বৃহস্পতিবার</td>
                      <td>সকাল ৯:০০ - সন্ধ্যা ৮:০০</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Contact Info Section */}
              <div className={styles.column}>
                <h2>যোগাযোগের তথ্য</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>ঠিকানা</td>
                      <td>বন্দর সংযোগ রোড, ফৌজদারহাট, সীতাকুণ্ড, চট্টগ্রাম</td>
                    </tr>
                    <tr>
                      <td>ইমেইল</td>
                      <td>info@dcparktcg.com</td>
                    </tr>
                    <tr>
                      <td>লোকেশন</td>
                      <td>
                        <a href="#">গুগল ম্যাপ</a>
                      </td>
                    </tr>
                    <tr>
                      <td>মোবাইল</td>
                      <td>+880 1745-963840</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Ticket Price Section */}
            <div className={styles.ticketPrice}>
              <p>টিকিট মূল্য: ৫০ /- টাকা জনপ্রতি</p>
            </div>
          </div>
        </section>
        <section className={styles.getInvolved2}>
          <div className={styles.container}>
            <div className={styles.head}>
              <h2>আপনার মতামত প্রদান করুন</h2>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={100}
                width={100}
              />
            </div>
            <div className={styles.row}>
              <div className={styles.formContainer}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
                <form>
                  <input type="text" placeholder="নাম" />
                  <input type="text" placeholder="মোবাইল নম্বর (Optional)" />
                  <input type="email" placeholder="ই-মেইল" />
                  <textarea placeholder="মতামত"></textarea>
                  <button type="submit">সাবমিট</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
