<template>
  <div>
    <LayoutLayHeader />
    <div class="main-content">
      <!--Full width header Start-->

      <!--Full width header End-->

      <!-- AQUI SLIDER -->
      <video-background
    src="https://api.reservas-lab.cf/uploads/Fondo_Laboratorio_f3d638249a.mp4"
    poster="/images/mainfoto.jpg"
    style="max-height: 1080px; height: 600px; background-color: rgba(0,0,0, 0.3); "
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
                      <no-ssr>
                      <nuxt-link to="/reservas">

                      <a
                        class="readon learn-more slider-btn"
                        style="z-index: 100"
                        >Solicitar Domicilio</a
                      >
                      </nuxt-link>
                      </no-ssr>
                    </li>

                  </ul>
                </div>
              </div>
            </div> </video-background>

<!--         <div class="rs-slider style1" style="margin-top: 0px">
          <VueSlickCarousel
ref="carousel"
            class="rs-carousel"

            v-bind="sliderconf"
          >

            <div class="slider-content slide1">
              <div class="container">
                <div id="watermark"></div>

                <div v-if="$device.isDesktop">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 pr-140 md-mb-140 md-pr-15">
                      <div class="content-wrap">
                        <h1
                          class="sl-title mb-mb-10 wow fadeInRight"
                          data-wow-delay="600ms"
                          style="text-shadow: 3px 3px 3px #000000"
                          data-wow-duration="2000ms"
                        >
                          Laboratorio Clínico Alemán
                        </h1>
                        <div class="description">
                          <div
                    class="sl-desc fadeInUp"
                    data-wow-delay="900ms"
                    data-wow-duration="2000ms"
                    style="text-shadow: 3px 3px 3px #000000"
                  >
                    Usando técnología moderna y lo ultimo en herramientas.
                  </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                            <h2 class="title mb-15">Horario de atención</h2>
                            <p class="desc">Conoce nuestros horarios</p>
                          </div>
                          <div id="form-messages"></div>
                          <form
                            id="contact-form"
                            method="post"
                          >
                            <fieldset>
                              <div class="row">
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6>Lunes a Viernes:</h6>
                                    </div>
                                    <div class="col-lg-6">
                                      <p>7:00am-7:00pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6"><h6>Sabado:</h6></div>
                                    <div class="col-lg-6">
                                      <p>7:00am-12:30pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6 style="z-index: 99">Domingo:</h6>
                                    </div>
                                    <div
                                      class="col-lg-6"
                                      style="text-align: center"
                                    >
                                      <p  style="z-index: 99">Cerrado</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <nuxt-link to="/reservas">
                                  <button
                                    style="z-index: 100"
                                    class="submit-btn"
                                  >
                                    Reserva tu Hora
                                  </button>
                                </nuxt-link>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="$device.isTablet">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 pr-140 md-mb-140 md-pr-15">
                      <div class="content-wrap">
                        <h1
                          class="sl-title mb-mb-10 wow fadeInRight"
                          data-wow-delay="600ms"
                          style="text-shadow: 3px 3px 3px #000000"
                          data-wow-duration="2000ms"
                        >
                          Laboratorio Clínico Alemán
                        </h1>
                        <div class="description">
                          <p
                            style="
                              color: #fff;
                              text-shadow: 3px 3px 3px #000000;
                            "
                          >
                            Tecnología en analisis de muestras en la región del
                            Maule.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                            <h2 class="title mb-15">Horario de atención</h2>
                            <p class="desc">Conoce nuestros horarios</p>
                          </div>
                          <div id="form-messages"></div>
                          <form
                            id="contact-form"
                            method="post"
                            action="mailer.php"
                          >
                            <fieldset>
                              <div class="row">
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6>Lunes a Viernes:</h6>
                                    </div>
                                    <div class="col-lg-6">
                                      <p>7:00am-7:00pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6"><h6>Sabado:</h6></div>
                                    <div class="col-lg-6">
                                      <p>7:00am-12:30pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6>Domingo:</h6>
                                    </div>
                                    <div
                                      class="col-lg-6"
                                      style="text-align: center"
                                    >
                                      <p>Cerrado</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <input
                                  class="submit-btn"
                                  type="submit"
                                                                      style="z-index: 100"

                                  value="Reserva tu Hora"
                                />
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                            <h2 class="title mb-15">Horario de atención</h2>
                            <p class="desc">Conoce nuestros horarios</p>
                          </div>
                          <div id="form-messages"></div>
                          <form
                            id="contact-form"
                            method="post"
                            action="mailer.php"
                          >
                            <fieldset>
                              <div class="row">
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6>Lunes a Viernes:</h6>
                                    </div>
                                    <div class="col-lg-6">
                                      <p>7:00am-7:00pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6"><h6>Sabado:</h6></div>
                                    <div class="col-lg-6">
                                      <p>7:00am-12:30pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6>Domingo:</h6>
                                    </div>
                                    <div
                                      class="col-lg-6"
                                      style="text-align: center"
                                    >
                                      <p>Cerrado</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <input
                                  class="submit-btn"
                                                                      style="z-index: 100"

                                  type="submit"
                                  value="Reserva tu Hora"
                                />
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>

        </div> -->

      <!-- Slider Section End -->

      <!-- Services Section Start -->

      <div
        v-if="$device.isMobile"
        style="margin-top: -50%"
        class="rs-services main-home style1 pt-100"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 md-mb-30">
              <client-only>
                <nuxt-link to="/reservas">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/reserva.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Reserva Hora</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Para asistir a la toma de exámenes</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>

            <div class="col-lg-3 col-md-6 md-mb-30">
              <client-only>
                <nuxt-link to="/domicilios">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/domicilios.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Domicilios</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Solicita un exámen a domicilio</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
            <div class="col-lg-3 col-md-6 sm-mb-30">
              <client-only>
                <nuxt-link to="/domicilios">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/resultados.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Resultados</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Revisa resultados de tus exámenes</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
            <div class="col-lg-3 col-md-6">
              <client-only>
                <nuxt-link to="/cotizador">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/cotizador.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Cotizador</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Revisa el valor de exámenes Fonasa.</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="rs-services main-home style1 pt-100" style="margin-bottom: 30px">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 md-mb-30">
              <client-only>
                <nuxt-link to="/reservas">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/reserva.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Reserva Hora</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Para asistir a la toma de exámenes</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>

            <div class="col-lg-3 col-md-6 md-mb-30">
              <client-only>
                <nuxt-link to="/domicilios">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/domicilios.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Domicilios</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Solicita un exámen a domicilio</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
            <div class="col-lg-3 col-md-6 sm-mb-30">
              <client-only>
                <nuxt-link to="/resultados">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/resultados.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Resultados</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Revisa resultados de tus exámenes</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
            <div class="col-lg-3 col-md-6">
              <client-only>
                <nuxt-link to="/cotizador">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px" class="services-item">
                    <div class="services-icon">
                      <div class="image-part">
                        <img src="~static/cotizador.svg" alt="" />
                      </div>
                    </div>
                    <div class="services-content">
                      <div class="services-text">
                        <h3 class="services-title"><a>Cotizador</a></h3>
                      </div>
                      <div class="services-desc">
                        <p>Revisa el valor de exámenes Fonasa.</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <!-- Services Section End -->

      <!-- About Section Start -->
      <div id="nosotros" class="rs-about bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact" style="box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 10px; border-radius: 10px; margin-bottom: 5rem">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                            <h2 class="title mb-15">Horario de atención</h2>
                            <p class="desc">Conoce nuestros horarios</p>
                          </div>
                          <div id="form-messages"></div>
                          <form
                            id="contact-form"
                            method="post"
                          >
                            <fieldset>
                              <div class="row">
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6>Lunes a Viernes:</h6>
                                    </div>
                                    <div class="col-lg-6">
                                      <p>7:00am-7:00pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6"><h6>Sabado:</h6></div>
                                    <div class="col-lg-6">
                                      <p>7:00am-12:30pm</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <h6 style="z-index: 99">Domingo:</h6>
                                    </div>
                                    <div
                                      class="col-lg-6"
                                      style="text-align: center"
                                    >
                                      <p  style="z-index: 99">Cerrado</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <nuxt-link to="/reservas">
                                  <button
                                    style="z-index: 100"
                                    class="submit-btn"
                                  >
                                    Reserva tu Hora
                                  </button>
                                </nuxt-link>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
            <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="sub-text style2">Sobre Nosotros</div>
                  <div class="desc pb-35">
                    <h2>Misión</h2>
                    Laboratorio Alemán debe respetar en todo momento sus principios de origen.
Su personal deberá cumplir con todos los pacientes :
Respeto,
Empatía,
Ética,
Responsabilidad,
Confiabilidad,
Seguridad y
Calidad total en todos nuestros procesos
                  </div>
                  <p class="margin-0 pb-15">
                    <h2>Visión</h2>
                    <p>
                    Mantener la misión , modernizar según avances en la ciencia y tecnología.
Ser digno de la preferencia y reconocimiento de nuestros pacientes , médicos y personal de salud .

                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Section End -->

      <!-- Call Us Section Start -->

      <!-- Counter Section Start -->
      <div class="rs-counter main-counter-home">
        <div class="counter-top-area text-center bg2">
          <div class="row">
           <!--  <div class="col-lg-4 md-mb-40">
              <div class="counter-list">
                <div class="counter-text">
                  <div class="count-number">
                    <span class="rs-count k">80</span>
                  </div>
                  <h3 class="title">Clientes</h3>
                </div>
              </div>
            </div> -->
            <div class="col-lg-6 md-mb-40">
              <div class="counter-list">
                <div class="counter-text">
                  <div class="count-number">
                    <span class="rs-count plus">350</span>
                  </div>
                  <h3 class="title">Examenes</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="counter-list">
                <div class="counter-text">
                  <div class="count-number">
                    <span class="rs-count">20+ años</span>
                  </div>
                  <h3 class="title">Experiencia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Counter Section End -->

      <!-- Process Section Start -->
      <div class="rs-process pt-180 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 md-mb-40">
              <div
class="process-wrap bg3" style="

background: url(assets/images/bg/process-bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-color: #03228F;
margin: 0px 31px 0px 0px;
padding: 80px 40px 75px 40px;
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
border-radius: 10px 10px 10px 10px;">
                <div class="sec-title mb-30">
                  <div class="sub-text new">Toma de exámenes</div>
                  <h2 class="title white-color">
                    Indicaciones Exámenes de Laboratorio
                  </h2>
                </div>
                                                <nuxt-link to="/examenes">

                <div class="btn-part mt-40">
                  <a class="readon learn-more contact-us" href="#footer"
                    >Ver Información</a
                  >
                </div>
                                                </nuxt-link>
              </div>
            </div>
            <div class="col-lg-8 pl-30 md-pl-15">
              <div class="row">
                <div class="col-lg-6 col-md-6 mb-40">
                  <div class="rs-addon-number">
                    <div class="number-text">
                      <div class="number-area">1.</div>
                      <div class="number-title">
                        <h3 class="title">Investiga</h3>
                      </div>
                      <p class="number-txt">
                        Mantente informado de el tipo de examen a realizar, si
                        se toma de ayunas, en la mañana o diversas indicaciones,
                        a veces no existen indicaciones.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-40">
                  <div class="rs-addon-number">
                    <div class="number-text">
                      <div class="number-area">2.</div>
                      <div class="number-title">
                        <h3 class="title">Visita</h3>
                      </div>
                      <p class="number-txt">
                        Puedes ir directamente a la sucursal o reservar tu hora
                        por internet, es importante ser consciente de la hora
                        para evitar aglomeraciones y no tomar medidas
                        innecesarias.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 sm-mb-40">
                  <div class="rs-addon-number">
                    <div class="number-text">
                      <div class="number-area">3.</div>
                      <div class="number-title">
                        <h3 class="title">Muestra</h3>
                      </div>
                      <p class="number-txt">
                        Una vez la visita se haya realizado, un profesional de
                        la salud tomará la muestra necesaria para el exámen.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="rs-addon-number">
                    <div class="number-text">
                      <div class="number-area">4.</div>
                      <div class="number-title">
                        <h3 class="title">Resultado</h3>
                      </div>
                      <p class="number-txt">
                        Puedes revisar tu resultado en linea click en
                        "Resultados", también se puede hacer de forma
                        presencial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Process Section End -->

      <!-- Blog Section Start -->
<!--       <div id="rs-blog" class="rs-blog pb-120 pt-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="sec-title2 text-center mb-45">
            <span class="sub-text">Blogs</span>
            <h2 class="title testi-title">Vea nuestro blog informativo</h2>
            <div class="heading-line"></div>
          </div> -->
          <!--   <VueSlickCarousel
              class="rs-carousel"
              v-bind="sliderblog"
            >
              <div
                v-for="entrada of blog"
                :key="entrada.titulo"
                style="height: 660px"
                class="blog-item"
              >
                <div class="image-wrap"
                >
                  <a
href="blog-details.html"
                  style="height: 380px"
                    ><img
                      v-if="entrada.portada"
                      :src="
                        'http://api.reservas-lab.cf' +
                        entrada.portada.formats.large.url
                      "
                      alt=""
                  /></a>
                  <ul class="post-categories">
                    <li><a href="blog-details.html">Técnología</a></li>
                  </ul>
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li class="date">
                      <i class="fa fa-calendar-check-o"></i> 16 Nov 2020
                    </li>
                    <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                  </ul>
                  <h3 class="blog-title">
                    <a href="blog-details.html">{{ entrada.titulo }}</a>
                  </h3>
                  <p class="desc">¿Como tomar una buena muestra?...</p>
                  <div class="blog-button">
                    <a href="blog-details.html">Ver más</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel> -->
      <!--   </div>
      </div> -->
      <!-- Blog Section End -->

      <!-- Partner Start -->
<!--
 <div class="rs-partner pt-80 pb-70">
        <div class="container">
            <VueSlickCarousel
              v-bind="sliderbrands"
            >
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/1.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/2.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/2.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/3.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/3.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/4.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/4.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/5.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/5.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/6.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/6.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/7.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/7.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/8.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/8.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="partner-item">
                <div class="logo-img">
                  <a>
                    <img
                      class="hover-logo"
                      src="~/assets/images/partner/9.png"
                      alt=""
                    />
                    <img
                      class="main-logo"
                      src="~/assets/images/partner/9.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </VueSlickCarousel>
        </div>
      </div>

      -->
      <!-- Partner End -->
    </div>
    <LayoutLayFooter />
  </div>
</template>

<script>  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {

  name: 'HomeComponent',
    components: {  },
  data: () => ({
    blog: [],
    sliderconf: {
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplaySpeed: 7000,
      autoplay: true,
    },
    sliderblog: {
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows: false,
            autoplay: true,

      lazyLoad: 'progressive'

    },
    sliderbrands: {
      slidesToShow: 5,
      slidesToScroll: 9,
            autoplay: true,

      arrows: true,
      lazyLoad: 'progressive'
    },
  }),
  async fetch() {
    this.blog = await fetch('http://api.reservas-lab.cf/entradas').then(
      (res) => res.json().data
    )
  },

    methods: {
  },
}
</script>

<style>
.videobg-content {
  display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
position: absolute;
overflow: hidden;
z-index: 0;
background-color: rgba(0, 0, 0, 0.3);
}
</style>
