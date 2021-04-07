import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { SEO } from "../components";

const HistoryPage = ({ data }) => {
  return (
    <div>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="History"
      />
      <main className="text-center">
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          className="block w-5/6 md:w-2/3 mx-auto mb-6 rounded-xl shadow-lg"
          alt="Garden tools in the grass"
          objectFit="scale-down" />

        <h2 className="inline-block p-3 mb-6 text-2xl font-bold headingpattern uppercase">
          History
        </h2>
        <section className="space-y-3 font-medium flex flex-col mx-auto tracking-normal md:tracking-wide text-justify w-3/4">
          <p>
            Trade Base was set up in 1998 by a group of local people who were
            keen to regenerate Firth Park, Shiregreen and Brightside. The group
            secured European Regional Development Funding to develop recycling,
            re-use and restoration activities which would be of benefit to local
            people. The group campaigned to secure the lease of the old Firth
            Park Library to use as a base for community activities, and in
            November 1999 Trade Base was launched. The centre was officially
            opened by David Blunkett MP.
          </p>

          <p>
            Trade Base ran a very successful recycling project which provided
            furniture, household goods, clothes, books and toys to local people
            at affordable costs. The project was instrumental in preventing many
            tonnes of waste materials from landfill.
          </p>

          <p>
            We have provided a variety of community activities over the years.
            Some of you will remember these. They included education courses,
            furniture restoration, re-use and design. Unemployment drop-in
            social and recreation activities for all ages and much more.
          </p>

          <p>
            Trade Base was also the home to many local community groups. We
            provided free support and advice to enable groups to continue
            providing their specialist community activities. We held many open
            days, provided school holiday activities and ran a number of
            community trips to the seaside.
          </p>

          <div className="mx-auto text-center">
            <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 mx-auto text-center text-white uppercase">
              All change at Trade Base
            </h2>
          </div>

          <p>
            The ERDF funding finished and the lottery application to purchase
            the building lease, money for salaries and building improvements was
            unsuccessful. The project was now running on its reserves, small
            grants and funds raised from the sale of goods. The Management
            Committee had to make some hard choices & staffing was reduced to
            one part time worker.
          </p>

          <p>
            A feasibility study was carried out and options were discussed. A
            plan was developed to continue the project on a smaller scale and to
            apply for funds for some new outdoor activities.{" "}
          </p>

          <div className="mx-auto text-center">
            <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 mx-auto text-white uppercase">
              The Birth of the Allotment Project
            </h2>
          </div>

          <p>
            Trade Base were renting two plots of land on the Wincobank Allotment
            site. The workers organised a series of meetings to discuss possible
            development ideas. During 2004 a small sub group developed an action
            plan and were successful in securing some Objective One funding to
            develop a community allotment project. Then is 2007 we were
            successful in obtaining a grant to sum of £190461 from the big
            lotteries reaching communities fund, this enabled us to fund 2 full
            time workers for 3 years this enabled us to develop the project even
            further. Although we met all our targets we failed to get any
            further significant funding so the project is now purely voluntary
            and today we see the benefits of years of committment and hard work.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;

export const query = graphql`{
  file(relativePath: {eq: "dylan-nolte-dUsmF-F-bJg-unsplash.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 576, layout: CONSTRAINED)
    }
  }
}
`;
