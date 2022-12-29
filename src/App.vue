<template>
  <Transition name="slide-right" mode="out-in">
    <LayoutLoader>
      <RouterView />
    </LayoutLoader>
  </Transition>
</template>
