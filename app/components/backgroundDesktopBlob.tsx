import styled from "styled-components";
function DesktopBlob(props) {
  return (
    <svg
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      {...props}
    >
      <g transform="translate(900, 0)">
        <path
          d="M0 540.8C-40.8 434.4 -81.5 327.9 -171 296.2C-260.5 264.4 -398.6 307.3 -468.4 270.4C-538.1 233.5 -539.5 116.7 -540.8 0L0 0Z"
          fill="#f7e3d8"
        ></path>
        <path
          d="M0 360.6C-27.2 289.6 -54.4 218.6 -114 197.5C-173.6 176.3 -265.7 204.9 -312.2 180.3C-358.8 155.7 -359.7 77.8 -360.6 0L0 0Z"
          fill="#f7cdca"
        ></path>
        <path
          d="M0 180.3C-13.6 144.8 -27.2 109.3 -57 98.7C-86.8 88.1 -132.9 102.4 -156.1 90.1C-179.4 77.8 -179.8 38.9 -180.3 0L0 0Z"
          fill="#f5c2c8"
        ></path>
      </g>
      <g transform="translate(0, 600)">
        <path
          d="M0 -540.8C118.6 -540.5 237.2 -540.3 270.4 -468.4C303.6 -396.5 251.5 -253 282.3 -163C313.2 -73 427 -36.5 540.8 0L0 0Z"
          fill="#f7e3d8"
        ></path>
        <path
          d="M0 -360.6C79.1 -360.4 158.1 -360.2 180.3 -312.2C202.4 -264.3 167.7 -168.7 188.2 -108.7C208.8 -48.7 284.7 -24.3 360.6 0L0 0Z"
          fill="#f7cdca"
        ></path>
        <path
          d="M0 -180.3C39.5 -180.2 79.1 -180.1 90.1 -156.1C101.2 -132.2 83.8 -84.3 94.1 -54.3C104.4 -24.3 142.3 -12.2 180.3 0L0 0Z"
          fill="#f5c2c8"
        ></path>
      </g>
    </svg>
  );
}

const DesktopBackground = styled(DesktopBlob)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;

  @media screen and (min-width: 1300px) {
    display: revert;
  }
`;

export default DesktopBackground;
