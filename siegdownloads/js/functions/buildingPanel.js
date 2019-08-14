function show(id){
        //Criando o DOM
        var DOM = $('#'+'l-'+id)
        
        //Verificar se a arvore está ativa
        if(DOM.attr("style")=='display:none'){
            DOM.attr("style",'display:block;')

        }else{
            DOM.attr("style",'display:none')
        }
               
  }
  $(document).ready(function(){
      var main = $('#panel')
      $.each(listnome,function(value){
           
           var objTemas = Temas
           var divAssunto = document.createElement("div")
           
          
           //Criando o botao da view dos assuntos
           var btn = document.createElement("button")
               btn.id = value
               btn.setAttribute('class',"btn btn-default btn-block") 
               btn.setAttribute('onclick',"show(this.id)")
               btn.setAttribute('style',"border: none")
               
           //Criando o icone do assunto e seu nome
           var span = document.createElement("span")
               span.setAttribute('class','glyphicon glyphicon-folder-close pull-left')
               span.setAttribute('style',"color:#f1c40f")
               span.innerHTML = '<text style="color:black"> '+listnome[value][0]+'</text>'
           
           btn.append(span)
           divAssunto.append(btn)
           
           //Criando o grupo dos temas
           var ul = document.createElement("ul")
               ul.id = 'l-'+value 
               ul.setAttribute('style','display:none')
                       
           //Criando a lista dos temas     
           for(var i in objTemas[value]){
              if (value == 'is'){
                  
                  var sensor = String(Object.keys(objTemas[value][i]))
                  var values = Object.values(objTemas[value][i][sensor])
                  var keys =  Object.keys(objTemas[value][i][sensor])              
                  
                  //Criando o botao da view dos assuntos
                  var btn = document.createElement("button")
                      btn.id = keys[0]
                      btn.setAttribute('class',"btn btn-default btn-block")
                      btn.setAttribute('onclick',"show(this.id)")
                      btn.setAttribute('style',"border: none")
                      
                  //Criando o icone do assunto e seu nome
                  var span = document.createElement("span")
                      span.setAttribute('class','glyphicon glyphicon-folder-close pull-left')
                      span.setAttribute('style',"color:#f1c40f")
            
                      span.innerHTML = '<text style="color:black"> '+Object.keys(objTemas[value][i])
                      btn.appendChild(span)
                      ul.appendChild(btn)


                  if (['cbers','landsat7','Landsat8','resourcesat','sentinel2','modis'].indexOf(keys[0]) > -1){
                      var folder = keys[0]
                      var subfolders = Object.keys(objTemas[value][i][sensor][folder])
                      
                      var uls = document.createElement("ul")
                          uls.id = 'l-'+keys[0] 
                          uls.setAttribute('style','display:none')
                          ul.appendChild(uls)                              
                      
                      for (m in subfolders){
                        var folders = subfolders[m]
                        
                      //Criando o grupo dos temas
                        var btn = document.createElement("button")
                            btn.id = keys[0]+folders
                            btn.setAttribute('class',"btn btn-default btn-block")
                            btn.setAttribute('onclick',"show(this.id)")
                            btn.setAttribute('style',"border:none")
                        
                        var span = document.createElement("span")
                            span.setAttribute('class','glyphicon glyphicon-folder-close pull-left')
                            span.setAttribute('style',"color:#f1c40f")
                            span.innerHTML = '<text style="color:black"> '+folders  

                        //Criando o grupo dos temas
                        var ulsc = document.createElement("ul")
                            ulsc.id = 'l-'+keys[0]+folders 
                            ulsc.setAttribute('style','display:none')
                        
                        var subcamadas = Object.values(objTemas[value][i][sensor][folder][folders])
                        
                        for (p in subcamadas){
                                  
                                  var licamadas = document.createElement("li")
                                      licamadas.setAttribute('style','list-style-type:none;');
                 
                                  var spancamadas = document.createElement("span")
                                      spancamadas.innerHTML = ' '+subcamadas[p]
                                      //spancamadas.innerHTML = ' '+subcamadas[p][j]
                                      spancamadas.setAttribute('class','glyphicon glyphicon-list-alt')
             

                                  var buttondownload = document.createElement("a")
                                      buttondownload.setAttribute('class','pull-right')
                                      //buttondownload.setAttribute('onclick', 'getDown("'+subcamadas[p][j]+'")')
                                      buttondownload.setAttribute('onclick', 'getDown("'+keys[0]+folders+' '+subcamadas[p]+'")')

                                  var buttonview = document.createElement("a")
                                      buttonview.setAttribute('class','pull-right')
                                      //buttonview.setAttribute('onclick', 'getView("'+subcamadas[p][j]+'")')
                                      buttonview.setAttribute('onclick', 'getView("'+subcamadas[p]+'")')
                      
                  
                                  var spandonwload = document.createElement("span") 
                                  var spanview = document.createElement("span")
                  
                                      spanview.setAttribute('class', 'glyphicon glyphicon-eye-open')
                                      spanview.setAttribute('style', 'margin-right:5px;color:#337ab7;')
              
                                      spandonwload.setAttribute('class','glyphicon glyphicon-download-alt')
                                      spandonwload.setAttribute('style', 'margin-right:5px;color:#337ab7;')
                     

                                      buttondownload.appendChild(spandonwload)
                                      buttonview.appendChild(spanview)
          
            
                                      licamadas.appendChild(spancamadas)
                                      licamadas.appendChild(buttondownload)
                                      licamadas.appendChild(buttonview) 
                                      ulsc.append(licamadas)
                         
                        }          
                        btn.appendChild(span)
                        uls.appendChild(btn) 
                        uls.appendChild(ulsc)           
                      }
                  }else{
                       var uli = document.createElement("ul")
                           uli.id = 'l-'+keys[0] 
                           uli.setAttribute('style','display:none')
                           values = values[0]
                           for (k in values){
                              var licamadas = document.createElement("li")
                                  licamadas.setAttribute('style','list-style-type:none;');
                                  
                              
                              var spancamadas = document.createElement("span")
                                  spancamadas.innerHTML = ' '+values[k]
                                  spancamadas.setAttribute('class','glyphicon glyphicon-list-alt')
             

                              var buttondownload = document.createElement("a")
                                  buttondownload.setAttribute('class','pull-right')
                                  
                              if (keys[0] == 'avnir2'){
                                  buttondownload.setAttribute('onclick', 'getDown("'+keys[0]+' '+values[k]+'")')
                              }else{
                                  buttondownload.setAttribute('onclick', 'getDown("'+keys[0]+'")')
                              }    

                              var buttonview = document.createElement("a")
                                  buttonview.setAttribute('class','pull-right')
                                  buttonview.setAttribute('onclick', 'getView("'+values[k]+'")')
                      
                  
                              var spandonwload = document.createElement("span") 
                              var spanview = document.createElement("span")
                  
                                  spanview.setAttribute('class', 'glyphicon glyphicon-eye-open')
                                  spanview.setAttribute('style', 'margin-right:5px;color:#337ab7;')
              
                                  spandonwload.setAttribute('class','glyphicon glyphicon-download-alt')
                                  spandonwload.setAttribute('style', 'margin-right:5px;color:#337ab7;')
                     

                                  buttondownload.appendChild(spandonwload)
                                  buttonview.appendChild(spanview)
          
            
                                  licamadas.appendChild(spancamadas)
                                  licamadas.appendChild(buttondownload)
                                  licamadas.appendChild(buttonview) 
                                  uli.appendChild(licamadas)
                           }
                      ul.appendChild(uli)
                  }
                  
              }else{

                      var licamadas = document.createElement("li")
                          licamadas.setAttribute('style','list-style-type:none;');
                 
                      var spancamadas = document.createElement("span")
                          spancamadas.innerHTML = ' '+objTemas[value][i]
                          spancamadas.setAttribute('class','glyphicon glyphicon-list-alt')
             

                      var buttondownload = document.createElement("a")
                          buttondownload.setAttribute('class','pull-right')
                          buttondownload.setAttribute('onclick', 'getDown("'+objTemas[value][i]+'")')

                      var buttonview = document.createElement("a")
                          buttonview.setAttribute('class','pull-right')
                          buttonview.setAttribute('onclick', 'getView("'+objTemas[value][i]+'")')
                      

                
                      var spandonwload = document.createElement("span") 
                      var spanview = document.createElement("span")
                  
                          spanview.setAttribute('class', 'glyphicon glyphicon-eye-open')
                          spanview.setAttribute('style', 'margin-right:5px;color:#337ab7;')
              
                          spandonwload.setAttribute('class','glyphicon glyphicon-download-alt')
                          spandonwload.setAttribute('style', 'margin-right:5px;color:#337ab7;')
                     

                          buttondownload.appendChild(spandonwload)
                          buttonview.appendChild(spanview)
          
            
                          licamadas.appendChild(spancamadas)
                          licamadas.appendChild(buttondownload)
                          licamadas.appendChild(buttonview)
            
                          ul.appendChild(licamadas)
                }
           } 
           
           //Adicionado as camadas na lista de assuntos 
           divAssunto.appendChild(ul)    
           main.append(divAssunto)
       
        })
       
  });