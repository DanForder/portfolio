import type { NextPage } from "next";
import Header from "../components/Header";
import Metatags from "../components/Metatags";

const Index: NextPage = () => {
  return (
    <>
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
      <h2 id="speaking">speaking</h2>
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
      <h2 id="writing">writing</h2>
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
      <h2 id="playing">playing</h2>
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
      <h2 id="workshop">workshop</h2>
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
    </>
  );
};

export default Index;
