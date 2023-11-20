<template>
  <audio autoplay loop>
    <source src="./audio/Around%20the%20Fire.mp3" type="audio/mpeg">
    Votre navigateur ne supporte pas l'élément audio.
  </audio>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Quest Journal Project</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/questcraft">Mes quêtes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/sign">Connexion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/profile">Mon Profil</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>