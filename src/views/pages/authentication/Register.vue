<template>
    <section class="abovefold pt-md-5">
        <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/Ornament.png"
        alt="bg-header" class="img-fluid img-header d-none d-md-block">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container px-0">
                <a class="navbar-brand mr-0" href="#">
                    GivMoney
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto navigation">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Career</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto authentication">
                        <li class="nav-item my-auto text-center login">
                            <a class="nav-link cl-white mb-3 mb-md-0" aria-current="page" href="#">Log in</a>
                        </li>
                        <li class="nav-item mr-0 text-center">
                            <router-link :to="{ name: 'auth-login' }" class="nav-link signup">
                                Sign In
                                
                                 <span class="ml-2">
                                     <img
                                        src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/arrow-right.png"
                                        alt="arrow" class="img-fluid">
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container header">
            <div class="row">
                <div class="col-md-6 px-md-0 my-auto">
                    <div class="headline">
                        Simplifying Global <span class="cl-light-blue">Finance</span>
                    </div>
                    <div class="sub-headline">
                        Faster, easier and cheaper cross border payment starts here
                    </div>
                    <div class="row four-point">
                        <div class="col-md-6">
                            <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/Vector.png"
                                alt="vector" class="mr-3"> Licensed & Regulated
                        </div>
                        <div class="col-md-6">
                            <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/Vector.png"
                                alt="vector" class="mr-3"> Hassle-free
                        </div>
                        <div class="col-md-6">
                            <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/Vector.png"
                                alt="vector" class="mr-3"> 100% Transparent
                        </div>
                        <div class="col-md-6">
                            <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/Vector.png"
                                alt="vector" class="mr-3"> Across 180+ Countries
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-5 mt-md-0">
                    <form action="" method="post" @submit.prevent="register()">
                        <div class="card">
                            <div class="input-group mb-4">
                                <label for="input" class="w-100">
                                    <span class="input-title">Email</span>
                                    <input type="email" class="form-control mt-2" placeholder="Email@example.org" v-model="formData.email">
                                </label>
                            </div>
                            <div class="input-group mb-4">
                                <label for="input" class="w-100">
                                    <span class="input-title">Username</span>
                                    <input type="text" class="form-control mt-2" placeholder="John Doe" v-model="formData.username">
                                </label>
                            </div>
                            <div class="input-group mb-4">
                                <label for="input" class="w-100">
                                    <span class="input-title">Password</span>
                                    <input type="password" class="form-control mt-2" placeholder="Your Password" v-model="formData.password">
                                </label>
                            </div>
                            <button class="btn btn-card" type="submit">
                                Get Started
                            </button>
                            <div class="row mx-0 mt-4 award">
                                <div class="col-1 px-0">
                                    <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/award.png"
                                        alt="award" class="img-fluid">
                                </div>
                                <div class="col-11 px-0">
                                    Licensed and regulated by The Monetary
                                    Authority of Singapore, Hong Kong Customs and Excise Department and Bank Indonesia.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { registerAccount } from '../../../services/authentication/authentication.service'
import { base_url } from '@/config/base_url.js'

export default {
    name: 'auth-register',
    data() {
        return {
            formData: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    mounted(){
        console.log(base_url)
    },
    methods: {
        register() {
            console.log('data', this.formData)

            this.$vs.loading({
                type: 'sound'
            })

            registerAccount(this.formData)
                .then(() => {
                    this.$vs.loading.close()
                    this.$vs.notify({
                        title: 'Success',
                        text: 'Account created successfully',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-right'
                    })
                    this.$router.push({ name: 'auth-login' })
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