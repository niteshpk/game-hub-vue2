<template>

    <v-row>
        <v-col cols="6">
            <div class="definition-item">
                <strong>Platforms:</strong>
                <div v-if="this.game.parent_platforms">
                    <div v-for="platform in this.game.parent_platforms" :key="platform.platform.id" class="ma-1">
                        {{ platform.platform.name }}
                    </div>
                </div>
            </div>
        </v-col>

        <v-col cols="6">
            <div class="definition-item">
                <strong>Metascore:</strong>
                <div>
                    <app-critic-score :score="game.metacritic || 0" />
                </div>
            </div>
        </v-col>

        <v-col cols="6">
            <div class="definition-item">
                <strong>Genres:</strong>
                <div>
                    <div v-for="genre in this.game.genres" :key="genre.id" class="ma-1">
                        {{ genre.name }}
                    </div>
                </div>
            </div>
        </v-col>

        <v-col cols="6">
            <div class="definition-item">
                <strong>Publishers:</strong>
                <div v-if="this.game.publishers">
                    <div v-for="publisher in this.game.publishers" :key="publisher.id" class="ma-1">
                        {{ publisher.name }}
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: 'GameAttributes',
    props: {
        game: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.definition-item {
    margin-bottom: 12px;
}
</style>