const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

for(let i =0;i < imgs.length; i=i+1){
imgs[i].addEventListener('click',function(event){
    current.src=event.target.src;
})
}