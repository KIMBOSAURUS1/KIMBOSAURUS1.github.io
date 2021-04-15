clickCount = {};
$('#video').hide();


function changeGift(elem){
    if(!clickCount[elem]){
        clickCount[elem] = 0;
    }

    switch(clickCount[elem]){
        case 0:
            changeImage(elem, elem + "2.png")
            // $(elem).text("New word");
            clickCount[elem]+= 1;
            break;
        
        case 1:
            changeImage(elem, elem + "3.png")
            clickCount[elem]+= 1;
            break;

        case 2 :
            changeImage(elem, elem + "4.png")
            clickCount[elem]+= 1;
            break;
        
        case 3:
            changeImage(elem, elem + "5.png")
            clickCount[elem]+= 1;
            break;

        case 4 :
            changeImage(elem, elem + "6.png")
            clickCount[elem]+= 1;
            break;
        
        case 5:
            changeImage(elem, elem + "7.png")
            clickCount[elem]+= 1;
            break;

        case 6 :
            changeImage(elem, elem + "8.png")
            clickCount[elem]+= 1;
            break;
        
        case 7:
            changeImage(elem, elem + "9.png")
            clickCount[elem]+= 1;
            break;

        case 8:
            changeImage(elem, elem + "10.png")
            clickCount[elem]+= 1;
            break;

        case 9:
            //THIS IS THE FINAL OPENING FOR THE BUTTON

            $('#' + elem).hide();
            
            if (elem = 'giftbox'){
                window.location.href = "https://www.youtube.com/watch?v=M5QGkOGZubQ"; 
            }
            
            if (elem = 'giftboxB'){
                window.location.href = "https://www.youtube.com/watch?v=E-xhxS581Uc";
            }
        
            break;
        
         default:
            break;
    }
}


function changeImage(elem, a){
    $('#'+elem).attr("src", a);
}

