import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "../styles/animatedText.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AnimatedText = ({ children }: PropsWithChildren) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const text = textRef.current;

    gsap.to(text, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "restart none none reset",
      },
    });
  }, []);

  return (
    <div className={styles.wrapper} ref={textRef}>
      {children}
    </div>
  );
};

export default AnimatedText;
