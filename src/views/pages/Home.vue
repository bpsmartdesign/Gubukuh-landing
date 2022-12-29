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
      <div class="mt-24 is-flex-top">
        <div class="has-texts flex flex-col gap-8 w-3/5">
          <h1 class="text-5xl font-black leading-tight">
            Each Design Has its <br />
            Own Philosophical <br />
            Meaning.
          </h1>
          <h3 class="text-gray-600 text-xl font-medium leading-relaxed">
            Each property design has its own meaning and we are ready to help you to get a
            property according to your state. <br />
            let's discuss soon.
          </h3>
        </div>
        <div class="has-imgs w-2/5">
          <div class="img-1"></div>
          <div class="img-2"></div>
        </div>        
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
