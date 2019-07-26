var creaTabla = function(idContenedor, columns, rows, options)
{
    columns     = columns || [];
    rows        = rows || [];
    options     = options || {};
    defaults    =
    {
        cssCol: [
            {target:[], prop:"", val:""}
        ],
        classTable: ["table", "table-striped"],
        fixedHeader: {
            enabled: false,
            height: "40vh"
        }
    };
    var settings = Object.assign(defaults, options);
    var renderTable = '';

    function isClass(arr){
        var res = '';
        if (arr.length>0){
            res = 'class="'+arr.join(" ")+'" ';
        }
        return res;
    }
    function isFix(is, str){
        res = "";
        if (is){
            res = 'style="'+str+'" ';
        }
        return res;
    }

    var container = document.createElement("div");
    container.setAttribute("id", "containerCreaTable");
    if(settings.fixedHeader.enabled){
        container.style.overflowY="scroll";
        container.style.overflowX="hidden";
        container.style.height=settings.fixedHeader.height;
        container.addEventListener("scroll", function () {
            var translate = "translate(0," + this.scrollTop + "px)";
            var myElements = this.querySelectorAll("thead");
            for (var i = 0; i < myElements.length; i++) {
              myElements[i].style.transform=translate;
            }
        });
    }

    renderTable += '<table '+isClass(settings.classTable)+isFix(settings.fixedHeader.enabled, "border-collapse: collapse;")+'><thead '+isFix(settings.fixedHeader.enabled, "background: white;")+'>';
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

    var ele = document.getElementById(idContenedor);
    container.innerHTML = renderTable;
    ele.appendChild(container);

    var cols = container.childNodes[0].childNodes[0].childNodes[0].childNodes;
    settings.cssCol.forEach(function(e,index){
        e.target.forEach(function(t,i){
            cols[t].style[e.prop]=e.val;
        })
    })

};