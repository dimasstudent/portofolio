import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;
    const actions = actionsRef.current;

    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(20px)";
      setTimeout(() => {
        title.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 100);
    }

    if (description) {
      description.style.opacity = "0";
      description.style.transform = "translateY(20px)";
      setTimeout(() => {
        description.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        description.style.opacity = "1";
        description.style.transform = "translateY(0)";
      }, 300);
    }

    if (actions) {
      actions.style.opacity = "0";
      actions.style.transform = "translateY(20px)";
      setTimeout(() => {
        actions.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        actions.style.opacity = "1";
        actions.style.transform = "translateY(0)";
      }, 500);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="aurora-background">
        <div className="aurora-blur aurora-1"></div>
        <div className="aurora-blur aurora-2"></div>
        <div className="aurora-blur aurora-3"></div>
        <div className="aurora-blur aurora-4"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4"
          >
            <span className="text-primary">Hi, I'm Dimas</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-300">
              Vibe Coder Enthusiast & Yapping Engineer
            </span>
          </h1>
          <p
            ref={descriptionRef}
            className="max-w-[700px] text-muted-foreground text-lg md:text-xl mb-8"
          >
            Vibe coding is the practice of immersing yourself in a focused,
            enjoyable coding session while listening to music or ambient sounds
            that enhance concentration and creativity. It's about getting into
            "the zone" — where time flows, ideas click, and code just seems to
            write itself.
          </p>
          <div ref={actionsRef} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <ArrowDownIcon className="h-8 w-8" />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
