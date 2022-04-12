function gettriangle2(arrL){
    for(let i = 0; i < arrL; i++) {
        let Str = ''
        for (let j = 0; j < arrL; j++)
        {
            if(i === (arrL -1) || j === (arrL -1) || i === (arrL -1) - j){
                Str = Str + ' * '
            }else {
                Str = Str + '   '
            }
        }
        console.log(Str)
    }
}
gettriangle2(7);

console.log()