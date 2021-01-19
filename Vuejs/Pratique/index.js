var vm = new Vue({
    el: "#app",
    data: {
      firstname: "Eric",
      lastname: 'Martins',
      address: 'St-Jean',
      nombre: 4
    },
    methods: {
      mydetails: function () {
          return (
         "Je m'appele "+this.firstname+ " "+this.lastname+". " +"Je suis portugais! J'habite au Québec");
      },
    },
    computed: {
        moncalcul(){
            return this.nombre+10
        },
    },
  });
  