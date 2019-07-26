var creaTabla = creaTabla ||
{
    columns:  [],
    rows: [],
    renderTable: '',

    render: function(idContenedor) {
        this.renderTable += '<table class="table table-striped"><thead>';
        this.columns.forEach(function(e, index){
            creaTabla.renderTable += '<th>'+e+'</th>';
        })
        this.renderTable += '</thead><tbody>';
        this.rows.forEach(function(e, index){
            creaTabla.renderTable += '<tr>';
            e.forEach(function(x,index){
                creaTabla.renderTable += '<td>'+x+'</td>';
            })
            this.renderTable += '</tr>';
        })
        this.renderTable += '</tbody></table>';

        document.getElementById(idContenedor).innerHTML = this.renderTable;
     }
};