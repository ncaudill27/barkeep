import styled from "styled-components";
function DesktopBlob(props: any) {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      {...props}
    >
      <g transform="translate(900, 0)">
        <path
          d="M0 486.7C-108.6 487.6 -217.3 488.4 -243.4 421.5C-269.5 354.7 -213.1 220 -239.9 138.5C-266.7 57 -376.7 28.5 -486.7 0L0 0Z"
          fill="#e1d0b9"
        ></path>
        <path
          d="M0 324.5C-72.4 325.1 -144.8 325.6 -162.2 281C-179.7 236.4 -142.1 146.7 -159.9 92.3C-177.8 38 -251.1 19 -324.5 0L0 0Z"
          fill="#a69d66"
        ></path>
        <path
          d="M0 162.2C-36.2 162.5 -72.4 162.8 -81.1 140.5C-89.8 118.2 -71 73.3 -80 46.2C-88.9 19 -125.6 9.5 -162.2 0L0 0Z"
          fill="#828641"
        ></path>
      </g>
      <g transform="translate(0, 600)">
        <path
          d="M0 -486.7C70.9 -450.2 141.8 -413.6 218 -377.6C294.2 -341.6 375.9 -306.2 421.5 -243.4C467.2 -180.5 477 -90.3 486.7 0L0 0Z"
          fill="#e1d0b9"
        ></path>
        <path
          d="M0 -324.5C47.3 -300.1 94.5 -275.7 145.3 -251.7C196.2 -227.7 250.6 -204.1 281 -162.2C311.5 -120.4 318 -60.2 324.5 0L0 0Z"
          fill="#a69d66"
        ></path>
        <path
          d="M0 -162.2C23.6 -150.1 47.3 -137.9 72.7 -125.9C98.1 -113.9 125.3 -102.1 140.5 -81.1C155.7 -60.2 159 -30.1 162.2 0L0 0Z"
          fill="#828641"
        ></path>
      </g>
    </svg>
  );
}

const GreenDesktop = styled(DesktopBlob)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;

  @media screen and (min-width: 1600px) {
    display: revert;
  }
`;

export default GreenDesktop;
