const initState = { // ví dụ giá trị khởi tạo (nạp vào redux)
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
      ],
      filters: {
        status: 'All',
        colors: []
      }
}

// Reducer ban đầu
const rootReducer = (state = initState, action) => { 
// State này là data (trạng thái) của redux 
// Action là react truyền action vào như thế nào


    return state
}
export default rootReducer
