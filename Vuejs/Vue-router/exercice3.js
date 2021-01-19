const Accueil = { template: "<div>Bienvenue</div>" };
const ListeDarticle = { template: `<div>
                                <router-link to="/list/meubles">Meubles</router-link>
                                <router-link to="/list/electromenagers">Electro-menagers</router-link>
                                <router-link to="/list/jouets">Jouets</router-link>
                                <router-link to="/list/vetements">Vêtements</router-link>
                                <router-view></router-view>
                                </div>` };
const PlanDuSite = { template: "<div>Plan du site</div>" };
const APropos = { template: "<div>À propos</div>" };
const Categorie = { template:  `
                    <div>
                    <h2>Categories {{ $route.params.type}}</h2>
                    <div v-if="$route.params.type==='meubles'">
                        <router-link to="/list/meubles/table">Table</router-link>
                        <router-link to="/list/meubles/bureau">Bureau</router-link>
                        <router-link to="/list/meubles/chaise">Chaise</router-link>
                        <router-link to="/list/meubles/commode">Commode</router-link>
                    </div>
                    <div v-if="$route.params.type==='electromenagers'">
                        <router-link to="/list/electromenagers/refrigerateur">Refrigerateur</router-link>
                        <router-link to="/list/electromenagers/poele">Poele</router-link>
                        <router-link to="/list/electromenagers/laveuse">Laveuse</router-link>
                        <router-link to="/list/electromenagers/secheuse">Sécheuse</router-link>
                    </div>
                    <div v-if="$route.params.type==='jouets'">
                        <router-link to="/list/jouets/cassetete">Casse-tête</router-link>
                        <router-link to="/list/jouets/poupee">Poupée</router-link>
                        <router-link to="/list/jouets/toutou">Toutou</router-link>
                        <router-link to="/list/jouets/jeusociete">Jeu de société</router-link>
                    </div>
                    <div v-if="$route.params.type==='vetements'">
                        <router-link to="/list/vetements/pantalon">Pantalon</router-link>
                        <router-link to="/list/vetements/chandail">Chandail</router-link>
                        <router-link to="/list/vetements/tuque">Tuque</router-link>
                        <router-link to="/list/vetements/bas">Bas</router-link>
                    </div>
                    <router-view></router-view>
                    </div>
                    ` };
const Articles = { template: "<div><h1>{{ $route.params.typeArticles }} </h1></div>" };


const routes = [
    { path: "/home", component: Accueil },
    { path: "/list", component: ListeDarticle, 
        children: [
        { path: ":type", component: Categorie,
            children: [
            { path: ":typeArticles", component: Articles },
            ], 
        },
      ],},
    { path: "/plan", component: PlanDuSite },
    { path: "/about", component: APropos },
  ];
  
const router = new VueRouter({
    routes,
});
  
const app = new Vue({
    router,
  }).$mount("#app");