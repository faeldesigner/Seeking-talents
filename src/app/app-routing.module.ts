import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },

  {
    path: "formUser",
    loadChildren: () =>
      import("./pages/form-usuario/form-usuario.module").then(
        (m) => m.FormUsuarioPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login-usuario/login-usuario.module").then(
        (m) => m.LoginUsuarioPageModule
      ),
  },
  {
    path: "perfil-usuario",
    loadChildren: () =>
      import("./pages/perfil-usuario/perfil-usuario.module").then(
        (m) => m.PerfilUsuarioPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
