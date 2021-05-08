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
                        @click="dialogClose"
                        icon
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                
                <v-card-text>
                    <Modal 
                        @onClose="dialogClose"
                    />
                </v-card-text>
            </v-card>
        </v-dialog>
   
        <QuestionListHeader 
            @onOpenModal="() => this.dialog = true"
            @onDelete="onDeteleChecked"
            v-model="checkAll" 
        />

        <v-divider />

        <QuestionList 
            :questions="questions"
            @onOpenModal="() => this.dialog = true"
            v-model="checked"
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
        dialog: false,
        checkAll: false,
        checked: []
    }),

    methods: {
        dialogClose() {
            this.dialog = false
            this.$store.commit('questions/clearNewQuestion')
        },

        getQuestionsAllId() {
            let ids = []

            this.questions.forEach(element => {
                ids.push(element.id)
            });

            return ids
        },

        onDeteleChecked() {
            this.$store.dispatch('questions/deleteChecked', this.checked)
            this.checkAll = false
        }
    },

    computed: {
        questions() {
            return this.$store.getters['questions/getQuestions']
        }
    },

    watch: {
        checkAll: function(val) {
            if(val) {
                this.checked = this.getQuestionsAllId()
            } else {
                this.checked = []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .dotted {
        border-bottom: dotted 1px grey;
    }
</style>