<template>
    <v-row>
        <!-- Platforms -->
        <v-col cols="6" sm="6" md="6">
            <div class="definition-item">
                <strong>Platforms:</strong>
                <div v-if="game.parent_platforms?.length">
                    <div v-for="platform in game.parent_platforms" :key="platform.platform.id" class="ma-1">
                        {{ platform.platform.name }}
                    </div>
                </div>
                <div v-else>No platforms available</div>
            </div>
        </v-col>

        <!-- Metascore -->
        <v-col cols="6" sm="6" md="6">
            <div class="definition-item">
                <strong>Metascore:</strong>
                <div>
                    <app-critic-score :score="game.metacritic || 'N/A'" />
                </div>
            </div>
        </v-col>

        <!-- Genres -->
        <v-col cols="6" sm="6" md="6">
            <div class="definition-item">
                <strong>Genres:</strong>
                <div v-if="game.genres?.length">
                    <div v-for="genre in game.genres" :key="genre.id" class="ma-1">
                        {{ genre.name }}
                    </div>
                </div>
                <div v-else>No genres available</div>
            </div>
        </v-col>

        <!-- Publishers -->
        <v-col cols="6" sm="6" md="6">
            <div class="definition-item">
                <strong>Publishers:</strong>
                <div v-if="game.publishers?.length">
                    <div v-for="publisher in game.publishers" :key="publisher.id" class="ma-1">
                        {{ publisher.name }}
                    </div>
                </div>
                <div v-else>No publishers available</div>
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
    font-size: 1rem;
}

@media (max-width: 600px) {
    .definition-item {
        font-size: 0.9rem;
    }
}
</style>
