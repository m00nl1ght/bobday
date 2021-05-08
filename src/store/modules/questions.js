// initial state
const state = () => ({
    questions: [
        { 
            id: 1,
            title: 'Заголовок вопроса 1',
            type: 'multiple',
            answers: [
                { title: 'Вопрос1', checked: true },
                { title: 'Вопрос2', checked: false },
                { title: 'Вопрос3', checked: false },
                { title: 'Вопрос4', checked: true },
            ]
        },
        { 
            id: 2,
            title: 'Заголовок вопроса 2',
            type: 'single',
            answers: [
                { title: 'Вопрос1', checked: false },
                { title: 'Вопрос2', checked: false },
                { title: 'Вопрос3', checked: false },
                { title: 'Вопрос4', checked: true },
            ]
        },
        { 
            id: 3,
            title: 'Заголовок вопроса 3',
            type: 'single',
            answers: [
                { title: 'Вопрос1', checked: true },
                { title: 'Вопрос2', checked: false },
                { title: 'Вопрос3', checked: false },
                { title: 'Вопрос4', checked: false },
            ]
        },
    ],

    newQuestion: [
        { title: '', checked: true},
        { title: '', checked: false},
        { title: '', checked: false },
        { title: '', checked: false },
    ],

    newQuestionProp: {
        type: 'single',
        title: ''
    }

})

// getters
const getters = {
    getQuestions: state => state.questions,
    countRowNewQuestion: state => state.newQuestion,
    getType: state => state.newQuestionProp.type,
    getQuestionTitle: state => state.newQuestionProp.title
}
// actions
const actions = {
    addRow(state) {
        state.commit('setNewQuestion', [...state.state.newQuestion, {}])
    },

    deleteRow(state, i) {
        state.commit('setNewQuestion', state.state.newQuestion.filter((item, index) => index !== i))
    },

    rightAnswer(state, prop) {
        if(prop.key == 'single') {
            if(state.state.newQuestion[prop.index] !== true) {
                let questions = state.state.newQuestion.map((item, i) => {
                    if(i == prop.index) {
                        return { ...item, checked: true }
                    } else if (item.checked){
                        return { ...item, checked: false}
                    } else {
                        return item
                    }
                })
                state.commit('setNewQuestion', questions)
            }
        } else if (prop.key == 'multiple') {
            let questions = state.state.newQuestion.map((elem, i) => {
                if (i == prop.index) {
                    let checked = !elem.checked
                    return { ...elem, checked: checked}
                } else {
                    return elem
                }
            })

            state.commit('setNewQuestion', questions)
        }
    },

    addNew(state) {
        return new Promise((resolve) => {
            if(state.state.newQuestionProp.id) {
                let newState = state.state.questions.filter(item => item.id != state.state.newQuestionProp.id)
                let newItem = {
                    title: state.state.newQuestionProp.title,
                    type: state.state.newQuestionProp.type,
                    id: state.state.newQuestionProp.id,
                    answers: state.state.newQuestion
                }

                state.commit('addQuestions', [...newState, newItem])
                resolve('success')
            } else {
                let newItem = {
                    title: state.state.newQuestionProp.title,
                    type: state.state.newQuestionProp.type,
                    id: Date.now(),
                    answers: state.state.newQuestion
                }
        
                state.commit('addQuestions', [...state.state.questions, newItem])
                resolve('success')
            }
        })
    },

    editQuestion(state, id) {
        return new Promise(resolve => {
            let item = state.state.questions.filter(i => i.id == id)
            state.commit('setNewQuestion', item[0].answers)
            state.commit('newQuestionProp', {
                type: item[0].type,
                title: item[0].title,
                id
            })

            resolve('success')
        })
    },

    deleteQuestion(state, id) {
        return new Promise(resolve => {
            state.commit('addQuestions', state.state.questions.filter(item => item.id !== id))
            resolve('success')
        })
    },

    deleteChecked(state, checked) {
        let notCheckedQuestions = state.state.questions.filter(item => checked.indexOf(item.id) == -1)
        state.commit('addQuestions', notCheckedQuestions)
    }
}

// mutations
const mutations = {
    setNewQuestion(state, value) {
        state.newQuestion = value
    },

    addAnswer(state, {value, index}) {
        state.newQuestion[index].title = value
    },

    addQuestions(state, value) {
        state.questions = value
    },

    clearNewQuestion(state) {
        state.newQuestionProp = {
        type: 'single',
        title: ''
        }

        state.newQuestion = [
            { title: '', checked: true},
            { title: '', checked: false},
            { title: '', checked: false },
            { title: '', checked: false },
        ]
    },

    newQuestionProp(state, value) {
        state.newQuestionProp = {...state.newQuestionProp, ...value}
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}