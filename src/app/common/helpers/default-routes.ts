import { Routes } from "@angular/router";

export const defaultRoute = (segment: string): Routes => [
  {
    path: '',
    redirectTo: segment,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: segment,
    pathMatch: 'full',
  },
];
