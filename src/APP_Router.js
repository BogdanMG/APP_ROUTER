var APP = {
    Router(params){
     var typeHistory = params.typeHistory;
     var routes = params.routes;
     //var component = params.component;
     var win = window;
     if(typeHistory == "hashHistory"){
      initHashHistoryMode();
     }
     else if(typeHistory == "html5History"){
      initHtml5HistoryMode();
     }else{
         throw new Error(typeHistory + "is incorrect. Please, try 'hashHistory' or 'html5History' mode.");
     }
     ////////////////////////////////////////////
     ////////////////////////////////////////////
  
  
    function getPath(){
      return win.location.hash.slice(1);
     }
    function setPath(){
       var path = getPath();
       return win.location.href = path;
     }
     function initHashHistoryMode(){
         win.addEventListener('hashchange',updateRoute);
         win.addEventListener('load',updateRoute);
     }
  
     function updateRoute(){
      var route = setPath();
      routes.forEach(function(r) {
          return r.path === route && body.innerHTML === r.component;
      });
      
     }
     function initHtml5HistoryMode(){
         win.addEventListener('popstate', function(){
          history.state = changeRoute();
          
         });
         
         
     }
     function changeRoute(){
       var a = document.getElementsByTagName('a');
       a.addEventListener('click', function(e){
            e.preventDefault();
            routes.forEach(function(r){
            history.pushState(null,a.getAttributes(href),r.path);
            body.innerHTML = r.component;
            
          });
            
       });
       }
   
  
  
    }
    
  };
    /*getPath(){
     return window.location.hash.slice(1);
    },
    setPath(){
      var path = getPath();
      return window.location.href = path;
    },
    initHashHistoryMode(){
        window.addEventListener('hashchange', function(){
           //var routes = params.routes;
           var route = setPath();
           routes.forEach(function(r) {
               return r.path === route;
           });
        });
    },
    initHtml5HistotyMode(){
        window.addEventListener('popstate', function(){
         history.state = changeRoute();
        });
        
        
    },
    changeRoute(){
      var a = document.getElementsByTagName('a');
      a.addEventListener('click', function(e){
         e.preventDefault();
        // var routes = param.routes;
         routes.forEach(function(r){
           history.pushState(/*r.component*///a.getAttributes(href),r.path);
       //  });
  
    //  });
     // },*/
  
    // other fn
  
  