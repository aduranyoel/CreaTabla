var creaTabla = function(idContenedor, columns, rows, options)
{
    columns     = columns || [];
    rows        = rows || [];
    options     = options || {};
    renderTable = '';
    defaults    =
    {
        cssCol: [
            {target:[], prop:"", val:""}
        ],
        classTable: ["table"],
        fixedHeader: {
            enabled: false,
            height: "40vh"
        }
    };

    if ('assign' in Object) {
        settings = Object.assign(defaults, options);
        }else{
            separadas = [defaults, options];
            unidas =  separadas.reduce(function (acumulador, objeto) {
                Object.keys(objeto).forEach(function (elemento) {
                acumulador[elemento] = objeto[elemento];
            });
            return acumulador;
            }, {});
            settings = unidas;
        }

    function isClass(arr){
        res = '';
        if (arr.length>0){
            res = 'class="'+arr.join(" ")+'" ';
        }
        return res;
    }
    function isFix(is, str){
        res = '';
        if (is){
            res = 'style="'+str+'" ';
        }
        return res;
    }

    container = document.createElement("div");
    inner = document.createElement("div");
    if(settings.fixedHeader.enabled){
        container.style.position="relative";
        container.style.overflow="hidden";
        container.style.padding="25px 0 0";
        inner.style.height=settings.fixedHeader.height;
        inner.style.overflow="auto";
    }

    renderTable += '<table '+isClass(settings.classTable)+isFix(settings.fixedHeader.enabled, "border-collapse: collapse;margin:0 0 0 -1px;")+'><thead>';
    columns.forEach(function(e, index){
        renderTable += '<th><div '+isFix(settings.fixedHeader.enabled,"position:absolute;top:0;")+'>'+e+'</div></th>';
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

    ele = document.getElementById(idContenedor);
    inner.innerHTML = renderTable;
    container.appendChild(inner);
    ele.appendChild(container);

    cols = inner.childNodes[0].childNodes[0].childNodes[0].childNodes;
    settings.cssCol.forEach(function(e,index){
        e.target.forEach(function(t,i){
            cols[t].style[e.prop]=e.val;
        })
    })

};