import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Contact"
      />
      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl mx-auto font-bold headingpattern uppercase">
          Contact Us
        </h2>
        <div className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide text-justify w-3/4">
          <p className="mb-2">
            We want the people of Sheffield to get involved with our allotments.
            We are always looking for new people who want to take an active role
            in our group.
          </p>
          <p className="mb-2"></p>
          <p className="mb-2">
            If you want to meet new people, get more exercise, or simply have a
            keen interest in gardening, we want to hear from you.
          </p>
          <p className="mb-6">Please leave a contact message below.</p>
        </div>
        <form className="mx-auto md:w-1/2">
          <label
            className="block mb-2 text-xs text-left font-bold uppercase"
            htmlFor="name"
          >
            Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="name"
            placeholder="Your Name"
            type="text"
          />

          <label
            className="block mb-2 text-xs text-left font-bold uppercase"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="w-full mb-6 form-input"
            id="email"
            placeholder="Your Email"
            type="text"
          />

          <label
            className="block mb-2 text-xs text-left font-bold uppercase"
            htmlFor="phone"
          >
            Phone
          </label>

          <input
            className="w-full mb-6 form-input"
            id="phone"
            placeholder="Your Phone Number"
            type="text"
          />

          <label
            className="block mb-2 text-xs text-left font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
