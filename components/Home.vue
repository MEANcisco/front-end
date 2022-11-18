<template>
  <div>
    <LayoutLayHeader />
    <div class="main-content">
      <!--Full width header Start-->

      <!--Full width header End-->

      <!-- AQUI SLIDER -->
      <VideoBg />




      <!-- Slider Section End -->

      <!-- Services Section Start -->

      <div
        v-if="$device.isMobile"
        style="margin-top: 0%"
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
                        <h3 class="services-title"><a style="color:#fff">Reserva Hora</a></h3>
                      </div>
                      <div class="services-desc">
                        <p style="color:#fff">Para asistir a la toma de exámenes</p>
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
                        <h3 class="services-title"><a style="color:#fff">Domicilios</a></h3>
                      </div>
                      <div class="services-desc">
                        <p style="color:#fff">Solicita un exámen a domicilio</p>
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
                        <h3 class="services-title"><a style="color:#fff">Resultados</a></h3>
                      </div>
                      <div class="services-desc">
                        <p style="color:#fff">Revisa resultados de tus exámenes</p>
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
                        <h3 class="services-title"><a style="color:#fff">Cotizador</a></h3>
                      </div>
                      <div class="services-desc">
                        <p style="color:#fff">Revisa el valor de exámenes Fonasa.</p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="rs-services  main-home style1 pt-100" style=" background-color: #fff; margin-top: 0px">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 md-mb-30">
              <client-only>
                <nuxt-link to="/reservas">
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px; z-index: 5; margin-top: -10rem; " class="services-item">
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
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px; z-index: 5; margin-top: -10rem;" class="services-item">
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
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px; z-index: 5; margin-top: -10rem;" class="services-item">
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
                  <div style="box-shadow: rgba(0, 0, 0, 0.5) 5px 2px 12px 5px; z-index: 5; margin-top: -10rem;" class="services-item">
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
      <div id="nosotros" style="box-shadow: 10px 10px 20px;" class="rs-about bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <client-only>
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
                                      <h6>{{horarios.d1}}</h6>
                                    </div>
                                    <div class="col-lg-6">
                                      <p>{{horarios.t1}}</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 mb-15">
                                  <div class="row">
                                    <div class="col-lg-6"><h6>{{horarios.d2}}</h6></div>
                                    <div class="col-lg-6">
                                      <p>{{horarios.t2}}</p>
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
                    </client-only>
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
                  <p class="margin-0 pb-15"></p>
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
<div class="rs-counter main-counter-home">
        <div class="counter-top-area text-center bg2" style="box-shadow: rgba(0, 0, 0, 0.6) 5px 5px 10px 5px">
          <div class="row">

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
      <!-- certificación Section Start -->
      <div id="nosotros"  class="rs-about  pt-120  md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
           <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="sub-text style2">Calidad</div>
                  <div class="desc pb-35">
                    <h2>Acreditación</h2>
                    Según el proceso de acreditación de la super intendencia de salud nos encontramos en constante mejoramiento y buscamos la máxima Calidad
                    en los procesos para nuestros pacientes, puedes dejar tus observaciones, reclamos y sugerencias en el siguiente cuadro.
                  </div>
                  <p class="margin-0 pb-15"></p>
                  <div class="row">
                    <div class="col-lg-6"><input
                        v-model="formNombre"
                        class="form-control"
                        style="height: 60px; margin-bottom: 10px;"
                        name="nombre"
                        type="text"
                        size="15"
                        csize="10"
                        placeholder="Nombre"
                      /> </div>
                  <div class="col-lg-6 ">
                    <input
                        v-model="formMail"
                        class="form-control"
                        style="height: 60px; margin-bottom: 10px;"
                        name="correo"
                        type="text"
                        size="15"
                        csize="10"
                        placeholder="Correo"
                      />
                  </div>
                  </div>


                  <input
                        v-model="formReclamo"
                        class="form-control"
                        style="height: 60px; margin-bottom: 10px;"
                        name="reclamos"
                        type="text"
                        size="15"
                        csize="10"
                        placeholder="Reclamo o sugerencia"
                      />
                      <button
                      v-if="btnEnviar"
                      style="z-index: 100"                                    class="submit-btn disabled"
                                    @click="postReclamo()"

                                  >
                                    Enviar
                                  </button>

                                  <button
                      v-if="!btnEnviar"
                      style="z-index: 100; background-image: none;"                                    class="submit-btn"

                                  >
                                    Enviado
                                  </button>
                </div>

              </div>
            </div>
            <client-only>
            <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact" style="box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 10px; border-radius: 10px; margin-bottom: 5rem">
                        <div class="contact-wrap">
                          <div class="content-part mb-25"
                          >
                          <img src="~static/acreditacion.png" alt="" />

                          </div>
                          <div id="form-messages"></div>

                        </div>
                      </div>
                    </div>
                    </client-only>

          </div>
        </div>
      </div>
      <!--- certificación Section end --->

      <!-- Counter Section Start -->

      <!-- Counter Section End -->

      <!-- Process Section Start -->
      <div class="rs-process pt-180 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 md-mb-40">
              <div
class="process-wrap bg3" style="
background-color: #03228F;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-color: #03228F;
margin: 0px 31px 0px 0px;
padding: 80px 40px 75px 40px;
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
border-radius: 10px 10px 10px 10px;">
                <div class="sec-title mb-30">
                  <div class="sub-text new" style="text-shadow: 3px 3px 3px #000000;">Toma de exámenes</div>
                  <h2 class="title white-color" style="text-shadow: 3px 3px 3px #000000;">
                    Indicaciones Exámenes de Laboratorio
                  </h2>
                </div>
                                  <client-only>

                                                <nuxt-link to="/examenes">

                <div class="btn-part mt-40">

                  <a class="readon learn-more contact-us"
                    >Ver Información</a
                  >
                </div>
                                                </nuxt-link>
                                  </client-only>
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


  <div id="pizarra" v-if="pizarra.length" class="rs-about  pt-120  md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
           <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="desc pb-35">
                    <h2>Pizarra interactiva</h2>

                    <VueSlickCarousel :arrows="true" :dots="true">
                      <div
                      v-for="item in pizarra" :key="item.attributes.url">
                      <img :src="item.attributes.url" width="800"/></div>

    </VueSlickCarousel>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
    </div>
    <LayoutLayFooter />
  </div>
</template>

<script>  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots

  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VideoBg from './Modules/VideoBg.vue'

export default {

  name: 'HomeComponent',
    components: { VideoBg },
  data: () => ({
    blog: [],
    formNombre: '',
    formMail: '',
    formReclamo: '',
    btnEnviar: true,
    pizarra: [],
    horarios: {
      d1: 'Lunes a Viernes:',
      t1: '7:00am-7:00pm',
      d2: 'Sabado:',
      t2: '7:00am-12:30pm',
      d3: 'Domingo:',
      t3: 'Cerrado'
    },
    sliderconf: {
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      autoplaySpeed: 7000,
      autoplay: true,
    },
    sliderpizarra: {
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows: true,
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
    this.getHorario();
    this.getPizarra();
    const horarios = await fetch('https://api.labaleman.cl/api/Horarios').then(
      (res) => {return res.json()}
    );
    this.horarios = horarios.data[0].attributes;


  },

    methods: {
      postReclamo() {

        if (this.formNombre !== '' || this.formMail !== '' || this.formReclamo !== '' ) {
          this.$axios
          .post('https://api.labaleman.cl/api/reclamos', {data: {nombre: this.formNombre, correo: this.formMail, reclamo: this.formReclamo}}).then(
            (res) => {
              print(res);
              alert('enviado con éxito!');
              this.btnEnviar = false;
            }
          )
        } else {
          alert('Falta llenar datos');
        }


      },
      async getHorario() {
        const horarios = await fetch('https://api.labaleman.cl/api/Horarios').then(
          (res) => {return res.json()}
        );
          this.horarios = horarios.data[0].attributes;
      },
      async getPizarra() {
        const pizarra = await fetch('https://api.labaleman.cl/api/pizarras').then(
          (res) => {return res.json()}
        );
        console.log(pizarra);
          this.pizarra = pizarra.data;
          this.sliderpizarra.slidesToShow = pizarra.data.length;
          this.sliderpizarra.slidesToScroll = pizarra.data.length;

      }
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
