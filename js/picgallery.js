var myBtn = document.querySelectorAll(".btn")
var firstdiv= document.querySelector(".all")
var showall = document.querySelector(".allpics")
var secdiv  =  document.querySelector(".audi")
var showaudi =  document.querySelector(".allaudi")
var showfood =  document.querySelector(".veg")
var thirddiv =  document.querySelector(".food")
var showcity =  document.querySelector(".city")
var fourthdiv =  document.querySelector(".cities")
for(i=0;i<myBtn.length;i++){
 myBtn[i].addEventListener("click",function(){ 
    for(j=0;j<myBtn.length;j++){
        myBtn[j].classList.remove("active")
    }
     this.classList.add("active")
 })
}
function giveAll(){
    let url = 'https://api.unsplash.com/search/photos?page=1&query=random&client_id=7LGcBPExLFSdq8fCrA_-LY29_ayrPQ_98_S93C7O4Ts'
    fetch(url)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
      data.results.map(random=>{
          let myrandom =`
            <div>
              <img  class="img" width="180px" height="180px" src="${random.urls.small}">
              <a href="${random.links.download}">
            </div>
          `
          firstdiv.innerHTML+=myrandom
      })
    })
    .catch(error=>{
        return error()
    })
}
showall.addEventListener("click",function(){
    giveAll()
})
window.addEventListener("load",function(){
    giveAll()
})
function showAudi(){
    let url = 'https://api.unsplash.com/search/photos?page=1&query=audi&client_id=7LGcBPExLFSdq8fCrA_-LY29_ayrPQ_98_S93C7O4Ts'
    fetch(url)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
      
    
      data.results.map(audi=>{
          let myaudi=`
            <div>
               <img  class="img" width="180px" height="180px" src="${audi.urls.small}"> 
                <a href="${audi.links.download}">            
            </div>
          `
          secdiv.innerHTML +=myaudi
      })
    })
    .catch(error=>{
       console.log(error)
    })
}
showaudi.addEventListener("click",function(){
    showAudi()
})
function givefood(){
    let url = 'https://api.unsplash.com/search/photos?page=1&query=Vegetable&client_id=KPW-XH0nXYdM1NPn85IRhWN3P2y1GLSBOnCXfBlgFlE'
    fetch(url)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
      data.results.map(vegetable=>{
          let myveg=
          `
            <div>
             <img  class="img" width="180px" height="180px" src="${vegetable.urls.small}"> 
             <a href="${vegetable.links.download}">            
            </div>
          `
          thirddiv.innerHTML+= myveg
      })
    })
    .catch(error=>{
        return error() 
    })
}
showfood.addEventListener("click",function(){
    givefood()
})
function giveCities(){
    let url = 'https://api.unsplash.com/search/photos?page=1&query=city&client_id=KPW-XH0nXYdM1NPn85IRhWN3P2y1GLSBOnCXfBlgFlE'
    fetch(url)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        data.results.map(city=>{
            let mycity=
            `
             <div class="img">
               <img  width="180px" height="180px"  src="${city.urls.small}">
               <a href="${city.links.download}">
             </div>
            `
            fourthdiv.innerHTML +=mycity
        })
    })
    .catch(error=>{
        console.log (error);
    })
}
showcity.addEventListener("click",function(){
    giveCities()
})