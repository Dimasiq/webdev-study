<template>
  <div class="home col-sm-12 col-md-12">
    <h1>Билеты</h1>
    <TicketsList />
  </div>
</template>

<script>
import TicketsList from '../components/TicketsList.vue';

export default {
  name: 'Home',
  components: {
    TicketsList,
  },
};
</script>
