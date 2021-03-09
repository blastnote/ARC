<template>
<nuxt-link :to="'/item/' + id">
  <c-box maxW="360px" minW="160px" minH="270px" maxH="800px" 
    :style="imageBg" 
    bgSize="cover" mt="4"
    bgPos="center" bgRepeat="no-repeat"
    pos="relative" class="card" 
  >
    <!-- Fix for card height -->
    <img v-chakra :src="image" style="visibility: hidden;" />
    <!-- Fix for card height -->
    <c-box p="2" pos="absolute" bottom="3">
      <c-box
        p="2" mt="1"
        rounded="20px" bg="white" 
        border-width="1px" as="h4"
        font-weight="semibold"
        line-height="tight" is-truncated
      > {{ title }} </c-box>
    </c-box>

    <!-- Bottom tags positioning -->
    <c-box pos="absolute" bottom="-10px" right="20px" v-if="tags !== null">
      <!-- Displayed tags -->
      <c-box style="float: left;" ml="2" px="3" 
        rounded="10px" textAlign="center" 
        bg="cyan.500" color="white" 
        v-for="(tag, index) in tags.slice(0, 2)" :key="index" 
        > {{ tag }} </c-box>
      <!-- Extra tags popover trigger -->
      <c-box style="float: left;" ml="2" px="3" 
        rounded="10px" textAlign="center" 
        bg="cyan.500" color="white" 
        v-if="tags.length > 2"
        @mouseover="extraTagsHover = true"
        @mouseleave="extraTagsHover = false"
        > +{{ tags.length - 2 }} </c-box>
    </c-box>
    <!-- /Bottom tags positioning -->

    <!-- Extra  tags custom popover -->
    <c-box zIndex="3" pos="absolute" top="100%" right="0"
      p="1" mx="2" mt="14px" bg="white" rounded="20px"
      border="2px" borderColor="gray.200"
      v-if="tags !== null && extraTagsHover">
      <c-box style="float: right;" m="1" px="3" 
        rounded="10px" textAlign="center" 
        bg="cyan.500" color="white" 
        v-for="(tag, index) in tags.slice(2)" :key="index" 
        > {{ tag }} </c-box>
    </c-box>
    <!-- /Extra  tags custom popover -->
  </c-box>
</nuxt-link>
</template>

<script>
import { CBox } from '@chakra-ui/vue'

export default {
    name: `ItemCard`,
    components: {
        CBox
    },
    props: {
      id: {
        type: Number
      },
      title: {
        default: "",
        type: String
      },
      image: {
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1&nofb=1",
        type: String
      },
      tags: {
        default: null,
        type: Array
      }
    },
    computed: {
      imageBg () {
        return "background-image: linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.45) 100%), url('" + this.image + "')";
      }
    },
    data() {
      return {
        extraTagsHover: false
      }
    }
    
}
</script>
<style scoped>
.card {
  border-radius: 24px;
  box-shadow: none;
  transition-property: border-radius, box-shadow;
  transition-duration: 0.15s;
}
.card:hover {
  border-radius: 12px;
  box-shadow: 0 2px 4px 2px #CBD5E0;
}
</style>