<template>
  <nav class="Sidebar">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab', { active: currentTab.name === tab.name }]"
        @click="currentTab = tab"
      >
        <span>{{ tab.name }}</span>
      </button>
    </div>
    <component :is="currentTab.component" />
  </nav>
</template>

<script>
import Experience from './Experience'
import Connect from './Connect'
import You from './You'
import SignOff from './SignOff'
export default {
  inject: ['store'],
  components: { Experience, Connect, You, SignOff },
  data() {
    return {
      currentTab: { name: 'p1', component: Experience },
      tabs: [
        { name: 'p1', component: Experience },
        { name: 'p2', component: Connect },
        { name: 'p3', component: You },
        { name: 'p4', component: SignOff }
      ]
    }
  }
}
</script>
