<style scoped>
    .table-responsive .align-middle,
    .table-responsive .align-middle div {
        color: #fff;
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
                            <li class="breadcrumb-item active text-white" aria-current="page">Dashboard ></li>
                        </ol>
                    </nav>

                    <div class="d-flex justify-content-between mx-3">
                        <h3 class="text-white">Data Checklist</h3>

                        <router-link :to="{ name: 'todo-create'}" class="btn btn-primary btn-sm px-3 py-2">
                            Create Data
                        </router-link>
                    </div>

                    <div class="d-flex justify-content-center mt-5">
                        <div class="card" style="width: 500px">
                            <div class="card-body">
                                <div class="table-responsive text-white">
                                    <b-table 
                                        table-class="table table-centered w-100" 
                                        thead-tr-class="text-white" 
                                        responsive="sm" 
                                        :items="tableData" 
                                        :fields="fields"
                                    >
                                        <template v-slot:cell(no)="data">
                                            <div class="d-inline-flex align-items-center">
                                                <b> {{ currentPageDetail > 1 ? currentPageDetail * perPage - (perPage-1) + data.index : data.index + 1 }}</b>
                                            </div>
                                        </template>
    
                                        <template v-slot:cell(name)="data">
                                            <div class="d-inline-flex align-items-center text-white">
                                                {{ data.item.name }}
                                            </div>
                                        </template>
        
                                        
                                        <template v-slot:cell(actions)="data">
                                            <div>
                                                <router-link :to="{ name: 'todo-detail-item', params: { id: data.item.id} }">
                                                    <b-button size="sm" variant="primary" class="mr-1">Detail</b-button>
                                                </router-link>
                                                
                                                <b-button size="sm" variant="danger" @click="deleteData(data.item.id)"
                                                >Delete</b-button
                                                >
                                            </div>
                                        </template>
                                    </b-table>
                                </div>
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
import { getDataChecklist, deleteDataChecklist } from '@/services/todo/todo.service'

export default {
    name: 'Dashboard',
    components: {
        Navbar
    },
    data(){
        return {
            tableData: [],
            fields: [
                {
                    key: 'no',
                    label: 'No',
                    sortable: false,
                    class: 'align-middle'
                },
                {
                    key: 'name',
                    label: 'Name Checklist',
                    sortable: false,
                },
                {
                    key: 'actions',
                    label: 'Actions',
                    sortable: false,
                    class: 'align-middle'
                }
            ]
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            getDataChecklist()
                .then((result) => {
                    this.tableData = result.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        deleteData(id){
            if(confirm('Are you sure want to delete this data?')){
                deleteDataChecklist(id)
                    .then(() => {
                        this.getData()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
}
</script>