import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Iproduct[] = [
    {
      id: '1',
      pName: 'Xbox Wireless Controller - Black',
      pNameURL: 'Xbox Control',
      pDesc: 'Controller for the xbox one console',
      pInfo: 'Compatible with Xbox One X, Xbox One S, Xbox One, Windows 10. Includes Bluetooth technology for gaming on Windows 10 PCs and tablets. Stay on target with textured grip. Get up to twice the wireless range compared to previous Xbox One controllers (tested using the Xbox One S console). Experience the enhanced comfort and feel of the new Xbox wireless controller',
      price: '50',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61LRNmQ7M-L._AC_.jpg'
    },
    {
      id: '2',
      pName: 'Xbox Wireless Controller - Red',
      pNameURL: 'Xbox Control',
      pDesc: 'Controller for the xbox one console',
      pInfo: 'Compatible with Xbox One X, Xbox One S, Xbox One, Windows 10. Includes Bluetooth technology for gaming on Windows 10 PCs and tablets. Stay on target with textured grip. Get up to twice the wireless range compared to previous Xbox One controllers (tested using the Xbox One S console). Experience the enhanced comfort and feel of the new red Xbox wireless controller',
      price: '60',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71KY2m6qm9L._AC_.jpg'
    },
    {
      id: '3',
      pName: 'Xbox Wireless Controller - Phantom White Special Edition',
      pNameURL: 'Xbox Control',
      pDesc: 'Controller for the xbox one console',
      pInfo: 'Equip yourself with the Xbox wireless controller phantom white special edition, featuring a translucent design that fades to white. Plug in any compatible headset with the 3.5 millimeter stereo headset jack. Stay on target with textured grip. Includes Bluetooth technology for gaming on Windows 10 PCs and tablets',
      price: '60',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/51HXJYITUGL._AC_.jpg'
    },
    {
      id: '4',
      pName: 'Xbox Wireless Controller - Blue',
      pNameURL: 'Xbox Control',
      pDesc: 'Controller for the xbox one console',
      pInfo: 'Compatible with Xbox One X, Xbox One S, Xbox One, Windows 10. Includes Bluetooth technology for gaming on Windows 10 PCs and tablets. Features a solid blue finish and textured grip. Get up to twice the wireless range compared to previous Xbox One controllers (tested using the Xbox One S console). Experience the enhanced comfort and feel of the new Xbox wireless controller',
      price: '60',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71bTEJcOPDL._AC_.jpg'
    },
    {
      id: '5',
      pName: 'DualShock 4 Wireless Controller for PlayStation 4 - Jet Black',
      pNameURL: 'PS4 Control',
      pDesc: 'controller for the ps4',
      pInfo: 'The feel, shape, and sensitivity of the dual analog sticks and trigger buttons have been improved to provide a greater sense of control, no matter what you play. The new multi touch and clickable touch pad on the face of the DualShock 4 Wireless Controller opens up worlds of new gameplay possibilities for both newcomers and veteran gamers. The DualShock 4 Wireless Controller features a built in speaker and stereo headset jack, putting several new audio options in the players hands. The DUALSHOCK 4 wireless controller can be easily recharged by plugging it into your PlayStation 4 system, even when in rest mode, or with any standard charger using a USB cable (type A to Micro B Sold Separately)',
      price: '50',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/81WC7WeciqL._AC_.jpg'
    },
    {
      id: '6',
      pName: 'DualShock 4 Wireless Controller for PlayStation 4 - Magma Red',
      pNameURL: 'PS4 Control',
      pDesc: 'controller for the ps4',
      pInfo: 'The feel, shape, and sensitivity of the dual analog sticks and trigger buttons have been improved to provide a greater sense of control, no matter what you play. The new multi touch and clickable touch pad on the face of the DualShock 4 Wireless Controller opens up worlds of new gameplay possibilities for both newcomers and veteran gamers. The DualShock 4 Wireless Controller features a built in speaker and stereo headset jack, putting several new audio options in the players hands. The DUALSHOCK 4 wireless controller can be easily recharged by plugging it into your PlayStation 4 system, even when in rest mode, or with any standard charger using a USB cable (type A to Micro B Sold Separately)',
      price: '55',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._AC_.jpg'
    },
    {
      id: '7',
      pName: 'DualShock 4 Wireless Controller for PlayStation 4 - Blue Camouflage',
      pNameURL: 'PS4 Control',
      pDesc: 'controller for the ps4',
      pInfo: 'Precision control The enhanced feel, shape, and sensitivity of the Dualshock 4 wireless Controller offers players absolute control over all games on the PlayStation 4 system. Sharing at your fingertips The addition of the share button makes sharing your greatest gaming moments as Easy as a press of a button. Upload gameplay videos and screenshots directly from your system. New ways to play Revolutionary features like the touch pad, integrated light bar, and built in speaker offer exciting new ways to experience and interact with your games. Charge Efficiently The DUALSHOCK 4 wireless controller can be easily recharged by plugging it into your PlayStation 4 system, even when in rest mode, or with any standard charger using a USB cable (type A to Micro B Sold Separately)',
      price: '55',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/814h4%2BeRucL._AC_.jpg'
    },
    {
      id: '8',
      pName: 'DualShock 4 Wireless Controller for PlayStation 4 - Glacier White',
      pNameURL: 'PS4 Control',
      pDesc: 'controller for the ps4',
      pInfo: 'The feel, shape, and sensitivity of the dual analog sticks and trigger buttons have been improved to provide a greater sense of control, No matter what you play. The dualshock 4 wireless Controller features a built-in speaker and stereo headset jack, putting several new audio options in the players hands. The dualshock 4 wireless Controller can be easily recharged by plugging it into your PlayStation 4 system, even when in rest mode, or with any standard charger using a USB cable.',
      price: '50',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/719xFB%2Beo6L._AC_.jpg'
    },
    {
      id: '9',
      pName: 'Redragon M602 RGB Wired Gaming Mouse for Windows PC Gamers (White)',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'WIRED GAMING MOUSE; built for Gaming Computers - Ergonomic Redragon M602-RGB “Griffin” RGB Backlit Gaming PC Mouse up to 7200 DPI (user adjustable 800/1200/1600/2400/7200 DPI), 10G acceleration. The High-Precision Sensor delivers Pinpoint Accuracy while the Gaming Grade Micro Switches ensure longevity, greater durability and extreme responsiveness, giving you an even greater edge over your competition',
      price: '20',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61MI2KPnKgL._AC_SL1500_.jpg'
    },
    {
      id: '10',
      pName: 'PICTEK Gaming Mouse Wired Black',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'Excellent gaming performance with 7200 DPI and 4 polling rate PICTEK T7 programmable gaming mice, default five DPI levels available from 1200/2400/3500/5500/7200 DPI. With two DPI button, you can adjust the dpi easily to get high accuracy and consistent responsiveness at any speed. 4 polling rate is adjustable: 125Hz/250Hz/500Hz/1000Hz, polling rate ensures smooth AND high-speed movement, up to 1000Hz makes it faster and more accurate than ordinary mouse.',
      price: '14',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg'
    },
    {
      id: '11',
      pName: 'Razer DeathAdder Elite Gaming Mouse: 16, Matte Black',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'High-Precision 16, 000 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work',
      price: '25',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71-QPWNH%2BVL._AC_SL1500_.jpg'
    },
    {
      id: '12',
      pName: 'Logitech G502 SE Hero High Performance RGB Gaming Mouse with 11 Programmable Buttons',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'High performance hero 16k sensor: Logitech most accurate sensor yet with up to 16,000 dpi for the ultimate in gaming speed, accuracy and responsiveness across entire dpi range',
      price: '35',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71ObPf75UVL._AC_SL1500_.jpg'
    },
    {
      id: '13',
      pName: 'Corsair Nightsword RGB, Performance Tunable FPS/MOBA Gaming Mouse, Black, Backlit RGB LED, 18000 DPI, Optical',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'Corsair exclusive software automatically detects the center of gravity in real time, allowing you to adjust weight between 115G and 137G and fine tune balance to perfectly fit your grip',
      price: '80',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/613J82iVB1L._AC_SL1500_.jpg'
    },
    {
      id: '14',
      pName: 'Logitech G203 Prodigy RGB Wired Gaming Mouse – Black',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'Prodigy Series Logitech G mouse for advanced gaming grade performance up to 8 times faster response than standard mice so every mouse click and move is near instantaneous from hand to screen',
      price: '21',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71BmDZ6u22L._AC_SL1500_.jpg'
    },
    {
      id: '15',
      pName: 'Razer Lancehead Tournament Edition: 5G Optical Sensor - 16,000 Dpi - On-Board & Cloud Memory - Ambidextrous Gaming Mouse - Gunmetal (Renewed)',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'Ambidextrous gaming mouse; enhanced gunmetal design. The worlds most precise laser gaming sensor; featuring the 5G laser sensor which gives you 16,000 DPI and 250 Inches per Second (IPS) tracking',
      price: '1600',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61ka0CATJ0L._AC_SL1500_.jpg'
    },
    {
      id: '16',
      pName: 'Redragon M801P Wired/Wireless Gaming Mouse RGB Backlit Ergonomic 9 Button Programmable Mouse Sniper Pro with Macro Recording Rapid-Fire Button 16400 DPI for Windows ',
      pNameURL: 'Mice',
      pDesc: 'gaming mouse for pc',
      pInfo: 'PROFESSIONAL GRADE WIRED / WIRELESS GAMING MOUSE; featuring ultra-fast lag free wired or wireless connection. The rechargeable mouse features a battery life up to 35 hours (RGB LED on) up to 70 hours (RGB LED off) on a single charge. Pro Gaming features with 16000 user adjustable DPI and 40G acceleration. The High-Precision Sensor delivers Pinpoint Accuracy and extreme responsiveness during PC Gaming or Computer editing',
      price: '40',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/611jbF%2BFbbL._AC_.jpg'
    },
    {
      id: '17',
      pName: ' ',
      pNameURL: ' ',
      pDesc: ' ',
      pInfo: '',
      price: ' ',
      quantity: 0,
      img:''
    },
    {
      id: '18',
      pName: ' ',
      pNameURL: ' ',
      pDesc: ' ',
      pInfo: '',
      price: ' ',
      quantity: 0,
      img:''
    },
    {
      id: '19',
      pName: ' ',
      pNameURL: ' ',
      pDesc: ' ',
      pInfo: '',
      price: ' ',
      quantity: 0,
      img:''
    },
  ];
  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  getProduct(sku: string): Observable<Iproduct> {
    return of(
    this.products.find(
      somethingElse => somethingElse.id === sku
    ));
  }
}