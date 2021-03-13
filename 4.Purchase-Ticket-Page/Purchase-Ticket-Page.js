       
        var startslide = $('.show')


       window.onload = function(){
        autoslide()
       }

        function autoslide(){
            var currslide = $('.show')
            var nextslide = currslide.next()
            if(nextslide.length){    
                currslide.removeClass('show autoslide')
                nextslide.addClass('show autoslide') 
            }
            else if(nextslide.length == 0){
                currslide.removeClass('show autoslide')
                currslide = startslide
                currslide.addClass('show autoslide')
            }
            setTimeout(() => autoslide(), 2000)
        }

        
        function aboutticket(){
            alert("Platinum : Rp. 2.500.000/pax \nGold         : Rp. 2.000.000/pax \nSilver       : Rp. 1.500.000/pax \nBronze    : Rp. 1.000.000/pax \n")
            return false
        }

        function resetForm(){
            alert("Form Resetted")
        }
        function WordCount(str) { 
            return str.split(" ").length;
          }
        
        function submitForm(){
            var name = document.TicketForm.inpname.value
            var tickettype = document.TicketForm.Ttype.value
            var email = document.TicketForm.inpemail.value
            var phone = document.TicketForm.inpphone.value
            var address = document.TicketForm.inpaddress.value
            var adlen = WordCount(address)
            var useragree = document.TicketForm.ua.checked

            if(tickettype == ""){
                alert("Please Select Ticket Type")
                return false
            }
            if(!isNaN(name)){
                alert("Please input your Full Name with only alphabet")
                return false
            }
            if(name.length < 2){
                alert('Please input your fullname')
                return false
            }


            if(isNaN(phone)){
                alert("Input only number for phone number")
                return false
            }

            if(useragree == false){
                alert('User Agreement must be checked!')
                return false
            }

            if(phone.length < 12){
                alert("Phone number too short")
                return false
            }

            if(adlen < 4){
                alert("Your address is too short, address must be more than 3 words")
                return false
            }

            alert("Nama       : "+name+"\n"+
                  "Ticket Type: "+tickettype+"\n"+
                  "Email      : "+email+"\n"+
                  "Phone      : "+phone+"\n"+
                  "Address    : "+address+"\n")

            return true
        }