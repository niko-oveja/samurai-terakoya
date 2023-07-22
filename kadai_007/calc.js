// 変数numに0～4までのランダムな整数を代入する
let num =  45 ;
 


// 変数numの値によって、出力する文字列を切り替える
switch (true) {
  case num % 3 == 0 && num % 5 == 0:
    console.log('３と５の倍数です');
    break;
  case num % 3 == 0:
    console.log('3の倍数です');
    break;
  case num % 5 == 0:
    console.log('５の倍数です');
    break;

   default:
    console.log(num) ;
    break;
}