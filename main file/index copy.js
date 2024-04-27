let s1 = document.querySelectorAll(".box1");
let c1 = 0;

s1.forEach(function(box1, index) {
    box1.style.left = `${index * 100}%`;
});

function next1() {
    c1++;
    if (c1 === s1.length) {
        c1 = 0;
    }
    bar1();
}

function pre1() {
    c1--;
    if (c1 === -1) {
        c1 = s1.length - 1;
    }
    bar1();
}

function bar1() {
    s1.forEach(function(box1) {
        box1.style.transform = `translateX(-${c1 * 25}%)`;
    });
}

let h1 = document.querySelectorAll(".box2");
let b1 = 0;

h1.forEach(function(box2, index) {
    box2.style.left = `${index * 100}%`;
});

function next2() {
    b1++;
    if (b1 === h1.length) {
        b1 = 0;
    }
    bar2();
}

function pre2() {
    b1--;
    if (b1 === -1) {
        b1 = h1.length - 1;
    }
    bar2();
}

function bar2() {
    h1.forEach(function(box2) {
        box2.style.transform = `translateX(-${b1 * 25}%)`;
    });
}

let s2 = document.querySelectorAll(".box3");
let c2 = 0;

s2.forEach(function(box1, index) {
    box1.style.left = `${index * 100}%`;
});

function next3() {
    c2++;
    if (c2 === s2.length) {
        c2 = 0;
    }
    bar3();
}

function pre3() {
    c2--;
    if (c2 === -1) {
        c2 = s2.length - 1;
    }
    bar3();
}

function bar3() {
    s2.forEach(function(box1) {
        box1.style.transform = `translateX(-${c2 * 25}%)`;
    });
}

let h2 = document.querySelectorAll(".box4");
let b2 = 0;

h2.forEach(function(box2, index) {
    box2.style.left = `${index * 100}%`;
});

function next4() {
    b2++;
    if (b2 === h2.length) {
        b2 = 0;
    }
    bar4();
}

function pre4() {
    b2--;
    if (b2 === -1) {
        b2 = h2.length - 1;
    }
    bar4();
}

function bar4() {
    h2.forEach(function(box2) {
        box2.style.transform = `translateX(-${b2 * 25}%)`;
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  slides[n].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 2000); 