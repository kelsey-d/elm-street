"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function NavList() {
  return (
    <ul className="flex flex-col md:flex-row gap-8 items-baseline text-white">
      {["buy", "rent", "sell"].map((page) => (
        <li key={page}>
          <Link
            href={`/`}
            className="font-condensed uppercase text-2xl md:text-lg"
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      // Wait for the slide animation to complete before closing the dialog
      const timer = setTimeout(() => {
        dialogRef.current?.close();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="navigation-dialog"
      >
        <Menu className="text-crimson block md:hidden" />
      </button>
      <div className="hidden md:block">
        <NavList />
      </div>
      <dialog
        ref={dialogRef}
        id="navigation-dialog"
        className="backdrop:bg-black/50 backdrop:backdrop-blur-sm backdrop:transition-opacity backdrop:duration-500 bg-transparent p-0 m-0 max-w-full max-h-screen inset-0 md:hidden [&:modal]:overflow-hidden"
        onClose={handleClose}
      >
        <nav
          className={`fixed top-0 right-0 w-1/2 h-full border-l bg-[#00080e] border-zinc-800 p-4 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="absolute top-4 right-4 hover:cursor-pointer"
          >
            <X className="text-zinc-500 size-4" />
          </button>
          <NavList />
        </nav>
      </dialog>
    </>
  );
}
