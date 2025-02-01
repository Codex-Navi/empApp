import { configureStore } from '@reduxjs/toolkit'
import empComplain from './empComplain'
import empLogin from './empLogin'
import statusChange from './statusChange'

export const store = configureStore({
  reducer: {
  complain:empComplain,
  login:empLogin,
  statuschange:statusChange
  },
})

export default store