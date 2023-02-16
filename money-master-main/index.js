document.getElementById('Responsive btn').addEventListener('click',function(){
    const income =document.getElementById('income-field');
    const incomeString = income.value;
    const newIncome = parseInt(incomeString);

        const contInFood = document.getElementById('coste-in-food');
        const costFoodString =contInFood.value;
        const newFoodCost  = parseInt(costFoodString);

     const rentcosttootleString = document.getElementById('rent-cost-tootle').value;
     const newRentTotal = parseInt(rentcosttootleString);

     const ClothescosttootleString = document.getElementById('Clothes-total-cost').value;
     const newClothesTotal = parseInt(ClothescosttootleString );
     
     const TotalExpenses  = document.getElementById('Total Expenses');
     const Balance = document.getElementById('Balance')
     const totalcost = newClothesTotal + newRentTotal +  newFoodCost;
    const currentAmount = newIncome - totalcost ;
    TotalExpenses .innerText = totalcost;
    Balance.innerText = currentAmount



})