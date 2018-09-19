window.onload = function () {
    var birdinfo = document.getElementById("bird_info");
    var birdinfoname = document.getElementById("bird_info_name");
    var head = document.getElementById("head");
    var neck = document.getElementById("neck");
    var wing = document.getElementById("wing");
    var mouth = document.getElementById("mouth");
    var foot = document.getElementById("foot");
    var footlen = document.getElementById("footlen");
    var birdpicdemo = document.getElementById("bird_pic_demo");


    head.onmouseover = function () {
        //birdinfoname.innerHTML=  "Head";
        //birdinfo.innerHTML=  "This is Head";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/headeye-intro.png";
    }

    head.onmouseout = function () {
        birdinfoname.innerHTML = "";
        //birdinfo.innerHTML=  "Hello, move your mouse pointers to my body and you can know more about me!";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/placeholder-copy.png";
    }

    //
    neck.onmouseover = function () {
        //birdinfoname.innerHTML=  "Neck";
        //birdinfo.innerHTML=  "This is Neck";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/neck-intro-copy.png";

    }

    neck.onmouseout = function () {
        //birdinfoname.innerHTML=  "";
        //birdinfo.innerHTML=  "Hello, move your mouse pointers to my body and you can know more about me!";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/placeholder-copy.png";
    }
    //
    wing.onmouseover = function () {
        //birdinfoname.innerHTML=  "wing";
        //birdinfo.innerHTML=  "This is wing";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/wing-intro-copy.png";
    }

    wing.onmouseout = function () {
        birdinfoname.innerHTML = "";
        //birdinfo.innerHTML=  "Hello, move your mouse pointers to my body and you can know more about me!";

        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/placeholder-copy.png";
    }
    mouth.onmouseover = function () {
        //birdinfoname.innerHTML=  "Mouth";
        //birdinfo.innerHTML=  "This is mouth";
        //birdpicdemo.src="http://www.vicbirds.com/wp-content/uploads/2018/08/mouth-intro-copy.png";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/mouth-intro-copy2.png";
    }

    mouth.onmouseout = function () {
        //birdinfoname.innerHTML=  "";
        //birdinfo.innerHTML=  "Hello, move your mouse pointers to my body and you can know more about me!";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/placeholder-copy.png";
    }

    foot.onmouseover = function () {
        //birdinfoname.innerHTML=  "Foot";
        //birdinfo.innerHTML=  "This is foot";
        footlen.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/bird_size_arrow-copy.png";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/foot-intro-copy.png";

    }

    foot.onmouseout = function () {
        //birdinfoname.innerHTML=  "";
        //birdinfo.innerHTML=  "Hello, move your mouse pointers to my body and you can know more about me!";
        birdpicdemo.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/placeholder-copy.png";
        footlen.src = "http://www.vicbirds.com/wp-content/uploads/2018/08/placeholder-copy.png";
    }

}
