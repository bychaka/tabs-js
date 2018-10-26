document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let activeTabIndex = 0;
    let tabList = document.querySelectorAll('.tab');
    let textList = document.querySelectorAll('.text-tab');
    let tabWrap = document.querySelector('.tabs-group');
    tabWrap.addEventListener('click', function(e){
        let currentTabIndex = [...tabList].indexOf(e.target);
        if (currentTabIndex !== activeTabIndex){
            tabList[currentTabIndex].classList.add('tab-active');
            textList[currentTabIndex].classList.add('text-tab-active');
            tabList[activeTabIndex].classList.remove('tab-active');
            textList[activeTabIndex].classList.remove('text-tab-active');
        }
        activeTabIndex = currentTabIndex;
    })
  }