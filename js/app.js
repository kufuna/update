window.addEventListener('DOMContentLoaded',function(){
	// alert('DOM loaded')
})
window.onload = function(){
	// alert('Window loaded')
	document.querySelector('#loader-fragment').style.display = 'none';


	function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    var kfn_anim = function() {
        var elements = document.querySelectorAll('.kfn_anim');
        for (var i = 0; i < elements.length; i++) {
            if (window.scrollY > offset(elements[i]).top - window.innerHeight) {
                elements[i].classList.add('active-kfn')
            }else {
            	elements[i].classList.remove('active-kfn')
            }
        }
    }
    kfn_anim();
    window.addEventListener('scroll', kfn_anim);
    window.addEventListener('resize', kfn_anim);


}