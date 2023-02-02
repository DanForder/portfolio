import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Metatags from "../components/Metatags";

const Index: NextPage = () => {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

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

    if (img1Ref.current === null) return;
    fadeIn(img1Ref.current, 2);

    if (img2Ref.current === null) return;
    animateToCenter("x", img2Ref.current);
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
      <section>
        <h1>Dan Forder</h1>
        <p>Frontend Developer & Coach</p>

        <img
          src="/whangerei-heads.jpg"
          alt="Dan sitting atop Whangerei Heads wearing frisbee kit looking to the sea"
          width="100%"
          style={{
            maxWidth: "500px",
            opacity: 0,
            borderRadius: "3px",
          }}
          ref={img1Ref}
        />
      </section>

      <section>
        <AnimatedText>
          <h2 id="about">about</h2>
        </AnimatedText>
        <AnimatedText>
          <p>
            Hey 👋 I&apos;m Dan. I&apos;m a frontend developer and software
            coach. Currently breaking down barriers and getting career changers
            into tech with <a href="https://nology.io/">nology.io</a>
          </p>
        </AnimatedText>
        <AnimatedText>
          <p>
            I advocate for greater awareness of mental health in the workplace,
            and creating an inclusive environment where neurodivergent people
            can be their whole selves.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p>
            In my spare time I run Ultra Marathons and play Ultimate Frisbee
            with{" "}
            <a href="https://www.instagram.com/bristolopenultimate/">
              Bristol Open
            </a>{" "}
            (and I&apos;m willing to talk your ears off about either!)
          </p>
        </AnimatedText>

        <img
          style={{ maxWidth: "500px", opacity: 0, borderRadius: "3px" }}
          width="75%"
          src="/gmu01.jpg"
          alt="Dan running the Green Man Ultramarathon wearing a cap, hydration vest, and running gear"
          ref={img2Ref}
        />
      </section>

      <section>
        <AnimatedText>
          <h2 id="projects">projects</h2>
        </AnimatedText>
        <AnimatedText>
          <p>
            Most of the projects I&apos;ve worked on professionally are not
            public sites, but I&apos;d be more than happy to talk about the
            products and my role more in-depth upon request.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h3>Working for Nology - Frontend Software Curriculum</h3>
        </AnimatedText>
        <AnimatedText>
          <p>
            At nology, I am a senior software coach and product owner for the
            frontend curriculum. I was responsible for developing or creating
            the first 6 weeks of our 12-week software engineering program.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p>
            This work includes creating content (code-based slide decks,
            challenges, codealongs, project briefs), but most importantly
            documenting the process of delivering the content as a coach.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h3>Working for Good Energy - Online Account</h3>
        </AnimatedText>
        <AnimatedText>
          <p>
            <a href="https://www.goodenergy.co.uk/">Good Energy</a> is a
            renewable energy company based in Chippenham, UK. During my time
            here, some of my highlights included advocating for and then
            creating the first iteration of a component library (shared across
            the UX and Dev teams), and leading an overhaul to implement major
            accessibility changes to the online account portal.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p>
            The tech stack I used here was React (TypeScript) for the frontend,
            and .NET Core (C#) for the backend, as well as working with
            event-driven Azure Functions.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h3>Working for QES - Triangle Star Online</h3>
        </AnimatedText>
        <AnimatedText>
          <p>
            <a href="https://www.qes-online.co.uk/">QES Online</a> is a software
            solutions company based in Bristol, UK. During my time working here,
            I primarily worked on{" "}
            <a href="https://www.outcomesstar.org.uk/about-the-star/star-online-and-other-software/">
              Star Online
            </a>{" "}
            for a client (
            <a href="https://www.outcomesstar.org.uk/about-triangle/">
              Triangle
            </a>
            ). The application helps frontline workers create &quot;Outcome
            Stars&quot;, a tool to support and measure change working with
            vulnerable people.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p>
            My role was a fullstack developer here, but I was also responsible
            for interacting with the client, managing stakeholder expectations,
            and leading sprints.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h3>Promptr</h3>
        </AnimatedText>
        <AnimatedText>
          <p>
            <a href="https://promptr.vercel.app/sign-up">Promptr</a> is a tool I
            created to help create and generate icebreaker questions for student
            standups at nology. You can sign up to add your own prompts, as well
            as generate random ones.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h3>Castle Wars</h3>
        </AnimatedText>
        <AnimatedText>
          <p>
            <a href="https://danforder.github.io/castle-wars/home">
              Castle Wars
            </a>{" "}
            is a react version of the popular flash game from 2007. Each player
            has a castle and a set of cards, and the objective is to destroy the
            opposing castle.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h3>Nonogram Puzzler</h3>
        </AnimatedText>
        <AnimatedText>
          <p>
            <a href="https://danforder.github.io/nonogram/">Nonogram Puzzler</a>{" "}
            is a project I worked on when I was a bit obsessed with nonogram
            games like{" "}
            <a href="https://play.google.com/store/apps/details?id=com.appynation.wbpc&hl=en_GB&gl=US&pli=1">
              Picture Cross
            </a>
            . I recreated the functionality using React and designed a few
            levels as a proof of concept.
          </p>
        </AnimatedText>
      </section>

      <section>
        <AnimatedText>
          <h2 id="contact">contact</h2>
        </AnimatedText>
        <AnimatedText>
          <p>
            Reach me at{" "}
            <a href="mailto:danforder@gmail.com?subject=Email query from portfolio">
              danfrdr@gmail.com
            </a>
            . Or on Linkedin at{" "}
            <a href="https://www.linkedin.com/in/dan-forder/">dan-forder</a>
          </p>
        </AnimatedText>
      </section>
    </Layout>
  );
};

export default Index;
