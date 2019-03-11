<template>
  <main>
    <transition :name="$Global.Transition.sliderClassName" :mode="$Global.Transition.mode">
      <router-view />
    </transition>
  </main>
</template>
