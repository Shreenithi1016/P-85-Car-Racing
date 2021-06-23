canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;

car2_width=120;
car2_height=70;

car1_image="car1.png";
car2_image="car2.png";

background_image="background.jpg";

car1_x=10;
car1_y=10;

car2_x=10;
car2_y=100;

function add() {
    background_image1=new Image();
    background_image1.onload=uploadBackround;
    background_image1.src=background_image;

    car1_image1=new Image();
    car1_image1.onload=uploadcar1;
    car1_image1.src=car1_image;

    car2_image1=new Image();
    car2_image1.onload=uploadcar2;
    car2_image1.src=car2_image;
}

function uploadBackround() {
    ctx.drawImage(background_image1, 0, 0, canvas.width, canvas.height);
}

function uploadcar1 ()  {
    ctx.drawImage(car1_image1, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2 ()  {
    ctx.drawImage(car2_image1, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38") {
        car1_up();
        console.log("up key was pressed");
    }
    if(keyPressed=="40") {
        car1_down();
        console.log("down key was pressed");
    }
    if(keyPressed=="37") {
        car1_left();
        console.log("left key was pressed");
    }
    if(keyPressed=="39") {
        car1_right();
        console.log("right key was pressed");

    } if(keyPressed=="83") {
        car2_down();
        console.log("s key was pressed");
    }

    if(keyPressed=="87") {
        car2_up();
        console.log("w key was pressed");
    }

    if(keyPressed=="68") {
        car2_right();
        console.log("d key was pressed");
    }

    if(keyPressed=="65") {
        car2_left();
        console.log("a key was pressed");
    }

    if(car1_x>700) {
        console.log("car1 won");
        document.getElementById("game_status").innerHTML="Car1 Won!!"
    }
}

function car1_up() {
    if(car1_y>=0) {
        car1_y=car1_y-10;
        console.log("when up key is pressed,x= " + car1_x + ", y= " + car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if(car1_y<=500) {
        car1_y=car1_y+10;
        console.log("when down key is pressed,x= " + car1_x + ", y= " + car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if(car1_x>=0) {
        car1_x=car1_x-10;
        console.log("when left key is pressed,x= " + car1_x + ", y= " + car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if(car1_x<=700) {
        car1_x=car1_x+10;
        console.log("when right key is pressed,x= " + car1_x + ", y= " + car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if(car2_y>=0) {
        car2_y=car2_y-10;
        console.log("when w key is pressed,x= " + car2_x + ", y= " + car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if(car2_y<=500) {
        car2_y=car2_y+10;
        console.log("when s key is pressed,x= " + car2_x + ", y= " + car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if(car2_x>=0) {
        car2_x=car2_x-10;
        console.log("when a key is pressed,x= " + car2_x + ", y= " + car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if(car2_x<=700) {
        car2_x=car2_x+10;
        console.log("when d key is pressed,x= " + car2_x + ", y= " + car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}