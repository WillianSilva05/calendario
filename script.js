
// let data = new Date();
// let ano = data.getFullYear();
// let mes = data.getMonth() + 1;
// let diasMes = new Date(ano, mes, 0).getDate()
// let dia = data.getDate();

// let dad = document.querySelector("body");
// let filho = document.getElementsByClassName("filhos");

// for (let index = 0; index <= diasMes; index++) {
//     var child = document.createElement("span");
//     child.setAttribute("class", "filhos");
//     dad.appendChild(child);
// }

// for (let index = 0; index <= diasMes; index++) {
//     filho[index].innerHTML = index;
// }

// let data = new Date();
// let mes = data.getMonth() + 1;
// let ano = data.getFullYear();
// let diasMes = new Date(ano, mes, 0).getDate()

// let dias = [];
// let semana = [];
// let meses = [];


// for (cont = 1; cont <= 31; cont++) {
//     dias[cont - 1] = cont;
//     if (cont <= 12) meses.push(cont);
//     if (cont <= 7) semana.push(cont);
// }

// for (let index = 0; index < meses.length; index++) {
//     switch (meses[index]) {
//         case 1:
//             meses[0] = "Janeiro"
//             break;
//         case 2:
//             meses[1] = "Fevereiro"
//             break;
//         case 3:
//             meses[2] = "Março"
//             break;
//         case 4:
//             meses[3] = "Abril"
//             break;
//         case 5:
//             meses[4] = "Maio"
//             break;
//         case 6:
//             meses[5] = "Junho"
//             break;
//         case 7:
//             meses[6] = "Julho"
//             break;
//         case 8:
//             meses[7] = "Agosto"
//             break;
//         case 9:
//             meses[8] = "Setembro"
//             break;
//         case 10:
//             meses[9] = "Outubro"
//             break;
//         case 11:
//             meses[10] = "Novembro"
//             break;
//         case 12:
//             meses[11] = "Dezembro"
//             break;
//     }
// }

// for (let index = 0; index < semana.length; index++) {
//     switch (semana[index]) {
//         case 1:
//             semana[0] = "dom "
//             break;
//         case 2:
//             semana[1] = "seg "
//             break;
//         case 3:
//             semana[2] = "ter "
//             break;
//         case 4:
//             semana[3] = "qua "
//             break;
//         case 5:
//             semana[4] = "qui "
//             break;
//         case 6:
//             semana[5] = "sex "
//             break;
//         case 7:
//             semana[6] = "sab"
//             break;
//     }
// }

// console.log(dias + "\n" + meses + "\n" + semana)

// let btn = document.getElementById("btn_add");

// btn.addEventListener("click", () => {
//     let tr = document.getElementById("tr");
//     let tbody = document.getElementById("tbody");

//     let quant = document.querySelectorAll("td")
    
//     for (let index = 1; index <= diasMes; index++) {
//         let td = document.createElement("td");
//         let tr2 = document.createElement("tr");

//         tr.appendChild(td)

//         if(quant.length >= 7) {
//             tbody.appendChild(tr2)
//         }
//     }
// })