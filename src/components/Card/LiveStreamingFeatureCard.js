import Image from "next/image";

export default function LiveStreamingFeatureCard({ feature }) {
  return (
    <div className="feathur-card text-center"  style={{  minHeight: 320}}>
      <Image src={feature.image} alt="icon" style={{width:40, height:40}}/>
      <h4 className="mt-30 mb-0 fw-normal text-uppercase feature-title">
        {feature.title}
      </h4>
      <p>{feature.description}</p>
    </div>
  );
}
