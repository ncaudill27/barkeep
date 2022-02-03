const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "970zizvc",
  dataset: "production",
  apiVersion: "2022-01-31",
  token:
    "skZjPQboZjcIO9gQxM6xwVoMDg7M2LJGGwko7v2SunUxg0Z2aTKT1JvgkPOMv9OksCuwtGmQyKWAHE31VRgXMNFvvsci87zWwtqwhKiFBbqaInDn99nm1AGZqelHtFWzxF6C4GDqCO1aZr56Daep2T0101AD8pAkawYz2TOiagK9oyV9LHJN",
});

export default client;
