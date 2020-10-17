import React from "react";
import { Layout, SEO, MapContainer } from "../components";

const LocationPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Contact"
      />
      <main className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400 uppercase">
          Location
        </h2>
        <p>Gimme dat google map</p>
        <MapContainer
          selectedPlace={{ lat: 53.41631155973524, lng: -1.4416388707955667 }}
        />
      </main>
    </Layout>
  );
};

export default LocationPage;
