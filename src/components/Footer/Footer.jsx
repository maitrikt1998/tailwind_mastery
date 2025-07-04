import React from "react";

export const Footer = () => {
  return (
    <div className="py-8 bg-gray-600 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:place-items-center ml-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Logo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, at sunt. Debitis ipsum eum, ad deleniti illum aliquam
              accusantium iste consequuntur cum quibusdam eos tenetur. Voluptas
              tempora similique distinctio fugit?
            </p>
          </div>
          <div className="col-span-3">
            <div className="flex justify-center items-center gap-8">
              <a href="#">Privacy policy</a>
              <a href="#">Home</a>
              <a href="#">About</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
