

module.exports.summingNumbers= function(req, res){
    
    const number1 = parseInt(req.params.num1);
    const number2=parseInt(req.query.num2);
  
    const sum = (number1+number2);
    res.status(200).json({ Result: number1+number2 });
}
