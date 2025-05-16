import gsap from "gsap";
import { HOW_IT_WORKS_CONTENT } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#works",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  });

  return (
    <section id="works">
      <div className="max-w-7xl mx-auto px-4">
        {/* title + description */}
        <div className="text-center mb-12 border-t border-neutral-800">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 msx-w-xl mx-auto">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <div
              className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between card"
              key={index}
            >
              {/* title + description */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-neutral-400 mb-4">{step.description}</p>
              </div>

              {/* img */}
              <div className="flex justify-center">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="rounded-lg"
                />
              </div>

              {step.users && (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    {step.users.map((user, userIndex) => (
                      <img
                        key={userIndex}
                        src={user}
                        alt="user"
                        className="h-8 w-8 rounded-full border-2 border-black"
                      />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Connect
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
