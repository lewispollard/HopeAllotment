import React from "react";
import { Layout, SEO } from "../components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import Leaflet from "../../public/downloads/Leaflet_A4_2015.pdf";
import Brochure from "../../public/downloads/Brochure - user.pdf";
import BrochureImg from "../images/brochure_front.png";
import LeafletImg from "../images/leaflet-front.png";

const LeafletsPage = () => {
  return (
    <Layout>
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
            <hr />
            <img src={LeafletImg} className="mx-auto" />
          </a>
        </div>
        <div className="mx-auto max-w-screen-sm mt-6">
          <a href={Brochure} target="_blank" rel="noopener noreferrer" download>
            <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 text-white uppercase">
              Brochure
            </h2>
            <hr />
            <img src={BrochureImg} className="mx-auto" />
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default LeafletsPage;
