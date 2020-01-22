<template>
    <div class="card">
        <img class="card-img-top" src="http://www.mihanmedia.ir/userfile/736708307-580x567.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">
                <a href="#" class="text-dark">{{ name }}</a>
            </h5>
        </div>
        <div class="card-footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5">
                        <input class="custom-select float-left" type="number" value="1" :id="'amount-' + id">
                    </div>
                    <div class="col-xs-5">
                        <button type="button" class="btn btn-primary float-right" v-on:click="addToPurchase">
                            <Octicon :icon="plus"/>
                        </button>
                    </div>
                </div>
            </div>

            <div class="badge badge-danger float-right">{{ price }} €</div>
        </div>
    </div>
</template>

<script>
    const { Octicon, plus } = require('octicons-vue')
    import VueCookies from 'vue-cookies'

    export default {
        name: "Product",
        components: {
            Octicon
        },
        data() {
            return {
                plus
            }
        },
        props: {
            id: Number,
            name: String,
            price: String
        },
        methods: {
            addToPurchase: function () {
                var body = {};
                var selectedClient = VueCookies.get('selected-client');
                body.client = selectedClient.id;
                body.product = this.id;
                body.amount = document.getElementById('amount-' + this.id).value;
                let self = this;
                fetch(
                    'http://localhost:8000/purchase/',
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body)
                    }
                )
                    .then(res => {
                        //eslint-disable-next-line no-console
                        console.log(res);
                    })
                    .catch(err => {
                        //eslint-disable-next-line no-console
                        console.log(err);
                        self.showModal = true
                    });
            }
        }
    }
</script>