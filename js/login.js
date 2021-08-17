// // document.getElementById('deposit-button').addEventListener(
// //     'click',
// //     function() {
// //         // get the amount deposited---
// //         const depositInput = document.getElementById('Deposit-input');
// //         const newDepositAmountText = depositInput.value;
// //         const newDepositAmount = parseFloat(newDepositAmountText);
// //         // update deposit total--

// //         const depositTotal = document.getElementById('deposit-total');
// //         const previousDepositText = depositTotal.innerText;
// //         const previousDepositAmount = parseFloat(previousDepositText);

// //         const newDepositTotal = previousDepositAmount + newDepositAmount;
// //         depositTotal.innerText = newDepositTotal;

// //         // update balance-----
// //         const balanceTotal = document.getElementById('balance-total');
// //         const balanceTotalText = balanceTotal.innerText;
// //         const previousBalanceTotal = parseFloat(balanceTotalText);

// //         const newBalanceTotal = previousBalanceTotal + newDepositAmount;
// //         balanceTotal.innerText = newBalanceTotal;

// //         // clear the deposit input field
// //         depositInput.value = '';
// //     })

// // // handle with handler-----//

// // document.getElementById('withdraw-button ').addEventListener('click', function() {
// //     const withdrawInput = document.getElementById('Withdraw-input');
// //     const withdrawAmountText = withdrawInput.value;
// //     const newWithdrawAmount = parseFloat(withdrawAmountText);
// //     console.log(newWithdrawAmount);

// //     // set withdraw total---//
// //     const withdrawTotal = document.getElementById('withdraw-total');
// //     const previousWithdrawText = withdrawTotal.innerText;
// //     const previousWithdrawTotal = parseFloat(previousWithdrawText);
// //     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// //     withdrawTotal.innerText = newWithdrawTotal;

// //     // update balance--//
// //     const balanceTotal = document.getElementById('balance-total');
// //     const previousBalanceText = balanceTotal.innerText;
// //     const previousBalanceTotal = parseFloat(previousBalanceText);
// //     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
// //     balanceTotal.innerText = newBalanceTotal;

// //     // clear withdraw input--//
// //     withdrawInput.value = '';
// // })

// document.getElementById('deposit-button').addEventListener('click',
//     function() {
//         // ---deposite balance---//

//         const depositInput = document.getElementById('Deposit-input');
//         const newDepositAmountText = depositInput.value;
//         const newDepositAmount = parseFloat(newDepositAmountText);

//         const depositTotal = document.getElementById('deposit-total');
//         const previousDepositText = depositTotal.innerText;
//         const previousDepositAmount = parseFloat(previousDepositText);

//         const newDepositTotal = previousDepositAmount + newDepositAmount;
//         depositTotal.innerText = newDepositTotal;
//         // ----update balance----//

//         const balanceTotal = document.getElementById('balance-total');
//         const balanceTotalText = balanceTotal.innerText;
//         const previousBalanceTotal = parseFloat(balanceTotalText);

//         const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//         balanceTotal.innerText = newBalanceTotal;




//         depositInput.value = "";


//     })

const depositBtn = document.getElementById('deposit-button');
const withdrawBtn = document.getElementById('withdraw-button');

depositBtn.addEventListener('click', function() {
    changeBalance("deposit");
})

withdrawBtn.addEventListener("click", function() {
    changeBalance("withdraw");
})

function changeBalance(type) {
    const previousTotal = document.getElementById(`${type}-total`);
    const previousTotalText = previousTotal.innerText;
    const PreviousTotalNumber = parseFloat(previousTotalText);

    const newMoney = document.getElementById(`${type}-input`);
    const newMoneyText = newMoney.value;
    const newMoneyNumber = parseFloat(newMoneyText);

    previousTotal.innerText = PreviousTotalNumber + newMoneyNumber;
    newMoney.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);


    if (type == 'withdraw') {
        balanceTotal.innerText = balanceTotalNumber - newMoneyNumber;
    } else {
        balanceTotal.innerText = balanceTotalNumber + newMoneyNumber;
    }
}