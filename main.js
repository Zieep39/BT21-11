function Danhsachthanhvien() {
    
    const thanhvien = [
        { fullname: "Nguyễn Đoàn Minh Chi", gender: "Nữ", birthplace: "Hà Nội" },
        { fullname: "Vũ Thị Bạch Diệp", gender: "Nữ", birthplace: "Hưng Yên" },
        { fullname: "Dư Thị Kim Thư", gender: "Nữ", birthplace: "Hà Nội" },
        { fullname: "Trịnh Duy Đạt Huy", gender: "Nam", birthplace: "Hà Nội" },
        { fullname: "Vũ Hải Vịnh", gender: "Nam", birthplace: "Hà Nội" },
        { fullname: "Phạm Quang Lâm", gender: "Nam", birthplace: "Hà Nội" },
        { fullname: "Tống Quang Trung", gender: "Nam", birthplace: "Hà Nội" }
    ];

   
    const Danhsach = document.getElementById("dsthanhvien");

  
    thanhvien.forEach(tv => {
       
        const li = document.createElement("li");

        
        li.textContent = `${tv.fullname} - Giới tính: ${tv.gender} - Nơi sinh: ${tv.birthplace}`;
            
        Danhsach.appendChild(li);
    });
}


Danhsachthanhvien();