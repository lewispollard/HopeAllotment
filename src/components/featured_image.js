import React from "react";
import GatsbyImage from "gatsby-image";
export default function FeatureImage({img}) {
    if (img === undefined) return null;
    return <GatsbyImage src={img} />;
}