<template>
    <v-row class="align-center">
        <v-col cols="1">
            <span>{{ index + 1 }})</span>
        </v-col>

        <v-col cols="9">
            <v-text-field
                v-model="val"
                label="Введите название для опроса"
                outlined
                dense
                clearable
                hide-details="true"
            ></v-text-field>
        </v-col>

        <v-col cols="1">
            <v-checkbox
                v-if="type == 'multiple'"
                v-bind:false-value="false"
                v-bind:true-value="true"
                v-model="check"
                @click="() => rightAnswer('multiple')"
            ></v-checkbox>

            <v-radio
                v-if="type == 'single'"
                :off-icon="value.checked ? '$radioOn' : '$radioOff'"
                @click="() => rightAnswer('single')"
            ></v-radio>
 
        </v-col>

        <v-col cols="1">
            <v-btn 
                class="ml-3" 
                icon
                @click="onDelete()"
            >
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ['value', 'type', 'index'],

    methods: {
        onDelete() {
            this.$emit('onDelete', this.index)
        },

        rightAnswer(key) {
            this.$store.dispatch('questions/rightAnswer', { key, index: this.index })
        }
    },

    computed: {
        check: {
            get() {
                return this.value.checked
            },
            set(){}

        },

        val: {
            get() {
                return this.value.title
            },
            set(value) {
                this.$store.commit('questions/addAnswer', { value, index: this.index})
            }
        }
    }
}
</script>