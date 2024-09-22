import React from "react";
import rachael from "../assets/img/rachael.png";
import recommentadtion1 from "../assets/img/recommentation1.png";
import recommentadtion2 from "../assets/img/recommentation2.png";
import recommentadtion3 from "../assets/img/recommentation3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommendation = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", padding:"", width:"30px", height:"25px", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", padding:"", width:"30px", height:"25px", }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10 mx-10 mb-5">
        <div className=" mb-5">
          <h1 className="text-amber-200 ">Our Recommendation</h1>
          <h1 className="text-4xl font-bold ml-auto mr-auto">
            Featured Apartments
          </h1>
        </div>
      <Slider {...settings}>
        {Data.map((d) => (
          <div className="flex justify-between ml-12 ">
            <img src={d.bgimg} alt=""  className="w-3/4"/>
            <div className=" bg-white grid gap-3 w-3/4 p-5 rounded-b-xl shadow-xl">
              <h1 className="text-2xl font-bold">{d.header}</h1>
              <h3>{d.amount}</h3>
              <div className="flex relative right-10">
                <img src={d.img} alt="" srcset="" />
                <div className="mt-8 text-[13px]">
                  <h1>{d.name}</h1>
                  <h1>{d.location}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Data = [
  {
    bgimg: recommentadtion1,
    header: "Roselands House",
    amount: "$ 35.000.000",
    name: "Dianne Russell",
    location: "Chicago, USA",
    img: rachael,
  },
  {
    bgimg: recommentadtion2,
    header: "Woodlandside",
    amount: "$ 20.000.000",
    name: "Robert Fox",
    location: "Dr. San Jose, South Dakota",
    img: rachael,
  },
  {
    bgimg: recommentadtion3,
    header: "The Old Lighthouse",
    amount: "$ 44.000.000",
    name: "Ronald Richards",
    location: "Santa Ana, Illinois",
    img: rachael,
  },
  {
    bgimg: recommentadtion2,
    header: "Roselands House",
    amount: "$ 35.000.000",
    name: "Dianne Russell",
    location: "Chicago, USA",
    img: rachael,
  },
  {
    bgimg: recommentadtion1,
    header: "Roselands House",
    amount: "$ 35.000.000",
    name: "Dianne Russell",
    location: "Chicago, USA",
    img: rachael,
  },
  {
    bgimg: recommentadtion3,
    header: "Roselands House",
    amount: "$ 35.000.000",
    name: "Dianne Russell",
    location: "Chicago, USA",
    img: rachael,
  },
];
export default Recommendation;
