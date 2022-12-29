<script lang="ts" setup></script>

<template>
  <div class="page-wrapper">
    <section class="py-12 px-24 is-hero">
      <nav class="is-flex justify-between">
        <div class="is-flex is-nav_left gap-16">
          <div class="is-flex-center gap-4">
            <img src="@/assets/logo.png" width="50" height="50" alt="LOGO" />
            <h3 class="text-4xl font-black">Gubukuh</h3>
          </div>
          <ul class="is-flex gap-4 font-medium text-gray-600">
            <li class="text-text-primary font-semibold">
              <router-link to="/">Home</router-link>
            </li>
            <li class=""><router-link to="/products">Products</router-link></li>
            <li class=""><router-link to="/about">About Us</router-link></li>
            <li class=""><router-link to="/support">Support</router-link></li>
          </ul>
        </div>
        <div class="is-nav_right is-flex gap-8">
          <router-link to="/login" class="text-primary">Log In</router-link>
          <button class="px-8 py-2 mt-2 bg-primary text-white">Sign Up</button>
        </div>
      </nav>
      <div class="mt-24 is-flex-top gap-12 justify-between">
        <div class="has-texts flex flex-col gap-8 w-3/5">
          <h1 class="text-6xl font-black leading-tight">
            Each Design Has its Own Philosophical Meaning.
          </h1>
          <h3 class="text-gray-600 text-2xl font-medium leading-relaxed">
            Each property design has its own meaning and we are ready to help you to get a
            property according to your state. <br />
            let's discuss soon.
          </h3>
        </div>
        <div class="has-imgs relative w-2/5">
          <img
            src="@/assets/images/asset-2.jpg"
            alt="Asset 2"
            class="absolute border-8 border-solid border-white"
            style="bottom: -40%; left: 28%"
          />
          <img src="@/assets/images/asset-1.jpg" alt="Asset 1" />
        </div>
        <ul class="">
          <li><i class="lab la-twitter"></i></li>
          <li><i class="lab la-instagram"></i></li>
          <li><i class="lab la-facebook"></i></li>
          <li><i class="lab la-telegram"></i></li>
        </ul>
      </div>
      <div class="mt-4">
        <div class="is-flex is-tab_list">
          <button class="text-primary bg-white px-8 py-2">Buy</button>
          <button class="bg-gray-400 text-gray-600 px-8 py-2">Sell</button>
          <button class="bg-gray-400 text-gray-600 px-8 py-2">Rent</button>
        </div>
        <div
          class="is-tab_content w-fit px-8 py-4 is-flex gap-6"
          style="box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
        >
          <div class="is-left border-r border-gray-300 border-solid pr-8">
            <p class="is-flex gap-2 text-sm text-gray-600 mb-2">
              <i class="las la-map-marker"></i>
              <span>Location</span>
            </p>
            <p class="is-flex gap-6">
              <span>Semarang, Indonesia</span>
              <i class="text-xs las la-angle-down"></i>
            </p>
          </div>
          <div class="is-right">
            <p class="is-flex gap-2 text-sm text-gray-600 mb-2">
              <i class="las la-home"></i>
              <span>Style</span>
            </p>
            <p class="is-flex gap-6">
              <span>Modern, Minimalist</span>
              <i class="text-xs las la-angle-down"></i>
            </p>
          </div>
          <button class="bg-primary px-6 py-2 text-white ml-20">Search</button>
        </div>
      </div>
      <div class="mt-24 is-flex gap-8">
        <img src="@/assets/images/logo-1.png" style="height: 25px" alt="LOGO" />
        <img src="@/assets/images/logo-2.png" style="height: 25px" alt="LOGO" />
        <img src="@/assets/images/logo-3.png" style="height: 25px" alt="LOGO" />
        <img src="@/assets/images/logo-4.png" style="height: 25px" alt="LOGO" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
