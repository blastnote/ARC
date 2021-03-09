<template>
    <a v-chakra m="1" :href="edit ? '#' : url" target="_blank" :download="name">
        <c-box minW="54px" :maxW="edit ? '229px' : '204px'" h="29px" bg="white" 
            rounded="25px" border="2px" :borderColor="toDelete ? 'red.600' : 'gray.500'"
            alignItems="center" pl="3" :pr="edit ? 0 : 3">
            <c-text :maxW="edit ? '179px' : '184px'" style="float: left;" top="0" is-truncated>{{ name }}</c-text>
            <c-box v-if="edit" style="float: left;" ml="1" w="25px" h="25px" bg="red.600" rounded="25px" display="flex"
                @click="emitDeleteBtnToggle">
                <trash-icon v-if="!toDelete" v-chakra style="color: white;" alignSelf="center" justifySelf="center" mx="auto" size="20"></trash-icon>
                <trash-2-icon v-if="toDelete" v-chakra style="color: white;" alignSelf="center" justifySelf="center" mx="auto" size="20"></trash-2-icon>
            </c-box>
        </c-box>
    </a>
</template>

<script>
import { CBox, CIcon, CText } from '@chakra-ui/vue';
import { TrashIcon, Trash2Icon } from 'vue-feather-icons'

export default {
    components: {
        CBox,
        CIcon,
        CText,
        TrashIcon,
        Trash2Icon
    },
    props: {
        url: {
            type: String
        },
        edit: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            toDelete: false
        }
    },
    computed: {
        name () {
            var t = this.url.split("/");
            return t[t.length-1];
        }
    },
    methods: {
        emitDeleteBtnToggle() {
            this.$emit('emitDeleteBtnToggle', this.url);
            this.toDelete = !this.toDelete;
        }
    }
}
</script>

<style scoped>

</style>