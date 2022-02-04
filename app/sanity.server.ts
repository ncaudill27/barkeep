import SanityClient from "@sanity/client";

const client = SanityClient({
  projectId: "970zizvc",
  dataset: "production",
  apiVersion: "2022-01-31",
  useCdn: true,
  token: process.env.SANITY_READ_TOKEN,
});

export default client;
