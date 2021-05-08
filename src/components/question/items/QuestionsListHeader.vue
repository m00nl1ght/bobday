<template>
    <v-container>
        <v-row>
            <v-col cols="1" align-self="center">
                <v-checkbox
                    class="align-center ml-2"
                    v-model="checked"
                ></v-checkbox>
            </v-col>

            <v-col cols="8" align-self="center">
                <v-subheader class="ma-0 pa-0">Вопрос</v-subheader>
            </v-col>

            <v-col cols="3" align-self="center">
                <v-btn 
                    color="#d32f2f" 
                    class="white--text"
                    @click="() => this.$emit('onOpenModal')"
                >
                    Добавить вопрос
                </v-btn>

                <v-btn 
                    class="ml-3" 
                    icon
                    @click="onDelete"
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

    computed: {
        checked: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },

    methods: {
        onDelete() {
            this.$emit('onDelete')
        }
    }
}
</script>