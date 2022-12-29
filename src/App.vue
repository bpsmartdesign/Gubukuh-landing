<template>
  <Transition name="slide-right" mode="out-in">
    <LayoutLoader>
      <RouterView />
    </LayoutLoader>
  </Transition>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');

html, body {
  font-family: 'Cabin', sans-serif;
}

#app {
  font-family: 'Cabin', sans-serif;
}
</style>
