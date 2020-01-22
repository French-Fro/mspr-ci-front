<template>
<div class="container">
    <div>
        <div class="col-lg-4">
            <div>
                {{ firstname }} {{ lastname }}
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Client',
    props: {
        firstname: String,
        lastname: String,
    }
}
</script>
<style scoped>

</style>