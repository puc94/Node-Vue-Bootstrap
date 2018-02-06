<template>
  <div>
    <b-navbar toggleable="sm" type="dark">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#"><img src="../assets/logo.png"></b-navbar-brand>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand img {
  width: 80px;
}
</style>
