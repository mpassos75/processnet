	$(window).on("load", function(){
   document.getElementById("bt_txtcsv").disabled = true;
   $("#opAddnv").css("visibility", "invisible");
})


function myFun(){
 var data = JSON.parse(datax);
               

var lTab = document.getElementById("myTable");	
		var colTab = lTab.getElementsByTagName('td');


for (var i=0; i<data.length; i++) {
	
	
		var Lrows = document.getElementsByTagName('tr');

	for (var t = 1; t < Lrows.length; t++) {
		var Trows = t;
				
		}
			
            var row = $('<tr class="row-select"><td class="cod">' + data[i].COD+ '</td><td class="desc" align="left">' + 
			data[i].DESCRICAO + '</td><td>' + data[i].UND + '</td><td>' +
			data[i].cc705 + '</td><td>' + data[i].cc746 + 
			'</td><td><input type="text" id="txtVl" name="txtVls" maxlength="4" class="inputVl"></td><td class="check" ><input type="checkbox"  name="Selected[]" class="checkbox"></td></tr>');
			 			
            $('#myTable').append(row);
						
 	for (var w= 0; w < colTab.length;w++) {
 
	
	  if((w==1)&&(Trows=!"")){
	  
      var  DTI = colTab[w].textContent;
	 
	   }
	 }
		
        }
		//var rowCount = $("#myTable").length;
          //  alert(rowCount); 
		
		var linhas = $("data").rows
 // var linhas = table1.getElementsByTagName('tr'); 
		
//----------------------------------------------

$(document).ready(function() {

	var cod, desc, qntP, txtAvl, vlItem, vlItemQnt;
	
      

 $('#ckItemNv').click(function () {

        if ($('#ckItemNv').is(':checked') == true) {
        		 $("#opAddnv").css("visibility", "visible");
            // alert(";)");
      }
     
   

$('input[name="inptAdditem"]')[0].focus();
  //    if (!$('input[name^=program]:checked').length) {
   // $('input[name^=program]')[0].focus();
//}
    });

$('#btAddnv').click(function () {

vlItem = $('input[name="inptAdditem"]').val();
vlItemQnt = $('input[name="inptAdditemQnt"]').val();

var addItem = document.getElementById('relItem')
	  //var objDesc =  JSON.stringify(desc);
	  //var objD = objDesc.toString().replace(/[""]/g,'');
	 
 
   // alert('COD: ' + cod + " | DESC: " + desc+ " | Qnt-Ped: " + qntP);

     // txtAvl = cod +";" +  desc +";"+  qntP;
	 //var nvCod = 1000;
	 //var nvCodx = nvCod.tostring();
	  //addItem.style+.font = "Verdana";
	  addItem.value+=+"999999"+";"+vlItem+";"+vlItemQnt+"\n";
       // if ($('#ckItemNv').is(':checked') == true) {
        		// $("#opAddnv").css("visibility", "visible");
            // alert(";)");
      //}
      document.getElementById("bt_txtcsv").disabled = false;

      document.getElementById("addlItem").value = "";
      document.getElementById("addlItemQnt").value = "";
      
    });

  $('#btnSubmit').click(function() {



 $('.row-select input:checked').each(function() {
      

cod = $(this).closest('tr').find('.cod').html();
      desc = $(this).closest('tr').find('.desc').html();
	//	qnt = $(this).closest('input', '.txtVls').val();
	 qntP = $(this).closest('tr').find("input[name='txtVls']").val();
	 var addItem = document.getElementById('relItem')
	  //var objDesc =  JSON.stringify(desc);
	  //var objD = objDesc.toString().replace(/[""]/g,'');
	 
 
   // alert('COD: ' + cod + " | DESC: " + desc+ " | Qnt-Ped: " + qntP);

     // txtAvl = cod +";" +  desc +";"+  qntP;
	 
	  //addItem.style.font = "Verdana";
	  addItem.value+=cod+";"+desc+";"+qntP+"\n";
	   
	   	
			   
    })
  
      
	//----------------------------------------------
	 $(":checkbox").on("change", function() {
	 
    $(this).parent().toggleClass("checked", this.checked);
  });

document.getElementById("bt_txtcsv").disabled = false;

  })



  

//-------------------------LIMPAR
  
  $('#btnSelectAll').click(function() {
  	document.getElementById("bt_txtcsv").disabled = true;
     
    $('.row-select input').each(function() {
     $(this).prop('checked', false);
	 $(this).closest('tr').toggleClass("highlight", this.checked);
	 //document.getElementById('txtVl').value = '';
	 $('txtVl').val($(this).val(''));
	 document.getElementById('relItem').value = "";
	 vlItem = $('input[name="inptAdditem"]').val('');
	vlItemQnt = $('input[name="inptAdditemQnt"]').val('');
	     document.getElementById('search-box').value = "";
	
	 })
	
  })
 // }
})	


//------------------------------------------------------------------
$(document).ready(function() {

	 $(document).on('click','#myTable tr', function() {

        var ln = (this.rowIndex);
        $('input[name="txtVls"]')[ln-1].focus();
       //alert(ln);
       
    });
    $("input[type='checkbox']").change(function(e) {

    	var $checkbox = $(this);
       	if ($checkbox.parent().is('td')) {
            $checkbox.closest('tr').toggleClass("highlight", this.checked);
            

         
		
        } else {
            var index = $(this).parent('th').index();
            $(this).closest('table').find('tr').each(function() {
                $(this).find('td').eq(index).toggleClass('selectedcc', $checkbox.prop('checked'));
				
            });


        }


       
    });
});

//-----------------------------------------------------


document.getElementById("bt_txtcsv").addEventListener("click", function () {

if(confirm("Baixar Itens Relacionados?")){

        var array = [];
        array.push(document.getElementById("relItem").value);
      
        var csv = array.join(";");
      //  alert(csv);
        var file = "data:text/csv;charset=utf-8," + csv + "\n";
        var encoded_file = encodeURI(file);
        var link = document.createElement("a");
        link.setAttribute("href", encoded_file);
        link.setAttribute("download", "MatManutEletMec.csv");
        document.body.appendChild(link);
        link.click();
        document.getElementById('relItem').value = "";
         vlItem = $('input[name="inptAdditem"]').val('');
	vlItemQnt = $('input[name="inptAdditemQnt"]').val('');
	$('#ckItemNv').is(':checked') == false;
	 $("#opAddnv").css("visibility", "invisible");
    }else{

    }

      });

//---------------------------------------------------------------
(function () { // -----filtro
    var showResults;

    $('#search-box').keyup(function () {
        var searchText;
        searchText = $('#search-box').val();
        return showResults(searchText);
    });
    showResults = function (searchText) {
        $('tbody tr').hide();
        return $('tbody tr:Contains(' + searchText + ')').show();
    };
    jQuery.expr[':'].Contains = jQuery.expr.createPseudo(function (arg) {
        return function (elem) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
}.call(this));

}
