import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[70px] text-primary font-extrabold py-10 mr-10">
          Create Magical Stories for kids in moments!
          </h2>
          <p className="text-2xl text-primary font-light">
            Create fun, personalized stories that bring your child's adventures
            to life, sparking their imagination and love for reading—in just a
            few seconds!
          </p>
          <Link href={'/create-story'}>
          <Button size='lg' color='primary' className='mt-5 font-bold text-2xl p-8'>Create Story</Button>
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Image src={"/hero.png"} alt="hero" width={500} height={300} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
