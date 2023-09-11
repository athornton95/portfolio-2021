import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Experience = (props) => {
  const { refCallback } = props;

  return (
    <div
      className="flex sm:items-center pt-24 section"
      id="experience"
      ref={refCallback}
    >
      <div className="w-full">
        <div className="pb-8 flex">
          <div>
            <span className="text-textPrimary text-xl font-title self-end">
              02.
            </span>
            <p className="section-header font-display self-end">
              Where I've Worked
            </p>
          </div>
          <span className="inline-block self-center bg-textTertiary h-px md:w-32 ml-4" />
        </div>
        <div className="sm:pl-11">
          <div className="mb-6 max-w-screen-md">
            <p className="text-xl text-textPrimary font-semibold font-title inline">
              Tonic
            </p>
            <span className="pl-3 text-textTertiary">|</span>
            <span className="pl-3 text-textTertiary">Denver, CO</span>
            <div className="mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted">
              <p className="text-lg text-textSecondary font-semibold font-display">
                Senior UI Engineer
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                October 2022 - Present
              </p>
              <ul className="pl-4 pb-4 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Front-end team lead on Tonic's largest and most established
                    client.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Collaborate with product managers and designers to define
                    project requirements and translate them into technical
                    specifications.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Built dynamic data visualizaitons to help admin users
                    analyze large amounts of complex data, utilizing the d3
                    library.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Lead full redesign efforts for:
                    <span className="block ml-6">
                      1. Onboarding flow for pilot program between Google and
                      client.
                    </span>
                    <span className="block ml-6">
                      2. Payment portal including payment method management,
                      transaction history, and ecommerce flow.
                    </span>
                  </li>
                </div>
              </ul>
              <p className="text-lg text-textSecondary font-semibold font-display">
                UI Engineer
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                July 2021 - October 2022
              </p>
              <ul className="pl-4 pb-1 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Implemented responsive design principles, resulting in a 20%
                    improvement in mobile user engagement.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Integrated Plaid into application's existing Stripe
                    environment, increasing users' ability to verify ACH payment
                    types quickly and securely.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Increased application's site speed on heaviest pages by 80%
                    using react-query and introduction of server side
                    pagination.
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="mb-6 max-w-screen-md">
            <p className="text-xl text-textPrimary font-semibold font-title inline">
              Gloo
            </p>
            <span className="pl-3 text-textTertiary">|</span>
            <span className="pl-3 text-textTertiary">Boulder, CO</span>
            <div className="mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted">
              <p className="text-lg text-textSecondary font-semibold font-display">
                Web Engineer
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                March 2021 - June 2021
              </p>
              <ul className="pl-4 pb-4 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Conducted A/B testing and user feedback analysis to improve
                    user experience, resulting in the successful creation and
                    launch of marketplace app.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Introduced continuous integration and continuous deployment
                    (CI/CD) pipelines using CircleCI, increasing cadence of
                    feature work deployment and decreasing deployment time.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Collaborated with cross-functional teams to gather
                    requirements and deliver solutions that met business
                    objectives.
                  </li>
                </div>
              </ul>
              <p className="text-lg text-textSecondary font-semibold font-display">
                Associate Web Engineer
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                May 2020 - March 2021
              </p>
              <ul className="pl-4 pb-1 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Assisted in the development of web applications, gaining
                    experience in front-end technologies like Next.js and
                    ApolloGQL.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Collaborated with senior developers to troubleshoot and
                    debug code issues.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Participated in code reviews and contributed to coding
                    standards and best practices.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Developed responsive and user-friendly interfaces.
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="mb-6 max-w-screen-md">
            <p className="text-xl text-textPrimary font-semibold font-title inline">
              Natural Habitat Adventures
            </p>
            <span className="pl-3 text-textTertiary">|</span>
            <span className="pl-3 text-textTertiary">Boulder, CO</span>
            <div className="mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted">
              <p className="text-lg text-textSecondary font-semibold font-display">
                Senior Web Developer (Contract)
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                December 2021 - Present
              </p>
              <ul className="pl-4 pb-1 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Development of custom UI features including image carousel,
                    dynamic video rendering, and smart photo resizing via CDN.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Large scale refactoring of old code to introduce ES6
                    consistency and modern patterns.
                  </li>
                </div>
              </ul>
            </div>
            <div className="mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted">
              <p className="text-lg text-textSecondary font-semibold font-display">
                Jr Frontend Web Developer
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                July 2019 - May 2020
              </p>
              <ul className="pl-4 pb-1 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Design and develop new UI features for both end user and
                    content creators within CMS.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Spearheaded API integration to allow for dynamic, real-time
                    data loading.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Collaborate with product team to improve internal features
                    to increase efficiency.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Develop end-to-end integration tests using Cypress.io.
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="mb-6 max-w-screen-md">
            <p className="text-xl text-textPrimary font-semibold font-title inline">
              AMB3R Creative
            </p>
            <span className="pl-3 text-textTertiary">|</span>
            <span className="pl-3 text-textTertiary">Boulder, CO</span>
            <div className="mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted">
              <p className="text-lg text-textSecondary font-semibold font-display">
                Graphic Designer
              </p>
              <p className="text-textTertiary font-title text-sm pb-2">
                June 2018 - February 2019
              </p>
              <ul className="pl-4 pb-1 font-title text-textTertiary text-sm">
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Designed custom apparel for 40+ clients.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Created pixel perfect separations to take designs from
                    digital to screen print.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Itterated with clients and project managers to ensure
                    customer delight.
                  </li>
                </div>
                <div className="pb-1">
                  <ChevronRightIcon className="inline h-4 w-4 text-textPrimary" />
                  <li className="inline pl-2">
                    Developed 86 page look-book and style guide for both
                    internal use and external marketing.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
