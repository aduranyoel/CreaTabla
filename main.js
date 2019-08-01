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
            class: ["table"],
            css: [
                {target: [0,1,2,3,4,5], prop: "padding-left", val: "8px"}
            ],
            fixed: {
                enabled: true,
                height: "50vh"
            },
            search: true
        })
    }
})