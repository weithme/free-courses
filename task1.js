/*
var    i = (process.argv[2]).toString();
var    a = process.argv[3];
var    b = process.argv[4];

function a_to_ten(n, a) {
	var sum = 0;
		for (var i=0; i<n.length; i++) {
			sum = sum + nto10(n[i]) * Math.pow(a, n.length-i-1);
		}
	return sum;
}

function nto10(s) {
	switch(s) {
		case '0': return 0; break;
  	case '1': return 1; break;
		case '2': return 2; break;
		case '3': return 3; break;
		case '4': return 4; break;
		case '5': return 5; break;
		case '6': return 6; break;
		case '7': return 7; break;
		case '8': return 8; break;
		case '9': return 9; break;
		case 'a': return 10; break;
		case 'b': return 11; break;
		case 'c': return 12; break;
		case 'd': return 13; break;
		case 'e': return 14; break;
		case 'f': return 15; break;
		case 'g': return 16; break;
		case 'h': return 17; break;
		case 'i': return 18; break;
		case 'j': return 19; break;
		case 'k': return 20; break;
		case 'l': return 21; break;
		case 'm': return 22; break;
		case 'n': return 23; break;
		case 'o': return 24; break;
		case 'p': return 25; break;
		case 'q': return 26; break;
		case 'r': return 27; break;
		case 's': return 28; break;
		case 't': return 29; break;
		case 'u': return 30; break;
		case 'v': return 31; break;
		case 'w': return 32; break;
		case 'x': return 33; break;
		case 'y': return 34; break;
		case 'z': return 35; break;
  		default: return 1; break;
	}
}

var str = a_to_ten(i,a);
process.stdout.write(str.toString(b));
*/
