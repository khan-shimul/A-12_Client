import img1 from "../../../assets/dillon-kydd-2keCPb73aQY-unsplash.jpg";
import img2 from "../../../assets/towfiqu-barbhuiya-05XcCfTOzN4-unsplash.jpg";
import img3 from "../../../assets/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg";
import img4 from "../../../assets/r-architecture-KQPEhYweLrQ-unsplash.jpg";
import img5 from "../../../assets/r-architecture-wJAOeXvxudM-unsplash.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[800px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property are available here, Choose
                your dream property here!!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn  mr-5">Discover More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property are available here, Choose
                your dream property here!!!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn  mr-5">Discover More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property are available here, Choose
                your dream property here!!!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn  mr-5">Discover More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property are available here, Choose
                your dream property here!!!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn  mr-5">Discover More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property are available here, Choose
                your dream property here!!!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn  mr-5">Discover More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
