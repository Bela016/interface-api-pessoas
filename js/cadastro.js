function alerta() {
    let nome = document.getElementById('idnome').value;
/*     if (nome == "") {
        window.alert('voce nao preencheu todos os campos!!');

    }  */
    //
    let cpf = document.getElementById('idcpf').value;
/*     if (cpf == "") {
        window.alert('voce nao preencheu todos os campos!!');

    } */

    //
    let nasc = document.getElementById('idnascimento').value;
/*     if (nasc == "") {
        window.alert('voce nao preencheu todos os campos!!');

    }  */
    //
    let tel = document.getElementById('idtelefone').value;
/*     if (tel == "") {
        window.alert('voce nao preencheu todos os campos!!');

    }  */
    //
    let endereco = document.getElementById('idendereço').value;
/*     if (endereco == "") {
        window.alert('voce nao preencheu todos os campos!!');

    }  */
    //
    let altura = document.getElementById('idaltura').value;
/*     if (altura == "") {
        window.alert('voce nao preencheu todos os campos!!');

    }  */
    //
    let peso = document.getElementById('idpeso').value;
/*     if (peso == "") {
        window.alert('voce nao preencheu todos os campos!!');

    }  */

    if(peso == "" || nome == "" || cpf == "" || altura == "" || nasc == "" || tel == "" || endereco == "") {
        window.alert('voce nao preencheu todos os campos!!');
    } else {
        window.alert('cadastrado com sucesso!!');
    }
    


}