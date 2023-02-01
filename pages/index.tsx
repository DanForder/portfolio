import type { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Metatags from "../components/Metatags";

const Index: NextPage = () => {
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
          style={{ maxWidth: "500px" }}
        />
      </section>

      <section>
        <h2 id="about">about</h2>
        <p>
          Hey 👋 I&apos;m Dan. I&apos;m a frontend developer and software coach.
          Currently breaking down barriers and getting career changers into tech
          with <a href="https://nology.io/">nology.io</a>
        </p>

        <p>
          I advocate for greater awareness of mental health in the workplace,
          and creating an inclusive environment where neurodivergent people can
          be their whole selves.
        </p>

        <p>
          In my spare time I run Ultra Marathons and play Ultimate Frisbee with{" "}
          <a href="https://www.instagram.com/bristolopenultimate/">
            Bristol Open
          </a>{" "}
          (and I&apos;m willing to talk your ears off about either!)
        </p>

        <img
          style={{ maxWidth: "500px" }}
          width="100%"
          src="/gmu01.jpg"
          alt=""
        />
      </section>

      <section>
        <h2 id="projects">projects</h2>
        <p>
          Most of the projects I&apos;ve worked on professionally are not public
          sites, but I&apos;d be more than happy to talk about the products and
          my role more in-depth upon request.
        </p>

        <h3>Working for Nology - Frontend Software Curriculum</h3>
        <p>
          At nology, I am a senior software coach and product owner for the
          frontend curriculum. I was responsible for developing or creating the
          first 6 weeks of our 12-week software engineering program.
        </p>
        <p>
          This work includes creating content (code-based slide decks,
          challenges, codealongs, project briefs), but most importantly
          documenting the process of delivering the content as a coach.
        </p>

        <h3>Working for Good Energy - Online Account</h3>
        <p>
          <a href="https://www.goodenergy.co.uk/">Good Energy</a> is a renewable
          energy company based in Chippenham, UK. During my time here, some of
          my highlights included advocating for and then creating the first
          iteration of a component library (shared across the UX and Dev teams),
          and leading an overhaul to implement major accessibility changes to
          the online account portal.
        </p>

        <p>
          The tech stack I used here was React (TypeScript) for the frontend,
          and .NET Core (C#) for the backend, as well as working with
          event-driven Azure Functions.
        </p>

        <h3>Working for QES - Triangle Star Online</h3>
        <p>
          <a href="https://www.qes-online.co.uk/">QES Online</a> is a software
          solutions company based in Bristol, UK. During my time working here, I
          primarily worked on{" "}
          <a href="https://www.outcomesstar.org.uk/about-the-star/star-online-and-other-software/">
            Star Online
          </a>{" "}
          for a client (
          <a href="https://www.outcomesstar.org.uk/about-triangle/">Triangle</a>
          ). The application helps frontline workers create &quot;Outcome
          Stars&quot;, a tool to support and measure change working with
          vulnerable people.
        </p>
        <p>
          My role was a fullstack developer here, but I was also responsible for
          interacting with the client, managing stakeholder expectations, and
          leading sprints.
        </p>

        <h3>Promptr</h3>
        <p>
          <a href="https://promptr.vercel.app/sign-up">Promptr</a> is a tool I
          created to help create and generate icebreaker questions for student
          standups at nology. You can sign up to add your own prompts, as well
          as generate random ones.
        </p>

        <h3>Castle Wars</h3>
        <p>
          <a href="https://danforder.github.io/castle-wars/home">Castle Wars</a>{" "}
          is a react version of the popular flash game from 2007. Each player
          has a castle and a set of cards, and the objective is to destroy the
          opposing castle.
        </p>

        <h3>Nonogram Puzzler</h3>
        <p>
          <a href="https://danforder.github.io/nonogram/">Nonogram Puzzler</a>{" "}
          is a project I worked on when I was a bit obsessed with nonogram games
          like{" "}
          <a href="https://play.google.com/store/apps/details?id=com.appynation.wbpc&hl=en_GB&gl=US&pli=1">
            Picture Cross
          </a>
          . I recreated the functionality using React and designed a few levels
          as a proof of concept.
        </p>
      </section>

      <section>
        <h2 id="contact">contact</h2>
        <p>
          Reach me at{" "}
          <a href="mailto:danforder@gmail.com?subject=Email query from portfolio">
            danfrdr@gmail.com
          </a>
          . Or on Linkedin at{" "}
          <a href="https://www.linkedin.com/in/dan-forder/">dan-forder</a>
        </p>
      </section>
    </Layout>
  );
};

export default Index;
