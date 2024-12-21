document.addEventListener('DOMContentLoaded',()=>{

    const text="Ensemble nous  Apporterons revolution dans le domaine du génie civil".toUpperCase();
    const textContaint=document.getElementById("main-header");

    //this function is used to make text typing animation
    
    let i=0;
    
    (
        
        function typeText(){
            if(i<text.length){
                textContaint.innerHTML+=text[i];
                i++;
                setTimeout(typeText,70);
            }
        }
    )();

    setTimeout(function(){
        textContaint.classList.add('effects');
    },2000);

    //open close menu
    (
        ()=>{
            console.log('...');
            let menu=document.getElementById('id-menu');
            const BTN=document.getElementById('show-menu-btn');
            BTN.addEventListener('click',()=>{
                menu.classList.toggle('hidden');
            });

            document.addEventListener('click',(e)=>{
                if(!BTN.contains(e.target)){
                    menu.classList.add('hidden');
                }
            })
        }
    )();
    

    
});