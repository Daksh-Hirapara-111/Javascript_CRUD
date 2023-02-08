let studentdata = JSON.parse(localStorage.getItem("studentdata"))  || []
let isEdit = -1;

const deleteRecord = (index) => {
    studentdata.splice(index,1);
    console.log("studentdata",studentdata);
    localStorage.setItem("deleteRecord",JSON.stringify(studentdata));
    renderTable()
}

const renderTable = () => {
    document.getElementById("demo").innerHTML = 
        studentdata.map((item, index) => {
            return (
                `<tr>
            <td>${item.fname}</td> 
            <td>${item.lname}</td>
            <td>${item.age}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.gender}</td>
            <td>${item.hobby}</td>
            <td><button type="button" onclick= "deleteRecord(${index})">delete</button></td>
            <td><button type="button" onclick= "editData(${index})"> Edit </button></td>        
            </tr>`
            )

        }).join(``)
}

const editData = (edindex) => {

    let editRecord = studentdata.find((item, index) => {
        return index === edindex;
    })
    document.getElementById("fname").value = editRecord.fname;
    document.getElementById("lname").value = editRecord.lname;
    document.getElementById("age").value = editRecord.age;
    document.getElementById("phone").value = editRecord.phone;
    document.getElementById("mail").value = editRecord.ekmail;
    document.getElementById("pass").value = editRecord.pass;
    document.getElementById("male").checked = editRecord.gender;
    document.getElementById("female").checked = editRecord.gender;
    document.getElementById("cricket").checked = editRecord.hobby;
    document.getElementById("chess").checked = editRecord.hobby;
    renderTable()
    isEdit = edindex;
}



function myfunction() {
    console.log("fname===========", document.getElementById("fname").value);
    let studentfname = document.getElementById("fname").value;

    console.log("lname===========", document.getElementById("lname").value);
    let studentlname = document.getElementById("lname").value;

    console.log("age=============", document.getElementById("age").value);
    let studentage = document.getElementById("age").value;

    console.log("number=========", document.getElementById("phone").value);
    let studentphone = document.getElementById("phone").value;

    console.log("email==========", document.getElementById("mail").value);
    let studentemail = document.getElementById("mail").value;

    console.log("password=======", document.getElementById("pass").value);
    let studentpassword = document.getElementById("pass").value;

    console.log("gender=========", document.getElementById("male").value);
    let studentgender = "";
    if (document.getElementById("male").checked) {
        studentgender += document.getElementById("male").value;
    }
    if (document.getElementById("female").checked) {
        studentgender += document.getElementById("female").value;
        console.log("gender========", document.getElementById("female").value);
    }

    console.log("hobby==========", document.getElementById("cricket").value);
    let studenthobby = "";
    if (document.getElementById("cricket").checked) {
        studenthobby += document.getElementById("cricket").value;
    }
    if (document.getElementById("chess").checked) {
        studenthobby += document.getElementById("chess").value;
        console.log("hobby===========", document.getElementById("chess").value);
    }


    const student = { fname: studentfname, lname: studentlname, age: studentage, phone: studentphone, email: studentemail, password: studentpassword, gender: studentgender, hobby: studenthobby };
    console.log(student);

    if (isEdit !== -1) {
        const updatedArray = studentdata.map((value, index) => {
            if (index === isEdit) {
                return student
            }
            return value
        }
        )
        studentdata = updatedArray
        isEdit = -1;

    }

    else {

        studentdata.push(student);

    }

    localStorage.setItem("studentdata", JSON.stringify(studentdata));
    renderTable();}