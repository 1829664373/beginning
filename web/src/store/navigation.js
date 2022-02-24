 const navigation = {
    name: {
        namespaced: true
    },
    state: {
        cutperson: 0,//创建人物
        cutgoods: 0,
        cutscene: 0
    },
    getter: {
        addCutperson(state) {
            return state.cutperson
        }
    }
}
export default navigation
