import React from "react";

import SEO from "../components/seo";
import abductionIllustration from "../../content/pages/images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <div>
      <SEO title="404: Not found" />
      <div className="text-center">
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <h2 className="heading-pattern text-2xl font-bold mx-auto inline-block my-8 p-3">
          Looks like this page was not found...
        </h2>
      </div>
    </div>
  );
}

export default NotFoundPage;
