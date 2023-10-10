export default function initOutSideClick() {
    if (window.location.pathname.endsWith('/dashboard.html')) {
        document.addEventListener('DOMContentLoaded', function () {
            
            const hamburguerMenu = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobile-menu');
           

            hamburguerMenu.addEventListener('click', (e=>{
                if (hamburguerMenu.classList.contains('closed')) {
                    mobileMenu.classList.add('active');
                
                } else 
                mobileMenu.classList.remove('active');
            }))
            
            document.addEventListener('click', (e =>{
                if(e.target === hamburguerMenu) {
                    console.log('oi');
                }
                else (console.log (e.target));
            }))

            
            
        });
    }
}
