var str=String(prompt("enter String :"));
var check=String((prompt("enter check word:")));
var count=0;
for(i=0;i<str.length;i++)
{
	a=str.match(check);
	if(a==check)
	{
		count++;
	}
	str=str.replace(check,"");
}
document.write(check+" "+count+" times in this stirng ");