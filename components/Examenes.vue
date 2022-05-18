
<template>
  <div>
    <LayoutLayHeader />

    <div class="rs-contact pt-120 md-pt-80">
      <div class="container">
        <div class="row">
          <div class="col-md-12"><h2>Busca tu exámen</h2></div>
          <div class="col-md-12">
                      <div class="card" style="height: 100%">
                      <div class="form-group" style="margin: 15px">
                                  <div class="row" style="margin: 20px">

                    <div class="col-md-8 col-md-offset-1">
                      <input
                        v-model="busqueda"
                        class="form-control"
                        style="height: 58px;"
                        name="fsRut"
                        type="text"
                        size="15"
                        csize="10"
                        placeholder="Nombre de examen"
                      />
                    </div>

                    <div class="col-md-4 form-group ">
                      <button

                        class="readon learn-more submit"
                        style="width: 100%"
                        value="Buscar"
                        @click="Buscar()"
                      >
                        Buscar
                      </button>
                    </div>
                                  </div>

                  </div>
 </div>

          </div>

        </div>
        <div class="row">

       <div
v-for="(item, index) of examenes"
                            :key="index"
                             class="col-md-4" style="margin-top: 20px">
          <div class="card" style="height: 100%">
  <div class="card-body">
    <h2 style="font-size: 20px">{{item.attributes.nombre}}</h2>
    <p v-if="item.attributes.indicacion">Indicaciones: {{item.attributes.indicacion }}</p>
    <p v-if="!item.attributes.indicacion">Indicaciones: Ninguna</p>
    <p v-if="item.attributes.proposito"> Proposito: {{item.attributes.proposito}}</p>
    <p v-if="!item.attributes.proposito"> Proposito: No especifica</p>
    <p v-if="item.attributes.preparacion"> Preparación: {{item.attributes.preparacion}}</p>
    <p v-if="!item.attributes.preparacion"> Preparación: No especifica</p>
    <p v-if="item.attributes.muestra"> Tipo de muestra: {{item.attributes.muestra}}</p>
    <p v-if="!item.attributes.muestra"> Tipo de muestra: No especifica</p>
    <p v-if="item.attributes.valor"> Valor particular: {{item.attributes.valor}}</p>
    <p v-if="!item.attributes.valor"> Valor particular: No especifica</p>
  </div>
</div>
       </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LosExamenes',
  data: () => ({
    examenes: [],
    busqueda: ''
  }),
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
     async fetch() {
    const exams = await this.$axios.get(
      'https://api.reservas-lab.cf/api/examenes?pagination[limit]=500&populate=%2A'
    ).then((res) => {
      console.log(res.data)
      return res.data.data});
      this.examenes = exams;
  },
  methods: {
    Buscar() {
        this.$axios.get('https://api.reservas-lab.cf/api/examenes?pagination[limit]=500&populate=%2A&filters[nombre][$containsi]='+ this.busqueda
).then(
  data => {
     console.log(data.data.data)
     this.examenes = data.data.data
  }
)
    },
  }
}
</script>
