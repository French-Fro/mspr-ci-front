<template>
    <div class="clientList">
    <h3>Liste de clients</h3>
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
        }
    }
}
</script>
<style scoped>

</style>