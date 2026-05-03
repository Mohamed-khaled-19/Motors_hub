const carData={
    "":{
        engine:	"-",
        hp:	"-",
        torque:	"-",
        transmission: "-",
        acceleration: "-",
        drivetrain:	"-",
        price:"-"
    },
    "G63":{
        engine:	"4.0L V8 Biturbo with Mild Hybrid Technology",
        hp: "577 hp (Up to 597 hp with Hybrid Boost)",
        torque:	"850 Nm",
        transmission:	"AMG SPEEDSHIFT TCT 9G (Automatic)",
        acceleration: "(0-100 km/h)	4.3 Seconds",
        drivetrain:	"AMG Performance 4MATIC (All-Wheel Drive)",
        price:"20,000,000 EGP"
    },
    "S65":{
        engine:	"Handcrafted AMG 6.0L V12 Biturbo",
        hp:	"621 hp @ 4,800 - 5,400 rpm",
        torque:	"738 lb-ft (1,000 Nm) @ 2,300 - 4,300 rpm",
        transmission:	"AMG SPEEDSHIFT® 7G-TRONIC",
        acceleration: "(0-100 km/h)	4.1 Seconds",
        drivetrain:	"Rear-Wheel Drive (RWD)",
        price:"6,100,000 EGP"
    },
    "C200":{
        engine:	"1.5L 4-Cylinder Turbo with Mild Hybrid System",
        hp:	"204 hp (+20 hp Boost from Electric Motor)",
        torque:	"300 Nm",
        transmission:	"9G-TRONIC (9-Speed Automatic)",
        acceleration: "Approx. 7.3 Seconds",
        drivetrain:	"Rear-Wheel Drive (RWD)",
        price:"5,000,000 EGP"
    },
    "GLC300":{
        engine:	"2.0L 4-Cylinder Turbo with Mild Hybrid System",
        hp:	"255 hp (+23 hp Boost from Electric Motor)",
        torque:	"400 Nm",
        transmission:	"9G-TRONIC (9-Speed Automatic)",
        acceleration: "Approx. 6.2 Seconds",
        drivetrain:	"4MATIC Intelligent All-Wheel Drive",
        price:"6,000,000 EGP"
    },
};

function updateCompare(){
    const car1Key=document.getElementById('car1Select').value;
    const car2Key=document.getElementById('car2Select').value;

    if(carData[car1Key]){
        document.getElementById('car1-engine').innerText=carData[car1Key].engine;
        document.getElementById('car1-hp').innerText=carData[car1Key].hp;
        document.getElementById('car1-torque').innerText=carData[car1Key].torque;
        document.getElementById('car1-transmission').innerText=carData[car1Key].transmission;
        document.getElementById('car1-acceleration').innerText=carData[car1Key].acceleration;
        document.getElementById('car1-drivetrain').innerText=carData[car1Key].drivetrain;
        document.getElementById('car1-price').innerText=carData[car1Key].price;
    }
    if(carData[car2Key]){
        document.getElementById('car2-engine').innerText=carData[car2Key].engine;
        document.getElementById('car2-hp').innerText=carData[car2Key].hp;
        document.getElementById('car2-torque').innerText=carData[car2Key].torque;
        document.getElementById('car2-transmission').innerText=carData[car2Key].transmission;
        document.getElementById('car2-acceleration').innerText=carData[car2Key].acceleration;
        document.getElementById('car2-drivetrain').innerText=carData[car2Key].drivetrain;
        document.getElementById('car2-price').innerText=carData[car2Key].price;
    }
}