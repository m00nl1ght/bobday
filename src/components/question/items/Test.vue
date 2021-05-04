<template>
    <div>
        <div class="dotted_line">
            <h3>dddd</h3>
        </div>

        <div class="pa-3 row">
            <v-col cols="8">
                <v-row>
                    <v-col cols="4">
                        <v-subheader>НАЗВАНИЕ:</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            v-model="title"
                            label="Введите название для опроса"
                            outlined
                            dense
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <v-subheader>КАТЕГОРИЯ ТЕСТА:</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-select
                        v-model="category"
                            :items="categoryItems"
                            outlined
                            dense
                        ></v-select>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="4">
                <div class="button_block">
                    <v-btn color="#d32f2f" class="white--text">Сохранить</v-btn>

                    <v-btn color="grey" class="white--text">Сохранить черновик</v-btn>
                </div>
            </v-col>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        title: '',
        category: '',
        categoryItems: ['Foo', 'Bar', 'Fizz', 'Buzz']
    })
}
</script>

<style lang="scss" scoped>
    .dotted_line {
        border-bottom: dotted 1px #000;
    }

    .button_block {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        height: 100%;
        padding: 0 20px;
    }
</style>