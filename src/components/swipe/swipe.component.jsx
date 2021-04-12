import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import React, { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export class Swipe extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch("https://corner-mern.herokuapp.com/api/projects/getAll")
      .then((response) => response.json())
      .then((project) => this.setState({ projects: project }));
  }

  render() {
    const { projects } = this.state;
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id} project={project} className="slide">
            <div className="slide-content">
              <div className="slide-image-card">
                <img src={project.image_src}></img>
              </div>
              <div className="slide-title-card">
                <h2>{project.titolo}</h2>
              </div>
              <div className="slide-description-card">
                <p>{project.descrizione}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

export default Swipe;
