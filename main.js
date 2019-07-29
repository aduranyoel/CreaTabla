'use strict';

var columns = ["ID", "NOMBRE", "USERNAME", "EMAIL", "WEBSITE", "PHONE"]
var rows = [];
AjaxUtil({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function(data){
        data.forEach(function(e, index){
            rows.push([
                e.id,
                e.name,
                e.username,
                e.email,
                e.website,
                e.phone
            ])
        })

        CreaTabla("tableContainner", {
            col: columns,
            rows: rows,
            fixed: {
                enabled: true
            },
            search: true
        })
    }
})