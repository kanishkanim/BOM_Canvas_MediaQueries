String.prototype.repeatify = function(data){
    for(let i = 0; i < data; i++){
        console.log("" + this);
    }
};

"Kanishka".repeatify(4);