<template>
  <section class="content">
    
           <v-layout row wrap xs8>
          <v-flex xs8>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Consulta</div>
                <div></div>
              </v-card-title>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <v-card color="deep-purple lighten-4" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                       <router-link to="ruta" class="nav-link">Rutas</router-link>
                      <div class="headline"></div>
                    </div>
                  </v-flex>
                  <v-flex xs8>
                    <v-card-media
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
            <v-flex xs8>
            <v-card color="deep-purple lighten-4" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                      <router-link to="camiones" class="nav-link">Camiones</router-link>
                      <div class="headline"></div>
                    
                    </div>
                  </v-flex>
                  <v-flex xs8>
                    <v-card-media
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs8>
           <v-card color="deep-purple lighten-4" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                        <router-link to="choferes" class="nav-link">Choferes</router-link>
                      <div class="headline"></div>
                     
                    </div>
                  </v-flex>
                  <v-flex xs8>

                    <v-card-media
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <v-card color="deep-purple lighten-4" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                        <router-link to="paradas" class="nav-link">Paradas</router-link>
                      <div class="headline"></div>
                      
                    </div>
                  </v-flex>
                  <v-flex xs8>
                     <v-card-media
                        height="125px"
                        contain
                      ></v-card-media>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
  </section>
</template>

<script>
// Require needed datatables modules
export default {
  name: 'Tables'
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.
   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.
@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/
@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}
table.dataTable thead .sorting:after {
  content: "\f0dc";
}
table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}
table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}
</style>