import React, { useState } from "react";
import rachael from "../assets/img/rachael.png";
import reviewimg from "../assets/img/reviewimg.png";
import reviewimg1 from "../assets/img/reviewimg1.png";
import reviewimg2 from "../assets/img/reviewimg2.png";
import right from "../assets/img/arrow-right.svg";
import left from "../assets/img/arrow-left.svg";

const Review = () => {
  const Data = [
    {
      bgimg: reviewimg,
      header: "I got the Room of my Dreams!",
      content_text:
        "I had an incredible stay at Dimple 44! The staff were friendly and welcoming, the room was spacious and clean, and the breakfast buffet was delicious. I highly recommend this hotel to anyone visiting Lagos.",
      name: "Dianne Russell",
      location: "Chicago, USA",
      img: rachael,
    },
    {
      bgimg: reviewimg1,
      header: "I got the Room of my Dreams!",
      content_text:
        "I had an incredib lohfjknjfknjn le stay at Dimple 44! The staff were friendly and welcoming, the room was spacious and clean, and the breakfast buffet was delicious. I highly recommend this hotel to anyone visiting Lagos.",
      name: "Dianne Russell",
      location: "Chicago, USA",
      img: rachael,
    },
    {
      bgimg: reviewimg2,
      header: "I got the Room of my Dreams!",
      content_text:
        "I had an incredible stay at hjgvbhssbfkjnvkjndkjgnjk Dimple 44! The staff were friendly and welcoming, the room was spacious and clean, and the breakfast buffet was delicious. I highly recommend this hotel to anyone visiting Lagos.",
      name: "Dianne Russell",
      location: "Chicago, USA",
      img: rachael,
    },
  ];
  const [current, setCurrent] = useState(0);
  const lenght = Data.length;
  const previous = () => {
    setCurrent (current === 0? lenght - 1: current -1)
  }
  const next = () => {
    setCurrent (current === lenght- 1 ? 0 : current +1)
  }
  return (
    <section className="flex h-[100vh my-auto] mx-10 mt-7">
      <div>
        <center className="mb-5">
          <h1 className="text-amber-200 ">See Our Review</h1>
          <h1 className="text-4xl font-bold ml-auto mr-auto">
            What Our Clients Say About Us
          </h1>
        </center>

        {Data.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <img
                  src={item.bgimg}
                  alt=""
                  srcset=""
                  className="ml-auto mr-auto bg-none"
                />

                <div className=" bg-white grid  gap-5 sm:-translate-y-3/4 translate-y-0 w-3/4 ml-auto mr-auto p-5 rounded-3xl shadow-xl">
                  <h1 className="text-2xl font-bold">{item.header}</h1>
                  <h2>{item.content_text}</h2>

                  <div className="grid sm:flex ml-auto mr-auto ">
                    <img src={item.img} alt="" srcset="" />
                    <div className="mt-8">
                      <h1>{item.name}</h1>
                      <h1>{item.location}</h1>
                    </div>
                  </div>
                 <div className="flex ml-auto mr-auto gap-10 ">
                 <img src={left} alt="" srcset="" className="w-[20px]"  onClick={previous}/>
                 <img src={right} alt="" srcset="" className="w-[20px]" onClick={next} />
                 </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Review;
