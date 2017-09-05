window.onload=function(){
		var allImages = document.getElementsByTagName('img');
		for(var i = 0; i < allImages.length ; i++) {
				if (allImages[i].dataset.src!=undefined) {
					if (allImages[i].dataset.func!=undefined && allImages[i].dataset.func!=''){
						func=allImages[i].dataset.func.replace(".", "/");
						if (allImages[i].dataset.params!=undefined && allImages[i].dataset.params!='') 
							params='&'+allImages[i].dataset.params;
						else params='';
					}
					else {
						func="edit/apply";
						params='&transformations='+allImages[i].dataset.transformations;
					}
					allImages[i].src = imgapi_base_url+'/'+func+'?img='+allImages[i].dataset.src+'&api_key='+imgapi_key+params;
					allImages[i].onerror=function(){
						this.src = this.dataset.src;
						this.onerror=null;
					}
				}
		}
};