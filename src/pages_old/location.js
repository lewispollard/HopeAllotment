import React from "react";
import { SEO, MapContainer } from "../components";

const LocationPage = () => {
  return (
    <div>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Location"
      />
      <main className="text-center">
        <h2 className="inline-block p-3 mb-6 text-2xl font-bold heading-pattern uppercase">
          Location
        </h2>
        <section className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide text-justify w-3/4 space-y-3">
          <p>
            We rent 4 plots on the{" "}
            <a
              href="http://wikimapia.org/16817069/High-Wincobank-allotments"
              rel="noreferrer"
              target="_blank"
              className="text-purple-600 font-semibold hover:text-purple-500"
            >
              High Wincobank Allotment Site
            </a>
            . The site entrance is opposite house no 343 Windmill lane. The plot
            entrance is a few doors up the path on the right hand side on plot
            80.{" "}
          </p>

          <p>
            We are but a short walk away from Firth park centre which is
            accessible via the bus routes:
          </p>
          <ul className="mx-auto text-center space-y-2">
            <li>First: 1A, 3, 35, 38, 75, 76</li>
            <li>Stagecoach: 88</li>
            <li>TM Travel: 17, 32</li>
          </ul>
        </section>
        <section className="w-5/6 mx-auto mt-6">
          <MapContainer
            selectedPlace={{ lat: 53.41561155973524, lng: -1.442938707955667 }}
          />
        </section>
      </main>
    </div>
  );
};

export default LocationPage;
