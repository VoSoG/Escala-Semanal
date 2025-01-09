// Seleciona todas as bolinhas
const circles = document.querySelectorAll('.circle');

// Adiciona um evento de clique em cada bolinha
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        if (circle.classList.contains('azul')) {
            circle.classList.remove('azul');
            circle.classList.add('roxa');
        } else if (circle.classList.contains('roxa')) {
            circle.classList.remove('roxa');
        } else {
            circle.classList.add('azul');
        }
    });
});