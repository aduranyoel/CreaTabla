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
