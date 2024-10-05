

        function debounce(myFunc, delay){
            let timeOutId;
            return function(){
                if(timeOutId){
                    console.log(timeOutId)
                    clearTimeout(timeOutId);
                }
                timeOutId = setTimeout(e=>{
                    myFunc()
                },delay);

                console.log(timeOutId);
                
            }
        }

       let hello = debounce(function(){console.log("hello")},2000);
        hello();
        hello();