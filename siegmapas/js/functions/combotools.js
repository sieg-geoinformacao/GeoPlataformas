//Atualizar o tema de acordo com o assunto
function selectTema(){
      
      if (document.getElementById('assunto').value =='ae'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < ae.length;i++){
                var opt = document.createElement('option')
                opt.value=ae[i];
                opt.innerHTML=ae[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
      if (document.getElementById('assunto').value =='bc'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < bc.length;i++){
                var opt = document.createElement('option')
                opt.value = bc[i];
                opt.innerHTML = bc[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
		if (document.getElementById('assunto').value =='bc100'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < bc100.length;i++){
                var opt = document.createElement('option')
                opt.value = bc100[i];
                opt.innerHTML = bc100[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
		if (document.getElementById('assunto').value =='bio'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < bio.length;i++){
                var opt = document.createElement('option')
                opt.value = bio[i];
                opt.innerHTML = bio[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
      if (document.getElementById('assunto').value =='car'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            
            for (var i = 0; i < car.length;i++){
                var opt = document.createElement('option')
                opt.value = car[i];
                opt.innerHTML = car[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }  
      if (document.getElementById('assunto').value =='cli'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            
            for (var i = 0; i < cli.length;i++){
                var opt = document.createElement('option')
                opt.value = cli[i];
                opt.innerHTML = cli[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }  
       if (document.getElementById('assunto').value =='uso'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < uso.length;i++){
                var opt = document.createElement('option')
                opt.value = uso[i];
                opt.innerHTML = uso[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        } 
        if (document.getElementById('assunto').value =='dia'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < dia.length;i++){
                var opt = document.createElement('option')
                opt.value = dia[i];
                opt.innerHTML = dia[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='edu'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < edu.length;i++){
                var opt = document.createElement('option')
                opt.value = edu[i];
                opt.innerHTML = edu[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }    
        if (document.getElementById('assunto').value =='geo'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < geo.length;i++){
                var opt = document.createElement('option')
                opt.value = geo[i];
                opt.innerHTML = geo[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='geom'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < geom.length;i++){
                var opt = document.createElement('option')
                opt.value = geom[i];
                opt.innerHTML = geom[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='ind'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < ind.length;i++){
                var opt = document.createElement('option')
                opt.value = ind[i];
                opt.innerHTML = ind[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='inf'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < inf.length;i++){
                var opt = document.createElement('option')
                opt.value = inf[i];
                opt.innerHTML = inf[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='rec'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < rec.length;i++){
                var opt = document.createElement('option')
                opt.value = rec[i];
                opt.innerHTML = rec[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='ped'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < ped.length;i++){
                var opt = document.createElement('option')
                opt.value = ped[i];
                opt.innerHTML = ped[i].replace(/_/g," ");
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='Escolha o assunto'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
        }
}