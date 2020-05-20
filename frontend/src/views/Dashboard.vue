<template>
  <div class="home col-sm-12 col-md-12">
    <h1>Welcome to your dashboard, {{ user.username }}!</h1>

    <h3 v-if="!tickets.length">No cruise booked!</h3>
    <div v-else>
      <h3>Your tickets</h3>
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket._id"
        :booked="true"
        :ticketData="ticket" />
    </div>
  </div>
</template>

<script>
/* eslint no-underscore-dangle: 0 */
import TicketCard from '../components/TicketCard.vue';

export default {
  name: 'Dashboard',
  components: {
    TicketCard,
  },
  computed: {
    user() {
      return this.$store.getters.getUser || {};
    },
    tickets() {
      return this.$store.getters.getUserTickets || [];
    },
    userTickets() {
      return this.$store.getters.getUser.tickets || [];
    },
  },
  mounted() {
    if (!this.tickets.length) {
      this.fetchTickets();
    }
  },
  watch: {
    user() {
      console.log('user data changed');
    },
    userTickets() {
      console.log('tickets changed');
    },
    tickets() {
      console.log('ticketsData changed');
    },
  },
  methods: {
    fetchTickets() {
      const ids = this.user.tickets.map((el) => el._id);
      this.$store.dispatch('fetchUserTickets', { ids });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
