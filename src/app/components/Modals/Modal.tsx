"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

// type alias

// type ModalProps = {
//   isOpen?: boolean;
//   onClose: () => void;
//   onSubmit: () => void;
//   title?: string;
//   body?: React.ReactElement;
//   footer?: React.ReactElement;
//   actionLabel: string;
//   disabled?: boolean;
//   secondaryAction?: () => void;
//   secondaryLabel?: string;
// }

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // Because inline functions are cheap, the re-creation of functions on each rendering is not a problem.
  // A few inline functions per component are acceptable.

  const handleClose = useCallback(() => {
    // if already disabled
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  // bg-neutral-800/70: change opacity to 70
  // z-index: control the stack order of an element
  // The z-index property in CSS controls the vertical stacking order of elements that overlap.
  // As in, which one appears as if it is physically closer to you.
  // z-index only affects elements that have a position value other than static (the default).

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center overflow-x-hidden overflow-y-auto outline-none itmes-center bg-neutral-800/70 focus:outline-none">
        {/* Modal Outer Container */}
        <div className="relative w-full h-full mx-auto my-6 md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
          {/* Content Box */}
          <div
            className={`translate h-full duration-300 
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate focus:outline-none md:h-auto lg:h-auto">
              {/* HEADER */}
              <div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
                <button
                  className="absolute p-1 transition border-0 left-9 hover:opacity-70"
                  onClick={handleClose}
                >
                  <IoMdClose />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>

              {/* BODY */}
              <div className="relative flex-auto p-6">{body}</div>

              {/* footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
