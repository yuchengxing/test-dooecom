//创建常量
const ADD_N = "加"
const REM_N = "减"

//创建reducer 根据老的state和action 生成新的state
export const counter=(state=0,action)=>{
    switch (action.type) {
        case ADD_N:
            return state+1
        case REM_N:
            return state-1
        default:
             return 10 
    }
}

//action creator
export const add_A=()=>{
    return {type:ADD_N}
}
export const rem_R=()=>{
    return {type:REM_N}
}
export const addAsync=()=>{
    //这里返回的是一个箭头函数 因为只有dispatch一个参数所以省略括号
    return dispatch=>{
        //这里的方法回两秒之后执行
        setTimeout(() => {
            //两秒之后执行dispatch发布add_A这个actionCreator 
            dispatch(add_A())
        }, 2000);
    }
}