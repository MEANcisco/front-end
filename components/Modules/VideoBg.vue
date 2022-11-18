<template>
  <client-only>

<video-background
src="https://api.labaleman.cl/uploads/Fondo_Laboratorio_f3d638249a.mp4"
style="max-height: 1080px; height: 600px; background-color: rgba(0,0,0, 0.3); "
  overlay="linear-gradient(90deg, rgba(2,0,36,0.4) 0%, rgba(255,255,255,0) 50%, rgba(2,0,36,0.3) 95%)"
>
<div class="slider-content slide2">
        <div class="container">
          <div id="watermark"></div>

          <div class="content-part text-center">
            <div
              class="sl-sub-title wow bounceInLeft"
              data-wow-delay="300ms"
              data-wow-duration="2000ms"
              style="text-shadow: 3px 3px 3px #000000; color: white; margin-top: 150px"
            >
              Maximizamos la
            </div>
            <h1
              class="sl-title mb-mb-10 wow fadeInRight"
              data-wow-delay="600ms"
              data-wow-duration="2000ms"
              style="text-shadow: 3px 3px 3px #000000; color: white;"
            >
              Precisión en exámenes
            </h1>
            <div
              class="sl-desc fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="2000ms"
              style="text-shadow: 3px 3px 3px #000000; color: white;"
            >
              Usando técnología moderna y lo ultimo en analisis.
            </div>
            <ul
              class="slider-btn wow fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="3000ms"
            >
              <li style="z-index: 100">
                <client-only>
                <nuxt-link to="/domicilios">

                <a
                  class="readon learn-more slider-btn"
                  style="z-index: 100"
                  >Solicitar Domicilio</a
                >
                </nuxt-link>
                </client-only>
              </li>

            </ul>
          </div>
        </div>
      </div> </video-background>
                  </client-only>
</template>

<script>
  export default {
    name: 'VideoLayout',
  }
  </script>
