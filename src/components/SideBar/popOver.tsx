import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiUser } from "react-icons/fi";
import { SideBarIcon } from "./sideBar";

export default function myPopOver() {
  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        <>
          <Popover.Button className="flex mx-auto ">
            <SideBarIcon icon={<FiUser size="24" />} text="Your Account" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute float-right z-10 mt-3 w-auto max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="gap-8 bg-white p-7 ">1111</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
}
