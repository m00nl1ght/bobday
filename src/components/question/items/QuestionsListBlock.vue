<template>
    <v-container>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="800"
        >
            <v-card>
                <v-card-title class="justify-end dotted">
                    <v-btn 
                        @click="() => this.dialog = false"
                        icon
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                
                <v-card-text>
                    <Modal 
                        @onClose="() => this.dialog = false"
                    />
                </v-card-text>
            </v-card>

        </v-dialog>
   
        <QuestionListHeader 
            @onOpenModal="() => this.dialog = true"
        />

        <v-divider />

        <QuestionList 
            :value="questions"
            @onOpenModal="() => this.dialog = true"
        />
    </v-container>
</template>

<script>
import QuestionListHeader from '@/components/question/items/QuestionsListHeader'
import QuestionList from '@/components/question/items/QuestionsList'
import Modal from '@/components/question/items/Modal'

export default {
    components: {
        QuestionListHeader,
        QuestionList,
        Modal
    },

    data: () => ({
        dialog: false
    }),

    computed: {
        questions() {
            return this.$store.getters['questions/getQuestions']
        }
    }
}
</script>

<style lang="scss" scoped>
    .dotted {
        border-bottom: dotted 1px grey;
    }
</style>