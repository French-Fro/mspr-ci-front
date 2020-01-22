<template>
    <section class="sections random-product">
        <div class="container-fluid">
            <Modal v-bind:message="'La création du produit s\'est mal passé'" v-if="showModal" @close="showModal = false"/>
            <div class="container">
                <form @submit.prevent="submitForm">
                    <input type="text" class="form-control" placeholder="Nom du produit" id="productName" required>
                    <input type="text" class="form-control" placeholder="Prix" id="productPrice" required>
                    <!-- form-group// -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Créer le produit</button>
                    </div>
                    <!-- form-group// -->
                </form>
                <div class="row">
                    <div class="col-md-4" v-for="product in productList" v-bind:key="product.id">
                        <Product v-bind:name="product.name" v-bind:id="product.id" v-bind:price="product.price"/>
                    </div><!--.col-->
                </div><!--.row-->
            </div><!--.container-->
        </div><!--.container-fluid-->
    </section>
</template>

<script>
    import Product from "./Product";
    import Modal from "./Modal"

    export default {
        name: "ProductList",
        components: {
            Product,
            Modal
        },
        data() {
            return {
                productList: [],
                showModal : false
            };
        },
        created() {
            this.getProductList();
        },
        methods: {
            async getProductList () {
                let self = this;
                fetch(
                    'http://localhost:8000/product/',
                    {
                        method: "GET"
                    }
                )
                    .then(response =>
                        response.json()
                            .then(json => {
                                self.productList = json;
                            })
                    )
                    .catch(err => {
                        //eslint-disable-next-line no-console
                        console.log(err);
                    });
            },
            async createProduct (productName, productPrice) {
                var body = {};
                body.name = productName;
                body.price = productPrice;
                let self = this;
                fetch(
                    'http://localhost:8000/product/',
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
                        self.getProductList();
                    })
                    .catch(err => {
                        //eslint-disable-next-line no-console
                        console.log(err);
                        self.showModal = true
                    });
            },
            submitForm: function() {
                this.createProduct(
                    document.getElementById("productName").value,
                    document.getElementById("productPrice").value
                );
            }
        }

    }
</script>