<template>
    <app-error-card :errorMessage="isRouteError ? 'This page does not exist.' : message" :redirectUrl="'/'" />
</template>

<script>
export default {
    name: "ErrorPage",
    props: {
        isRouteError: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: "An unexpected error occurred."
        }
    },
};
</script>

<style scoped></style>