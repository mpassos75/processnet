	$(window).on("load", function(){
   document.getElementById("bt_txtcsv").disabled = true;
   document.getElementById("rInfo").checked = true;
   $("#opAddnv").css("visibility", "invisible");
   
     var array = JSON.parse(relUnidEBE);
  var newArray = [];
for (var i = 0; i < array.length; i++) {
    var singleElement = array[i];
    var Loc = singleElement.Loc;
    newArray.push(Loc);
}
//alert(newArray);
					var LocU = newArray;
				
			var locInst = $("#LocUnids").select2({
				  data: LocU

					
				});

})


function myFun(){
 var data = JSON.parse(saldo);
               

var lTab = document.getElementById("myTable");	
		var colTab = lTab.getElementsByTagName('td');


for (var i=0; i<data.length; i++) {
	
	
		var Lrows = document.getElementsByTagName('tr');

	for (var t = 1; t < Lrows.length; t++) {
		var Trows = t;
				
		}
			
            var row = $('<tr class="row-select"><td><input type="radio" class="rdbClass" name="rdb" value=" '+i+' "></td><td class="cod">' + data[i].COD+ '</td><td class="desc" align="left">' + 
			data[i].DESCRICAO + '</td><td>' + data[i].UND + '</td><td>' +
			data[i].cc705 + '</td><td>' + data[i].cc746 + 
			'</td><td><input type="text" id="txtVl" name="txtVls" maxlength="4" class="ClassInputVl">' +
			'</td><td><input type="text" id="'+i+'" name="inputLocInst" class="ClassLocInst"></td><td class="check" ><input type="checkbox"  id='+i+' name="Selected[]" class="checkbox"></td></tr>');
			 			
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
 
 
 
 $(document).ready(function () {
    $('input[type=radio]').change(function() {
        $('input[type=radio]:checked').not(this).prop('checked', false);
    });
	
	$(".nvItem").hide();
$(".ckItemNvCl").click(function() {
    if($(this).is(":checked")) {
        $(".nvItem").show();
    } else {
        $(".nvItem").hide();
		 document.getElementById("btnSubmit").disabled = false;
		 $('input[type=radio]:checked').not(this).prop('checked', false);
		  document.getElementById("addlItem").value = "";
      document.getElementById("addlItemQnt").value = "";
	  document.getElementById("addlItemLoc").value = "";
    }
});
	
	
});
		
//----------------------------------------------


	$(document).ready(function(){
		
   $(".rdbClass").on('click',function(){
	 
	   var addItemNV = document.getElementById('addlItem')
	  //var vlItem = $('input[name="inptAdditem"]').val();
       var currentRow=$(this).closest("tr");

       var col1=currentRow.find("td:eq(0)").html();
       var col2=currentRow.find("td:eq(1)").html();
	    var col3=currentRow.find("td:eq(2)").html();
	   
	   if ($('#ckItemNv').is(':checked') == true){
		    
			addItemNV.value = "";
			$('input[name="inptAdditem"]')[0].focus();
		   addItemNV.value+=col3;
		   
	   }

       var data=col1+"\n"+col2;
   //    alert(data);
   });
   
   
});

$(document).ready(function() {

	var cod, desc, qntP, txtAvl, vlItem, vlItemQnt,  lInst;
	
      

 $('#ckItemNv').click(function () {
 if ($('#ckItemNv').is(':checked') == true) {
        		 $("#opAddnv").css("visibility", "visible");
            // alert(";)");
       document.getElementById("btnSubmit").disabled = true;
	  }
      
 });
   

$('input[name="inptAdditem"]')[0].focus();
  //    if (!$('input[name^=program]:checked').length) {
   // $('input[name^=program]')[0].focus();

    });

$('#btAddnv').click(function () {
vlInstnv = $('input[name="inptAdditemLoc"]').val();
vlItem = $('input[name="inptAdditem"]').val();
vlItemQnt = $('input[name="inptAdditemQnt"]').val();

var addItem = document.getElementById('relItem')

	 if ( (vlItem == "") || (vlItemQnt == "") || (vlInstnv == "")){
		alert("Preencher todos campos para Continuar!")
	 }else{
		
	  addItem.value+=+"999999"+";"+vlItem+";"+vlItemQnt+";"+vlInstnv+"\n";
	  
	  document.getElementById("bt_txtcsv").disabled = false;

      document.getElementById("addlItem").value = "";
      document.getElementById("addlItemQnt").value = "";
	  document.getElementById("addlItemLoc").value = "";
	 }
       // if ($('#ckItemNv').is(':checked') == true) {
        		// $("#opAddnv").css("visibility", "visible");
            // alert(";)");
     
      
      
    });
	
	
	
	$('#btSelOpc').click(function() {
		vlSelOp = document.getElementById('LocUnids');
		
		var vlQnt = $('.ClassInputVl');
	var vlLoc = $('.ClassLocInst');
  var chkboxes = $('.checkbox');

  for(var i = 0; i < chkboxes.length; i++) {
	  
    if (chkboxes[i].checked && vlLoc[i].value == "") {
		//alert("Faltou Preencher LOCALIZAÇÃO!")
		vlLoc[i].value = vlSelOp.value;
		
  }
  }
});
	
//-------------------------Incluir ITEM
  $('#btnSubmit').click(function() {
 var vlQnt = $('.ClassInputVl');
	var vlLoc = $('.ClassLocInst');
  var chkboxes = $('.checkbox');

  for(var i = 0; i < chkboxes.length; i++) {
	  
    if (chkboxes[i].checked && vlQnt[i].value == "") {
		alert("Inserir Qnt e Local Instalação para continuar!")
	//alert(i);
	return
	}
  }
  	


 $('.row-select input:checked').each(function() {
	 
	
      

cod = $(this).closest('tr').find('.cod').html();
      desc = $(this).closest('tr').find('.desc').html();
	//	qnt = $(this).closest('input', '.txtVls').val();
	 qntP = $(this).closest('tr').find("input[name='txtVls']").val();
	 lInst = $(this).closest('tr').find("input[name='inputLocInst']").val();
	 var addItem = document.getElementById('relItem')
	  //var objDesc =  JSON.stringify(desc);
	  //var objD = objDesc.toString().replace(/[""]/g,'');
	 
	if ((qntP == "") || (lInst == "")){
	alert("Inserir Qnt e Local Instalação!")
	return
   // alert('COD: ' + cod + " | DESC: " + desc+ " | Qnt-Ped: " + qntP);

     // txtAvl = cod +";" +  desc +";"+  qntP;
	 
	  //addItem.style.font = "Verdana";
	  
	}else{
		addItem.value+=cod+";"+desc+";"+qntP+";"+lInst+"\n";
		document.getElementById("bt_txtcsv").disabled = false;
	}
	 	
			   
    })
 
      
	//----------------------------------------------
	 $(":checkbox").on("change", function() {
	 
    $(this).parent().toggleClass("checked", this.checked);
  });



  })


//-------------------------LIMPAR
  
  $('#btnSelectAll').click(function() {
  	document.getElementById("bt_txtcsv").disabled = true;
     
    $('.row-select input').each(function() {
     $(this).prop('checked', false);
	 $(this).closest('tr').toggleClass("highlight", this.checked);
	 //document.getElementById('txtVl').value = '';
	 $('txtVl').val($(this).val(''));
	// document.getElementById('relItem').value = "";
	 vlItem = $('input[name="inptAdditem"]').val('');
	vlItemQnt = $('input[name="inptAdditemQnt"]').val('');
	
	$('#search-box').val('');
	     //document.getElementById('search-box').value = +"/n";
	
	 })
	
  })
 
//---------------Incluir indv lista
$(document).ready(function(lisU) {
	
	 $(document).on('click','#myTable tr', function(lisU) {
	//alert("aqui")
	var lisU = new Array();
 
var ln = (this.rowIndex);
	
   lisU = ln;

        // var ln = (this.rowIndex);
		
		 // lInst = $(this).closest('tr').find("input[name='inputLocInst']").val();
		// && ($("input[name='inputLocInst']").val(''))
		//($("input[type='checkbox']").prop(':checked', true))
	        if (($('input[name="inputLocInst"]')[ln-1].val() == "") ) {
	//alert("aqui")
	  $('input[name="inputLocInst"]')[ln-1].focus();
	
	  
	  // $(this).prop('checked',true);
	
			}else if ($('input[name="inputLocInst"]').val() != ""){
				
				 $('input[name="txtVls"]')[ln-1].focus();
				  // $('input[name="txtVls"]')[ln-1].focus();
		// $("input[name='txtVls']").val(''))
				// if (lInst == ""){
				document.getElementById("LocUnids").disabled = true;
				 // $('input[name="inputLocInst"]')[ln-1].focus();
				 // document.getElementsByName('txtVls')[ln-1].value = "";
			}
			// alert(lisU+"array")
			
    });
	

//----------------------------------------

	
	
	
	
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
	return lisU;
	document.getElementById("LocUnids").disabled = true;
});

//-----------------------------------------------------


document.getElementById("bt_txtcsv").addEventListener("click", function () {
	

	var vlQnt = $('.ClassInputVl');
	var vlLoc = $('.ClassLocInst');
  var chkboxes = $('.checkbox');

  for(var i = 0; i < chkboxes.length; i++) {
	  
    if (chkboxes[i].checked && vlLoc[i].value == "") {
		alert("Faltou Preencher LOCALIZAÇÃO!")
		
	return
	}else if (chkboxes[i].checked && vlQnt[i].value == ""){
		alert("Faltou Preencher QUANTIDADE!")
		
		return
		
  }
  }

	

if(confirm("Baixar Itens Relacionados?")){

        var array = [];
        array.push(document.getElementById("relItem").value);
      
        var csv = array.join(";");
      //  alert(csv);
		var csvCol = 'COD;DESCRICAO;QNT;LOCALIZACAO\n';
        var file = "data:text/csv;charset=utf-8," + csvCol + csv + "\n";
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

window.onload = function(){
			// document.getElementById("search-box").addEventListener("search", lProcura);
	
			// function lProcura () {
		   // var input = document.getElementById('search-box');
		   // input.focus();
			//input.keyCode == 32;
document.getElementById('search-box').addEventListener("search");
 };
	
	//var searcText = "";
       // var input = document.getElementById('search-box');
	 
	//	input.value = 32;
 
			$(document).ready(function() {
				var str = new Array();
			
				 $("tr").click(function(event){
				  str =	this.rowIndex;
				   $(this).val(str);
				  // var str = this.innerText;
				  // var i = str.split('').indexOf("   ");
				  // alert(str.slice(0, i));
			  
					return str;
				})
			
				//-------Opção Tipo Localização
				
				
	 
						$('input:radio[name=rdSelLoc]').change(function() {
							var nLoc;
							var chekEbe = document.getElementById('rckEbe').checked;
							var chekEta = document.getElementById('rckEta').checked;
							var chekRes = document.getElementById('rckRes').checked;
				
							if (this.value == 'ebe' || chekEbe == true) {
							  $('#LocUnids').html('').select2({	data: [] })
								 document.getElementById("rInfo").checked = true;
								nLoc = relUnidEBE;
							}
							else if (this.value == 'eta' || chekEta == true) {
							$('#LocUnids').html('').select2({  data: [] })
							 document.getElementById("rInfo").checked = true;
								nLoc = relUnidETA;
									  
							}
							else if (this.value == 'res' || chekRes == true) {
								$('#LocUnids').html('').select2({  data: [] })
							 document.getElementById("rInfo").checked = true;
								nLoc = relUnidRES;
								
							}
							
							
									var array = JSON.parse(nLoc);
									
								

									 newArray = [];
									for (var i = 0; i < array.length; i++) {
										var singleElement = array[i];
										var Loc = singleElement.Loc;
										newArray.push(Loc);
									}
					//alert(newArray);
									var LocU = newArray;
									
									var locInst = $("#LocUnids").select2({
									  data: LocU
										
									});
						});
				// return str;
				$("#LocUnids").change(function(){
					
					var vlQnt = $('.ClassInputVl');
					
					var chkboxes = $('.checkbox');

					for(var i = 0; i < chkboxes.length; i++) {
					  
					
					if (chkboxes[i].checked && vlQnt[i].value != ""){
						$('input[name="txtVls"]')[i].focus();
						
						return
						
				  }
				  }
					
					
					
					
					// var strx = $("tr").val(str);
					 ckAddItem = document.getElementById("ckItemNv").checked
					 
					var selectedId = $(this).find(".check").attr("id")
					var locInst =  document.getElementById('LocUnidAdd').innerHTML = $(this).val();//locInst.options[locInst.selectedIndex].text;
					// alert(str+"BLZ");
						if (ckAddItem == true){
					
						document.getElementById("addlItemLoc").value = locInst;
						
						}else{						
				 
					   document.getElementsByName('inputLocInst')[str-1].value = locInst;
					   $('input[name="txtVls"]')[str-1].focus();
						
						
					}
				 
				 
					
				});
				
			});
			
			
 

};

