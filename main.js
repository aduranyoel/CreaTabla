var columns = [
    "",
    "NOMBRE",
    "APELLLIDO",
    "SEXO",
    "EDAD",
    "MOTO",
    "CARRO"
];

var rows = [
    {
        nombre: "Tony",
        apellido: "Duran",
        sexo: "M",
        edad: 26,
        moto: "S",
        carro: "N",
        estado: "B"
    },
    {
        nombre: "Maday",
        apellido: "Concepcion",
        sexo: "F",
        edad: 25,
        moto: "N",
        carro: "N",
        estado: "M"
    },
    {
        nombre: "Edgar",
        apellido: "David",
        sexo: "M",
        edad: 29,
        moto: "S",
        carro: "S",
        estado: "B"
    },
    {
        nombre: "Gaby",
        apellido: "Rodriguez",
        sexo: "F",
        edad: 18,
        moto: "N",
        carro: "N",
        estado: "R"
    },
    {
        nombre: "Bety",
        apellido: "Cabrera",
        sexo: "F",
        edad: 50,
        moto: "N",
        carro: "S",
        estado: "M"
    }
];



var rowsTable1 = [];
rows.forEach(function(e,index){
    function isCkecket(param){
        if(param == "N"){return ""};
        if(param == "S"){return "checked"};
}

    function semaforo(param){
        if(param=="B"){return "green"}
        if(param=="R"){return "yellow"}
        if(param=="M"){return "red"}
    }

    rowsTable1.push([
        '<div class="semaforo" style="background-color: '+semaforo(e.estado)+';"></div>',
        '<p>'+e.nombre+'</p>',
        '<p>'+e.apellido+'</p>',
        '<p>'+e.sexo+'</p>',
        '<p>'+e.edad+'</p>',
        '<input type="checkbox" id="checkMoto" '+isCkecket(e.moto)+' />',
        '<input type="checkbox" id="checkCarro" '+isCkecket(e.carro)+' />'
    ])
})


creaTabla("tableContainner", columns, rowsTable1, {fixedHeader: {
    enabled: true,
    height: "30vh"
}})

// var element = document.getElementById('hola');
        
//         element.style['transform'] = 'rotate(30deg)';
        
//         element.style['msTransform'] = 'rotate(30deg)'; // IE
//         element.style['MozTransform'] = 'rotate(30deg)'; // Firefox
//         element.style['WebkitTransform'] = 'rotate(30deg)'; // Chrome
//         element.style['OTransform'] = 'rotate(30deg)'; // Opera







// creaTabla.columns = columns;
// rows.forEach(function(e,index){
//     creaTabla.rows.push([
//         '<p>'+e.nombre+'</p>',
//         e.apellido,
//         e.sexo,
//         e.edad,
//         e.moto,
//         e.carro
//     ]);
// })
// creaTabla.render("tableContainner");




// var renderTable = '';
// renderTable += '<table class="table table-striped"><thead>';
// columns.forEach(function(e, index){
//     renderTable += '<th>'+e+'</th>';
// })
// renderTable += '</thead><tbody>';

// rows.forEach(function(e, index){
//     function isCkecket(param){
//         if(param == "N"){return ""};
//         if(param == "S"){return "checked"};
// }

//     renderTable += '<tr>';
//     renderTable += '<td><p>'+e.nombre+'</p></td>';
//     renderTable += '<td><p>'+e.apellido+'</p></td>';
//     renderTable += '<td><p>'+e.sexo+'</p></td>';
//     renderTable += '<td><p>'+e.edad+'</p></td>';
//     renderTable += '<td><input type="checkbox" id="checkMoto" '+isCkecket(e.moto)+' /></td>';
//     renderTable += '<td><input type="checkbox" id="checkCarro" '+isCkecket(e.carro)+' /></td>';
//     renderTable += '</tr>';
// })
// renderTable += '</tbody></table>';

//$('#tableContainner').append(renderTable);

$('#checkMoto ').on("change",function(e){
    var isCarro = "";
    var isMoto = "";

    if (this.parentNode.parentNode.childNodes[5].childNodes[0].checked){
        isCarro = "Carro: SI";
    }else{
        isCarro = "Carro: NO";
    }

    if (this.checked){
        isMoto = "Moto: SI";
    }else{
        isMoto = "Moto: NO";
    }

    $('#resultCheckbox').html(isMoto+"<br>"+isCarro);
})
$('#checkCarro ').on("change",function(e){
    var isCarro = "";
    var isMoto = "";
    if (this.checked){
        isCarro = "Carro: SI";
    }else{
        isCarro = "Carro: NO";
    }

    if (this.parentNode.parentNode.childNodes[4].childNodes[0].checked){
        isMoto = "Moto: SI";
    }else{
        isMoto = "Moto: NO";
    }

    $('#resultCheckbox').html(isMoto+"<br>"+isCarro);
})
