//login

 // Check if the form is submitted
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve username and password from the login form
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Perform authentication (this is a simple example, not secure)
  if ($username == "tata" && $password == "1234") {
      echo "<p>Login successful, welcome $username!</p>";
  } else {
      echo "<p>Login failed. Please check your username and password.</p>";
  }
}


//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
         menu.toggle();
    });  
}

$(document).ready(function () {
    var width = $(window).width();
if (width < 990) {
    klikMenu();
    }
});

//chek lebar 
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display","block");
        //display:block    
    } else {
        menu.css("display","none");
    }
    klikMenu();
});

//efk scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

//pesan tiket
function tambahPembeli() {
    var nama = document.getElementById('nama').value;
    var jumlahTiket = parseInt(document.getElementById('jumlah_tiket').value);

    // Validasi input
    if (nama.trim() === '' || isNaN(jumlahTiket) || jumlahTiket <= 0) {
      alert('Masukkan data pembeli yang valid.');
      return;
    }

    // Tambahkan pembeli ke daftar
    var pembeliBaru = "<p>" + nama + " - " + jumlahTiket + " tiket</p>";
    document.getElementById('daftar_pembeli').innerHTML += pembeliBaru;

    // Reset formulir
    document.getElementById('nama').value = '';
    document.getElementById('jumlah_tiket').value = '';
  }

  window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi kehadiran berhasil!");
      })
    });
  });


