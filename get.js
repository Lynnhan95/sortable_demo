
    submit.onclick = function(){
        if(updateItem){
            var list1 = localStorage.getItem('list1')
            window.confirm("Your result is\n" + list1 + ",ready to leave?")
            if(list1 == '13|1|2|3|4|5|6|7|8|9|10|11|12'){
                window.confirm('Wow you score 100 on the test!!!')
            }else{
                window.confirm('Sorry, there must be at least one error.')
            }
        }else{
            window.confirm("You did not make any change?")
        }

    }


