var parent;
var b;
var licznik_strzałów;
var random_enemy;
var fire = 0; //pomocniczy dla strzałow żeby zmieniac grafiki ze strzelania
var e1, e2, e3, e4, e5, e6, e7, e8, e9, e10;
var background;
var Interwal;  //do pojawiania sie wrogow

function obiekt(imgordiv, src, width, height, startx, starty, name, czyjedziecko) {    //tworzenie obiektów -tła, broni, przeciwnikow
    this.imgordiv = imgordiv;
    this.src = src;
    this.width = width;
    this.height = height;
    this.startx = startx;
    this.starty = starty;
    this.name = name;
    //   this.position;
    this.czyjedziecko = czyjedziecko;
    function dziecko() {                        //ustalanie wartosci appendchild
        if (czyjedziecko == 1) {
            parent = document.getElementsByTagName("body")[0];
        } else {
            parent = document.getElementById("back");
            console.log("parent" + parent);
        }
    }
    this.show = function () {
        if (imgordiv == "img") {
            var obj = document.createElement('img');
        } else if (imgordiv == "div") {
            var obj = document.createElement('div');
            obj.style.backgroundImage = "url('back.jpg')";
        }
        obj.id = this.name;
        obj.style.width = this.width + "px";
        obj.style.height = this.height + "px";
        obj.style.top = this.starty + "px";
        obj.style.left = this.startx + "px";
        obj.style.position = "absolute";
        obj.style.margin = '';
        obj.src = this.src;
        //  obj.style.position = "absolute";
        obj.style.width = this.width;
        dziecko();
        console.log(obj.id + " XXX " + parent);
        parent.appendChild(obj);
    }
    ;
    this.gun_direction = function () {
        document.onmousemove = function (e) {  //e to po prostu jakaś zmienna   //Pozycja XY myszki na Ekranie
            var pozX = 0;
            var pozY = 0;
            if (!e)   //dla IE
                var e = window.event;
            if (e.pageX || e.pageY) {
                pozX = e.pageX;
                pozY = e.pageY;
            } else if (e.clientX || e.clientY) {
                pozX = e.clientX + document.body.scrollLeft;
                pozY = e.clientY + document.body.scrollTop;
            }
            var text = 'pozycja myszki: X = ' + pozX + '  Y = ' + pozY;
            // document.getElementById("pozycja_myszki").innerHTML = console.log(text);;
            if (pozX < (window.innerWidth / 3)) {

                // this.src = 'gun_l.png';
                document.getElementById("gun_c").src = 'gun_l.png';
                console.log(this.src);
            } else if (pozX > (window.innerWidth / 3) && (pozX < window.innerWidth * 2 / 3)) {
                document.getElementById("gun_c").src = 'gun_c.png';
            } else if (pozX > (window.innerWidth * 2 / 3)) {
                console.log((window.innerWidth));
                document.getElementById("gun_c").src = 'gun_r.png';
            }
        };

    };

    this.fire = function () { //strzelanie
        document.getElementById("back").onclick = function (e) {
            if (!e)            //dla ie
                var e = window.event;     //dla ie
            
            var check = document.getElementById("gun_c").getAttribute("src");

            if (check == 'gun_c.png') {
                //strzał
                if (fire == 1) {
                    document.getElementById("gun_c").src = 'gun_c_f1.png';
                    fire--;
                } else {
                    document.getElementById("gun_c").src = 'gun_c_f2.png';
                    fire++;
                }
                ;
                setTimeout(function () {
                    document.getElementById("gun_c").src = 'gun_c.png';
                }, 150);
                console.log(check);
            } else if (check == 'gun_l.png') {
                console.log("sssssssss");  //strzał
                if (fire == 1) {
                    document.getElementById("gun_c").src = 'gun_l_f1.png';
                    fire--;
                } else {
                    document.getElementById("gun_c").src = 'gun_l_f2.png';
                    fire++;
                }
                ;
                setTimeout(function () {
                    document.getElementById("gun_c").src = 'gun_l.png';
                }, 150);
                console.log(check);
            } else if (check == 'gun_r.png') {
                console.log("sssssssss");  //strzał
                if (fire == 1) {
                    document.getElementById("gun_c").src = 'gun_r_f1.png';
                    fire--;
                } else {
                    document.getElementById("gun_c").src = 'gun_r_f2.png';
                    fire++;
                }
                ;
                setTimeout(function () {
                    document.getElementById("gun_c").src = 'gun_r.png';
                }, 150);
                console.log(check);
            }


        };
    };
    this.random_enemy = function () {
        var a;
        a = ((Math.round(Math.random() * 10) + 1));
        console.log(e2);
        //parent = e2.show();
        switch (a) {
            case "1":
                console.log(a);
                parent = e1.show();
                break;
            case "2":
                console.log(parent);
                e2.show();

                break;
            case "3":
                console.log(a);
                parent = e3.show();
                break;
            case "4":
                console.log(a);
                parent = e4.show();
                break;
            case "5":
                console.log(a);
                parent = e5.show();
                break;
            case "6":
                console.log(a);
                parent = e6.show();
                break;
            case "7":
                console.log(a);
                parent = e7.show();
                break;
            case "8":
                console.log(a);
                parent = e8.show();
                break;
            case "9":
                console.log(a);
                parent = e9.show();
                break;
            case "10":
                console.log(a);
                parent = e10.show();
                break;




        }
        console.log(a);
    };

    this.postrzelenie_przeciwnika = function () {
        var ss = this.name;
        document.getElementById(ss).onclick = function () {
            console.log("strzał");
            //------------------------------------------tu skonczylem-----------------------------------------------------------------
            var losowa = ((Math.round(Math.random() * 19) + 1));
            console.log(this.src);
          //  if (this.src == "enemy1.png") {
                this.src = "enemy2_k.png";
           // }
        };
    };



    var naszeid = this.name;
//    this.addEventHandler = function () {            //zdarzenie, strzał 
//        var zmienna = document.getElementById(naszeid);
//        zmienna.addEventListener('click', function () {
//            
//            zmienna.src = "enemy1fire1.png";
//        });
//    };
    var zmienna = document.getElementById(naszeid);

    document.addEventListener('onmousemove', function () {
        var pozX = 0;
        console.log(zmienna);
        var pozY = 0;
        if (!e)   //dla IE
            var e = window.event;
        if (e.pageX || e.pageY) {
            pozX = e.pageX;
            pozY = e.pageY;
        } else if (e.clientX || e.clientY) {
            pozX = e.clientX + document.body.scrollLeft;
            pozY = e.clientY + document.body.scrollTop;
        }
        var text = 'pozycja myszki: X = ' + pozX + '  Y = ' + pozY;
        document.getElementById("main").innerHTML = text;

        if ((window.innerWidth / 3) < pozX) {

            zmienna.src = "gun_l.png";

        }


    });
}





function enemywithin() {
    var background = new obiekt("div", "back.jpg", 1600, 700, (window.innerWidth / 2) - 800, 30, "back", 1);
    background.backgroundImage = "url('back.jpg')";
    background.backgroundColor = "red";
    e1 = new obiekt("img", "enemy1.png", 100, 100, 318, 93, "enemy1", 0);
    e2 = new obiekt("img", "enemy1.png", 100, 100, 38, 120, "enemy2", 0);
    e3 = new obiekt("img", "enemy1.png", 100, 100, 138, 118, "enemy3", 0);
    e4 = new obiekt("img", "enemy1.png", 80, 80, 758, 165, "enemy4", 0);
    e5 = new obiekt("img", "enemy1.png", 80, 80, 1158, 135, "enemy5");
    e6 = new obiekt("img", "enemy1.png", 80, 80, 1458, 130, "enemy6");
    e7 = new obiekt("img", "enemy1.png", 120, 120, 1438, 307, "enemy7");
    e8 = new obiekt("img", "enemy1.png", 120, 120, 1238, 418, "enemy8");
    e9 = new obiekt("img", "enemy1.png", 120, 120, 1438, 421, "enemy9");
    e10 = new obiekt("img", "enemy1.png", 150, 150, 208, 491, "enemy10");
    e11 = new obiekt("img", "enemy2.png", 160, 178, 390, 459, "enemy11");
    e12 = new obiekt("img", "enemy2.png", 130, 145, 638, 216, "enemy12");
    e13 = new obiekt("img", "enemy2.png", 130, 145, 778, 210, "enemy13");
    e14 = new obiekt("img", "enemy2.png", 70, 78, 554, 73, "enemy14");
    e15 = new obiekt("img", "enemy2.png", 100, 110, 1038, 279, "enemy15");
    e16 = new obiekt("img", "enemy2.png", 100, 110, 1355, 167, "enemy16");
    e17 = new obiekt("img", "enemy2.png", 70, 78, 13, 36, "enemy17");
    e18 = new obiekt("img", "enemy2.png", 76, 90, 1070, 129, "enemy18");
    e19 = new obiekt("img", "enemy2.png", 110, 123, 908, 169, "enemy19");
    e20 = new obiekt("img", "enemy2.png", 55, 65, 298, 3, "enemy20");
    b = new obiekt("img", "gun_c.png", 400, 200, 600, 515, "gun_c");
    // a.width = 300;

    background.position = 'relative';
    // console.log("ere: ",ere.constructor);
    parent = background.show();
    parent = b.show();
    parent = b.gun_direction();
    parent = background.fire();




//    parent = e6.show();
//    parent = e7.show();
//    parent = e8.show();
//    parent = e9.show();
//    parent = e10.show();
//    parent = e11.show();
//    parent = e12.show();
//    parent = e13.show();
//    parent = e14.show();
//    parent = e15.show();
//    parent = e16.show();
//    parent = e17.show();
//    parent = e18.show();
//    parent = e19.show();
//    parent = e20.show();

    random_enemy2();
    //e1.addEventHandler();
}
function funkcja_testowa() {
    alert("Kliknąłeś mnie!");
}


function random_enemy2() {
    parent = document.getElementById("back");
//        (function() {
//            
//        })();
    Interwal = setInterval(function () {
        var los = ((Math.round(Math.random() * 19) + 1));
        switch (los) {
            case 1:
                console.log(los);
                parent = e1.show();
                parent = e1.postrzelenie_przeciwnika();
                break;
            case 2:
                console.log(los);
                parent = e2.show();
                parent = e2.postrzelenie_przeciwnika();
                break;
            case 3:
                console.log(los);
                parent = e3.show();
                parent = e3.postrzelenie_przeciwnika();
                break;
            case 4:
                console.log(los);
                parent = e4.show();
                parent = e4.postrzelenie_przeciwnika();
                break;
            case 5:
                console.log(los);
                parent = e5.show();
                parent = e5.postrzelenie_przeciwnika();
                break;
            case 6:
                console.log(los);
                parent = e6.show();
                parent = e6.postrzelenie_przeciwnika();
                break;
            case 7:
                console.log(los);
                parent = e7.show();
                parent = e7.postrzelenie_przeciwnika();
                break;
            case 8:
                console.log(los);
                parent = e8.show();
                parent = e8.postrzelenie_przeciwnika();
                break;
            case 9:
                console.log(los);
                parent = e9.show();
                parent = e9.postrzelenie_przeciwnika();
                break;
            case 10:
                console.log(los);
                parent = e10.show();
                parent = e10.postrzelenie_przeciwnika();
                break;
            case 11:
                console.log(los);
                parent = e11.show();
                parent = e11.postrzelenie_przeciwnika();
                break;
            case 12:
                console.log(los);
                parent = e12.show();
                parent = e12.postrzelenie_przeciwnika();
                break;
            case 13:
                console.log(los);
                parent = e13.show();
                parent = e13.postrzelenie_przeciwnika();
                break;
            case 14:
                console.log(los);
                parent = e14.show();
                parent = e14.postrzelenie_przeciwnika();
                break;
            case 15:
                console.log(los);
                parent = e15.show();
                parent = e15.postrzelenie_przeciwnika();
                break;
            case 16:
                console.log(los);
                parent = e16.show();
                parent = e16.postrzelenie_przeciwnika();
                break;
            case 17:
                console.log(los);
                parent = e17.show();
                parent = e17.postrzelenie_przeciwnika();
                break;
            case 18:
                console.log(los);
                parent = e18.show();
                parent = e18.postrzelenie_przeciwnika();
                break;
            case 19:
                console.log(los);
                parent = e19.show();
                parent = e19.postrzelenie_przeciwnika();
                break;
            case 20:
                console.log(los);
                parent = e20.show();
                parent = e20.postrzelenie_przeciwnika();
                break;
        }
    }, 1300);  //czas po jakim pojawiaja sie wrogowie
}
;



    