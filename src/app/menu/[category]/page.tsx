import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((p) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group hover:bg-fuchsia-50" key={p.id} href={`/product/${p.id}`}>
          {/* Image Container */}
          {p.img && (
            <div className=" relative h-[80%] ">
              <Image src={p.img} alt=""  fill className="object-contain"/>
            </div>
          )}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{p.title}</h1>
            <h2 className="group-hover:hidden text-xl">{p.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white rounded-md p-2">Add to Cart</button>
          </div>
          {/* Text Container */}
        </Link>
      ))}
    </div>
  );
}

export default Category;
