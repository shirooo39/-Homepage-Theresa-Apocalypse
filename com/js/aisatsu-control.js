/*  
	Copyright 2017 Shiro39
	
    This work is free and distributed without any warranty.
	You can redistribute it and/or modify it under the terms of the
	GNU Genereal Public License, Version 3.
*/

// Get local time and print greets based on the current time
var aisatsu;

if(new Date().getHours() <= 10) 
{
	aisatsu = "Good morning";
}
else if(new Date().getHours() <= 16)
{
	aisatsu = "Good afternoon";
}
else if(new Date().getHours() <= 22)
{
	aisatsu = "Good evening";
}
else
{
	aisatsu = "Good night";
}

document.write('<h1 style="cursor: default;">' + aisatsu + ', <span class="name-highlight" style="cursor: default;">Captain~ ♥</span></h1>');