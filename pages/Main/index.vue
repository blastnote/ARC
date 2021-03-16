<template>
<div v-chakra pos="relative">
  <Menu v-chakra zIndex="2" pos="fixed" top="8" left="8" />
  <c-box style="background-image: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.65) 100%), url('https://images.unsplash.com/photo-1610813328396-9849ca0d87f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')" 
    w="100%" h="75vh" bg="cyan.900" roundedBottom="24px" bgPos="center" bgRepeat="no-repeat" bgSize="cover" display="flex">
    <c-box display="flex" rounded="25px" bg="white" px="4" alignSelf="center" justifySelf="center" mx="auto" w="50%">
      <search-icon v-chakra alignSelf="center" size="30"></search-icon>
      <c-input ml="1" variant="unstyled" />
    </c-box>

  </c-box>
  
  <c-box display="flex"><c-box ml="6" mt="3" py="2" px="4" rounded="15px" border="3px solid" borderColor="black">
    <c-radio-group v-model="selectedFilter" is-inline>
      <c-radio value="1">Relevant</c-radio>
      <c-radio value="2">Recent</c-radio>
      <c-radio value="3">A - Z</c-radio>
    </c-radio-group>
  </c-box></c-box>
  <masonry v-if="items !== null" v-chakra px="6" h="100%" :cols="{default: 5, 1500:4, 1000: 3, 700: 2}" :gutter="{default: '15px', 700: '10px'}" >
    <LazyItemCard v-for="item in items" :title="item.title" :tags="item.tags" :image="item.media[0]" :id="item.id" :key="item.id" />
  </masonry>
  <c-box w="100%" display="flex" v-if="items == null"><p v-chakra alignSelf="center" justifySelf="center" mx="auto">Collections looks a little empty :/</p></c-box>
  <nuxt-link to="/"><c-box pos="fixed" zIndex="2" bottom="5" right="5" bg="orange.300" w="70px" h="70px" rounded="50%">
    <c-icon m="10px" name="add" size="50px" color="gray.50" />
  </c-box></nuxt-link>
</div>
</template>

<script>
import { CBox, CGrid, CInput } from '@chakra-ui/vue';
import VueMasonry from '@/node_modules/vue-masonry-css/dist/vue-masonry'
import ItemCard from '@/components/ItemCard'
import Menu from '@/components/Menu'
import { SearchIcon } from '@/node_modules/vue-feather-icons'
import Vue from 'vue'
import * as dummyDataAPI from '~/assets/js/dummyDataAPI.js'

Vue.use(VueMasonry);

var itemsNum = 15

export default {
  components: {
    CBox,
    CGrid,
    CInput,
    VueMasonry,
    ItemCard,
    SearchIcon,
    Menu
  },
  data() {
    return {
      selectedFilter: '1',
      items: null
    }
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ items: dummyDataAPI.getItems(itemsNum)})
      }, 1500)
    })
  }
}
</script>