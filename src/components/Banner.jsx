import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      <div className="w-full h-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1636953099671-481a72803051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1642403711347-8b4905e26fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1642261366979-704a073bef4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1642364706728-14a86b585bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1642403711604-3908e90960ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1644215529308-7877e68eb0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="banner image"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
