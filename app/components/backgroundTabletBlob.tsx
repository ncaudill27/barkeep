import styled from "styled-components";

function TabletBlob(props) {
  return (
    <svg
      viewBox="0 0 540 960"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      {...props}
    >
      <g transform="translate(540, 0)">
        <path
          d="M0 432C-30.1 342.7 -60.2 253.5 -132 228.6C-203.8 203.8 -317.2 243.4 -374.1 216C-431.1 188.6 -431.5 94.3 -432 0L0 0Z"
          fill="#f7e3d8"
        ></path>
        <path
          d="M0 288C-20.1 228.5 -40.2 169 -88 152.4C-135.8 135.9 -211.5 162.2 -249.4 144C-287.4 125.8 -287.7 62.9 -288 0L0 0Z"
          fill="#f7cdca"
        ></path>
        <path
          d="M0 144C-10 114.2 -20.1 84.5 -44 76.2C-67.9 67.9 -105.7 81.1 -124.7 72C-143.7 62.9 -143.8 31.4 -144 0L0 0Z"
          fill="#f5c2c8"
        ></path>
      </g>
      <g transform="translate(0, 960)">
        <path
          d="M0 -432C87.8 -427.8 175.7 -423.6 216 -374.1C256.3 -324.6 249.1 -229.9 277.1 -160C305.2 -90.1 368.6 -45.1 432 0L0 0Z"
          fill="#f7e3d8"
        ></path>
        <path
          d="M0 -288C58.6 -285.2 117.1 -282.4 144 -249.4C170.9 -216.4 166 -153.3 184.8 -106.7C203.5 -60.1 245.7 -30 288 0L0 0Z"
          fill="#f7cdca"
        ></path>
        <path
          d="M0 -144C29.3 -142.6 58.6 -141.2 72 -124.7C85.4 -108.2 83 -76.6 92.4 -53.3C101.7 -30 122.9 -15 144 0L0 0Z"
          fill="#f5c2c8"
        ></path>
      </g>
    </svg>
  );
}

const TabletBackground = styled(TabletBlob)`
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: 500px) {
    display: revert;
  }

  @media screen and (min-width: 1300px) {
    display: none;
  }
`;

export default TabletBackground;
