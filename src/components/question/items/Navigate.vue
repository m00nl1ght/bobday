<template>
    <v-tabs 
        :value="value"
        @change="$emit('input', $event)"
        slider-color="#d32f2f"
        color="#d32f2f"
    >
        <v-tab 
            v-for="item in items" 
            :key="item.title"
            :style="'width: ' + 100/items.length + '%'"
        >{{ item.title }}</v-tab>
    </v-tabs>
</template>

<script>
export default {
    props: ['items', 'value'],
}
</script>
