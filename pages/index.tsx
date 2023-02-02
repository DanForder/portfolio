import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Metatags from "../components/Metatags";
import Project from "../components/Project";
import { generateUniqueId } from "../lib/commonUtils";
import styles from "../styles/index.module.scss";

const Index: NextPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const getXToCenterOfParent = (child: HTMLElement): number => {
    if (!child.parentElement) return 0;
    return (child.parentElement.offsetWidth - child.offsetWidth) / 2;
  };

  const getYToCenterOfParent = (child: HTMLElement): number => {
    if (!child.parentElement) return 0;
    return (child.parentElement.offsetHeight - child.offsetHeight) / 2;
  };

  const animateToCenter = (axis: "x" | "y", image: HTMLImageElement) => {
    gsap.to(image, {
      x: () => (axis === "x" ? getXToCenterOfParent(image) : 0),
      y: () => (axis === "y" ? getYToCenterOfParent(image) : 0),
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: image,
        start: "top 100%",
        end: "top 70%",
        toggleActions: "restart none none reset",
      },
    });
  };

  const fadeIn = (element: HTMLElement, duration: number) => {
    gsap.to(element, {
      opacity: 1,
      duration,
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "top 70%",
        toggleActions: "restart none none reset",
      },
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const mm = gsap.matchMedia();
    mm.add("(max-width:799px)", () => {
      if (imgRef.current === null) return;
      animateToCenter("x", imgRef.current);
    });
  }, []);

  return (
    <Layout>
      <Metatags />
      <Header
        links={[
          { text: "about", href: "about", icon: "🖋️" },
          { text: "projects", href: "projects", icon: "🛠️" },
          { text: "contact", href: "contact", icon: "🤙" },
        ]}
      />
      <AnimatedText>
        <section className={styles.hero}>
          <h1 className={styles.heading}>dan forder</h1>
          <p className={styles.tagline}>frontend developer & coach</p>

          <img
            src="/whangerei-heads.jpg"
            alt="Dan sitting atop Whangerei Heads wearing frisbee kit looking to the sea"
            width="100%"
            className={styles.image}
          />
        </section>
      </AnimatedText>

      <section className={styles.about} id="about">
        <div className={styles.aboutText}>
          <AnimatedText>
            <h2>about</h2>
          </AnimatedText>
          <AnimatedText>
            <p>
              Hey 👋 I&apos;m Dan. I&apos;m a frontend developer and software
              coach. Currently breaking down barriers and getting career
              changers into tech with{" "}
              <a href="https://nology.io/" target="_blank" rel="noreferrer">
                nology.io
              </a>
            </p>
          </AnimatedText>
          <AnimatedText>
            <p>
              I advocate for greater awareness of mental health in the
              workplace, and creating an inclusive environment where
              neurodivergent people can be their whole selves.
            </p>
          </AnimatedText>
          <AnimatedText>
            <p>
              In my spare time I run Ultra Marathons and play Ultimate Frisbee
              with{" "}
              <a
                href="https://www.instagram.com/bristolopenultimate/"
                target="_blank"
                rel="noreferrer"
              >
                Bristol Open
              </a>{" "}
              (and I&apos;m willing to talk your ears off about either!)
            </p>
          </AnimatedText>
        </div>

        <img
          className={styles.image}
          width="75%"
          src="/gmu01.jpg"
          alt="Dan running the Green Man Ultramarathon wearing a cap, hydration vest, and running gear"
          ref={imgRef}
        />
      </section>

      <section className={styles.projects} id="projects">
        <AnimatedText>
          <div className={styles.projectIntro}>
            <h2>projects</h2>
            <p>
              Most of the projects I&apos;ve worked on professionally are not
              public sites, but I&apos;d be more than happy to talk about the
              products and my role more in-depth upon request.
            </p>
          </div>
        </AnimatedText>

        <div className={styles.container}>
          <Project
            heading="Working for Nology - Frontend Software Curriculum"
            paragraphs={[
              <p key={generateUniqueId()}>
                At{" "}
                <a href="https://nology.io/" target="_blank" rel="noreferrer">
                  nology.io
                </a>
                , I am a senior software coach and product owner for the
                frontend curriculum. I was responsible for developing or
                creating the first 6 weeks of our 12-week software engineering
                program.
              </p>,
              <p key={generateUniqueId()}>
                This work includes creating content (code-based slide decks,
                challenges, codealongs, project briefs), but most importantly
                documenting the process of delivering the content as a coach.
              </p>,
            ]}
            image={<img src="/nology-favicon.png" alt="nology icon" />}
          />
          <Project
            heading="Working for Good Energy - Online Account"
            paragraphs={[
              <p key={generateUniqueId()}>
                <a
                  href="https://www.goodenergy.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Good Energy
                </a>{" "}
                is a renewable energy company based in Chippenham, UK. During my
                time here, some of my highlights included advocating for and
                then creating the first iteration of a component library (shared
                across the UX and Dev teams), and leading an overhaul to
                implement major accessibility changes to the online account
                portal.
              </p>,
              <p key={generateUniqueId()}>
                The tech stack I used here was React (TypeScript) for the
                frontend, and .NET Core (C#) for the backend, as well as working
                with event-driven Azure Functions.
              </p>,
            ]}
            image={<img src="/ge-logo.png" alt="good energy logo" />}
            inverse
          />
          <Project
            heading="Working for QES - Triangle Star Online"
            paragraphs={[
              <p key={generateUniqueId()}>
                <a
                  href="https://www.qes-online.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  QES Online
                </a>{" "}
                is a software solutions company based in Bristol, UK. During my
                time working here, I primarily worked on{" "}
                <a
                  href="https://www.outcomesstar.org.uk/about-the-star/star-online-and-other-software/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Star Online
                </a>{" "}
                for a client (
                <a
                  href="https://www.outcomesstar.org.uk/about-triangle/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Triangle
                </a>
                ). The application helps frontline workers create &quot;Outcome
                Stars&quot;, a tool to support and measure change working with
                vulnerable people.
              </p>,
              <p key={generateUniqueId()}>
                My role was a fullstack developer here, but I was also
                responsible for interacting with the client, managing
                stakeholder expectations, and leading sprints.
              </p>,
            ]}
            image={<img src="/qes-logo.webp" alt="qes logo" />}
          />
          <Project
            heading="Promptr"
            paragraphs={[
              <p key={generateUniqueId()}>
                <a
                  href="https://promptr.vercel.app/sign-up"
                  target="_blank"
                  rel="noreferrer"
                >
                  Promptr
                </a>{" "}
                is a tool I created to help create and generate icebreaker
                questions for student standups at nology. You can sign up to add
                your own prompts, as well as generate random ones.
              </p>,
            ]}
            image={<img src="/light-bulb.png" alt="a light bulb" />}
            inverse
          />
          <Project
            heading="Castle Wars"
            paragraphs={[
              <p key={generateUniqueId()}>
                <a
                  href="https://danforder.github.io/castle-wars/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Castle Wars
                </a>{" "}
                is a react version of the popular flash game from 2007. Each
                player has a castle and a set of cards, and the objective is to
                destroy the opposing castle.
              </p>,
            ]}
            image={<img src="/castle.png" alt="a castle" />}
          />
          <Project
            heading="Nonogram Puzzler"
            paragraphs={[
              <p key={generateUniqueId()}>
                <a
                  href="https://danforder.github.io/nonogram/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nonogram Puzzler
                </a>{" "}
                is a project I worked on when I was a bit obsessed with nonogram
                games like{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.appynation.wbpc&hl=en_GB&gl=US&pli=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Picture Cross
                </a>
                . I recreated the functionality using React and designed a few
                levels as a proof of concept.
              </p>,
            ]}
            image={<img src="/puzzle-piece.png" alt="a puzzle piece" />}
            inverse
          />
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <AnimatedText>
          <h2>contact</h2>
        </AnimatedText>
        <AnimatedText>
          <p>
            Reach me at{" "}
            <a href="mailto:danforder@gmail.com?subject=Email query from portfolio">
              danfrdr@gmail.com
            </a>
            . Or on Linkedin at{" "}
            <a
              href="https://www.linkedin.com/in/dan-forder/"
              target="_blank"
              rel="noreferrer"
            >
              dan-forder
            </a>
          </p>
        </AnimatedText>
      </section>
    </Layout>
  );
};

export default Index;
