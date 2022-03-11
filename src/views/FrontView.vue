<template>
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar'

export default {
  components: {
    FrontNavbar
  }
}
</script>
