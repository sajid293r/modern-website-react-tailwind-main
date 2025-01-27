import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="">
            we specialize in creating innovative and user-centric apps that consistently make waves on Appworld. With a team of skilled developers, designers, and strategists, we turn your ideas into feature-rich, trendsetting applications. Our focus is on delivering exceptional performance, seamless functionality, and captivating designs that users love. Whether it's a groundbreaking startup concept or enhancing an existing app, we ensure your product stands out and garners the attention it deserves. Partner with us, and let's build apps that dominate the charts on Appworld!
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
