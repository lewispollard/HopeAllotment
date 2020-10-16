import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PlantPic from '../images/plant.jpg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Planting a small plant by hand"
          className="block w-2/3 mx-auto mb-8 rounded-xl shadow-lg"
          src={PlantPic}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Welcome to the Hope Community Allotment Project.
        </h2>
        <div className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide text-justify w-3/4">
          <p className="mb-3">
            The HOPE Community Allotment Project offers a supportive outdoor space where people of all ages can take part in the range of activities involved in maintaining the three plots and growing your own organic produce.
          </p>
          <p className="mb-3">
            The community allotment project is open to all and is a great place to learn new skills, make new friends while enjoying the fresh air and getting some exercise.
          </p>
          <p className="mb-3">
            We are a small not for profit organization and welcome people experiencing social barriers including learning disabilities, autism, physical or mental ill-health, isolation, long term unemployment to some along, meet the team, have fun and try something new.
          </p>
          <p className="mb-3">
            Volunteers are always needed too. If you have a few hours a week spare, we provide all the tools, equipment, seeds, help and advice you need to start growing your own fruit and veg.
          </p>
          <p className="mb-3">
            Participants are charged just £1 for each session this helps cover our costs and includes light refreshments and home-made soup.
          </p>
          <p className="mb-3">
            Sessions run on Monday &amp; Thursday from 9:30am – 1pm. A Saturday sessions runs 10am until perhaps 3pm during the warmer months.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
