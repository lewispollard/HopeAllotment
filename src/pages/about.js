import React from "react";
import { Layout, SEO } from "../components";

const CommitteePage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Committee"
      />
      <main className="text-center">
        <h1 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          WHO WE ARE &amp; WHAT OUR AIMS ARE
        </h1>
        <div className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide text-justify w-3/4">
          <p className="mb-3">
            We grow organic vegetables and fruit on three allotment sites and
            are in the process of bringing a fourth site into production this
            year. We are constructing raised beds on the new site so that people
            who use wheelchairs or have other mobility problems can get actively
            involved in the project.
          </p>

          <p className="mb-3">
            We have two polytunnels where we grow tomatoes, chillies, peppers,
            cucumbers and other vegetables that benefit from being grown under
            cover.
          </p>
          <p className="mb-3">
            Volunteers who join the project are able to learn or develop their
            gardening skills by helping with a wide range of tasks and
            activities on the sites. These include digging, sowing, planting
            out, watering, weeding and general maintenance. As well as growing
            produce and learning new skills, volunteers benefit from being in
            the open air, getting healthy exercise and meeting new friends.
          </p>
          <p className="mb-3">
            You do not need any previous gardening experience to get involved.
            We provide all the tools, seeds and equipment you need. More
            experienced volunteers are also available to offer friendly help and
            advice about growing your own fruit and vegetables.
          </p>
          <p className="mb-3">
            We run 3 gardening sessions each week on Monday, Thursday and
            Saturday mornings. The Monday and Thursday sessions start at 9.30am
            while the Saturday session starts at 10.00am. Refreshments are
            provided including homemade soup and bread at the end of each
            session. Our delicious, home-made soup!
          </p>
        </div>

        <h1 className="inline-block uppercase p-3 mb-4 text-2xl font-bold bg-yellow-400 mt-6">
          Session Leaders
        </h1>

        <ul className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide md:pl-20  text-justify w-5/12 list-disc">
          <li>Mary Goodlad</li>

          <li>Sheena Clarke</li>

          <li>Julia Woollen </li>

          <li>John Ward</li>

          <li>Phil Webster </li>
        </ul>

        <h1 className="inline-block uppercase p-3 mb-4 text-2xl font-bold bg-yellow-400 mt-6">
          Committee members
        </h1>

        <ul className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide md:pl-12  text-justify w-5/12 list-disc">
          <li>Phil Webster - Company Secretary</li>
          <li>Brian Perrozzi - Chair</li>
          <li>Sheena Clarke - Treasurer</li>
          <li>Betty Smalley</li>

          <li>John Hardy</li>

          <li>Stephen Cooke</li>

          <li>Julia Woollen</li>

          <li>John Ward</li>

          <li>Gordon Henshaw</li>

          <li>James Woollen</li>

          <li>Steve Cater</li>

          <li>Steve Brown</li>

          <li>Mary Goodlad</li>
        </ul>
      </main>
    </Layout>
  );
};

export default CommitteePage;
