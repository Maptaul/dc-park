import { ongoingProjects } from "@/constants/ongoingProjects";
import NextImage from "@/hooks/NextImage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Notice from "@/modules/notice";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { images } from "@/constants/images";
import { parkPhoto } from "@/constants/parkphoto";
import { visitorImages } from "@/constants/visitorImages";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaFacebook,
  FaMobile,
  FaTimes,
} from "react-icons/fa";

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
                    src={item.src || ""}
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
            {selectedImage !== null && images[selectedImage] && (
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
                    src={images[selectedImage]?.src || ""}
                    alt={images[selectedImage]?.text || "Park Image"}
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
          <Container>
            <div className={styles.container}>
              <h2 className={styles.title}>পার্কের কিছু ছবি</h2>
              <div className={styles.grid}>
                {parkPhoto.map((item, index) => (
                  <div
                    key={index}
                    className={styles.card}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={item.src || ""}
                      alt="Park Image"
                      width={300}
                      height={200}
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
              <a href="#" className={styles.loadMore}>
                আরও ছবি দেখুন
              </a>
            </div>

            {selectedImage !== null && parkPhoto[selectedImage] && (
              <div
                className={styles.modal}
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className={styles.prev}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev! > 0 ? prev! - 1 : parkPhoto.length - 1
                    );
                  }}
                >
                  ❮
                </button>
                <div className={styles.modalContent}>
                  <Image
                    src={parkPhoto[selectedImage].src || ""}
                    alt="photo"
                    width={600}
                    height={400}
                  />
                </div>
                <button
                  className={styles.next}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev! < parkPhoto.length - 1 ? prev! + 1 : 0
                    );
                  }}
                >
                  ❯
                </button>
              </div>
            )}
          </Container>
        </section>
        <section className={styles.visitorMoments}>
          <div className={styles.container}>
            <h2 className={styles.title}>
              পার্কে আগত দর্শনার্থীদের স্মরণীয় কিছু মুহূর্ত
            </h2>
            <div className={styles.grid}>
              {visitorImages.map((image, index) => (
                <div
                  key={index}
                  className={styles.card}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src || ""}
                    alt="Visitor Image"
                    width={200}
                    height={150}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Modal Gallery */}
          {selectedImage !== null && visitorImages[selectedImage] && (
            <div
              className={styles.modal}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className={styles.prev}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev! > 0 ? prev! - 1 : visitorImages.length - 1
                  );
                }}
              >
                ❮
              </button>
              <div className={styles.modalContent}>
                <Image
                  src={visitorImages[selectedImage].src || ""}
                  alt="photo"
                  width={600}
                  height={400}
                />
              </div>
              <button
                className={styles.next}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev! < visitorImages.length - 1 ? prev! + 1 : 0
                  );
                }}
              >
                ❯
              </button>
            </div>
          )}
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
        <section className={styles.connectSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Contact Information Section */}
              <div className={styles.column}>
                <h2>আমাদের সাথে যোগাযোগ করুন</h2>
                <p>
                  আপনার যদি কোনো প্রশ্ন থাকে বা সহায়তার প্রয়োজন হয়, তাহলে
                  আমাদের সাথে যোগাযোগ করুন। ইমেইল বা সোশ্যাল মিডিয়ার মাধ্যমে
                  আমাদের পৌঁছাতে পারেন।
                </p>

                <div className={styles.contactInfo}>
                  <div className={styles.contactCard}>
                    <FaEnvelope className={styles.icon} />
                    <div>
                      <h3>ইমেইল</h3>
                      <p>info@dcparkctg.com</p>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <FaFacebook className={styles.icon} />
                    <div>
                      <h3>ফেইসবুক</h3>
                      <p>dcparkchittagong</p>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <FaMobile className={styles.icon} />
                    <div>
                      <h3>মোবাইল</h3>
                      <p>+880 1745-963840</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className={styles.column}>
                <h2>যোগাযোগ ফর্ম</h2>
                <form className={styles.contactForm}>
                  <div className={styles.inputGroup}>
                    <div>
                      <label>পূর্ণ নাম</label>
                      <input type="text" placeholder="আপনার নাম লিখুন" />
                    </div>
                    <div>
                      <label>ইমেইল</label>
                      <input type="email" placeholder="আপনার ইমেইল লিখুন" />
                    </div>
                  </div>

                  <label>ফোন নাম্বার</label>
                  <input type="text" placeholder="আপনার ফোন নাম্বার লিখুন" />

                  <label>মেসেজ</label>
                  <textarea placeholder="আপনার বার্তা লিখুন"></textarea>

                  <button type="submit">পাঠান</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.getInvolved2}>
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
        </section> */}
      </main>
      <Footer />
    </>
  );
}
