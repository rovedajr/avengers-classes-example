class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
  true,
  true,
  false
);

document.getElementById("lutar").onclick = function () {
  thor.lutar();
};


const ironMan = new Vingador(
  "Iron Man",
  "1.85",
  "90kg",
  ["Wealth", "Genius-level IQ", "Wealth again", "Strenght via armor", "Durabilty via armor", "Did I mention wealth?"],
  true,
  true,
  true,
  false
)

document.getElementById("ferrolho").onclick = () => ironMan.lutar()
