import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic"; 
const VideoOne = dynamic(() => import("@/components/Video/VideoOne"), {
  ssr: false,
});

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card-small position-relative">
     
      <Image src={movie.image} alt="card-img" className="w-100" />
  
      {movie.isRibbon && (
        <div className="movie-badge position-absolute">
          <span>{movie.count}</span>
        </div>
      )}
  
      <VideoOne src={movie.videoSrc} />
 
      <div className="details position-absolute text-center">
        <h4 className="movie-name text-uppercase fw-normal">
          <Link href={movie.href} className="gradient-link fw-normal">
            {movie.title}
          </Link>
        </h4> 
      </div>
    </div>
  );
}
