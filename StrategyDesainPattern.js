// Strategy Interface
class Strategy {
    execute() {
      throw new Error('Strategy method not implemented');
    }
  }
  
  // Concrete Strategies
  class BorrowingStrategy extends Strategy {
    execute(buku, peminjam) {
      console.log(`${peminjam.name} is borrowing the book: ${buku.title}`);
    }
  }
  
  class ReturningStrategy extends Strategy {
    execute(buku, peminjam) {
      console.log(`${peminjam.name} is returning the book: ${buku.title}`);
    }
  }
  
  // Buku class
  class Buku {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  // Peminjam class
  class Peminjam {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Petugas class
  class Petugas {
    constructor(name) {
      this.name = name;
    }
  
    manageBook(strategy, buku, peminjam) {
      strategy.execute(buku, peminjam);
    }
  }
  
  // Perpustakaan class
  class Perpustakaan {
    constructor() {
      this.bukuList = [];
      this.peminjamList = [];
    }
  
    addBook(buku) {
      this.bukuList.push(buku);
    }
  
    addPeminjam(peminjam) {
      this.peminjamList.push(peminjam);
    }
  
    getBook(title) {
      return this.bukuList.find(buku => buku.title === title);
    }
  
    getPeminjam(name) {
      return this.peminjamList.find(peminjam => peminjam.name === name);
    }
  }
  
  // PerpustakaanClient class
  class PerpustakaanClient {
    constructor(perpustakaan) {
      this.perpustakaan = perpustakaan;
    }
  
    performAction(strategyType, bookTitle, peminjamName) {
      const buku = this.perpustakaan.getBook(bookTitle);
      const peminjam = this.perpustakaan.getPeminjam(peminjamName);
      const petugas = new Petugas('Petugas');
      
      let strategy;
  
      if (strategyType === 'borrow') {
        strategy = new BorrowingStrategy();
      } else if (strategyType === 'return') {
        strategy = new ReturningStrategy();
      } else {
        throw new Error('Unknown strategy type');
      }
  
      petugas.manageBook(strategy, buku, peminjam);
    }
  }
  
  // Example usage
  const perpustakaan = new Perpustakaan();
  perpustakaan.addBook(new Buku('JavaScript: The Good Parts', 'Douglas Crockford'));
  perpustakaan.addPeminjam(new Peminjam('Inka'));
  
  const client = new PerpustakaanClient(perpustakaan);
  
  client.performAction('borrow', 'JavaScript: The Good Parts', 'Inka');
  client.performAction('return', 'JavaScript: The Good Parts', 'Inka');
  