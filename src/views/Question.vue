<template>
    <v-container>
        <Navigate 
            :items="navItem" 
            v-model="tab"
            class="mt-4 shadow"
        />

        <v-tabs-items v-model="tab" class="mt-4 shadow">
            <v-tab-item v-for="item in navItem" :key="item.title">
                <component :is="item.component"></component>
            </v-tab-item>
        </v-tabs-items>
    </v-container>
</template>

<script>
import Navigate from '@/components/question/items/Navigate'

import Interactive from '@/components/question/Interactive'
import Quiz from '@/components/question/Quiz'
import Search from '@/components/question/Search'

export default {
    components: {
        Navigate,
        Interactive,
        Quiz,
        Search
    },

    data: () => ({
        tab: null,

        navItem:  [
            { title: "Интерактивный опрос", component: "interactive" },
            { title: "Опрос", component: "quiz" },
            { title: "Поиск по опросам", component: "search" },
        ]
    })
}
</script>

<style lang="scss" scoped>
    .shadow {
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
</style>