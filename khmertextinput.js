			function transformTypedChar(c) {
				if(c=='k') return 'ក';
				if(c=='x') return 'ខ';
				if(c=='K') return 'គ';
				if(c=='X') return 'ឃ';
				if(c=='g') return 'ង';
				if(c=='c') return 'ច';
				if(c=='q') return 'ឆ';
				if(c=='C') return 'ជ';
				if(c=='Q') return 'ឈ';
				if(c=='J') return 'ញ';
				if(c=='d') return 'ដ';
				if(c=='z') return 'ឋ';
				if(c=='D') return 'ឌ';
				if(c=='Z') return 'ឍ';
				if(c=='N') return 'ណ';
				if(c=='t') return 'ត';
				if(c=='f') return 'ថ';
				if(c=='T') return 'ទ';
				if(c=='f') return 'ធ';
				if(c=='n') return 'ន';
				if(c=='b') return 'ប';
				if(c=='p') return 'ផ';
				if(c=='B') return 'ព';
				if(c=='P') return 'ភ';
				if(c=='m') return 'ម';
				if(c=='y') return 'យ';
				if(c=='r') return 'រ';
				if(c=='l') return 'ល';
				if(c=='v') return 'វ';
				if(c=='s') return 'ស';
				if(c=='h') return 'ហ';
				if(c=='L') return 'ឡ';
				if(c=='G') return 'អ';

				if(c=='a') return 'ា';
				if(c=='i') return 'ិ';
				if(c=='I') return 'ី';
				if(c=='w') return 'ឹ';
				if(c=='W') return 'ឺ';
				if(c=='u') return 'ុ';
				if(c=='U') return 'ូ';
				if(c=='Y') return 'ួ';
				if(c==';') return 'ើ';
				if(c=='{') return 'ឿ';
				if(c=='[') return 'ៀ';
				if(c=='e') return 'េ';
				if(c=='E') return 'ែ';
				if(c=='S') return 'ៃ';
				if(c=='o') return 'ោ';
				if(c=='O') return 'ៅ';

				if(c==',') return 'ុំ';
				if(c=='M') return 'ំ';
				if(c=='A') return 'ាំ';
				if(c=='H') return 'ះ';
				if(c=='<') return 'ុះ';
				if(c=='V') return 'េះ';
				if(c==':') return 'ោះ';

				if(c=='-') return 'ឥ';
				if(c=='í') return 'ឦ';
				if(c=='}') return 'ឧ';
				if(c=='«') return 'ឩ';
				if(c==']') return 'ឪ';
				if(c=='®') return 'ឫ';
				if(c=='R') return 'ឬ';
				if(c=='|') return 'ឭ';
				if(c=='\\') return 'ឮ';
				if(c=='é') return 'ឯ';
				if(c=='ö') return 'ឰ';
				if(c=='ó') return 'ឱ';
				if(c=='=') return 'ឲ';
				if(c=='»') return 'ឳ';

				if(c=='j') return '្';
				if(c=='1') return '១';
				if(c=='2') return '២';
				if(c=='3') return '៣';
				if(c=='4') return '៤';
				if(c=='5') return '៥';
				if(c=='6') return '៦';
				if(c=='7') return '៧';
				if(c=='8') return '៨';
				if(c=='9') return '៩';
				if(c=='0') return '០';
				if(c=='!') return '!';
				if(c=='@') return 'ៗ';
				if(c=='#') return '"';
				if(c=='$') return '៛';
				if(c=='%') return '%';
				if(c=='^') return '៍';
				if(c=='&') return '័';
				if(c=='*') return '៏';
				if(c=='(') return '(';
				if(c==')') return ')';
				if(c=='²') return '@';
				if(c=='³') return '៑';
				if(c=='¤') return '$';
				if(c=='€') return '€';
				if(c=='¼') return '៙';
				if(c=='½') return '៚';
				if(c=='¾') return '*';
				if(c=='‘') return '{';
				if(c=='’') return '}';

				if(c=='\'') return '់';
				if(c=='"') return '៉';
				if(c=='´') return 'ៈ';
				if(c=='¶') return '៖';

				if(c=='ç') return '​,';
				if(c=='.') return '។';
				if(c=='>') return '៕';
				if(c=='/') return '៊';
				if(c=='?') return '?';
				if(c=='¿') return '/';
				if(c=='_') return '៌';
				if(c=='¥') return 'x';
				if(c=='+') return '=';
				if(c=='×') return '​៎';
				return c;
			}
			function myKeypress(obj, evt) {
				//start code
    			var val = obj.value;
    			evt = evt || window.event;
    			// Ensure we only handle printable keys, excluding enter and space
    			var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    			if (charCode && charCode > 32) {
        			var keyChar = String.fromCharCode(charCode);
        			// Transform typed character
        			var mappedChar = transformTypedChar(keyChar);
        			var start, end;
        			if (typeof obj.selectionStart == "number" && 
					typeof obj.selectionEnd == "number") {
            			// Non-IE browsers and IE 9
           				start = obj.selectionStart;
            			end = obj.selectionEnd;
            			obj.value = val.slice(0, start) + mappedChar + val.slice(end);
            			// Move the caret:default=+1;+mappedChar.length for unicode
            			obj.selectionStart = obj.selectionEnd = start + mappedChar.length;
        			} else if (document.selection && document.selection.createRange) {
            			// For IE up to version 8
            			var selectionRange = document.selection.createRange();
            			var textInputRange = obj.createTextRange();
            			var precedingRange = obj.createTextRange();
            			var bookmark = selectionRange.getBookmark();
            			textInputRange.moveToBookmark(bookmark);
            			precedingRange.setEndPoint("EndToStart", textInputRange);
            			start = precedingRange.text.length;
            			end = start + selectionRange.text.length;
            			obj.value = val.slice(0, start) + mappedChar + val.slice(end);
            			start++;
            			// Move the caret:default=-1;-mappedChar.length for unicode
            			textInputRange = obj.createTextRange();
            			textInputRange.collapse(true);
            			textInputRange.move("character", start - 
						(obj.value.slice(0, start).split("\r\n").length - mappedChar.length));
            			textInputRange.select();
        			}
					// ...
        			return false;
   				}
			};
