interface RactangleOptions{
    width:number,
    length:number,
    height?:number   //optional
}

function drawRactangle(options:RactangleOptions){
    let width = options.width;
    let length = options.length;
    if(options.height){
        let height = options.height;
    }
}

drawRactangle({
    width:40,
    length:60
});