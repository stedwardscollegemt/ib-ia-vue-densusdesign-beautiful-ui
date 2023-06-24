<script setup>
import { onMounted } from 'vue'

import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import { TheCard } from 'flowbite-vue'
import { Button } from 'flowbite-vue'

// custom densusdesign components
import DDNavbar from "./../densusdesign/DDNavbar.vue";

onMounted(() => {
});
</script>
<template>
    <!-- <Navbar>
        <template #logo>
            <NavbarLogo link="https://www.google.com/" alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">Flowbite</NavbarLogo>
        </template>
        <template #default="{isShowMenu}">
            <NavbarCollapse :isShowMenu="isShowMenu">
            <NavbarLink isActive link="#">Home</NavbarLink>
            <NavbarLink link="#">Services</NavbarLink>
            <NavbarLink link="#">Pricing</NavbarLink>
            <NavbarLink link="#">Contact</NavbarLink>
            </NavbarCollapse>
        </template>
    </Navbar> -->
    <DDNavbar></DDNavbar>
    <div class="container mx-auto px-4x">
        <div class="grid grid-cols-5 gap-0">
            <div class="flex">
                <img src="./../../assets/svg/noxin-minimal-keyboard-animated.svg" width="200" class="-rotate-45 ml-5"/>
            </div>
            <div class="col-span-3 flex">
                <div class="mx-auto grid grid-cols-2 gap-4">
                    <the-card variant="image" img-src="https://tinyurl.com/y7776mhj" img-alt="Keyboard" class="grow m-3">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">projects and updates</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Stay up to date on how we remain fresh. 
                        </p>
                        <Button gradient="teal-lime" class="mt-2 mb-2">Check us out</Button>
                    </the-card>
                    <the-card variant="image" img-src="https://tinyurl.com/2s4d6fps" class="grow m-3">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">downloads</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Yo, the stuff you are looking to download is right here.
                        </p> 
                        <Button gradient="teal-lime" class="mt-2 mb-2">Grab'em</Button>
                    </the-card>
                    <the-card variant="image" img-src="https://tinyurl.com/yuz5ts4y" class="grow m-3">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">store</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Check out our products, some of the stuff is sick!
                        </p>
                        <Button gradient="teal-lime" class="mt-2 mb-2">Spending spree</Button>
                    </the-card>
                    <the-card variant="image" img-src="https://tinyurl.com/2p8h9vr5" href="#" class="grow m-3">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">contact us</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Why not say aloha, although we might bite... just kidding.
                        </p>
                        <Button gradient="teal-lime" class="mt-2 mb-2">Say aloha</Button>
                    </the-card>
                </div>
            </div>
            <div class="flex">
                <img src="./../../assets/svg/noxin-minimal-keyboard-animated.svg" width="200" class="rotate-45 mt-5 mr-5"/>
            </div>
        </div>
    </div>
</template>