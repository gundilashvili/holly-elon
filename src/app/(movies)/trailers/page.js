import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Trailers from "@/components/Movie/Trailers";

export default function Movies() {
  const breadcrumb = {
    title: "🎬 HOLLY TRAILERS",
    links: [
      { name: "Home", href: "/" },
      { name: "Trailers", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main" style={{marginBottom: 100}}>
        {/* <!-- Start Pagination Area --> */}
        <Trailers />
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
