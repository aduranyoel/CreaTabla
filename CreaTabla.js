'use strict';
function CreaTabla(idContenedor, options)
{
    var options             = options || {};
    options.col             = options.col || [];
    options.rows            = options.rows || [];
    options.css             = options.css || [];
    options.class           = options.class || ["table"];
    options.fixed           = options.fixed || {};
    options.fixed.enabled   = options.fixed.enabled || false;
    options.fixed.height    = options.fixed.height || "40vh";
    options.search          = options.search || false;

    var container = document.createElement("div");
    container.style.position="relative";
    container.style.padding="34px 0 0";
    var inner = document.createElement("div");
    var search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("placeholder", "Buscar");
    search.style.position="absolute";
    search.style.top="2px";
    search.style.right="10px";
    search.classList="inputCreaTabla";
    search.onkeyup = function(){
        tableFilter(this.value);
    }
    if(!options.search){
        search.style.display="none";
    }
    var styleEle = document.createElement('style');
    styleEle.type = 'text/css';

    if(options.fixed.enabled){
        container.style.padding="67px 0 0";
        container.style.overflow="hidden";
        inner.style.height=options.fixed.height;
        inner.style.overflow="auto";
        inner.style.borderTop="solid 1px #ccc";
    }
    //table
    var tableElement = document.createElement("table");
    if(options.class.length>0){
        tableElement.classList=options.class;
    }
    if(options.fixed.enabled){
        tableElement.style.borderCollapse="collapse";
        tableElement.style.margin="0 0 0 -1px";
    }
    var theadElement = document.createElement("thead");
    options.col.forEach(function(e, i){
        var thElement = document.createElement("th");
        var divTh = document.createElement("div");
        thElement.onclick = function(){
            sortTable(i, 'str');
        }
        if(options.fixed.enabled){
            thElement.style.padding="0px";
            thElement.style.border="0px";
            divTh.style.position="absolute";
            divTh.style.top="42px";
        }
        divTh.innerHTML=e;
        thElement.append(divTh);
        theadElement.append(thElement);
    })
    tableElement.append(theadElement);
    var tbodyElement = document.createElement("tbody");
    options.rows.forEach(function(e){
        var trElement = document.createElement("tr");
        e.forEach(function(x){
            var tdElement = document.createElement("td");
            tdElement.innerHTML=x;
            trElement.append(tdElement);
        })
        tbodyElement.append(trElement);
    })
    tableElement.append(tbodyElement);
    styleEle.innerHTML = '.inputCreaTabla { padding: 0.375rem 0.75rem;line-height: 1.5;color: rgb(73, 80, 87);background-color: rgb(255, 255, 255);background-clip: padding-box;border: 1px solid rgb(206, 212, 218);border-radius: 0.25rem;transition: border-color 0.30s ease-in-out 0s, box-shadow 0.30s ease-in-out 0s; }.inputCreaTabla:focus {color: #495057;background-color: #fff;border-color: #80bdff;outline: 0;box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);';

    var ele = document.getElementById(idContenedor);
    inner.append(tableElement);
    container.appendChild(search);
    container.appendChild(inner);
    ele.appendChild(styleEle);
    ele.appendChild(container);

    var th = inner.childNodes[0].childNodes[0].childNodes[0].childNodes;
    if (options.css.length > 0){
        options.css.forEach(function(e){
            e.target.forEach(function(t,i){
                th[t].style[e.prop]=e.val;
            })
        })
    }
    if (!options.css.some(function(e){
        return e.prop == "width";
    })){
        for (var i=0; i<options.col.length;i++){
            th[i].style.width=100/options.col.length+"%";
        }
    }

    var tableFilter = function(value){
        var filas = Array.from(inner.childNodes[0].childNodes[1].childNodes);

        for(var i = 0; i < filas.length; i++){
            var showRow = false;

            var linea = filas[i];
            linea.style.display = 'none';

            for(var x = 0; x < linea.childElementCount; x++){
                if(linea.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1){
                    showRow = true;
                    break;
                }
            }

            if(showRow){
                linea.style.display = null;
            }
        }
    }

    //===
    var sortTable = function (n,type) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

        //table = document.getElementById("tablaCreaTabla");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";

        /*Make a loop that will continue until no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = tableElement.rows;
          /*Loop through all table rows (except the first, which contains table headers):*/
          for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare, one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place, based on the direction, asc or desc:*/
            if (dir == "asc") {
              if ((type=="str" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) > parseFloat(y.innerHTML))) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
              }
            } else if (dir == "desc") {
              if ((type=="str" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) < parseFloat(y.innerHTML))) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
          } else {
            /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
      //===

};