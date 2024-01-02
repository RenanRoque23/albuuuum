var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://postimg.cc/mhvznPh0" , "https://postimg.cc/ZvK3K2tX][img]https://i.postimg.cc/ZvK3K2tX/Captura-de-tela-2024-01-02-103847.png" , "https://postimg.cc/yDbzfZ8R" , "https://postimg.cc/njLBnNtg"];

var names = ["Álbum da Família","Campelo - Avô", "Felipe Roque - Pai", "Rachel Campelo - Mãe", "Myrna Lopes - Madrasta", "Amanda Campelo - Irmã"];

var age = [71, 71, 41, 41, 41, 13]

/*

Precisamos ordenadr os elementos presentes dentro da array "age" para estampar o valor da idade do respectivo membro da família.

Escreva: "age.sort()"

*/

age.sort ()  ;

/*

Precisamos reverter os elementos presentes dentro da array "age" para estampar o valor da idade dos respectivos membros da família.
Após ordenar a array "age", todos os elementos precisam ser organizados em ordem crescente, e nosso álbum de família consiste na lista oposta, na qual o primeiro membro é o avô, seguido pelo pai, assim em diante, ou seja, em ordem decrescente.

Escreva: "age.reverse()"

*/
age.reverse()  ;

var i = 0;

function update()
{
    i++;

    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    // var updatedAge = age[i]

    document.getElementById("familyMemberImage").src = updatedImage;
    
    document.getElementById("familyMemberName").innerHTML = updatedName;

    // document.getElementById("familyMemberAge").innerHTML = updatedAge;

    /*

    para achar a maior idade entre os membros da família, precisamos usar Math e a função max juntas, e para exibir a maior idade, precisamos estampar o valor. Portanto usaremos o console.

    Escreva:  "var maxNumber = Math.max.apply(Math, age)
            "console.log("A maior idade é: ", maxNumber)"

    */

    // var maxNumber = Math.max.apply(Math,age);
    // console.log("A maior idade é: ",maxNumber);

    /*

    Para achar a menor idade entre os membros da família, precisamos usar Matg e a função min juntas, e para exibir a menor idade, precisamos estmpar o valor. Portanto usaremos o console.

    Escreva:  "var minNumber = Math.min.apply(Math, age)
            "console.log("A menor idade é: ", minNumber)"

    */

    // var minNumber = Math.min.apply(Math,age);
    // console.log("A menor idade é: ",minNumber );
}