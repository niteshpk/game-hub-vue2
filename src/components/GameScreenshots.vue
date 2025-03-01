<template>
    <v-row>
        <v-col v-for="file in screenshots" :key="file.id" cols="12" md="6" class="pa-1">
            <v-img :src="file.image" contain></v-img>
        </v-col>
    </v-row>
</template>

<script>
import Screenshots from '@/data/Screenshots';
export default {
    name: 'GameScreenshots',
    data() {
        return {
            screenshots: Screenshots.results
        }
    },
}
</script>