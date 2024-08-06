// Kode untuk Kelas Buku
class Buku {
    constructor(judul, pengarang, tahunTerbit, ISBN) {
        this.judul = judul;
        this.pengarang = pengarang;
        this.tahunTerbit = tahunTerbit;
        this.ISBN = ISBN;
    }

    toString() {
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - ISBN: ${this.ISBN}`;
    }
}

// Kode untuk Kelas Peminjam
class Peminjam {
    constructor(nama, alamat, nomorTelepon) {
        this.nama = nama;
        this.alamat = alamat;
        this.nomorTelepon = nomorTelepon;
    }

    toString() {
        return `Peminjam: ${this.nama}, Alamat: ${this.alamat}, Nomor Telepon: ${this.nomorTelepon}`;
    }
}

// Kode untuk Kelas Petugas
class Petugas {
    constructor(nama, idPetugas, shift) {
        this.nama = nama;
        this.idPetugas = idPetugas;
        this.shift = shift;
    }

    toString() {
        return `Petugas: ${this.nama}, ID: ${this.idPetugas}, Shift: ${this.shift}`;
    }
}

// Kode untuk Kelas Perpustakaan
class Perpustakaan {
    constructor() {
        this.daftarBuku = [];
        this.daftarPeminjam = [];
        this.daftarPetugas = [];
    }

    tambahBuku(buku) {
        this.daftarBuku.push(buku);
    }

    tambahPeminjam(peminjam) {
        this.daftarPeminjam.push(peminjam);
    }

    tambahPetugas(petugas) {
        this.daftarPetugas.push(petugas);
    }

    toString() {
        const bukuStr = this.daftarBuku.map(buku => buku.toString()).join('\n');
        const peminjamStr = this.daftarPeminjam.map(peminjam => peminjam.toString()).join('\n');
        const petugasStr = this.daftarPetugas.map(petugas => petugas.toString()).join('\n');
        return `Perpustakaan:\nBuku:\n${bukuStr}\n\nPeminjam:\n${peminjamStr}\n\nPetugas:\n${petugasStr}`;
    }
}

// Kode untuk Kelas PerpustakaanClient dengan Builder Design Pattern
class PerpustakaanBuilder {
    constructor() {
        this.perpustakaan = new Perpustakaan();
    }

    tambahBuku(judul, pengarang, tahunTerbit, ISBN) {
        const buku = new Buku(judul, pengarang, tahunTerbit, ISBN);
        this.perpustakaan.tambahBuku(buku);
        return this;
    }

    tambahPeminjam(nama, alamat, nomorTelepon) {
        const peminjam = new Peminjam(nama, alamat, nomorTelepon);
        this.perpustakaan.tambahPeminjam(peminjam);
        return this;
    }

    tambahPetugas(nama, idPetugas, shift) {
        const petugas = new Petugas(nama, idPetugas, shift);
        this.perpustakaan.tambahPetugas(petugas);
        return this;
    }

    build() {
        return this.perpustakaan;
    }
}

// Penggunaan
const perpustakaan = new PerpustakaanBuilder()
    .tambahBuku("Harry Potter", "J.K. Rowling", 1997, "1234567890")
    .tambahBuku("The Hobbit", "J.R.R. Tolkien", 1937, "0987654321")
    .tambahPeminjam("John Doe", "123 Main St", "555-5555")
    .tambahPetugas("Inka", "002", "Pagi")
    .build();

console.log(perpustakaan.toString());
