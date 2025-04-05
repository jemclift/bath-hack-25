function go_to_main() {
    window.location += "main"
}

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('.shred-me').addEventListener('click', function(e) {
        document.querySelector('.full_image').classList.add('animate');
        document.getElementById('strand-1').classList.add('animate');
        document.getElementById('strand-2').classList.add('animate');
        document.getElementById('strand-3').classList.add('animate');
        document.getElementById('strand-4').classList.add('animate');
        document.getElementById('strand-5').classList.add('animate');
        document.getElementById('strand-6').classList.add('animate');
        document.getElementById('strand-7').classList.add('animate');
        document.getElementById('strand-8').classList.add('animate');
    });
});