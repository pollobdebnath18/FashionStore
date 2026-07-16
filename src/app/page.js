import Navbar from "@/components/common/Navbar";
import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <Featured></Featured>
    </div>
  );
}
