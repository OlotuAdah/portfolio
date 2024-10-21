import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaBrain, FaHome, FaInfo } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Education", link: "/", icon: <FaBrain /> },
            { name: "Resume", link: "/", icon: <FaCarRear /> },
            { name: "Contact", link: "/", icon: <FaInfo /> },
          ]}
        />
        <Hero />
        {/* <PointedAngle /> */}
        <Photo />
        <Grid />
      </div>
    </main>
  );
}
