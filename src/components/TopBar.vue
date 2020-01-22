<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">MSPR-CI</a>
        <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">
                        Accueil
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/clients">Liste des clients</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="/products">Liste des produits</a>
                </li>
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ selectedClient.lastname }} {{ selectedClient.firstname}}
            </button>
            <div class="dropdown-menu dropdown-menu-right" v-for="client in clientsList" v-bind:key="client.id">
                <button class="dropdown-item" v-on:click="selectedClient = client">{{ client.lastname }} {{ client.firstname }}</button>
            </div>
        </div>
    </nav>
</template>


<script>
    export default {
        name: 'TopBar',
        data() {
            return {
                clientsList: [],
                selectedClient: Object
            };
        },
        created() {
            this.getClientList();
        },
        methods: {
            async getClientList() {
                let self = this;
                fetch(
                    'http://localhost:8000/client/',
                    {
                        method: "GET"
                    }
                )
                    .then(response =>
                        response.json()
                            .then(json => {
                                self.clientsList = json;
                            })
                    )
                    .catch(err => {
                        //eslint-disable-next-line no-console
                        console.log(err);
                    });
            }
        }
    }
</script>
