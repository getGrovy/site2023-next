import Image from "next/image";
import React from "react";

const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <div className="slider s1 container">
            <div className="text">
              <h3>
                New
                <br />
                portfolio
              </h3>
              <p>
                재능은! 노력 끝에서 발견된다.
                <br />
                어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                생각합니다.
              </p>
              <a href="#" className="more button-red">
                더 알아보기
              </a>
            </div>
            <div className="img" aria-label="hidden">
              <Image
                width={300}
                height={300}
                src="/assets/images/slider/sliderIcon1.png"
                alt="유투브"
              />
              <Image
                width={300}
                height={300}
                src="/assets/images/slider/sliderIcon2.png"
                alt="유투브"
              />
              <Image
                width={300}
                height={300}
                src="/assets/images/slider/sliderIcon3.png"
                alt="유투브"
              />
            </div>
            <div className="circle" aria-label="hidden">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="circle c3"></span>
              <span className="circle c4"></span>
              <span className="circle c5"></span>
            </div>
          </div>
        </div>
        <div className="slider__btn">
          <a href="#" className="left">
            <span className="ir">이전이미지</span>
          </a>
          <a href="#" className="right">
            <span className="ir">다음이미지</span>
          </a>
        </div>
        <div className="slider__dot">
          <a href="#" className="dot active">
            <span className="ir">1번 이미지</span>
          </a>
          <a href="#" className="dot">
            <span className="ir">2번 이미지</span>
          </a>
          <a href="#" className="dot">
            <span className="ir">3번 이미지</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
