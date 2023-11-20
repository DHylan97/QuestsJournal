<template>
  <div class="card mb-3 formul">
    <div class="card-body">
      <div class="form-group">
        <label class="form-label" for="name">Ecris le nom de ta quête</label>
        <input v-model="newQuest.name" class="form-control" type="text" id="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="desc">Description</label>
        <textarea v-model="newQuest.description" class="form-control" id="desc"></textarea>
      </div>
      <div>
        <label class="form-label" for="date">Date butoire</label>
        <input v-model="newQuest.date" type="date" min="2023-05-27" class="form-control" id="date" name="date">
      </div>
      <div class="form-group">
        <label class="form-label" for="type">Type</label>
        <select v-model="newQuest.type" class="form-control" id="type">
          <option value="" disabled>Choisissez sa catégorie</option>
          <option value="home">Maison</option>
          <option value="work">Boulot</option>
          <option value="courses">Courses</option>
          <option value="hobbys">Hobbies</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="statute">Statut</label>
        <select v-model="newQuest.statute" class="form-control" id="type">
          <option value="" disabled>Indiquez son statut</option>
          <option value="todo">A faire</option>
          <option value="inprogress">En cours</option>
          <option value="done">Terminée</option>
        </select>
      </div>
      <div class="d-flex justify-content-end">
        <button v-if="!isEdition" class="btn btn-primary" @click="create()">Créer</button>
        <button v-else class="btn btn-primary" @click="cancelEditing()">Annuler</button>
      </div>
    </div>
  </div>

  <div id="pancart" class="row">
    <div class="col-4">
      <h3 class="text-center"><i class="fa-solid fa-arrow-right-to-bracket"></i> <i class="fa-solid fa-dungeon"></i> A faire</h3>
      <div v-for="todo in toDo" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ todo.name }}</h5>
          <p class="card-text">{{ todo.description }}</p>
          <p class="card-text">{{ todo.date }}</p>

          <div class="d-flex justify-content-end">
            <button class="btn btn-warning me-2" @click="updateQuest(todo.id)">
              <i class="fa-solid fa-pen-to-square fa-beat"></i>
            </button>
            <button class="btn btn-danger" @click="deleteQuest(todo.id)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <h3 class="text-center"><i class="fa-solid fa-dragon fa-shake" style="color: #2e862d;"><i
          class="fa-solid fa-fire fa-shake" style="color: #ff0000;"></i></i><i class="fa-solid fa-shield-halved fa-beat"
          style="color: #a1a1a1;"></i> En cours
      </h3>
      <div v-for="inprogress in inProgress" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ inprogress.name }}</h5>
          <p class="card-text">{{ inprogress.description }}</p>
          <p class="card-text">{{ inprogress.date }}</p>

          <div class="d-flex justify-content-end">
            <button class="btn btn-warning me-2" @click="updateQuest(inprogress.id)">
              <i class="fa-solid fa-pen-to-square fa-beat"></i>
            </button>
            <button class="btn btn-danger" @click="deleteQuest(inprogress.id)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <h3 class="text-center"><i class="fa-solid fa-beer-mug-empty fa-shake" style="color: #f7b700;"></i> Terminées</h3>
      <div v-for="done in doNe" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ done.name }}</h5>
          <p class="card-text">{{ done.description }}</p>
          <p class="card-text">{{ done.date }}</p>
          <div class="d-flex justify-content-end">
            <button @click="updateQuest(done.id)" class="btn btn-warning me-2">
              <i class="fa-solid fa-pen-to-square fa-beat"></i>
            </button>
            <button class="btn btn-danger" @click="deleteQuest(done.id)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newQuest: {
        id: '',
        name: '',
        date:'',
        description: '',
        type: '',
        statute: '',
      },
      nextId: 1,
      quests: [],
      isEdition: false,
    };
  },
  methods: {
    create() {
      this.quests.push({
        id: this.nextId,
        name: this.newQuest.name,
        date:this.newQuest.date,
        description: this.newQuest.description,
        type: this.newQuest.type,
        statute: this.newQuest.statute,
      });
      this.newQuest = {
        id: '',
        name: '',
        date:'',
        description: '',
        type: '',
        statute: '',
      };
      this.nextId++;
    },
    deleteQuest(id) {
      let index = this.quests.findIndex(function (el) {
        return el.id === id;
      });
      this.quests.splice(index, 1);
    },
    updateQuest(id) {
      this.newQuest = this.quests.find(function (el) {
        return el.id === id;
      });
      this.isEdition = true;
    },
    cancelEditing() {
      this.isEdition = false;
      this.newQuest = {
        id: '',
        name: '',
        date:'',
        description: '',
        type: '',
        statute: '',
      };
    },
  },
  computed: {
    toDo() {
      return this.quests.filter(function (el) {
        return el.statute === 'todo';
      });
    },
    inProgress() {
      return this.quests.filter(function (el) {
        return el.statute === 'inprogress';
      });
    },
    doNe() {
      return this.quests.filter(function (el) {
        return el.statute === 'done';
      });
    },
  }
}
</script>