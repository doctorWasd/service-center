<template>
  <transition-group :name="name" tag="div">
    <slot />
  </transition-group>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    name?: 'scale-blur' | 'rotate-scale' | 'flip' | 'scale-flip' | 'scale-lt' | 'slide' | 'scale' | 'slide-r';
  }>(),
  {
    name: 'scale-blur',
  }
);
</script>
<style>
/* scale */
.scale-blur-enter-active,
.scale-blur-leave-active {
  transition: opacity, transform, 0.5s ease-in;
}

.scale-blur-leave-active {
  display: none;
}

.scale-blur-enter-from,
.scale-blur-leave-to {
  opacity: 0;
  transform: scale(0.5) translate3D(-100px, 100px, 0);
  filter: blur(5px);
}

/* rotate-scale */
.rotate-scale-enter-active,
.rotate-scale-leave-active {
  transition: transform 0.5s ease-in;
}

.rotate-scale-leave-active {
  display: none;
}

.rotate-scale-enter-from,
.rotate-scale-leave-to {
  transform: scale(0) rotateZ(360deg);
}

/* flip */
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.5s ease-in;
}

.flip-leave-active {
  display: none;
}

.flip-enter-from,
.flip-leave-to {
  transform: scale(0) rotateX(180deg);
}

/* scale-lt */
.scale-lt-enter-active,
.scale-lt-leave-active {
  transition: transform 0.5s ease-in;
  transform-origin: 0% 0%;
}

.scale-lt-leave-active {
  display: none;
}

.scale-lt-enter-from,
.scale-lt-leave-to {
  transform: scale(0);
}

/* scale-y */
.scale-y-enter-active,
.scale-y-leave-active {
  transition: transform 0.5s ease-in;
}

.scale-y-leave-active {
  display: none;
}

.scale-y-enter-from,
.scale-y-leave-to {
  transform: scaleY(0);
}

/* scale-flip */
.scale-flip-enter-active,
.scale-flip-leave-active {
  transition: transform 0.5s ease-in;
}

.scale-leave-active {
  display: none;
}

.scale-flip-enter-from,
.scale-flip-leave-to {
  transform: translateY(-100%) rotateX(-180deg) scale(0);
}

/* slide */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in;
}

.slide-leave-active {
  display: none;
}

.slide-enter-from,
.slide-leave-to {
  transform: scale(0.5) translateX(-100%);
}

.scale-enter-active,
.scale-leave-active {
  transition: opacity, transform 0.5s ease;
}

.scale-leave-active {
  display: none;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

/* slide-r */
.slide-r-enter-active,
.slide-r-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-r-enter-from,
.slide-r-leave-to {
  transform: translateX(100%);
}
</style>
