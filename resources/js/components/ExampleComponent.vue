<template>
    <div>
        <h1>Hello from Vue Component</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'This is a Vue.js component!',
        };
    },
};
</script>
