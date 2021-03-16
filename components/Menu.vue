<template>
    <div>
        <c-box :bg="isHover ? 'gray.200' : 'white'" p="1" rounded="12px" cursor="pointer"
        @mouseover="isHover=true" @mouseleave="isHover=false" @click="isOpen =true"><menu-icon size="40" /></c-box>
        
        <!-- Menu box -->
        <c-drawer zIndex="5" :isOpen="isOpen" placement="left" :on-close="close" :initialFocusRef="()=>$refs.inputInsideModal">
        <c-drawer-overlay zIndex="5" />
        <c-drawer-content>
        <c-drawer-close-button />
        
        </c-drawer-content>
        </c-drawer>
    </div>
</template>

<script>
import {
    CBox,
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton
} from '@chakra-ui/vue';
import { MenuIcon } from 'vue-feather-icons';

export default {
    components: {
        CBox,
        CDrawer,
        CDrawerBody,
        CDrawerFooter,
        CDrawerHeader,
        CDrawerOverlay,
        CDrawerContent,
        CDrawerCloseButton,
        MenuIcon
    },
    data () {
        return {
            isOpen: false,
            isHover: false
        }
    },
    methods: {
        close () {
            this.isOpen = false
        }
    }
}
</script>