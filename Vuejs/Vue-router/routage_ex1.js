const Accueil = { template: "<div>Bienvenue</div>" };
const Contact = { template: "<div>Contactez nous @</div>" };
const User = {template: `
        <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
        </div>
        `
};
const UserHome = { template: "<div>Home</div>" };
const UserProfile = { template: "<div>Profile</div>" };
const UserPosts = { template: "<div>Posts</div>" };

const routes = [
    { path: "/accueil", component: Accueil },
    { path: "/contact", component: Contact },
    {
        path: "/utilisateur/:id",
        component: User,
        children: [
          { path: "", component: UserHome },
          { path: "profile", component: UserProfile },
          { path: "posts", component: UserPosts },
        ],
      },
  ];
  
const router = new VueRouter({
    routes,
});
  
const app = new Vue({
    router,
  }).$mount("#app");
  