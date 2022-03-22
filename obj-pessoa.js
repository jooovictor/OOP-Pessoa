const pessoa = {
    nome: 'João Victor',
    altura: 1.80,
    peso: {
        kg: 73,
        caloria: 0
    },
    idade: 21,
    profissao: 'dev',
    comer: function () { 
        ++this.peso.caloria
        if (this.peso.caloria == 7) {
            this.peso.caloria = 0;
            ++this.peso.kg;
        }
        return 'nhami nhami';
    },
    andar: function () { 
        return 'flip flop'},
    dormir: function () { 
        return 'zzz...'},
    falar: function () { 
        return 'AAAAAAAAAAA'},
    treinar: function () {
        --this.peso.caloria;
        if (this.peso.caloria == -7) {
            this.peso.caloria = 0;
            --this.peso.kg
        }
        return 'Flexão aaaaaaa';
    }

};

console.log(pessoa);