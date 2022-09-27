import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './style-design.css';

import Dog01 from '../../assets/cao01.jpg';
import Gato01 from '../../assets/gato01.png';
import Dog02 from '../../assets/cao02.jpg';
import Gato02 from '../../assets/gato03.jpg';
import Dog03 from '../../assets/cao03.jpg';
import Gato03 from '../../assets/gato05.png';
import Dog04 from '../../assets/cao04.jpg';
import Gato04 from '../../assets/gato02.jpg';
import Dog05 from '../../assets/cao07.jpg';
import Gato05 from '../../assets/gato06.jpg';
import Dog06 from '../../assets/cao06.png';
import Gato06 from '../../assets/gato07.png';

function Design() {
  return (
    <div id='design'>
        <div className="Page-design">
          <div className="Container-design">
             <h3 className="Design">Nossos Bichinhos</h3>
             <Swiper
                slidesPerView={window.screen.width < 800 ? 1 : 3}
                spaceBetween={20}
                slidesPerGroup={window.screen.width < 800 ? 1 : 3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={window.screen.width < 800 ? false : true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
               
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Dog01} alt="Foto" />
                    </div>
           
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                        <img src={Gato01} alt="Foto" />
                    </div>
                 </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Dog02} alt="Foto" />
                    </div>
 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Gato02} alt="Foto" />
                    </div>
                 </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Dog03} alt="Foto" />
                    </div>

                </SwiperSlide>
                 <SwiperSlide>
                    <div className="img-box">
                    <img src={Gato03} alt="Foto" />
                    </div>
                   </SwiperSlide>
                   <SwiperSlide>
                    <div className="img-box">
                    <img src={Dog04} alt="Foto" />
                    </div>
                   </SwiperSlide>
                   <SwiperSlide>
                    <div className="img-box">
                    <img src={Gato04} alt="Foto" />
                    </div>
                   </SwiperSlide>
                   <SwiperSlide>
                    <div className="img-box">
                    <img src={Dog05} alt="Foto" />
                    </div>
                   </SwiperSlide>
                   <SwiperSlide>
                    <div className="img-box">
                    <img src={Gato05} alt="Foto" />
                    </div>
                   </SwiperSlide>
                   <SwiperSlide>
                    <div className="img-box">
                    <img src={Dog06} alt="Foto" />
                    </div>
                   </SwiperSlide>
                   <SwiperSlide>
                    <div className="img-box">
                    <img src={Gato06} alt="Foto" />
                    </div>
                   </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </div>
  );
}

export default Design;
