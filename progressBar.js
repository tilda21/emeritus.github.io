let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem1 = document.getElementById("html");
    let elem2 = document.getElementById("css");
    let elem3 = document.getElementById("js");
    let elem4 = document.getElementById("react");
    let elem5 = document.getElementById("node")
    let width1 = 1;
    let width2 = 1;
    let width3 = 1;
    let width4 = 1;
    let width5 = 1;
    let id1 = setInterval(frame1, 5);
    let id2 = setInterval(frame2, 5);
    let id3 = setInterval(frame3, 5);
    let id4 = setInterval(frame4, 5);
    let id5 = setInterval(frame5, 5);

    function frame1() {
        if (width1 >= 90) {
            clearInterval(id1);
            i = 0;
        } else {
            width1++;
            elem1.style.width = width1 + "%";
        }
    }
    function frame2() {
        if (width2 >= 85) {
            clearInterval(id2);
            i = 0;
        } else {
            width2++;
            elem2.style.width = width2 + "%";
        }
    }
    function frame3() {
        if (width3 >= 80) {
            clearInterval(id3);
            i = 0;
        } else {
            width3++;
            elem3.style.width = width3 + "%";
        }
    }
    function frame4() {
        if (width4 >= 85) {
            clearInterval(id4);
            i = 0;
        } else {
            width4++;
            elem4.style.width = width4 + "%";
        }
    }
    function frame5() {
        if (width5 >= 75) {
            clearInterval(id5);
            i = 0;
        } else {
            width5++;
            elem5.style.width = width5 + "%";
        }
    }
  }
}