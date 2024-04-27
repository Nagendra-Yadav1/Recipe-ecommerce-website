let s = document.querySelectorAll(".box1");
let c= 0;
console.log(s);

s.forEach(function(box1, index){
    box1.style.left=`${index * 100}%`
})

function next(){
    c ++;
    if(c == s.length){
        c=0;
    }
    bar()
}

function pre(){
    c--;
    if(c == -1){
        c = s.length-1
    }
    bar()
}


function bar(){
    s.forEach(function(box1){
        box1.style.transform = `translateX(-${c* 25}%)`
    })
}