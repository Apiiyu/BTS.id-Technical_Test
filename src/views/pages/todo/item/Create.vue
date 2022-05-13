<style scoped>
    body {
        background: #000 !important;
    }
</style>

<template>
    <section id="dashboard" class="bg-dark abovefold">
        <!-- Navbar -->
        <Navbar />

        <!-- Main Content -->

        <div class="container mt-3">
            <div class="row justify-content-center align-items-center">
                <div class="col-10">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-dark">
                            <li class="breadcrumb-item">
                                <router-link :to="{ name: 'todo-dashboard'}">
                                    Dashboard
                                </router-link>
                            </li>
                            <li class="breadcrumb-item active text-white" aria-current="page">Detail Item {{ formData.name }}</li>
                        </ol>
                    </nav>
                </div>

                <div class="col-8">
                    <div class="d-flex justify-content-center">
                        <h3 class="text-white">Create Data Item Name</h3>
                    </div>

                    <div class="d-flex justify-content-center mt-5">
                        <div class="card">
                            <div class="card-body">
                                <form action="" method="post" @submit.prevent="postData()">
                                    <div class="input-group mb-4">
                                        <label for="input" class="w-100">
                                            <span class="input-title">Name</span>
                                            <input type="text" class="form-control mt-2" placeholder="Technical Test" v-model="formData.name">
                                        </label>
                                    </div>

                                    <div class="input-group mb-4">
                                        <label for="input" class="w-100">
                                            <span class="input-title">Item Name</span>
                                            <input type="text" class="form-control mt-2" v-model="formData.itemName">
                                        </label>
                                    </div>

                                    <button class="btn btn-card w-100" style="margin-top: -1rem" type="submit">
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from '@/components/bwa/NavbarLoggedIn'
import { getSelectedDataChecklist, postDataItemNameChecklist } from '@/services/todo/todo.service'
import { createAlert } from '@/helpers/alert';

export default {
    name: 'Dashboard',
    components: {
        Navbar
    },
    data(){
        return {
            formData: {
                name: '',
                itemName: '',
                createItemName: false
            }
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        conditionButton(){
            if (this.formData.createItemName) {
                this.formData.createItemName = false
            } else {
                this.formData.createItemName = true
            }
        },
        getData(){
            // --> Get Route params id
            const checklistID = this.$route.params.id

            // --> Get Data
            getSelectedDataChecklist(checklistID)
                .then(res => {
                    if(res.data.length == 0){
                        createAlert('warning', 'Warning', 'Name will be empty because data is empty')
                        this.formData.createItemName = true
                    }

                    this.formData.name = res.data.name
                })
                .catch(err => {
                    console.log(err)
                })
        },
        postData(){
            console.log('data', this.formData)

            this.$vs.loading({
                type: 'sound'
            })

            // --> Get Route params id
            const checklistID = this.$route.params.id

            postDataItemNameChecklist(checklistID, this.formData)
                .then(() => {
                    this.$vs.loading.close()
                    
                    createAlert('success', 'Success', 'Data has been created')
                    this.$router.push({ name: 'todo-dashboard' })
                })
                .catch(err => {
                    this.$vs.loading.close()
                    
                    this.$vs.notify({
                        title: 'Error',
                        text: err.response.data.message,
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        position: 'top-right'
                    })
                })
        }
    }
}
</script>