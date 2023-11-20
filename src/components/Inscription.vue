<template>
  <div id="form">
      <div class="mb-3 row">
      <legend>Remplis ce formulaire pour te connecter !</legend>
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
  </div>
      <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
          </div>
      </div>
      <router-link to="/">
        <button class="btn btn-primary">Se connecter</button>
      </router-link>
  </div>
</template>
<style>
</style>
<script>
</script>