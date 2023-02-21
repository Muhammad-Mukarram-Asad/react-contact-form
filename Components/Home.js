import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-2 box mt-3 text-center">
        <h3>
          Welcome {user && user.email} <br /> 
          to <span style={{color:"white", backgroundColor:"black"}}>  Jaffer Group Of Companies </span>
        </h3>
      </div>
      <div style={{width:'100%', height: '60%', marginTop: 20, marginBottom: 80}}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          // spaceBetween={0}
          slidesPerView={1}
        >
          {/* 1st Slide */}
          <SwiperSlide>
            <div style={{width:'100%', height:'60%'}}>
              <img style={{width:'80%', height:'30%'}}
                src="https://www.jaffer.com/header_images/jafferalphapng_14186.png"
                alt=""
              />
              {/* <p id="swipper_inner_div_p"> JAFFER ALPHA</p> */}
            </div>
          </SwiperSlide>

          {/* 2nd Slide */}

          <SwiperSlide>
            <div style={{width:'100%', height:'20%'}}>
              <img style={{width:'80%', height:'30%'}}
                src="https://www.jaffer.com/header_images/slide1png_11426.png"
                alt=""
              />
              {/* <p id="swipper_inner_div_p"> JAFFER 2nd Image</p> */}
            </div>
          </SwiperSlide>

{/* 3rd Slide */}
          <SwiperSlide>
            <div style={{width:'100%', height:'20%'}}>
              <img style={{width:'80%', height:'30%'}}
                src="https://www.jaffer.com/header_images/slide3jpg_11064.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

{/* 4th Slide */}
          <SwiperSlide>
            <div style={{width:'100%', height:'20%'}}>
              <img style={{width:'80%', height:'30%'}}
                src="https://www.jaffer.com/header_images/slide6jpg_12417.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
 {/* 5th Slide */}
          <SwiperSlide>
            <div style={{width:'100%', height:'20%'}}>
              <img style={{width:'80%', height:'30%'}}
                src="https://www.jaffer.com/header_images/slide8jpg_1809.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="d-grid gap-2 mt-10">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};


export default Home;
