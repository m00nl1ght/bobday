<template>
    <v-form class="form" @submit.prevent="onSubmit()">
        <v-row>
            <v-col cols="4">
                <v-subheader>Вопрос:</v-subheader>
            </v-col>

            <v-col cols="8">
                <v-text-field
                    v-model="questionTitle"
                    clearable
                    outlined
                    dense
                    hide-details="true"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="4">
                <v-subheader>Тип ответа:</v-subheader>
            </v-col>

            <v-col cols="8">
                <v-select
                    item-text="title"
                    item-value="value"
                    :items="type"
                    v-model="typeSelected"
                    outlined
                    dense
                    hide-details="true"
                ></v-select>
            </v-col>
        </v-row>

        <ModalQuestionRow 
            v-for="(item, index) in countRowNewQuestion" :key="index"
            :index="index"
            :value="item"
            :type="typeSelected"
            @onDelete="onDelete"
        />

        <v-row>
            <v-btn 
                fab 
                color="#d32f2f" 
                class="white--text mt-4"
                @click="addRow()"
            ><v-icon>mdi-plus</v-icon></v-btn>
        </v-row>

        <v-row>
            <v-btn type="submit" color="#d32f2f" class="white--text mx-auto">Готово</v-btn>
        </v-row>
    </v-form>
</template>

<script>
import ModalQuestionRow from '@/components/question/items/ModalQuestionRow'

export default {
    components: {
        ModalQuestionRow
    },

    data: () => ({
        type: [
            { value: 'single', title: 'Один верный' },
            { value: 'multiple', title: 'Множественный выбор' }
        ]
    }),

    computed: {
        countRowNewQuestion() {
            return this.$store.getters['questions/countRowNewQuestion']
        },

        typeSelected: {
            get() {
                return this.$store.getters['questions/getType']
            },
            set(value) {
                this.$store.commit('questions/newQuestionProp', { type: value })
            }
        },

        questionTitle: {
            get() {
                return this.$store.getters['questions/getQuestionTitle']
            },
            set(value) {
                this.$store.commit('questions/newQuestionProp', { title: value })
            }
        }
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('questions/addNew')
            .then(res => {
                if(res == 'success') {
                    this.$store.commit('questions/clearNewQuestion')

                    this.$emit('onClose')
                }
            })
        },

        onDelete(index) {
            this.$store.dispatch('questions/deleteRow', index)
        },

        addRow() {
            this.$store.dispatch('questions/addRow')
        },
    }
}
</script>

<style lang="scss" scoped>
    .form {
        max-width: 700px;
        margin: 0 auto;
        padding: 10px 0;
    }
</style>