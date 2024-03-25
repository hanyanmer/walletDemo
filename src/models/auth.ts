import { queryAuth,updateAuth } from "@/services/demo/AuthController"
export default {
  state:{
    isLogin:false,
    isAuthOpen:false
  },
  effects:{
    *queryAuth({payload},{call,put}){
      const {data } = yield call(queryAuth,payload)
      yield put({type:'queryAuthSuccess',payload:data})

    },
    *updateAuth({payload},{call,put}){
      const {data } = yield call(updateAuth,payload)
      yield put({type:'queryAuthSuccess',payload:data})
    }
  },
  reducers:{
    queryAuthOpen(state,{payload}){
      return {
        ...state,
        isAuthOpen:payload?.isAuthOpen
      }
    },
    updateAuthOpen(state,{payload}){
      return {
        ...state,
        isAuthOpen:payload?.isAuthOpen
      }
    },
    queryAuthSuccess(state,{payload}){
      return {
        ...state,
        isLogin:payload?.login
      }
    },
    updateAuthSuccess(state,{payload}){
      return {
        ...state,
        isLogin:payload?.login
      }
    },
  }
}