

function Calculation(name) {

    var input_name = document.getElementById(name).value
    var val1 = parseInt(document.getElementById("num1").value)
    var val2 = parseInt(document.getElementById("num2").value)
    var val3 = parseInt(document.getElementById("num3").value)
    var val4 = parseInt(document.getElementById("num4").value)
    
    if (!input_name || isNaN(val1) || isNaN(val2) || isNaN(val3) || isNaN(val4)) {
      alert("โปรดกรอกข้อมูลให้ครบทุกช่อง")
    } else {
      var final = val1 + val2 + val3 + val4
  
      var avg = final / 4
  
      if (avg >= "80")
        var grade = "A"
      else if (avg >= "70")
        var grade = "B"
      else if (avg >= "60")
        var grade = "C"
      else if (avg >= "50")
        var grade = "D"
      else
        var grade = "F"
  
      if (isNaN(final)) {
        document.getElementById("SumResult").textContent = ""
        document.getElementById("AVGResult").textContent = ""
        document.getElementById("GradeResult").textContent = ""
      } else {
        document.getElementById("SumResult").textContent = final + " / 400 "
        if(final <= 200){
          fontColor("SumResult", "orange")
        } else {
          fontColor("SumResult", "green")
        }
  
        document.getElementById("AVGResult").textContent = avg
        if(avg <= 50){
          fontColor("AVGResult", "yellow")
        } else {
          fontColor("AVGResult", "blue")
        }
  
        document.getElementById("Name").textContent = input_name
        fontColor("Name", "purple")
  
        document.getElementById("GradeResult").textContent = grade
        if(avg >= 80){
          fontColor("GradeResult", "red")
        } else if(avg >= 70){
          fontColor("GradeResult", "green")
        } else if(avg >= 60){
          fontColor("GradeResult", "yellow")
        } else if(avg >= 50){
          fontColor("GradeResult", "blue")
        } else {
          fontColor("GradeResult", "orange")
        }
  
        $('#result_Table').show()
      }
  
    }
  }
  
  function fontColor(id, color){
    document.getElementById(id).style.color = color
  }
  
  function checkENG(input_id) {
    var elem = document.getElementById(input_id).value
    if (elem) {
      if (!elem.match(/^([a-z])+$/i)) {
        alert("กรอกได้เฉพาะตัวอักษรภาษาอังกฤษเท่านั้น");
        document.getElementById(input_id).value = ""
      }
    }
  }
  
  function checkNUM(input_id) {
    var elem = document.getElementById(input_id).value
  
    if (elem) {
      if (!elem.match(/^([0-9])+$/i)) {
        alert("กรอกได้เฉพาะตัวเลขเท่านั้น");
        document.getElementById(input_id).value = ""
      }
  
      if (elem > 100) document.getElementById(input_id).value = 100
  
      var check_num = elem.substr(0, 1);   // เช็คตัวเลขแรกเป็น 0 ไหม
  
      if (elem.length == 2)
        if (check_num == 0) document.getElementById(input_id).value = elem.substr(1);
    }
  }
  
  