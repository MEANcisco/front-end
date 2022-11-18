<template>
  <div>
    <LayoutLayHeader />
    <div class="main-content">



      <!-- Services Section End -->

      <!-- About Section Start -->
      <div  style="box-shadow: 10px 10px 20px;" class="rs-about bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <client-only>
            <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact" style="box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 10px; border-radius: 10px;">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                          </div>


                            <img
style="display:block;
  margin-left:auto;
  margin-right:auto;
  border-radius: 10px;
  " src="~static/matriz.jpg">

                        </div>
                      </div>
                    </div>
                    </client-only>
            <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="sub-text style2">Casa Matriz</div>
                  <div class="desc pb-35">
                    <h4>Contacto</h4>
                    <p>Numero: +56 75 232 3749 </p>
                    <h4>Horario</h4>
                    <h5>Lunes a Viernes</h5>
                    <h5>07:00 a 19:00</h5>
                    <h5>Sábado</h5>
                    <h5>7:00 a 12:30</h5>

                  </div>
                  <h5>Ubicación</h5>
                  <google-map
                          id="map"
                          ref="Map"
                          :options="mapOptions"

                          style="height: 250px"
                          :center="{
        lat: -34.9826461,
        lng: -71.2400255,

      }"
                        >
                          <google-map-marker
                            :position="{
        lat: -34.9826461,
        lng: -71.2400255,
      }"

                          />
                        </google-map>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Section End -->
    <!-- certificación Section Start -->
    <div  style="box-shadow: 10px 10px 20px;" class="rs-about bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="sub-text style2">Yungay</div>
                  <div class="desc pb-35">
                    <h4>Contacto</h4>
                    <p>Numero: +56 75 233 6060</p>
                    <h4>Horario</h4>
                    <h5>Lunes a Viernes</h5>
                    <h5>8:00 a 17:30</h5>
                    <h5>Sábado</h5>
                    <h5>8:00 a 12:00</h5>

                  </div>
                  <h5>Ubicación</h5>
                  <google-map
                          id="map"
                          ref="Map"
                          :options="mapOptions"

                          style="height: 250px"
                          :center="{
        lat: -34.986344,
        lng: -71.240097,

      }"
                        >
                          <google-map-marker
                            :position="{
        lat: -34.986344,
        lng: -71.240097,
      }"

                          />
                        </google-map>
                </div>

              </div>
            </div>
            <client-only>
            <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact" style="box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 10px; border-radius: 10px;">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                          </div>


                            <img
style="display:block;
  margin-left:auto;
  margin-right:auto;
  border-radius: 10px;
  " src="~static/yungay.jpg">

                        </div>
                      </div>
                    </div>
                    </client-only>
          </div>
        </div>
      </div>
       <!--- certificación Section end --->
       <div  style="box-shadow: 10px 10px 20px;" class="rs-about bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <client-only>
            <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact" style="box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 10px; border-radius: 10px;">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                          </div>


                            <img
style="display:block;
  margin-left:auto;
  margin-right:auto;
  border-radius: 10px;
  " src="~static/prat.jpg">

                        </div>
                      </div>
                    </div>
                    </client-only>
            <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="sub-text style2">Prat</div>
                  <div class="desc pb-35">
                    <h4>Contacto</h4>
                    <p>Numero: +56 75 232 0130</p>
                    <h4>Horario</h4>
                    <h5>Lunes a Viernes</h5>
                    <h5>07:45 a 13:00</h5>


                  </div>
                  <h5>Ubicación</h5>
                  <google-map
                          id="map"
                          ref="Map"
                          :options="mapOptions"

                          style="height: 250px"
                          :center="{
        lat: -34.983617,
        lng: -71.236428,

      }"
                        >
                          <google-map-marker
                            :position="{
             lat: -34.983617,
        lng: -71.236428,
      }"

                          />
                        </google-map>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Counter Section Start -->
      <div  style="box-shadow: 10px 10px 20px;" class="rs-about bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-lg-6 pl-60 md-pl-15">
              <div class="contact-wrap">
                <div class="sec-title mb-30">
                  <div class="sub-text style2">Molina</div>
                  <div class="desc pb-35">
                    <h4>Contacto</h4>
                    <p>Numero: +56 75 249 2425</p>
                    <h4>Horario</h4>
                    <h5>Lunes a Viernes</h5>
                    <h5>7:45 a 17:00</h5>
                    <h5>Sábado</h5>
                    <h5>7:45 a 11:00</h5>

                  </div>
                  <h5>Ubicación</h5>
                  <google-map
                          id="map"
                          ref="Map"
                          :options="mapOptions"

                          style="height: 250px"
                          :center="{
        lat: -35.114083,
        lng: -71.277806,

      }"
                        >
                          <google-map-marker
                            :position="{
        lat: -35.114083,
        lng: -71.277806,
      }"

                          />
                        </google-map>
                </div>

              </div>
            </div>
            <client-only>
            <div class="col-lg-6 col-md-12 pl-70 md-pl-15">
                      <div class="rs-contact" style="box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 10px; border-radius: 10px;">
                        <div class="contact-wrap">
                          <div class="content-part mb-25">
                          </div>


                            <img
style="display:block;
  margin-left:auto;
  margin-right:auto;
  border-radius: 10px;
  " src="~static/molina.jpg">

                        </div>
                      </div>
                    </div>
                    </client-only>
          </div>
        </div>
      </div>

      <!-- Counter Section End -->


    </div>
    <LayoutLayFooter />
  </div>
</template>

<script>  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {

  name: 'SucursalesComponent',
    components: {  },
  data: () => ({
    blog: [],
    formNombre: '',
    formMail: '',
    mapOptions: {
      zoom: 15,
    },
    formReclamo: '',
    btnEnviar: true,
    horarios: {
      d1: 'Lunes a Viernes:',
      t1: '7:00am-7:00pm',
      d2: 'Sabado:',
      t2: '7:00am-12:30pm',
      d3: 'Domingo:',
      t3: 'Cerrado'
    },
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
