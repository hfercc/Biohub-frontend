import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import NotFound from '@/components/NotFound'
import Forum from '@/components/forum/Forum'
import forumHome from '@/components/forum/Home'
import Repo from '@/components/forum/Repo/Repo'
import Profile from '@/components/forum/Profile/Profile'
import Plugins from '@/components/plugins/plugins'
import SearchResult from '@/components/forum/Search/SearchResult'
import Settings from '@/components/Settings'
import RepoInfo from '@/components/forum/Repo/RepoInfo'
import RepoReview from '@/components/forum/Repo/RepoReview'
import Editor from '@/components/forum/Repo/Editor'
import ExperienceList from '@/components/forum/Repo/ExperienceList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dev',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum,
      children: [
        {
          path: '',
          component: forumHome
        },
        {
          path: ':repo',
          component: Repo,
          children: [
            {
              path: '',
              component: RepoInfo,
              name: 'RepoInfo'
            },
            {
              path: 'experience',
              component: RepoReview,
              children: [
                {
                  path: '',
                  component: ExperienceList,
                  name: 'ExperienceList'
                },
                {
                  path: 'new',
                  component: Editor,
                  name: 'ExperienceNew'
                }]
            }]
        }
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/user/:author',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/search',
      name: 'searchResult',
      component: SearchResult
    },
    {
      path: '/plugins',
      component: Plugins,
      name: 'Plugins'
    },
    {
      path: '/plugins/:plugin',
      component: Plugins,
      name: 'Plugin'
    },
    {
      path: '/settings',
      component: Settings,
      name: 'setting'
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
