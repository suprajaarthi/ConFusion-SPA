import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
 const DISHES: Dish[] = [
{
      id: '0',
      name: 'Pizza',
      image: '/assets/images/piz.jpg',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '5.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Imagine all the eatables, living in conFusion!',
           author: 'John Lemon',
           date: '2012-10-16T17:57:28.556094Z'

    },
    {
      id: '1',
      name: 'Biriyani',
      image: '/assets/images/bb.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
           author: 'Paul McVites',
           date: '2014-09-05T17:57:28.556094Z'
    },
       {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/donut.jpg',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
           comment: 'Eat it, just eat it!',
           author: 'Michael Jaikishan',
           date: '2015-02-13T17:57:28.556094Z'
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/cake.jpg',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
           comment: 'Ultimate, Reaching for the stars!',
           author: 'Ringo Starry',
           date: '2013-12-02T17:57:28.556094Z'
    } 
 ];
 



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  dishes: Dish[] = DISHES;
  selectedDish : Dish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
