import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { SEO } from "../components";

import Leaflet from "../../content/downloads/Leaflet_A4_2015.pdf";
import Brochure from "../../content/downloads/Brochure - user.pdf";

const LeafletsPage = ({ data }) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .react-pdf__Page__canvas {
          margin: 0 auto;
          max-width: 100%;
          max-height: 100vh;
        }
      `,
        }}
      />

      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Leaflets"
      />
      <main className="text-center">
        <h2 className="inline-block p-3 mb-6 text-2xl font-bold headingpattern uppercase">
          Leaflets &amp; Downloads
        </h2>

        <p className="mb-5">
          Click on a preview image to download a full PDF version.
        </p>

        <div className="mx-auto max-w-screen-sm">
          <a href={Leaflet} target="_blank" rel="noopener noreferrer" download>
            <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 text-white uppercase">
              Poster
            </h2>
            <GatsbyImage
              image={data.leaflet.childImageSharp.gatsbyImageData}
              className="mx-auto shadow-lg"
              alt="Leaflet front cover"
              objectFit="scale-down" />
          </a>
        </div>
        <hr className="mt-6" />
        <div className="mx-auto max-w-screen-sm mt-6">
          <a href={Brochure} target="_blank" rel="noopener noreferrer" download>
            <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 text-white uppercase">
              Brochure
            </h2>
            <GatsbyImage
              image={data.brochure.childImageSharp.gatsbyImageData}
              className="mx-auto shadow-lg"
              alt="Brochure front cover"
              objectFit="scale-down" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default LeafletsPage;

export const query = graphql`{
  leaflet: file(relativePath: {eq: "leaflet-front.png"}) {
    childImageSharp {
      gatsbyImageData(width: 640, layout: CONSTRAINED)
    }
  }
  brochure: file(relativePath: {eq: "brochure_front.png"}) {
    childImageSharp {
      gatsbyImageData(width: 640, layout: CONSTRAINED)
    }
  }
}
`;
