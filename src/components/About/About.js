import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import headshot from "../../images/ah-headshot.jpeg";

const About = (props) => {
  const { refCallback } = props;

  const tech = [
    "React",
    "Next.js",
    "ApolloGQL",
    "TypeScript",
    "JavaScript (ES6+)",
    "Gatsby.js",
  ];
  return (
    <div
      className="flex sm:items-center pt-24 section"
      id="about"
      ref={refCallback}
    >
      <div className="w-full">
        <div className="pb-8 flex">
          <div>
            <span className="text-textPrimary text-xl font-title self-end">
              01.
            </span>
            <p className="section-header font-display self-end">About Me</p>
          </div>
          <span className="inline-block self-center bg-textTertiary h-px md:w-32 ml-4" />
        </div>
        <div className="sm:pl-11">
          <div className="grid lg:grid-cols-3">
            <div className="sm:col-span-2 pt-8 sm:pt-0 sm:pr-8 order-2 lg:order-1">
              <div className="font-display text-textTertiary">
                <p>
                  Hi, my name is Alex Hopkins and I'm a zillenial working as a
                  web engineer in sunny Denver, CO!
                </p>
                <p>
                  A little about me: since graduating from The University of
                  Colorado Boulder (sko Buffs) with a BA in International
                  Affairs, I have worked as a waitress at a restaurant (and
                  loved it), had a few internships, travelled quite a bit,
                  became a graphic designer, discovered a deep love of cooking
                  and hosting, attended General Assembly's Fullstack Software
                  Engineering bootcamp, written some code for some sweet
                  companies, and learned so much along the way. When not hacking
                  the mainframe at work, you can find me at the pottery studio
                  or doing literally anything outside with my family and
                  friends!
                </p>
              </div>
              <p className="text-textTertiary font-display pt-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 sm:max-w-sm">
                {tech.map((item) => (
                  <div>
                    <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                    <li
                      key={item}
                      className="font-title text-textTertiary text-xs sm:text-sm inline pl-2"
                    >
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-1 order-1 lg:order-2 flex sm:pb-8">
              <div className="relative headshot self-center">
                <img
                  src={headshot}
                  alt="alex hopkins headshot"
                  width={250}
                  height={250}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
