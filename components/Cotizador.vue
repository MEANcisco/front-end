<template>
  <div>
    <LayoutLayHeader />
    <client-only>
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

                <p v-if="SelectedEx.length === 0" class="desc">
                  Ingresa la información entregada a la hora de atenderte en el
                  formulario, podrás ver el estado de tus exámenes.
                </p>

                <div class="rs-cart pt-120 pb-120 md-pt-80 md-pb-80">
                  <div class="container">
                    <div class="cart-wrap">
                      <table v-if="SelectedEx.length !== 0" class="cart-table">
                        <thead>
                          <tr>
                            <th class="product-name">Examen</th>
                            <th class="product-price">Valor Particular</th>
                            <th class="product-quantity">Valor Fonasa</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) of SelectedEx"
                            :key="index"
                            @click="SelectedEx.pop(index)"
                          >
                            <td class="product-thumbnail">
                              <a>{{ item.nombre }}</a>
                            </td>

                            <td class="product-price">{{ item.valor }}</td>
                            <td v-if="!item.fonasa" class="product-name">
                              <a>No disponible</a>
                            </td>
                            <td v-if="item.fonasa" class="product-name">
                              <a>{{ item.fonasa.valor }}</a>
                            </td>
                          </tr>
                          <!-- <tr
                            v-if="
                              SelectedEx.filter((d) => d.fonasa).map((x) => {
                                if (x.fonasa) {
                                  return x.fonasa.valor
                                } else {
                                  return 0
                                }
                              })[0]
                            "
                            class="order-total"
                          >
                            <th>Total</th>
                            <td>
                              {{
                                SelectedEx.filter((d) => d.fonasa).map((x) => {
                                  if (x.fonasa) {
                                    return x.fonasa.valor
                                  } else {
                                    return 0
                                  }
                                })[0]
                              }}
                            </td>
                          </tr> -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <client-only>
                <form class="form-horizontal content-form">
                  <div class="col-md-10 col-md-offset-1">
                    <h3 style="color: #ffffff">Cotizador</h3>
                  </div>
                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1">
                      <client-only>
                        <fieldset>
                          <ItemListSelector
                            v-model="SelectedEx"
                            style="border-radius: 15px"
                            :search-text="'Buscar'"
                            :options-data="exams"
                            :label-key="'nombre'"
                            @change="getTable()"
                          /></fieldset
                      ></client-only>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1"></div>
                  </div>
                  <div class="form-group"></div>

                  <div class="form-group">
                    <div class="col-md-10 col-md-offset-1">
                      <button
                        class="btn btn-danger"
                        style="4dth: 100%"
                        @click="limpiar()"
                      >
                        Limpiar
                      </button>
                    </div>
                  </div>
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
    </client-only>
  </div>
</template>

<script>
import ItemListSelector from '@laomao800/vue-item-list-selector'
export default {
  name: 'CotizadorComponent',
  components: {
    ItemListSelector,
  },
  data: () => ({
    exams: [],
    SelectedEx: [],
    dataTable: [],
  }),
   async fetch() {
    const examsreq = await this.$axios.get(
      'https://api.labaleman.cl/api/examenes?pagination[limit]=500&populate=%2A'
    ).then((res) => {return res.data.data});

    this.exams = examsreq.map(d => {
      if(d.attributes.fonasa.data !== null){
        return {id: d.id,
              nombre: d.attributes.nombre,
              valor: d.attributes.valor,
              fonasa: d.attributes.fonasa.data.attributes
              }
      } else {

        return {id: d.id,
              nombre: d.attributes.nombre,
              valor: d.attributes.valor,


              }
      }

    })
  },
  methods: {
    getTable() {
    },
    limpiar() {
      this.SelectedEx = []
      this.dataTable = []
    },
  },
}
</script>
