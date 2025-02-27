<template>
  <div class="home">
    <div class="d-flex ">

      <div class="col-2">
        <v-list-item v-for="(genre, index) in genres" :key="index">
          <v-list-item-avatar rounded>
            <v-img :src="genre.img"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="genre.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <div class="col-10">
        <h1>Games</h1>

        <div class="d-flex">
          <v-menu top :offset-y="offset">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2">
                Platform <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


          <v-menu top :offset-y="offset">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2">
                Order By: Relavance <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>


        <app-game-grid />

      </div>
    </div>

  </div>

</template>
<script>

export default {
  data() {
    return {
      offset: true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
      ],
      genres: [{
        title: 'Racing',
        img: 'https://media.rawg.io/media/crop/600/400/games/082/082365507ff04d456c700157072d35db.jpg'
      }, {
        title: 'Racing',
        img: 'https://media.rawg.io/media/crop/600/400/games/082/082365507ff04d456c700157072d35db.jpg'
      }, {
        title: 'Racing',
        img: 'https://media.rawg.io/media/crop/600/400/games/082/082365507ff04d456c700157072d35db.jpg'
      }, {
        title: 'Racing',
        img: 'https://media.rawg.io/media/crop/600/400/games/082/082365507ff04d456c700157072d35db.jpg'
      }]
    }
  }
}
</script>