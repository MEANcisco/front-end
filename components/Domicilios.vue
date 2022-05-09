<template>
  <div>
    <LayoutLayHeader />

    <div class="rs-contact pt-120 md-pt-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 md-mb-60">
            <div class="contact-box">
              <div class="sec-title mb-45">
                <span class="sub-text new-text white-color">Domicilios</span>
                <h2 class="title white-color">Programa un domicilio.</h2>
              </div>
              <div class="address-box mb-25">
                <div
                  :class="[step > 1 ? 'address-icon-active' : 'address-icon']"
                >
                  <no-ssr>
                    <font-awesome-icon
                      :style="{ color: '#fff' }"
                      :icon="['fas', 'calendar-day']"
                    />
                  </no-ssr>
                </div>
                <div class="address-text">
                  <span class="label">Fecha de Domicilio:</span>
                  <a v-if="form.fecha.length">{{ form.fecha }}</a>
                </div>
              </div>
              <div class="address-box mb-25">
                <div
                  :class="[step > 2 ? 'address-icon-active' : 'address-icon']"
                >
                  <no-ssr>
                    <font-awesome-icon
                      :style="{ color: '#fff' }"
                      :icon="['fa', 'user']"
                    />
                  </no-ssr>
                </div>
                <div class="address-text">
                  <span class="label">Informacion Paciente:</span>
                  <a>{{ form.paciente.rut }}</a>
                </div>
              </div>
              <div class="address-box mb-25">
                <div
                  :class="[step > 3 ? 'address-icon-active' : 'address-icon']"
                >
                  <no-ssr>
                    <font-awesome-icon
                      :style="{ color: '#fff' }"
                      :icon="['fa', 'map-pin']"
                    />
                  </no-ssr>
                </div>
                <div class="address-text">
                  <span class="label">Ubicación:</span>
                  <a>{{ form.direccion }}</a>
                </div>
              </div>
              <div class="address-box">
                <div
                  :class="[step > 4 ? 'address-icon-active' : 'address-icon']"
                >
                  <no-ssr>
                    <font-awesome-icon
                      :style="{ color: '#fff' }"
                      :icon="['fa', 'flask']"
                    />
                  </no-ssr>
                </div>
                <div class="address-text">
                  <span class="label">Examenes:</span>
                  <div v-if="form.examenes.length" class="desc">
                    {{ form.examenes.length }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 pl-70 md-pl-15">
            <div class="contact-widget">
              <div class="sec-title2 mb-40">
                <span class="sub-text contact mb-15">Registro</span>
                <h2 v-if="step === 1" class="title testi-title">
                  Selecciona el día y hora
                </h2>
                <h2 v-if="step === 2" class="title testi-title">
                  Añade algo de información
                </h2>
                <h2 v-if="step === 3" class="title testi-title">
                  Añade la direccion del domicilio
                </h2>
                <h2 v-if="step === 4" class="title testi-title">
                  Añade tus exámenes
                </h2>
                <h2 v-if="step === 5" class="title testi-title">
                  Confirma tu información
                </h2>
              </div>
              <div id="form-messages"></div>
              <form id="contact-form">
                <client-only>
                  <fieldset v-if="step === 1">
                    <VueCtkDateTimePicker
                      v-model="form.fecha"
                      :only-date="true"
                      :format="'YYYY-MM-DD'"
                      :locale="'es-do'"
                      :first-day-of-week="1"
                      :min-date="to"
                      :inline="true"
                      :no-button-now="true"
                      :no-weekends-days="true"
                    /></fieldset
                ></client-only>
                <fieldset v-if="step === 2">
                  <div class="row">
                    <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                      <input
                        id="name"
                        v-model="form.paciente.nombre"
                        class="from-control"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                      <input
                        id="email"
                        v-model="form.paciente.apellido"
                        class="from-control"
                        type="text"
                        name="surname"
                        placeholder="Apellido"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                      <input
                        id="rut"
                        v-model="form.paciente.rut"
                        class="from-control"
                        type="text"
                        name="rut"
                        placeholder="Rut"
                        required=""
                        @input="CheckRut"
                      />
                    </div>
                    <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                      <input
                        id="name"
                        v-model="form.paciente.direccion"
                        class="from-control"
                        type="text"
                        name="direccion"
                        placeholder="direccion"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                      <input
                        id="email"
                        v-model="form.paciente.correo"
                        class="from-control"
                        type="text"
                        name="email"
                        placeholder="Correo"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                      <input
                        id="telefono"
                        v-model="form.paciente.numero"
                        class="from-control"
                        type="text"
                        name="phone"
                        placeholder="Telefono"
                        required=""
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset v-if="step === 3">
                  <client-only>
                    <div class="row">
                      <div class="col-lg-12 mb-30 col-md-12 col-sm-12">
                        <span class="label">Dirección domicilio:</span>

                        <google-map-autocomplete
                          :controls="false"
                          :update-map="false"
                          value="Curico,"
                          placeholder="Dirección"
                          @place-changed="getAddressData($event)"
                        />
                      </div>

                      <div class="col-lg-12 mb-30 col-md-12 col-sm-12">
                        <span class="label">Referencia Domicilio:</span>

                        <input
                          id="referencia"
                          v-model="form.referencia"
                          class="from-control"
                          type="text"
                          name="surname"
                          placeholder="Referencia"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="simple-map">
                        <google-map
                          v-if="form.place_id"
                          id="map"
                          ref="Map"
                          :options="mapOptions"
                          style="height: 300px"
                          :center="form.geo"
                        >
                          <google-map-marker
                            :position="form.geo"
                            @click="panToMarker(marker.position)"
                          />
                        </google-map>
                      </div>
                    </div>
                  </client-only>
                </fieldset>
                <client-only>
                  <fieldset v-if="step === 4">
                    <ItemListSelector
                      v-model="form.examenes"
                      :search-text="'Buscar'"
                      :options-data="examsOut"
                      :label-key="'nombre'"
                    /></fieldset
                ></client-only>

                <fieldset v-if="step === 5">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="card card-margin">
                 
                          <div class="card-header no-border">
                            <h5 class="card-title">Reserva</h5>
                          </div>
                          <div class="card-body pt-0">
                            <div class="widget-49">
                              <div class="widget-49-title-wrapper">
                                <div class="widget-49-meeting-info">
                                  <span class="widget-49-pro-title"
                                    >Fecha y hora</span
                                  >
                                </div>
                              </div>
                              <ul class="widget-49-meeting-points">
                                <li class="widget-49-meeting-item">
                                  {{ form.fecha }}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="card card-margin">
                          <div class="card-header no-border">
                            <h5 class="card-title">Paciente</h5>
                          </div>
                          <div class="card-body pt-0">
                            <div class="widget-49">
                              <ul class="widget-49-meeting-points">
                                <li class="widget-49-meeting-item">
                                  <span
                                    >Nombre: {{ form.paciente.nombre }}</span
                                  >
                                </li>
                                <li class="widget-49-meeting-item">
                                  <span
                                    >Apellido:
                                    {{ form.paciente.apellido }}</span
                                  >
                                </li>
                                <li class="widget-49-meeting-item">
                                  <span
                                    >Telefono: {{ form.paciente.numero }}</span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="card card-margin">
                          <div class="card-header no-border">
                            <h5 class="card-title">Examenes</h5>
                          </div>
                          <div class="card-body pt-0">
                            <div class="widget-49">
                              <ol class="widget-49-meeting-points">
                                <li
                                  v-for="item of form.examenes"
                                  :key="item.id"
                                  class="widget-49-meeting-item"
                                >
                                  <span>{{ item.nombre }}</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div class="btn-part">
                  <div class="row">
                    <div class="form-group mb-0">
                      <button
                        v-if="step > 1"
                        class="readon learn-more submit"
                        t
                        value="Volver"
                        @click.prevent="backStep()"
                      >
                        Volver
                      </button>
                    </div>
                    <div class="form-group mb-0">
                      <button
                        v-if="step !== totalSteps"
                        class="readon learn-more submit"
                        value="Siguiente"
                        @click.prevent="advanceStep()"
                      >
                        Siguiente
                      </button>
                    </div>
                    <div class="form-group mb-0">
                      <button
                        v-if="step === totalSteps"
                        class="readon learn-more submit"
                        value="Siguiente"
                        @click.prevent="ConfirmRes()"
                      >
                        Confirmar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import moment from 'moment'
import ItemListSelector from '@laomao800/vue-item-list-selector'
import { format } from 'rut.js'
import markersList from '../static/cities.json'

export default {
  name: 'DomiciliosComponent',

  components: {
    VueCtkDateTimePicker,
    ItemListSelector,
  },
  data: () => ({
    step: 1,

    options: {
      componentRestrictions: { country: 'cl' },
      fields: ['address_components', 'geometry', 'icon', 'name'],
      strictBounds: false,
      types: ['establishment'],
    },
    totalSteps: 5,
    activeHour: false,
    patientExists: false,
    infoWindowContext: {},
    mapOptions: {
      zoom: 15,
    },
    markersList,
    center: {
      lat: 34.734004,
      lng: 135.7366,
    },
    path: [
      {
        lat: 34.731943,
        lng: 135.731617,
      },
      {
        lat: 34.733713,
        lng: 135.735292,
      },
      {
        lat: 34.734004,
        lng: 135.7366,
      },
    ],
    pacientes: [],
    examsOut: [],
    pacienteDisponible: false,
    pacienteActual: {},
    form: {
      fecha: '',
      paciente: {
        id: 0,
        nombre: '',
        apellido: '',
        rut: '',
        numero: '',
        correo: '',
        direccion: '',
      },
      examenes: [],
      geo: {
        lat: 0,
        lng: 0,
      },
      direccion: '',
      referencia: '',
      place_id: '',
    },
    to: moment().add(1, 'day').toISOString(),
    disabledDates: ['2021-11-17'],
    disabledHours: [
      '00',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '19',
      '20',
      '21',
      '22',
      '23',
    ],
  }),
  async fetch() {
    this.examsOut = await fetch(
      'https://api.reservas-lab.ml/examenes?_limit=500'
    ).then((res) => res.json())
  },
  head() {
    return {
      script: [
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBksX3YKsB-yEtD383OXqBnkTvImIG8awA&libraries=places,geometry,drawing&language=es',
      ],
    }
  },
  methods: {
    panToMarker(pos) {
      this.$refs.Map.panTo(pos)
    },
    toggleInfoWindow(context) {
      this.infoWIndowContext = context
      this.showInfo = true
    },
    infoClicked(context) {
      // eslint-disable-next-line no-console
    },
    ConfirmRes() {
      // eslint-disable-next-line no-console
      const filteredDT = this.pacientes.filter(
        (d) => d.rut === this.form.paciente.rut
      )

      this.form.fechareserva = moment(this.form.fechareserva)
      if (filteredDT.length === 0 && this.form.paciente.id === 0) {
        // eslint-disable-next-line no-console
        this.$axios
          .post('https://api.reservas-lab.ml/pacientes', this.form.paciente)
          .then((pat) => {
            this.form.paciente.id = pat.data.id
            this.form.paciente.nombre = pat.data.nombre
            this.form.paciente.apellido = pat.data.apellido
            this.form.paciente.direccion = pat.data.direccion
            this.form.paciente.correo = pat.data.correo
            this.form.paciente.numero = pat.data.numero
            // post reserva

            if (pat.data) {
              this.$axios
                .post('https://api.reservas-lab.ml/domicilios', this.form)
                .then((v) => {
                  alert(
                    'Su domicilio se ha realizado con éxito, pronto se le notificará cuando sea aprobado.'
                  )
                  this.$router.push({
                    path: '/',
                  })
                })
            }
          })
      } else {
        this.$axios
          .post('https://api.reservas-lab.ml/domicilios', this.form)
          .then((v) => {
            alert(
              'Su domicilio se ha realizado con éxito, pronto se le notificará cuando sea aprobado.'
            )
            this.$router.push({
              path: '/',
            })
          })
      }
    },
    CheckRut() {
      // eslint-disable-next-line no-console

      this.form.paciente.rut = format(this.form.paciente.rut)
      if (this.form.paciente.rut.length > 10) {
        this.$axios.get('https://api.reservas-lab.ml/pacientes').then((val) => {
          this.pacientes = val.data
        })

        const filteredDT = this.pacientes.filter(
          (d) => d.rut === this.form.paciente.rut
        )
        // eslint-disable-next-line no-console
        if (filteredDT.length) {
          this.patientExists = true
          this.form.paciente.id = filteredDT[0].id
          this.form.paciente.nombre = filteredDT[0].nombre
          this.form.paciente.apellido = filteredDT[0].apellido
          this.form.paciente.direccion = filteredDT[0].direccion
          this.form.paciente.correo = filteredDT[0].correo
          this.form.paciente.numero = filteredDT[0].numero
        } else {
          this.patientExists = false
        }
      }
    },
    getAddressData(addressData) {
      // eslint-disable-next-line no-console

      this.form.direccion = addressData.formatted_address
      this.form.place_id = addressData.place_id
      this.form.geo = {
        lat: addressData.geometry.location.lat(),
        lng: addressData.geometry.location.lng(),
      }
      // eslint-disable-next-line no-console
    },
    advanceStep() {
      switch (this.step) {
        case 1:
          if (this.form.fecha) {
            this.step++
          } else {
            alert('Selecciona el día y hora.')
          }
          break
        case 2:
          if (
            this.form.paciente.rut &&
            this.form.paciente.nombre &&
            this.form.paciente.apellido &&
            this.form.paciente.direccion
          ) {
            this.step++
          } else {
            alert('Falta añadir información.')
          }
          break
        case 3:
          if (this.form.place_id) {
            this.step++
          } else {
            alert('La ubicación no se ha añadido con precisión')
          }
          break
        case 4:
          if (this.form.examenes.length) {
            this.step++
          } else {
            alert('Selecciona examenes para continuar')
          }
          break
      }
      // eslint-disable-next-line no-console
    },
    backStep() {
      this.step = this.step - 1
    },
  },
}
</script>

<style>
body {
  background: #f4f7fd;
  margin-top: 20px;
}

.card-margin {
  margin-bottom: 1.875rem;
}

.card {
  border: 0;
  box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 1px solid #e6e4e9;
  border-radius: 8px;
}

.card .card-header.no-border {
  border: 0;
}
.card .card-header {
  background: none;
  padding: 0 0.9375rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  min-height: 50px;
}
.card-header:first-child {
  border-radius: calc(8px - 1px) calc(8px - 1px) 0 0;
}

.widget-49 .widget-49-title-wrapper {
  display: flex;
  align-items: center;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #edf1fc;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-primary
  .widget-49-date-day {
  color: #4e73e5;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-primary
  .widget-49-date-month {
  color: #4e73e5;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcfcfd;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-secondary
  .widget-49-date-day {
  color: #dde1e9;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-secondary
  .widget-49-date-month {
  color: #dde1e9;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e8faf8;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-success
  .widget-49-date-day {
  color: #17d1bd;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-success
  .widget-49-date-month {
  color: #17d1bd;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ebf7ff;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-day {
  color: #36afff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-month {
  color: #36afff;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-warning {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: floralwhite;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-warning
  .widget-49-date-day {
  color: #ffc868;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-warning
  .widget-49-date-month {
  color: #ffc868;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-danger {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #feeeef;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-day {
  color: #f95062;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-danger
  .widget-49-date-month {
  color: #f95062;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-light {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fefeff;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-day {
  color: #f7f9fa;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-date-light
  .widget-49-date-month {
  color: #f7f9fa;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-dark {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ebedee;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-day {
  color: #394856;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-month {
  color: #394856;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-base {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0fafb;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-day {
  color: #68cbd7;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-month {
  color: #68cbd7;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-meeting-info {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-meeting-info
  .widget-49-pro-title {
  color: #3c4142;
  font-size: 14px;
}

.widget-49
  .widget-49-title-wrapper
  .widget-49-meeting-info
  .widget-49-meeting-time {
  color: #b1bac5;
  font-size: 13px;
}

.widget-49 .widget-49-meeting-points {
  font-weight: 400;
  font-size: 13px;
  margin-top: 0.5rem;
}

.widget-49 .widget-49-meeting-points .widget-49-meeting-item {
  display: list-item;
  color: #727686;
}

.widget-49 .widget-49-meeting-points .widget-49-meeting-item span {
  margin-left: 0.5rem;
}

.widget-49 .widget-49-meeting-action {
  text-align: right;
}

.widget-49 .widget-49-meeting-action a {
  text-transform: uppercase;
}
</style>
