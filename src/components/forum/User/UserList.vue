<template>
  <transition name="fade">
    <div class="user-list" v-if="users.length > 0">
      <user-item :user="user" v-for="user in users" :key="user.username"></user-item>
      <pager :hasNext="hasNext" :hasPrevious="hasPrevious" :pageNum="pageNum"></pager>
    </div>
  </transition>
</template>

<script>
  import PageMixin from '@/components/Common/PageMixin'
  import UserItem from './UserItem'

  export default {
    props: ['api'],
    components: { UserItem },
    mixins: [PageMixin],
    data () {
      return {
        users: [],
        loading: false,
        hasNext: false,
        hasPrevious: false,
        pageNum: 0
      }
    },
    methods: {
      getQueryParams () {
        return {}
      },
      loadUsers () {
        this.users = []
        return this._load(this.api)
      },
      processResponse (response) {
        this.users = response.data.results
      }
    },
    mounted () {
      this.loadUsers()
    },
    watch: {
      'api' () {
        this.loadUsers()
      }
    }
  }
</script>
