<template>
    <div v-chakra display="flex" pos="relative" w="100vw" h="100vh">
        <c-box alignSelf="center" justifySelf="center" mx="auto" w="100px" h="100px" bg="red.900">

        </c-box>
    </div>
</template>

<script>
import * as dummyDataAPI from '~/assets/js/dummyDataAPI.js'
import { CBox } from '@chakra-ui/vue'

export default {
    components: {
        CBox
    },
    data() {
        return {
            item: {}
        }
    },
    mounted() {
        this.item = dummyDataAPI.getItem(this.$route.params.id)
    }
}
</script>