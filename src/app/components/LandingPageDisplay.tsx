"use client";
import { useState, useRef, useEffect } from "react";
import { houses } from "../lib/data";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { cn } from "../lib/utils";

function SearchBar({
  input,
  handleInput,
  onSubmit,
  className,
}: {
  input: string;
  handleInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "h-10 border-b-2 border-ice bg-white/15 flex items-center px-2 gap-x-2 md:max-w-3/4 md:order-1",
        className
      )}
    >
      <Search strokeWidth={2} className="size-4 inline text-zinc-400" />
      <input
        type="text"
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Search open houses..."
        className="inline w-full h-full bg-transparent text-white placeholder:text-zinc-400 focus:outline-none"
      />
    </form>
  );
}
export default function LandingPageDisplay() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [housesIndex, setHousesIndex] = useState<number>(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dialogRef.current?.showModal();
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    // Wait for fade out animation to complete
    setTimeout(() => {
      dialogRef.current?.close();
    }, 300);
  };

  return (
    <div className="w-full h-screen overflow-x-clip p-8 md:grid md:grid-cols-2">
      <div className="md:order-1 md:self-center md:space-y-8">
        <h1 className="text-7xl text-ice font-decorative">
          Haunted House, <br />
          Open House
        </h1>
        <SearchBar
          input={searchValue}
          handleInput={setSearchValue}
          onSubmit={handleSubmit}
          className="hidden md:flex"
        />
      </div>
      <Image
        src={houses[housesIndex].image}
        alt=""
        width={450}
        height={450}
        className="row-span-2 md:order-0 self-end w-full h-full"
      />
      <p className="font-condensed font-light italic text-white md:self-end md:order-1">
        {houses[housesIndex].location}
      </p>
      <div className="flex py-8 gap-2 justify-center md:order-1 col-span-2 self-end">
        {houses.map((_, index) => (
          <button
            key={index}
            onClick={() => setHousesIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
              index === housesIndex ? "bg-crimson w-6" : "bg-white/30"
            }`}
            aria-label={`View house ${index + 1}`}
          />
        ))}
      </div>
      <SearchBar
        input={searchValue}
        handleInput={setSearchValue}
        onSubmit={handleSubmit}
        className="md:hidden"
      />
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 backdrop:backdrop-blur-sm p-8 rounded-lg bg-[#33393e] w-1/2 h-1/4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0"
      >
        <div
          className={`w-full h-full transition-opacity duration-300  ${
            isPopupOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => handlePopupClose()}
            aria-label="Close dialog"
            className="absolute top-4 right-4 transition-colors hover:cursor-pointer"
          >
            <X className="text-white hover:text-crimson size-4" />
          </button>
          <div className="w-full h-full flex justify-center items-center">
            <p className="w-full text-ice text-center">
              Thank you for your search! <br />
              Currently, this is a demo site and search
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
