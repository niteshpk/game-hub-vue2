<template>
    <div class="platform-icons">
        <v-icon v-for="icon in platformsData" :key="icon" class="platform-icon">
            {{ iconMap[icon] }}
        </v-icon>
    </div>
</template>

<script>
const iconMap = {
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
export default {
    name: 'PlatformIconList',
    props: {
        platforms: {
            type: Array,
            required: true
        }
    },
    computed: {
        platformsData() {
            return this.platforms.map(platform => platform.platform.slug);
        }
    },
    data() {
        return {
            iconMap
        }
    }
}
</script>

<style scoped>
.platform-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}

/* Default icon size */
.platform-icon {
    font-size: 24px;
}

/* Tablet */
@media (max-width: 1024px) {
    .platform-icon {
        font-size: 20px;
    }
}

/* Mobile */
@media (max-width: 600px) {
    .platform-icon {
        font-size: 16px;
    }
}
</style>