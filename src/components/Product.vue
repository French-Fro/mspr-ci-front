<template>
    <div class="card">
        <img class="card-img-top" src="http://www.mihanmedia.ir/userfile/736708307-580x567.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">
                <a href="#" class="text-dark">{{ name }}</a>
            </h5>
        </div>
        <div class="card-footer">
            <div class="badge badge-danger float-right">{{ price }} €</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props: {
            name: String,
            price: String
        },

    }
</script>