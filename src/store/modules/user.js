import * as user from '@/api/user'

const User = 'user'
const Token = 'token'

// 个人中心模块
export default {
  state: {
    [Token]: sessionStorage.getItem(Token) ? JSON.parse(sessionStorage.getItem(Token)) : '',
    [User]: sessionStorage.getItem(User) ? JSON.parse(sessionStorage.getItem(User)) : 'qwe'
  },
  mutations: {
    // 登录后,将用户信息保存
    signIn (state, { successToken, userResponse }) {
      sessionStorage.setItem('user', JSON.stringify(userResponse))
      sessionStorage.setItem('token', JSON.stringify(successToken))
      state[Token] = successToken
      state[User] = userResponse
    },
    // 登出,移除sessionStorage相应值
    signOut (state) {
      sessionStorage.removeItem(User)
      sessionStorage.removeItem(Token)
      state[Token] = ''
      state[User] = ''
    }
  },
  actions: {
    // 登录请求
    async signIn ({ commit }, payLoad) {
      const data = await user.toLogin(payLoad)
      if (data) {
        commit('signIn', data)
        return true
      }
      return false
    },
    // 提交登出,接收vue实例做后续交互操作
    signOut ({ commit }, { vm }) {
      commit('signOut')
      vm.$router.push({ name: 'Home' })
    }
  }
}
