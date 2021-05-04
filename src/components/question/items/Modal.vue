<template>
    <v-form class="form">
        <v-row>
            <v-col cols="4">
                <v-subheader>Вопрос:</v-subheader>
            </v-col>

            <v-col cols="8">
                <v-text-field
                    v-model="question"
                    clearable
                    outlined
                    dense
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
                ></v-select>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        question: '',

        typeSelected:{ value: 'single', title: 'Один верный' },
        type: [
            { value: 'single', title: 'Один верный' },
            { value: 'multiple', title: 'Множественный выбор' }
        ]
    })
}
</script>

<style lang="scss" scoped>
    .form {
        max-width: 700px;
        margin: 0 auto;
        padding: 10px 0;
    }
</style>