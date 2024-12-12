const btnEl=document.getElementById('btn');
 const birthdayEl=document.getElementById('birthday');
 const resultEl=document.getElementById('result');

 function calculateAge(){
     const birthdayValue=birthdayEl.value;
      if(birthdayValue===''){
         alert('Please Enter your birthday');
      }else{
         const {age,month,day}=gatAge(birthdayValue);
          resultEl.innerHTML=`Your age is ${age} ${age>1 ? "years": 'year'} old ${month} months, ${day} days`;
      }
 }

 function gatAge(birthdayValue){
     const currentDate=new Date();
     const birthdayDate=new Date(birthdayValue);
     let age=currentDate.getFullYear()-birthdayDate.getFullYear();
     let month=currentDate.getMonth()-birthdayDate.getMonth();
      let day=currentDate.getDate()-birthdayDate.getDate();
        
      if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())){
         age--;
        

       
      }
      if(month<0){
         month+=12;
      }
      if(day<0){
         const lastDayofMonth=new Date(currentDate.getFullYear(),currentDate.getMonth()+1,0).getDate();
          day+=lastDayofMonth;

      }
    return{age,month,day}
 }

 btnEl.addEventListener('click',calculateAge);