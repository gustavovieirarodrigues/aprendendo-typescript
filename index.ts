interface IAnimal {
    nome:string;
    tipo: 'terrestre' ;
}

interface IFelino extends IAnimal {
    visaoNoturna:boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo:  "terrestre"
}

const felino: IFelino = {
    nome:'Leao',
    tipo:'terrestre',
    visaoNoturna:true
}