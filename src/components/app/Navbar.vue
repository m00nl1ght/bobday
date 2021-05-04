<template>
    <v-tabs
        background-color="#d32f2f"
        slider-color="white"
        dark
    >
        <v-tab 
            v-for="item in items" 
            :key="item.title" 
            :to="item.url"
            exact
            :style="'width: ' + 100/items.length + '%'"
        >{{ item.title }}</v-tab>
    </v-tabs>
</template>

<script>
export default {
    data: () => ({
        tab: null,

        items: [
            { url: '/', title: 'НОВОСТИ' },
            { url: '/question', title: 'ОПРОСЫ' },
            { url: '/material', title: 'МАТЕРИАЛЫ' },
            { url: '/scenario', title: 'СЦЕНАРИЙ' },
            { url: '/dest', title: 'НАЗНАЧЕНИЕ' },
        ],
    })
}
</script>

<style lang="scss" scoped>
    .toolbar {
        background-color: orange;
    }
</style>