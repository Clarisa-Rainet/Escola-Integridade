import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
import CardDepoimento from "../cardDepoimento";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default function Page(props) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id={"depoimentos"}>
      <div className="flex flex-col lg:flex depoimentos w-full content-center items-center md:px-10 py-10 lg:py-16 2xl:py-24 lg:px-20 2xl:px-52">
        <div className="mb-12 md:mb-16">
          <div className="family-bold text-2xl 2xl:text-3xl tracking-wider font-black">
            DEPOIMENTOS
          </div>
        </div>
        {isMobile ? (
          <Fade>
            <Splide
              className="w-screen"
              options={{
                rewind: true,
                perPage: 1,
                width: "100%",
                gap: "0rem",
                padding: "0rem",
                pagination: true,
              }}
            >
              <SplideSlide className="w-full flex justify-center">
                <CardDepoimento
                  testimonial="O Impacto da consciência e da cultura
de valores para encontrar propósito,
paz espiritual e abundância material
na sua vida pessoal, profissional e na
sociedade."
                />
              </SplideSlide>
              <SplideSlide className="w-full flex justify-center">
                <CardDepoimento
                  testimonial="O Impacto da consciência e da cultura
de valores para encontrar propósito,
paz espiritual e abundância material
na sua vida pessoal, profissional e na
sociedade."
                />
              </SplideSlide>
              <SplideSlide className="w-full flex justify-center">
                <CardDepoimento
                  testimonial="O Impacto da consciência e da cultura
de valores para encontrar propósito,
paz espiritual e abundância material
na sua vida pessoal, profissional e na
sociedade.
                            "
                />
              </SplideSlide>
            </Splide>
          </Fade>
        ) : (
          <Fade>
            <div className="flex justify-center flex-wrap w-11/12 2xl:w-9/12">
              <CardDepoimento
                testimonial="O Impacto da consciência e da cultura
de valores para encontrar propósito,
paz espiritual e abundância material
na sua vida pessoal, profissional e na
sociedade."
              />
              <CardDepoimento
                testimonial="O Impacto da consciência e da cultura
de valores para encontrar propósito,
paz espiritual e abundância material
na sua vida pessoal, profissional e na
sociedade."
              />
              <CardDepoimento
                testimonial="O Impacto da consciência e da cultura
de valores para encontrar propósito,
paz espiritual e abundância material
na sua vida pessoal, profissional e na
sociedade.
                            "
              />
            </div>
          </Fade>
        )}
      </div>
    </ScrollableAnchor>
  );
}
