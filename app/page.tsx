'use client';

import Link from "next/link";  // Import Link from next/link

import Movies from "./components/homepage/Movies";
import Books from "./components/homepage/Books"
import Music from "./components/homepage/Music"
import Shows from "./components/homepage/Shows"
import Recipes from "./components/homepage/Recipes";
import Portfolio from "./components/homepage/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Movies Block */}
      <div className="border-8 border-solid bg-c-orange min-h-[50px] col-span-1 md:col-span-2 p-3 flex justify-center items-center rounded-lg shadow-lg">
        <Link href='/movies'>
          <Movies />
        </Link>
      </div>

      {/* Blue Block */}
      <div className="border-8 border-solid bg-c-green min-h-[50px] flex justify-center items-center rounded-lg shadow-lg">
        <Link href='/recipes'>
         <Recipes/>
        </Link>
      </div>

      {/* Green Block */}
      <div className="border-8 border-solid bg-c-red min-h-[50px] row-span-1 md:row-span-3 flex justify-center items-center rounded-lg shadow-lg">
          <Link href='/music'>
            <Music/>
          </Link>
      </div>

      {/* Welcome Block */}
      <div className="border-8 border-solid min-h-[50px] row-span-1 md:row-span-2 flex flex-col justify-center items-center order-first md:order-none rounded-lg shadow-xl">
        <h3 className="text-c-gray text-3xl l:text-4xl font-bold md: animate-pulse l:animate-zoom-in-out">Welcome to Sanjverse</h3>
        <p className="font-bold text-c-red l:animate-bounce">Explore my world through movies, music and more</p>
      </div>

      {/* Purple Block */}
      <div className="border-8 border-solid bg-c-yellow min-h-[50px] row-span-1 flex justify-center items-center rounded-lg shadow-lg">
        <Link href='/shows'>
          <Shows/>
        </Link>
      </div>

      {/* Pink Block */}
      <div className="border-8 border-solid bg-c-d-green min-h-[50px] row-span-1 md:row-span-2 flex justify-center items-center rounded-lg shadow-lg">
        <Link href='/books'>
          <Books/>
        </Link>
      </div>

      {/* Teal Block */}
      <div className="border-8 border-solid row-span-1 bg-c-l-orange min-h-[50px] flex justify-center items-center rounded-lg shadow-lg">
        <Link href='https://sanjanaashivanand.github.io/portfolio/#/'>
          <Portfolio/>
        </Link>
      </div>
    </div>
  );
}

