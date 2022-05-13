<template>
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
                        <router-link :to="{ name: 'auth-register' }" class="nav-link signup">
                            Sign Up
                            
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
</template>