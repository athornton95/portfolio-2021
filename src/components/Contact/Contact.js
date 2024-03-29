import React from "react";

const Contact = (props) => {
  const { refCallback } = props;
  return (
    <div
      className="flex sm:items-center pt-24 section"
      id="contact"
      ref={refCallback}
    >
      <div className="w-full">
        <div className="pb-8 flex">
          <div>
            <span className="text-textPrimary text-xl font-title self-end">
              04. What's Next?
            </span>
          </div>
          <span className="inline-block self-center bg-textTertiary h-px md:w-32 ml-4" />
        </div>
        <div className="max-w-3xl text-center mx-auto">
          <p className="section-header pt-2 pl-0 sm:pt-0 block sm:inline font-display self-end">
            Get in Touch
          </p>
          <p className="mb-12 text-textTertiary text-lg pt-4">
            Although I'm not currently looking for work, I'm always happy to
            chat and entertain exciting opportunties. If you want to start a
            conversation, please shoot me an email or connect with me on
            LinkedIn and we can grab a coffee (virtually or in person).
          </p>
          <a
            href="mailto:ahopkins.co@gmail.com"
            className="text-textSecondary font-title border border-textPrimary px-6 py-4 rounded-md hover:bg-textPrimary hover:text-bgPrimary"
          >
            Say hello
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
