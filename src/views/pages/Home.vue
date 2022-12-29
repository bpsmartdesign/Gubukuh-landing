<script lang="ts" setup></script>

<template>
  <div class="page-wrapper">
    <section class="is-flex-top is-hero">
      <div class="w-5/6 pl-12 py-6 pr-4 is-hero_left">
        <nav class="is-flex justify-between">
          <div class="is-flex is-nav_left gap-16">
            <div class="is-flex-center gap-4">
              <img src="@/assets/logo.png" width="50" height="50" alt="LOGO">
              <h3 class="text-4xl font-black">Gubukuh</h3>
            </div>
            <ul class="is-flex gap-4 font-medium text-gray-600">
              <li class="text-text-primary font-semibold"><router-link to="/">Home</router-link></li>
              <li class=""><router-link to="/products">Products</router-link></li>
              <li class=""><router-link to="/about">About Us</router-link></li>
              <li class=""><router-link to="/support">Support</router-link></li>
            </ul>
          </div>
          <div class="is-nav_right">
            <router-link to="/login" class="text-primary">Log In</router-link>
          </div>
        </nav>
      </div>
      <div class="w-1/6 py-6 pl-4 is-hero_right bg-primary-light">
        <button class="px-8 py-2 mt-2 bg-primary text-white">
          Sign Up
        </button>
        <ul>
          <li><i class="lab la-twitter"></i></li>
          <li><i class="lab la-instagram"></i></li>
          <li><i class="lab la-facebook"></i></li>
          <li><i class="lab la-telegram"></i></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
