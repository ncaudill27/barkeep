import styled from "styled-components";

function MobileBackground(props: any) {
  return (
    <>
      <StyledTopBlob />
      <StyledBottomBlob />
    </>
  );
}

function TopMobileBlob(props: any) {
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
          d="M0 540C-108.8 534.1 -217.5 528.3 -270 467.7C-322.5 407 -318.6 291.6 -354.2 204.5C-389.8 117.4 -464.9 58.7 -540 0L0 0Z"
          fill="#f7e3d8"
        ></path>
        <path
          d="M0 360C-72.5 356.1 -145 352.2 -180 311.8C-215 271.3 -212.4 194.4 -236.1 136.3C-259.9 78.3 -309.9 39.1 -360 0L0 0Z"
          fill="#f7cdca"
        ></path>
        <path
          d="M0 180C-36.3 178 -72.5 176.1 -90 155.9C-107.5 135.7 -106.2 97.2 -118.1 68.2C-129.9 39.1 -155 19.6 -180 0L0 0Z"
          fill="#f5c2c8"
        ></path>
      </g>
    </svg>
  );
}

function BottomMobileBlob(props: any) {
  return (
    <svg
      viewBox="0 0 540 1860"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      {...props}
    >
      <g transform="translate(0, 1860)">
        <path
          d="M0 -540C112.1 -536.1 224.2 -532.2 270 -467.7C315.8 -403.1 295.2 -278 329.1 -190C363 -102 451.5 -51 540 0L0 0Z"
          fill="#f7e3d8"
        ></path>
        <path
          d="M0 -360C74.7 -357.4 149.5 -354.8 180 -311.8C210.5 -268.8 196.8 -185.4 219.4 -126.7C242 -68 301 -34 360 0L0 0Z"
          fill="#f7cdca"
        ></path>
        <path
          d="M0 -180C37.4 -178.7 74.7 -177.4 90 -155.9C105.3 -134.4 98.4 -92.7 109.7 -63.3C121 -34 150.5 -17 180 0L0 0Z"
          fill="#f5c2c8"
        ></path>
      </g>
    </svg>
  );
}

const StyledTopBlob = styled(TopMobileBlob)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const StyledBottomBlob = styled(BottomMobileBlob)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export default MobileBackground;
