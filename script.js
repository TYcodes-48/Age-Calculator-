function calculateDate() {
    const day =
    parseInt(document.getElementById("day").value);
    const month =
    parseInt(document.getElementById("month").value);
    const year =
    parseInt(document.getElementById("year").value);
    

    if ( !day ||  !month || !year ){
        alert("Please fill all fields");
        return;
    }
    
    const inputDate = new Date(year, month-1, day);
    const today = new Date();

    if(inputDate > today) {
        alert("Date must be in the past");
        return;
    }

    let years = today.getFullYear()- inputDate.getFullYear();
    let months = today.getMonth()- inputDate.getMonth();
    let days = today.getDay()- inputDate.getDate();

    if(months < 0) {
        years--;
        months+=12;
    }

    if (days < 0) {
        months--;
        const prevMonth = new
        Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    document.getElementById("result-year").textContent = years;
    document.getElementById("result-month").textContent = months;
    document.getElementById("result-day").textContent = days;
}

