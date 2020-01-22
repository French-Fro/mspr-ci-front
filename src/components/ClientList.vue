<template>
    <div class="clientList">
        <h3>Liste de clients</h3>
        <div class="container">
            <div class="row">
                <div>
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="clientLastname">Nom du client</label>
                            <input type="text" class="form-control" id="clientLastname" placeholder="Entrer un nom">
                        </div>
                        <div class="form-group">
                            <label for="clientFirstname">Prénom du client</label>
                            <input type="text" class="form-control" id="clientFirstname" placeholder="Entrer un prénom">
                        </div>
                        <button type="submit" class="btn btn-primary">Valider</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div v-for="client in clients" v-bind:key=client.id style="padding: 5px">
                    <div v-on:click="gotoClient(client.id)">
                        <Client
                        v-bind:firstname="client.firstname"
                        v-bind:lastname="client.lastname"
                        >
                        </Client>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Client from "./Client";

export default {
    name: 'UsersList',
    components: {
        Client
    },
    data() {
        return {
        clients: [],
        }
    },
    created() {
        this.getClientList();
    },
    methods: {
        async getClientList()
        {
            let self = this;
            fetch(
                'http://localhost:8000/client/',
                {
                    method: "GET",
                }
            )
            .then(res => {
                res
                .json()
                .then(jsonres => {
                    self.clients = jsonres;
                })
                .catch(jsonerr => {
                    //eslint-disable-next-line no-console
                    console.log(jsonerr);
                });
            })
            .catch(err => {
                //eslint-disable-next-line no-console
                console.log(err);
            });
        },
        gotoProfile(id) {
            window.location = '/client?id=' + id;
        },
        async createClient (clientLastname, clientFirstname) {
            var body = {};
            body.firstname = clientFirstname;
            body.lastname = clientLastname;
            let self = this;
            fetch(
                'http://localhost:8000/client/',
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
                    self.getClientList();
                })
                .catch(err => {
                    //eslint-disable-next-line no-console
                    console.log(err);
                    self.showModal = true
                });
        },
        submitForm: function() {
            this.createClient(
                document.getElementById("clientLastname").value,
                document.getElementById("clientFirstname").value
            );
        }
    }
}
</script>
<style scoped>

</style>