import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((c) => (
        <Link
          href={`/menu/${c.slug}`}
          key={c.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${c.img})` }}
        >
          <div className={`text-${c.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{c.title}</h1>
            <p className="text-sm my-8">{c.desc}</p>
            <button className={`hidden 2xl:block bg-yellow-400 text-white font-bold py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
