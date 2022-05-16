import styled from "styled-components";

function MobileBlob(props: any) {
  return (
    <svg
      viewBox="0 0 540 1860"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      {...props}
    >
      <g transform="translate(540, 0)">
        <path
          d="M0 486C-111.5 488.6 -223.1 491.2 -243 420.9C-262.9 350.6 -191.3 207.3 -216.5 125C-241.7 42.7 -363.9 21.3 -486 0L0 0Z"
          fill="#e1d0b9"
        ></path>
        <path
          d="M0 324C-74.4 325.7 -148.7 327.5 -162 280.6C-175.3 233.7 -127.5 138.2 -144.3 83.3C-161.2 28.5 -242.6 14.2 -324 0L0 0Z"
          fill="#a69d66"
        ></path>
        <path
          d="M0 162C-37.2 162.9 -74.4 163.7 -81 140.3C-87.6 116.9 -63.8 69.1 -72.2 41.7C-80.6 14.2 -121.3 7.1 -162 0L0 0Z"
          fill="#828641"
        ></path>
      </g>
      <g transform="translate(0, 1860)">
        <path
          d="M0 -486C86.7 -474.3 173.4 -462.5 243 -420.9C312.6 -379.2 365.1 -307.6 402.7 -232.5C440.3 -157.4 463.2 -78.7 486 0L0 0Z"
          fill="#e1d0b9"
        ></path>
        <path
          d="M0 -324C57.8 -316.2 115.6 -308.4 162 -280.6C208.4 -252.8 243.4 -205.1 268.5 -155C293.6 -104.9 308.8 -52.5 324 0L0 0Z"
          fill="#a69d66"
        ></path>
        <path
          d="M0 -162C28.9 -158.1 57.8 -154.2 81 -140.3C104.2 -126.4 121.7 -102.5 134.2 -77.5C146.8 -52.5 154.4 -26.2 162 0L0 0Z"
          fill="#828641"
        ></path>
      </g>
    </svg>
  );
}

const GreenMobile = styled(MobileBlob)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export default GreenMobile;