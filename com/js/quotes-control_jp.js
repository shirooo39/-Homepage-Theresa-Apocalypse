/*  
	Copyright 2017 Shiro39
	
    This work is free and distributed without any warranty.
	You can redistribute it and/or modify it under the terms of the
	GNU Genereal Public License, Version 3.
*/

var r_text = new Array();

r_text[0] = "紅茶やコーヒーを注文したいのですか？それとも。。私？";
r_text[1] = "私たちが恐れなければならないのは、恐怖自体です";
r_text[2] = "進み続けてさえいれば、遅くとも関係ない";
r_text[3] = "目指すべき所に、近道は存在しない";
r_text[4] = "この世界の内に望む変化に、あなた自身が成ってみせなさい";
r_text[5] = "きっと成功してみせる、と決心する事が何よりも重要だ";
r_text[6] = "Life is not fair; get used to it";
r_text[7] = "打たないショットは、100％外れる";
r_text[8] = "無知と自信。人生で成功を収めるには、これさえあればいい";
r_text[9] = "毎日を人生最後の日だと思って生きれば、いつか必ずその日は来るだろう";
r_text[10] = "もしそれがまだ見つかっていなければ、探し続けなくてはならない";

var myRandom = Math.floor(Math.random()*r_text.length);

$(document).ready(function() {
	$('#r_text').html(r_text[myRandom]); 
});