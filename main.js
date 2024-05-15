const container = document.querySelector('.efecto')
const colors = ['#FFFF00', '#FFFFFF', '#FF0000', '#FFA500']

const figures = () => {
    for(let i = 0; i <= 20; i++){
        let figure = document.createElement('span')
        figure.classList.add('star');
        let select = Math.round(colors.length * Math.random())

        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1 : select]

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 2000)
    }
}

figures()

function descargar() {
    var link = document.createElement("a");
    link.href = "certificado.png";
    link.download = "certificado.png";
    link.click();
  }