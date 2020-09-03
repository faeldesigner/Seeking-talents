import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})




export class MenuPage implements OnInit {
  pages = [
    {
      title: 'HomePage',
      url: '/home/homePage'
    },
  ]; selectedPatch = '';


  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPatch = event.url;
    });
  }

  ngOnInit() {
  }

}
