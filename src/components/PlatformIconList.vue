<template>
    <div>
        <v-icon class="mr-2" v-for="icon in platforms" :key="icon"> {{ iconMap[icon] }}</v-icon>
    </div>
</template>

<script>
import Game from '@/data/Game';

export default {
    name: 'PlatformIconList',
    data() {
        return {
            platforms: Game.parent_platforms.map(platform => platform.platform.slug),
            iconMap: {
                pc: 'mdi-desktop-classic',
                playstation: 'mdi-sony-playstation',
                xbox: 'mdi-microsoft-xbox',
                nintendo: 'mdi-nintendo-switch',
                mac: 'mdi-apple',
                linux: 'mdi-linux',
                android: 'mdi-android',
                ios: 'mdi-cellphone-iphone',
                web: 'mdi-web',
            }
        }
    }
}
</script>

<style scoped></style>