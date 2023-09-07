import Body from "@/components/Body";
import Bottom from "@/components/Bottom";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="mx-4 max-2xl:mx-2">
      <Navbar />
      <Body />
      <Bottom />
    </div>
  );
}
