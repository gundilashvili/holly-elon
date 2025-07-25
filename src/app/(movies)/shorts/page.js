import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PaginationOne from "@/components/Pagination/PaginationOne";

export default function Movies() {
  const breadcrumb = {
    title: "🎬 HOLLY SHORTS",
    links: [
      { name: "Home", href: "/" },
      { name: "shorts", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        <PaginationOne title={""} />
      </main>

      <FooterOne />
    </>
  );
}
