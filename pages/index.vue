<template>
    <c-box display="flex">
        <ItemCard v-chakra m="2" title="Test item 1" />
        <ItemCard v-chakra m="2" title="Test item 2" image="https://images.unsplash.com/photo-1579197708794-8a6e76025da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80" />
        <ItemCard v-chakra m="2" title="Test item 3" image="https://images.unsplash.com/photo-1579207114602-bfbaed47835d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <ItemCard v-chakra m="2" title="Test item 4" />
        <ItemCard v-chakra m="2" title="Test item 5" image="https://images.unsplash.com/photo-1613328007570-379c5b22317d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
    </c-box>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import { CBox } from '@chakra-ui/vue'

export default {
    name: "App",
    components: [
        ItemCard,
        CBox
    ]
}
</script>