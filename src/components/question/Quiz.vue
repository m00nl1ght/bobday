<template>
    <div>
        <Test class="shadow"/>
    
        <QuestionListBlock class="shadow mt-5" />
    </div>
</template>

<script>
import Test from '@/components/question/items/Test'
import QuestionListBlock from '@/components/question/items/QuestionsListBlock'

export default {
    components: {
        Test,
        QuestionListBlock
    }
}
</script>

<style lang="scss" scoped>
    .shadow {
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
</style>