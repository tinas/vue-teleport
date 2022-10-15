<script setup>
import { computed } from 'vue'
const props = defineProps({
  icon: String,
  title: String,
  message: String,
  show: Boolean,
})

const iconType = computed(() => {
  switch (props.icon) {
    case 'info':
      return 'blue'
    case 'success':
      return 'green'
    case 'warning':
      return 'orange'
    case 'error':
      return 'red'
  }
})
</script>

<template>
  <Transition name="notification">
    <div v-if="show" class="notification-container">
      <div class="header">
        <component :is="icon" class="icon" :class="[`icon--${iconType}`]" />
        <div class="title">{{ title }}</div>
        <x class="close" @click="$emit('close')" />
      </div>
      <div v-if="message" class="content">
        {{ message }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
  padding: 0.5rem;
  width: 18rem;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 8px rgba(72, 72, 72, 0.25);
  transition: translate 0.3s ease-in-out;
}

.notification-enter-from {
  translate: 100% 0;
}

.notification-enter-to {
  translate: 0 1;
}

.notification-leave-from {
  translate: 0 1;
}

.notification-leave-to {
  translate: 100% 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.title {
  flex: 1;
  font-weight: bold;
}

.close {
  cursor: pointer;
  opacity: 0.4;
}

.close:hover {
  opacity: 1;
}

.content {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

.icon--blue {
  color: #00d1ff;
}

.icon--green {
  color: #00ce3a;
}

.icon--orange {
  color: #ffb800;
}

.icon--red {
  color: #ff0000;
}
</style>
