<template>
    <v-skeleton-loader cols="12" sm="6" md="4" lg="3" type="image, article" rounded outlined class="skeleton-card" />
</template>

<script>
export default {
    name: "GameCardSkeleton",
};
</script>

<style scoped>
.skeleton-card {
    width: 100%;
    height: auto;
    max-width: 300px;
    /* Prevents excessive width */
}

/* Adjust skeleton size for smaller screens */
@media (max-width: 600px) {
    .skeleton-card {
        max-width: 100%;
        height: auto;
    }
}
</style>