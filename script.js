$(document).ready(function(){

    
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed:2000,
        speed:3000
    });
    


    const animItems = document.querySelectorAll('.scroll_animating');
    if(animItems.length>0){
        window.addEventListener('scroll',animOnScroll);
        function animOnScroll(){
            for(let i = 0;i<animItems.length;i++){
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight-animItemHeight/animStart;
                if(animItemHeight>window.innerHeight)
                {
                    animItemPoint = window.innerHeight - window.innerHeight/animStart;
                }
                if((pageYOffset > animItemOffset - animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight))
                {
                    animItem.classList.add('anim_el');
                }

            }
        }
        function offset(el){
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset||document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset||document.documentElement.scrollTop;
            return {top:rect.top+scrollTop,left: rect.left + scrollLeft}
        }
        animOnScroll();
    }
});


