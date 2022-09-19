<template>
  <div>
    <LayoutLayHeader />
    <no-ssr>
      <div class="rs-banner style3 rs-rain-animate modify1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-content">
                <div class="rs-videos">
                  <div class="animate-border white-color style3">
                    <nuxt-link to="/">
                      <a class="popup-border popup-videos">
                        <font-awesome-icon
                          style="color: #a21a5b"
                          :icon="['fas', 'arrow-left']"
                        />
                      </a>
                    </nuxt-link>
                  </div>
                </div>
                <h1 class="title">Revisa tus exámenes en linea</h1>

                <p class="desc">
                  Ingresa la información entregada a la hora de atenderte en el
                  formulario, podrás ver el estado de tus exámenes.
                </p>
                <div class="btn-part">
                  <a
v-if="!showModal"
                  class="readon learn-more contact-us"
                  @click="toggle()"
                    >Ver Ejemplo</a
                  >
                </div>
                  <div class="btn-part">
                  <a
v-if="showModal"
class="readon learn-more contact-us"
                  @click="toggle()"
                    >Ver Formulario</a
                  >
                </div>



              </div>
            </div>
            <div class="col-lg-6">
               <div v-if="showModal">
                <img
style="background-color: white; overflow: hidden; padding: 25px; border-radius: 30px; max-width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;" src="~static/recibo.svg" alt="" />

                </div>
              <client-only>
                <form
                  v-if="!showModal"
                  class="form-horizontal content-form"
                  name="MainGST"
                  method="POST"
                  action="https://resultados.labaleman.cl/irispacientes/login_nuevo2.asp"
                >
                  <div class="col-md-10 col-md-offset-1">
                    <h3 style="color: #ffffff">Información de atención</h3>
                  </div>
                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1">
                      <input
                        id="rut"
                        v-model="rut"
                        v-rut
                        class="form-control"
                        name="fsRut"
                        type="text"
                        @input="CheckRut"
                        size="15"
                        maxlength="15"
                        csize="10"
                        placeholder="RUT"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1">
                      <input
                        id="I_Num"
                        class="form-control"
                        name="I_Num"
                        type="text"
                        size="10"
                        maxlength="15"
                        placeholder="N° de folio"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1">
                      <label style="color: #ffffff"
                        >Fecha de toma de muestras</label
                      >
                    </div>
                    <div class="col-md-10 col-md-offset-1">
                      <input
                        id="inputFechaToma"
                        name="inputFechaToma"
                        type="date"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1">
                      <button
                        type="submit"
                        class="btn btn-danger"
                        style="width: 100%"
                      >
                        Entrar
                      </button>
                    </div>
                  </div>

                  <p style="text-align: center">
                    <font face="Arial, Helvetica" color="#ffffff" size="1">
                      Miércoles 10 de Noviembre, 2021
                      <br />
                      © 2010 - www.IrisLAB.cl
                    </font>
                  </p>
                </form>
              </client-only>
            </div>
          </div>
        </div>
        <div class="images-part hidden-md">
          <img src="assets/images/banner/banner-4.png" alt="" />
        </div>
        <div class="line-inner style2">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import {format} from "rut.js";

export default {

  name: 'ResultadosComponent',

  data() {
    return {
      rut: '',
      showModal: false,
    }
  },

  methods: {
    CheckRut() {
      // eslint-disable-next-line no-console
      this.rut = format(this.rut)
    },

    toggle() {
      this.showModal = !this.showModal
    }
  } }
</script>
