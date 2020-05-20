<template>
  <div class="card col-sm-6 col-md-6">
    <div class="card-header">
      {{ ticketData.date }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ ticketData.title }}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Details</a>
      <a v-if="!booked" href="#" @click="book" class="btn btn-warning ml-2">Book</a>
    </div>
    <div class="card-footer text-muted d-flex justify-content-between">
      <div>
        <b>Price: </b>{{ ticketData.price }} ₽
      </div>
      <div v-if="ticketData.quantity">
        <b>Quantity: </b>{{ ticketData.quantity }}
      </div>

    </div>
  </div>
</template>

<script>
/* eslint no-underscore-dangle: 0 */
/* eslint no-param-reassign: 0 */
export default {
  name: 'TicketCard',
  props: {
    ticketData: {
      type: Object,
      defautlt: {},
    },
    booked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async book() {
      if (!this.$store.state.user.user._id) {
        console.log('Sign in to book tickets!');
        return;
      }
      const { tickets } = this.$store.state.user.user;
      const ticket = {
        _id: this.ticketData._id,
        quantity: 1,
      };

      const match = tickets.find((el) => el._id === ticket._id);
      if (match) {
        tickets.map((el) => {
          if (el._id === ticket._id) {
            el.quantity += ticket.quantity;
            return el;
          }
          return el;
        });
      } else {
        tickets.push(ticket);
      }
      await this.$store.dispatch('updateUser', {
        tickets,
      });
      const ids = this.$store.getters.getUser.tickets.map((el) => el._id);
      await this.$store.dispatch('fetchUserTickets', { ids });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  padding: 0;
}
</style>
