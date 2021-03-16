<template>
    <c-box style="background-image: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.65) 100%), url('https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');" 
        w="100vw" h="100vh" bgPos="center" bgRepeat="no-repeat" bgSize="cover" display="flex">
        <c-box  alignSelf="center" justifyItems="center" justifySelf="center" mx="auto" w="400px" h="600px" bg="white" rounded="5px">
            <c-text></c-text>

        </c-box>
    </c-box>
</template>

<script>
import { CBox, CText, CInput } from '@chakra-ui/vue'

export default {
    name: "App",
    components: {
        CBox,
        CText,
        CInput
    }
}
</script>