<script setup>
import { ref, watch, computed } from 'vue'
import Modal from './components/Modal.vue'
import Notification from './components/Notification.vue'

const notificationTypes = ['No icon', 'info', 'success', 'warning', 'error']
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus similique aliquid.'
const title = ref('Custom notification')
const notification = ref(false)
const showNotificationMessage = ref(true)
const modal = ref(false)
const icon = ref('info')
const selected = ref('info')

const showNotification = () => {
  notification.value = !notification.value
}
const showModal = () => {
  modal.value = !modal.value
}

const message = computed(() => (showNotificationMessage.value ? text : ''))

watch(selected, newValue => {
  if (newValue == notificationTypes[0]) {
    icon.value = ''
  } else {
    icon.value = newValue
  }
})
</script>

<template>
  <div>
    <div class="menu">
      <button @click="showModal" class="modal-button">Show Modal</button>
      <button @click="showNotification">Show notification</button>
      <select class="select-box" v-model="selected">
        <option v-for="type in notificationTypes" :key="type">{{ type }}</option>
      </select>
      <span>
        <label>Show notification detail</label>
        <input type="checkbox" v-model="showNotificationMessage" />
      </span>
    </div>
    <Teleport to="#modal">
      <Modal :show="modal" @close="showModal">
        <template #header>
          <h3>custom header</h3>
        </template>
      </Modal>
    </Teleport>
    <Teleport to="#notification">
      <Notification :show="notification" :icon="icon" :title="title" :message="message" @close="showNotification" />
    </Teleport>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
