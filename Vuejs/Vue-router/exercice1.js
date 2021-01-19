const Accueil = { template: "<div>Bienvenue</div>" };
const ListeDarticle = { template: "<div>Liste d'articles</div>" };
const PlanDuSite = { template: "<div>Plan du site</div>" };
const APropos = { template: "<div>À propos</div>" };


const routes = [
    { path: "/home", component: Accueil },
    { path: "/list", component: ListeDarticle },
    { path: "/plan", component: PlanDuSite },
    { path: "/about", component: APropos },
  ];
  
const router = new VueRouter({
    routes,
});
  
const app = new Vue({
    router,
  }).$mount("#app");