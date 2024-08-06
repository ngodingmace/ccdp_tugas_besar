//class buku
class Buku {
    constructor(judul, penulis, tahunTerbit) {
        this.judul = judul;
        this.penulis = penulis;
        this.tahunTerbit = tahunTerbit;
    }
}

//class pinjam
class Peminjam {
    constructor(nama, umur, alamat) {
        this.nama = nama;
        this.umur = umur;
        this.alamat = alamat;
    }
}

//class petugas
class Petugas {
    constructor(nama, id) {
        this.nama = nama;
        this.id = id;
    }

    prosesPeminjaman(buku, peminjam) {
        console.log(`${peminjam.nama} meminjam buku "${buku.judul}"`);
    }
}

//class perpustakan
class Perpustakaan {
    constructor(implementor) {
        this.implementor = implementor;
    }

    prosesPeminjaman(buku, peminjam) {
        this.implementor.prosesPeminjaman(buku, peminjam);
    }
}

//class PerpustakaanClinet
class PerpustakaanClient {
    constructor(perpustakaan) {
        this.perpustakaan = perpustakaan;
    }

    pinjamBuku(buku, peminjam) {
        this.perpustakaan.prosesPeminjaman(buku, peminjam);
    }
}

// Fungsi Untuk Menampilkan Hasilnya
const buku1 = new Buku("Belajar JavaScript", "John Marcus", 2020);
const peminjam1 = new Peminjam("Elisahbeth ", 25, "Jl. Merdeka No.1");
const petugas1 = new Petugas("Inka Teleda", 101);
const perpustakaan = new Perpustakaan(petugas1);
const client = new PerpustakaanClient(perpustakaan);
client.pinjamBuku(buku1, peminjam1);
