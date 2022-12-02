import styled from "styled-components";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";

import { Popover, Trigger, Content, CloseButton } from "./radixPopover";
import FilterRadio from "./filterRadio";
import Heading from "./heading";
import Icon from "./icon";

export default function FilterPopover() {
  return (
    <Popover>
      <Trigger asChild>
        <IconButton aria-label="Filter cocktails" whileTap={{ scale: 0.9 }}>
          <VisuallyHidden>Open filter options</VisuallyHidden>
          <Icon icon="filter" iconStyles={{ marginTop: 4 }} />
        </IconButton>
      </Trigger>
      <Content asChild>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
        >
          <CloseButton aria-label="Close">
            <VisuallyHidden>Close filter options</VisuallyHidden>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </CloseButton>
          <Heading tag="h4">Build type</Heading>
          <FilterRadio />
        </motion.div>
      </Content>
    </Popover>
  );
}

const IconButton = styled(motion.button)`
  all: unset;
  position: absolute;
  right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-brown);
  color: var(--color-yellow);
  border-radius: 50%;
  border: 2px solid var(--color-yellow);
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;
