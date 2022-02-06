export const loader = () => {
  const robotText = `
  User-agent: Googlebot
  
  User-agent: *
  Allow: /
  `;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
