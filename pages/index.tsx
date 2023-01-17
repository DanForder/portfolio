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
      <h1>Portfolio</h1>
      <p>
        Frontend Developer - Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ab rerum aliquid placeat? Repudiandae laudantium vero at porro nam
        praesentium, dignissimos esse eos quasi mollitia incidunt nostrum
        magnam, nisi ab tempore.
      </p>
      <h2 id="about">about</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        quis provident architecto voluptatem sed similique ad, reprehenderit,
        esse id culpa accusamus illum amet ut earum quaerat ipsa odio
        exercitationem?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        quis provident architecto voluptatem sed similique ad, reprehenderit,
        esse id culpa accusamus illum amet ut earum quaerat ipsa odio
        exercitationem?
      </p>
      <h2 id="projects">projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        quis provident architecto voluptatem sed similique ad, reprehenderit,
        esse id culpa accusamus illum amet ut earum quaerat ipsa odio
        exercitationem?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        quis provident architecto voluptatem sed similique ad, reprehenderit,
        esse id culpa accusamus illum amet ut earum quaerat ipsa odio
        exercitationem?
      </p>
      <h2 id="contact">contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        quis provident architecto voluptatem sed similique ad, reprehenderit,
        esse id culpa accusamus illum amet ut earum quaerat ipsa odio
        exercitationem?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        quis provident architecto voluptatem sed similique ad, reprehenderit,
        esse id culpa accusamus illum amet ut earum quaerat ipsa odio
        exercitationem?
      </p>
    </Layout>
  );
};

export default Index;
