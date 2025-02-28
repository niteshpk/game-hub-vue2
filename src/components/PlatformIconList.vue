<template>
    <div>
        <v-icon class="mr-2" v-for="icon in platforms" :key="icon"> {{ iconMap[icon] }}</v-icon>
    </div>
</template>

<script>

export default {
    name: 'PlatformIconList',
    data() {
        return {
            platforms:
                [
                    'pc',
                    'playstation',
                    'xbox',
                    'nintendo',
                    'mac',
                    'linux',
                    'android',
                    'ios',
                    'web',
                ],
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