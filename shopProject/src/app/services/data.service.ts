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
      pName: 'Redragon S101 Wired Gaming Keyboard and Mouse Combo, LED RGB Backlit Gaming Keyboard with Multimedia Keys, Wrist Rest, PLUS RGB Backlit Gaming Mouse with 3200 DPI for Windows PC Gamers – (Black)',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Redragon S101 Wired Gaming Keyboard and Mouse Combo, LED RGB Backlit Gaming Keyboard with Multimedia Keys, Wrist Rest, PLUS RGB Backlit Gaming Mouse with 3200 DPI for Windows PC Gamers – (Black)',
      price: '27',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg'
    },
    {
      id: '18',
      pName: 'Corsair K55 RGB Gaming Keyboard - Quiet & Satisfying LED Backlit Keys - Media Controls - Wrist Rest Included – Onboard Macro Recording',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Three zone dynamic RGB backlighting with 10+ preconfigured vivid RGB lighting modes allow you to choose immersive lighting effects. 6 programmable macro keys enable powerful actions, key remaps and combos; Adjustable Height :Yes. Dedicated Volume and multimedia controls for direct Audio control without interrupting your game. Matrix 110 keys. Quiet and responsive keys give a satisfying feel. Compatibility and System Requirements: Windows 10, Windows 8, Windows 7, or Windows Vista. PC with 2 USB 2.0 ports. Multi key anti ghosting ensures the most accurate simultaneous key presses. Comfortable wrist rest for fatigue reduction. Compatible with Xbox One to play keyboard enabled games. New & Used (36) from $45.89 + FREE Shipping',
      price: '50',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71wSG1VzANL._AC_SL1500_.jpg'
    },
    {
      id: '19',
      pName: 'Razer Huntsman Gaming Keyboard: Opto-Mechanical Key Switches - Instant Actuation - Customizable Chroma RGB Lighting - Programmable Macro Functionality - Classic Black',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Faster Than Legacy Mechanical Switches: Razer Optical switches use light-based actuation, registering key presses at the speed of light (30% shorter actuation distance than other clicky switches at 1.5 mm) with satisfying, clicky feedback. Ultimate Personalization & Gaming Immersion with Razer Chroma: Fully syncs with popular games, Razer hardware, Philips Hue, and gear from 30+ partners; supports 16.8 million colors on individually backlit keys. Quality, Aluminum Construction: Covered with a matte, aluminum top frame for increased structural integrity. Fully Programmable Macros: Razer Hypershift allows for all keys and keypress combinations to be remapped to execute complex commands. Unrivalled Durability: Supports up to 100 million clicks with a 2 year manufacturer warranty, double the lifespan of most competitor keyboards',
      price: '140',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61pgenJC-OL._AC_SL1000_.jpg'
    },
    {
      id: '20',
      pName: 'SteelSeries Apex Pro TKL Mechanical Gaming Keyboard – World’s Fastest Mechanical Switches – OLED Smart Display – Compact Form Factor – RGB Backlit',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'OmniPoint Adjustable Switches allow for customization of actuation distance from 0.4mm to 3.6mm. OLED Smart Display an integrated command center for adjusting settings and tracking on the fly info straight from your game, Spotify, Discord, and more. Aircraft Grade Aluminum Alloy built for a lifetime of durability and stability. RGB Illumination unmatched customization with 16.8 million colors per key. Premium Magnetic Wrist Rest provides full palm support and comfortable, ergonomic feel',
      price: '180',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/811-0kItnvL._AC_SL1500_.jpg'
    },
    {
      id: '21',
      pName: 'E-Element Z-88 60% RGB Mechanical Gaming Keyboard, Brown Switch, LED Backlit, Water Resistant, Compact 81 Keys Anti-Ghosting for Mac PC, White',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Outemu Innovative pluggable Brown Switches Custom mechanical switches designed for longevity, responsiveness, and durability. Offer the best tactile and lightly clicky typing experience. As well being ever slightly QUIETER than blue switches. Anti-ghosting 81 Keys, N-key rollover Allowing multi-keys to work simultaneously with high speed. Each key is controlled by independent switch, let you enjoy high-grade games with fast response. Preset 10-mode RGB Backlighting and Color-Flashing Speed Double-shot injection molded keycaps for clear backlighting and extreme durability. There is a solid color backlit mode. Durability and Wide Compatibility Made of top ABS and metal material, with matte-finish texture and gold plated USB connector, it is sturdy and robust. Compatible with Windows10, Windows 8, Windows 7, Mac OS X, Windows XP, Windows VISTA. Key Shortcuts and Ergonomic design Easy to access to calculator, email, web browser, volume, media etc with FN+F1-F12. Ergonomic design: the stepped keycap makes it sleek and thearc and slope fit your hands easily to prevent fatigue. Provides Windows Key lock for gaming',
      price: '46',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71ffwyg-pTL._AC_SL1500_.jpg'
    },
    {
      id: '22',
      pName: 'Havit Keyboard Rainbow Backlit Wired Gaming Keyboard Mouse Combo, LED 104 Keys USB Ergonomic Wrist Rest Keyboard, 3200DPI 6 Button Mouse for Windows PC Gamer Desktop, Computer (Black)',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Gaming Mouse and Keyboard—Including a 7 Colorful Circular Breathing LED Gaming Mouse and a Rainbow Backlit Gaming Keyboard.Rainbow backlights takes you into a pretty cool gaming atmosphere quickly.7 circular breathing color of mouse:Red, Green, Blue, Yollow, Purple, Cyan, Pink. Fantastic for pc games.',
      price: '30',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71XIomsVr1L._AC_SL1500_.jpg'
    },
    {
      id: '23',
      pName: 'NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Quiet Ergonomic Water-Resistant Mechanical Feeling Keyboard, Ultra-Slim Rainbow LED Backlit Keyboard for Desktop, Computer, PC',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Professional Gaming Keyboard UV coated keycaps and injection laser carving ABS keycaps design, the letter of characters never fade. Anti-sweat, prevents keycap damage, enhanced durability, and tactile feedback. Thick and firm stainless steel base plate, long service life, and never deforms. Metal and ABS construction make it more solid and reliable. NPET K10 gaming keyboard is more durable than the plastic keyboard, your best keyboard choice',
      price: '20',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61w0BypBzrL._AC_SL1500_.jpg'
    },
    {
      id: '24',
      pName: 'Corsair K95 RGB Platinum Mechanical Gaming Keyboard - 6x Programmable Macro Keys - USB Passthrough & Media Controls - Fastest Cherry MX Speed - RGB LED Backlit - Black Finish',
      pNameURL: 'Keyboard',
      pDesc: 'gaming keyboard for pc gamers',
      pInfo: 'Aircraft grade anodized brushed aluminum frame: Built to withstand a lifetime of gaming. Lightweight and rugged durability, necessary for a keyboard thats going to see a lot of action. 8MB profile storage with hardware macro and lighting playback: Allow access up to three stored profiles on the go, independent of external software. Windows 10, Windows 8, Windows 7, or Windows Vista. Dynamic multicolor per key backlighting with Light Edge: Adjust each keys color and illumination level in addition to 19 zones on the top edge light bar for sophisticated and dramatic animations. 100 percentage CHERRY MX Speed RGB mechanical key switches: Unleash blistering speed with the 1.2 millimeter actuation and durability of gold contact CHERRY MX mechanical key switches. 6 programmable G keys keys for in game macros: Assign single keystrokes or complex multi key combos to any of the 6 dedicated macro keys. Full Key (NKRO) with 100percentage Anti Ghosting.HID Keyboard Report Rate:1000Hz',
      price: '140',
      quantity: 0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71VrU-Jj2zL._AC_SL1500_.jpg'
    },
    {
      id:'25',
      pName:'iBUYPOWER Gaming PC Computer Desktop Element 9260 (Intel Core i7-9700F 3.0Ghz, NVIDIA GeForce GTX 1660 Ti 6GB, 16GB DDR4, 240GB SSD, 1TB HDD, WiFi & Windows 10 Home) Black',
      pNameURL:'PC',
      pDesc:'gaming computer',
      pInfo:'System: Intel Core i7-9700F 8-Core 3. 0GHz (4. 70 GHz Max Turbo) | 16GB DDR4-2666 RAM | 1TB HDD | 240GB SSD | Genuine Windows 10 Home 64-bit. Graphics: NVIDIA GeForce GTX 1660 Ti 6GB Dedicated Gaming Video Card | VR Ready | 1x DVI | 1x HDMI | 1x Display Port. Connectivity: 4 x USB 3. 0 | 2 x USB 2. 0 | 1x RJ-45 Network Ethernet 10/100/1000 | Audio: 7. 1 Channel. Special Add-Ons: Tempered Glass RGB Gaming Case | 802. 11AC Wi-Fi Included | 16 Color RGB Lighting Case | Free Gaming Keyboard & RGB Gaming Mouse | No Bloatware: 1 Year Parts & Labor + Free Lifetime US Tech Support | Assembled in the U. S. A',
      price:'1000',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/81GToTDrV5L._AC_SL1500_.jpg'
    },
    {
      id:'26',
      pName:'PowerSpec X603 Fluid Gaming Desktop PC; coolant Included, Intel Core i7-9700k Processor 3.6GHz; NVIDIA GeForce RTX 2080 8GB GDDR6; 16GB DDR4-3200 RAM',
      pNameURL:'PC',
      pDesc:'gaming computer',
      pInfo:'Intel Core i7 9700K (3.6GHz).Unlocked Processor. 16 GB DDR4-3200. NVIDIA GeForce RTX 2080. Microsoft Windows 10 Pro. Coolant Included',
      price:'3000',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61VYDaxuGIL._AC_SL1000_.jpg'
    },
    {
      id:'27',
      pName:'[Ryzen & GTX 1050 Ti Edition] SkyTech Shadow Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB, 8GB DDR4 2400, 1TB HDD, 24X DVD, Wi-Fi USB, Windows 10 Home 64-bit',
      pNameURL:'PC',
      pDesc:'gaming computer',
      pInfo:' AMD RYZEN 3 1200 4-Core 3.1 GHz (3.4 GHz Turbo) | 1 TB 7200RPM Hard Drive | A320M Motherboard. Nvidia GeForce GTX 1050 Ti 4GB Video Card | 8GB DDR4 2400 Gaming Memory | Windows 10 Home 64-bit. Wi-Fi Ready | No bloatware | 1 x Dual-link DVI, 1 x DisplayPort (version 1.4), 1 x HDMI | 9 x USB (4 X USB 2.0; 5 X USB3.0). Power by 80 Plus Certified 500 Watt Power Supply | Free Gaming Keyboard & Mouse | Monitor Not included. 1 Year Warranty on Parts and Labor | Lifetime Free US Technical Support | Assemble in the USA',
      price:'625',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61BTO%2BfRmbL._AC_SL1260_.jpg'
    },
    {
      id:'28',
      pName:'Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB, 3 RGB Fans with Remote',
      pNameURL:'PC',
      pDesc:'Gaming computer',
      pInfo:'3 RGB Fan Gaming PC Desktop Computer With Remote. Runs Fortnite average 100 FPS on Low Settings and 60 FPS on medium settings. Runs Pubg average 30 FPS on low settings. Runs GTA5 average 30 FPS. Intel Core i5-2400 3.10 Ghz. GTX 650 1GB Video Card With DVI, HDMI and VGA outputs. 1 Year Warranty.',
      price:'460',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71z7ztyH1LL._AC_SL1500_.jpg'
    },
    {
      id:'29',
      pName:'OMEN by HP Obelisk Gaming Desktop Computer, 9th Generation Intel Core i9-9900K Processor, NVIDIA GeForce RTX 2080 SUPER 8 GB, HyperX 32 GB RAM, 1 TB SSD, VR Ready, Windows 10 Home (875-1023, Black)',
      pNameURL:'PC',
      pDesc:'Gaming computer',
      pInfo:'Hyper-realistic graphics: NVIDIA(R) GeForce(R) RTX 2080 SUPER (8 GB GDDR6 dedicated memory). Enjoy new levels of gaming realism, speed, power efficiency and immersion with real-time ray-tracing technologies. Cutting-edge gaming performance: Geared with the latest hardware and easy to upgrade, so you can crush the latest and most demanding games including Fortnite, PUBG, and Overwatch. Ultra-fast processor: 9th Generation Intel Core i9-9900K Processor, 8-core, 3.60 GHz. HP OMEN command center: Included software lets you customize RGB lighting, prioritize gaming network traffic, and stream your PC games on your big screen TV with OMEN Game Stream (a free remote gaming service). Solid state drive and memory: 1 TB PCIe(R) NVMe(TM) M.2 Solid State Drive and HyperX(R) 32 GB DDR4-2666 SDRAM (upgradable to 64 GB). Load up your favorite games in seconds, transfer files without waiting hours, and enjoy a more powerful and immersive experience than a standard hard drive. VR ready: Immerse yourself in your favorite virtual reality worlds, such as Skyworld (Note: does not come with a VR headset). Tempered glass side panel: Provides a window into your PC’s internal components',
      price:'2000',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71qplGttd5L._AC_SL1500_.jpg'
    },
    {
      id:'30',
      pName:'SkyTech DarkAngel Gaming Computer Desktop PC - Ryzen 5 2600 3.4GHz 6-Core (3.9 Ghz Turbo), RX 580 4GB, 8GB DDR4 2400, 1TB HDD, VR Ready, Wi-Fi USB, Windows 10 Home 64-bit',
      pNameURL:'PC',
      pDesc:'Gaming computer',
      pInfo:' AMD RYZEN 5 2600 6-Core 3.4 GHz (3.9 GHz Turbo) – Windows Installed | 1 TB 7200RPM Hard Drive | A320M AM4 Motherboard. AMD Radeon RX 580 4GB Video Card | FreeSync Compatible | 8GB DDR4 2400 Gaming Memory | Windows 10 Home 64-bit. Wi-Fi Ready | No bloatware | VR Optimized (Works with Oculus Rift & HTC Hive). Power by 80 Plus Certified 500 Watt Power Supply | Free Gaming Keyboard & Mouse | Monitor Not included. 1 Year Warranty on Parts and Labor | Lifetime Free US Technical Support | Assembled in the USA',
      price:'750',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/71wlWL7m%2BZL._AC_SL1500_.jpg'
    },
    {
      id:'31',
      pName:'MSI Trident X Plus 9SF-040US High-End Small Form Factor PC Intel Core i7-9700K RTX 2080Ti Ventus 11G OC 16GB 512GB PCIe NVME SSD+2TB HDD, Black',
      pNameURL:'PC',
      pDesc:'gaming computer',
      pInfo:'Type: small form Factor PC With Mini-ITX MB | Operating System: Win 10 Home. Processor: Intel Core i7-9700KF Processor 8 Cores 3.6-4.9 GHz 12M Cache. Graphics: NVIDIA RTX 2080Ti 11G w/true-to-life Ray Tracing Technology. Memory: 16GB DDR4 2666MHz (16GB x 1), 2 x U-DIMM DDR4 2400MHz, Max 32GB | Storage: 512GB PCIe NVMe M.2 SSD (512GB x1) + 2TB 5400Rpm (2.5") HDD. Special Features: real-time Ray tracing | Tempered Glass Side panel | RGB Case Lighting | dedicated cooling Chambers for GPU, CPU and PSU | overclocking CPU',
      price:'2300',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61CcGoR77EL._AC_SL1000_.jpg'
    },
    {
      id:'32',
      pName:'Acer Aspire TC-885-UA92 Desktop, 9th Gen Intel Core i5-9400, 12GB DDR4, 512GB SSD, 8X DVD, 802.11AC Wifi, USB 3.1 Type C, Windows 10 Home',
      pNameURL:'PC',
      pDesc:'gaming computer',
      pInfo:'9th Generation Intel Core i5-9400 Processor (Up to 4. 1GHz). 12GB DDR4 Memory, 512GB SSD & 8x DVD-Writer Double-Layer Drive (DVD-RW). 802. 11AC Wi-Fi, Gigabit Ethernet LAN & Bluetooth 5. 0. 1 - USB 3. 1 Type C Gen 2 port (up to 10 Gaps), 1 - USB 3. 1 Gen 2 port, 1 - USB 3. 1 Gen 1 port, 4 - USB 2. 0 Ports & 2 - HDMI ports & 1 - VGA Port. Windows 10 Home, USB keyboard & USB mouse',
      price:'550',
      quantity:0,
      img:'https://images-na.ssl-images-amazon.com/images/I/61UgXsi%2BmcL._AC_SL1500_.jpg'
    }
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