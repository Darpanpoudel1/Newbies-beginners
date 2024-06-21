import Image from "next/image";
import HeaderBar from "./_components/HeaderBar";
import AsideBar from "./_components/AsideBar";
import Jobs from "./_components/Jobs";

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="flex px-7 py-7">
        <AsideBar />
        <Jobs />
      </section>
    </div>

  );
}
