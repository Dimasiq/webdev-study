<template>
  <div>
    <h3>Tickets list!</h3>
    <Preloader v-if="loading" />
    <h5 v-if="error.isError">Server connection error</h5>
    <div v-else>
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket._id"
        :ticketData="ticket" />
    </div>
  </div>
</template>

<script>
import Preloader from './Preloader.vue';
import TicketCard from './TicketCard.vue';

export default {
  name: 'TicketsList',
  components: {
    Preloader,
    TicketCard,
  },
  data() {
    return {
      loading: false,
      error: {
        isError: false,
        message: '',
      },
    };
  },
  mounted() {
    if (!this.tickets.length) {
      this.getTickets();
    }
  },
  computed: {
    tickets() {
      return this.$store.getters.getTickets || {};
    },
  },
  methods: {
    async getTickets() {
      this.loading = true;
      const tickets = await this.$store.dispatch('fetchTickets');
      if (!tickets.success) {
        this.loading = false;
        this.error.isError = true;
        this.error.message = tickets.error;
      } else {
        this.loading = false;
        this.error.isError = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 20px;
}
</style>
