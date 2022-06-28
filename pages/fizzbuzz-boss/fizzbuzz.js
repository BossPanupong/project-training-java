function display(elementID, value) {
    document.getElementById(elementID).innerHTML = value
}

function ShowDisplat(ele_id){
    $("div").show()
}

function getValue(element_A, element_B, element_sum) {

    var a = prompt("รับค่า A");
    var b = prompt("รับค่า B");
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a) || isNaN(b)) {
        alert("กรุณากรอกเฉพาะตัวเลข");
        value = null;
        return value
    }
    else {
        
        value = sumtotal(a, b)

        display(element_A, a)
        display(element_B, b)
        display(element_sum, value[0])
        
        return value[1]
    }

}


function sumtotal(a, b) {

    var result = []
    let check_A = a % 2 //หาเลขคู่ เลขคี่

    if(check_A == 0){
        var temp_num = parseInt(a) + parseInt(b)
    } else {
        var temp_num = parseInt(a) * parseInt(b)
    }
    result.push(temp_num)
    let temp_mos_3 = temp_num % 3
    let temp_mos_5 = temp_num % 5

    if (temp_mos_3 == 0 && temp_mos_5 == 0) {
        result.push("FIZZBUZZ")
    } else if (temp_mos_3 == 0) {
        result.push("FIZZ")
    } else if (temp_mos_5 == 0) {
        result.push("BUZZ")
    } else {
        result.push("NOT")
    }

    return result
}