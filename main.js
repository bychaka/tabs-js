// let N = prompt('Введите конечное число');
// let arr = [];

// for (i=2; i<=N; i++){
//     let isSimple = true;
//     for(j=2; j<i; j++){
//         if(i%j === 0){
//             isSimple = false;
//         }
//     }
//     if(isSimple){
//         console.info(i);
//     }
// }

/*
(function () {
    var toggle = document.querySelector('.navbar-toggler');
    toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
    });
})();*/

//elem.classList.add/remove("class") – добавляет/удаляет класс class

document.addEventListener("DOMContentLoaded", ready);


function ready() {
    let activeTabIndex = 0;
    let tabList = document.querySelectorAll('.tab');
    let tab = document.querySelector('.tab');
    tab.addEventListener('click', function(e){
        tabList.indexOf(e.target)
    })
  }