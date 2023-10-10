export default function initOutSideClick() {
    if (window.location.pathname.endsWith('/dashboard.html')) {
        document.addEventListener('DOMContentLoaded', function () {
            
            const hamburguerMenu = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobile-menu');
           

            hamburguerMenu.addEventListener('click', ()=>{
                if (hamburguerMenu.classList.contains('closed')) {
                    mobileMenu.classList.add('active');
                
                } else 
                mobileMenu.classList.remove('active');
            })
            
            document.addEventListener('click', (event =>{
                if(event.target === hamburguerMenu) {
                    console.log('funcionou');
                }
                else {
                    hamburguerMenu.classList.remove('closed')
                    mobileMenu.classList.remove('active');

                }
            }))

            
            
        });
    }
}
