// вкладки

// let tabs = Array.prototype.slice.call(_all('.tabs > .tab > li'));
// let panes = Array.prototype.slice.call(_all('.tabs > .pane > li'));

let tabs = Array.from(document.querySelectorAll('.tabs > .tab > li'));
let panes = Array.from(document.querySelectorAll('.tabs > .pane > li'));

tabs.forEach((item,i) => {

    item.onclick = () => {
        for(let t of tabs){
            t.classList.remove('current'); 
        }
        item.classList.add('current');

        for(let p of panes){
            p.classList.remove('current');
        }
        panes[i].classList.add('current');
    }

});
// вкладки
