var creaTabla = function(idContenedor, columns, rows, settings)
{
    columns = columns || [];
    rows = rows || [];
    settings = settings || [
        {target:[], prop:"", val:""},
    ];
    var renderTable = '';


        renderTable += '<table class="table table-striped"><thead>';
        columns.forEach(function(e, index){
            renderTable += '<th>'+e+'</th>';
        })
        renderTable += '</thead><tbody>';
        rows.forEach(function(e, index){
            renderTable += '<tr>';
            e.forEach(function(x,index){
                renderTable += '<td>'+x+'</td>';
            })
            renderTable += '</tr>';
        })
        renderTable += '</tbody></table>';

       var ele = document.getElementById(idContenedor)
       ele.innerHTML = renderTable;

        var cols = ele.childNodes[0].childNodes[0].childNodes[0].childNodes;

        settings.forEach(function(e,index){
            e.target.forEach(function(t,i){
                cols[t].style[e.prop]=e.val;
            })
        })

};