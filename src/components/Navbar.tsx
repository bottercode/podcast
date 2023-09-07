import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center text-[17px] justify-between px-10 pt-4">
      <h1 className="tracking-widest font-serif">POD</h1>
      <div className="flex gap-10 font-serif">
        <p>Home</p>
        <p>Feature</p>
        <p>Switch to Pod</p>
        <p>Pricing</p>
      </div>
      <div className="font-serif text-[17px]">
        <Button
          variant={"outline"}
          size={"sm"}
          className="mr-2 rounded-3xl hover:bg-[#222222] hover:text-white p-5"
        >
          Login
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className="rounded-3xl hover:bg-[#222222] hover:text-white p-5"
        >
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
