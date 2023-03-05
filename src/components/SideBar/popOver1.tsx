import { useState } from "react";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
import { FiUser } from "react-icons/fi";
import { SideBarIcon } from "./sideBar";

export default function MyPopover() {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover>
      <Popover.Button className="flex mx-auto ">
        <SideBarIcon icon={<FiUser size="24" />} text="Your Account" />
      </Popover.Button>

      <Popover.Panel style={styles.popper} {...attributes.popper}>
        {11111}
      </Popover.Panel>
    </Popover>
  );
}
