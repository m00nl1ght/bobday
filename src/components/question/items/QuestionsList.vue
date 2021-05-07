<template>
    <v-container>
        <v-row v-for="item in value" :key="item.id">
            <v-col cols="1" align-self="center">
                <v-checkbox
                    class="mx-2 align-center "
                ></v-checkbox>
            </v-col>
            <v-col cols="9" align-self="center">
                <v-subheader class="ma-0 pa-0">{{ item.title }}</v-subheader>
            </v-col>
            <v-col cols="2" align-self="center">
                <v-btn 
                    icon
                    @click="() => onEdit(item.id)"
                >
                    <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>

                <v-btn 
                    class="ml-3" 
                    icon
                    @click="() => onDelete(item.id)"
                >
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['value'],

    methods: {
        onDelete(id) {
            this.$store.dispatch('questions/deleteQuestion', id)
            .then(res => console.log(res))
        },

        onEdit(id) {
            this.$store.dispatch('questions/editQuestion', id)
            .then(res => {
                if(res == 'success') {
                    this.$emit('onOpenModal')
                }
            })
        }
    }
}
</script>