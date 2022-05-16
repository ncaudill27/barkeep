import styled from "styled-components";

function TabletBlob(props: any) {
  return (
    <svg
      viewBox="0 0 960 540"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      {...props}
    >
      <g transform="translate(960, 0)">
        <path
          d="M0 486C-110.5 488 -221 490 -243 420.9C-265 351.8 -198.5 211.5 -224.3 129.5C-250.1 47.5 -368 23.7 -486 0L0 0Z"
          fill="#e1d0b9"
        ></path>
        <path
          d="M0 324C-73.7 325.3 -147.3 326.7 -162 280.6C-176.7 234.5 -132.4 141 -149.5 86.3C-166.7 31.7 -245.4 15.8 -324 0L0 0Z"
          fill="#a69d66"
        ></path>
        <path
          d="M0 162C-36.8 162.7 -73.7 163.3 -81 140.3C-88.3 117.3 -66.2 70.5 -74.8 43.2C-83.4 15.8 -122.7 7.9 -162 0L0 0Z"
          fill="#828641"
        ></path>
      </g>
      <g transform="translate(0, 540)">
        <path
          d="M0 -486C30.1 -379.1 60.3 -272.2 141.5 -245.1C222.7 -217.9 355 -270.6 420.9 -243C486.8 -215.4 486.4 -107.7 486 0L0 0Z"
          fill="#e1d0b9"
        ></path>
        <path
          d="M0 -324C20.1 -252.7 40.2 -181.5 94.3 -163.4C148.5 -145.3 236.6 -180.4 280.6 -162C324.5 -143.6 324.3 -71.8 324 0L0 0Z"
          fill="#a69d66"
        ></path>
        <path
          d="M0 -162C10 -126.4 20.1 -90.7 47.2 -81.7C74.2 -72.6 118.3 -90.2 140.3 -81C162.3 -71.8 162.1 -35.9 162 0L0 0Z"
          fill="#828641"
        ></path>
      </g>
    </svg>
  );
}

const GreenTablet = styled(TabletBlob)`
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: 500px) {
    display: revert;
  }

  @media screen and (min-width: 1600px) {
    display: none;
  }
`;

export default GreenTablet;
