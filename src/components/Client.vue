<template>
<div class="container">
    <div>
        <div class="col-lg-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <p class="card-text">{{ firstname }}</p>
                    <p class="card-text">{{ lastname }}</p>
                </div>
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