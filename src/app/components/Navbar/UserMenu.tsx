"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export default function UserMenu() {
  const registerModal = useRegisterModal();
  return (
    <div className="flex items-center gap-3">
      <div className="hidden lg:block border-[1px] rounded-full p-2">
        Advertise Your Restaurant!
      </div>
      <div className="hidden lg:block border-[1px] rounded-full p-2">
        Log In
      </div>
      <div className="hidden lg:block border-[1px] rounded-full p-2 cursor-pointer" onClick={registerModal.onOpen}>
        Sign Up
      </div>
      <div
        onClick={() => {}}
        className="p-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition lg:hidden"
      >
        <AiOutlineMenu />
        <Avatar />
      </div>
      <div></div>
    </div>
  );
}
