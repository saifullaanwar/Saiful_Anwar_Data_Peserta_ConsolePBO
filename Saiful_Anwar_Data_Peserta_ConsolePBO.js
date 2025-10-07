class Peserta {
    constructor(nama, umur, nilai) {
        this.nama = nama;
        this.umur = umur;
        // Panggil setter 'nilai' di sini untuk melakukan validasi awal
        this.nilai = nilai; 
    }

    // --- Properti Internal (_nilai) dan Kontrol Akses ---

    // Getter: Mengambil nilai tersimpan secara internal
    get nilai() {
        return this._nilai;
    }

    // Setter: Menetapkan nilai dengan validasi (0-100)
    set nilai(x) {
        // Batasan: nilai harus antara 0 dan 100
        if (x < 0 || x > 100) {
            this._nilai = null; // Atur ke null jika tidak valid
        } else {
            this._nilai = x; // Simpan nilai ke properti privat-semu (_nilai)
        }
    }

    // --- Logika Grade ---

    // Getter untuk Grade (diakses seperti properti: peserta.Grade)
    get Grade() {
        const n = this._nilai; // Ambil nilai dari properti internal

        // Cek apakah nilai valid
        if (n === null) {
            return 'Nilai tidak valid';
        }

        // Logika perhitungan grade
        if (n >= 90) {
            return 'A';
        } else if (n >= 80) {
            return 'B';
        } else if (n >= 70) {
            return 'C';
        } else if (n >= 60) {
            return 'D';
        } else {
            return 'Tidak Lulus';
        }
    }
}

// ------------------------------------------------------------------

// Child Class 1: ProgramWeb (Mewarisi Peserta)
class ProgramWeb extends Peserta {
    constructor(nama, umur, nilai) {
        // Memanggil constructor Parent (Peserta)
        super(nama, umur, nilai);
        this.program = "Pengembangan Web";
    }

    // Metode spesifik untuk Child Web
    infoProgram() {
        console.log(`Program: ${this.program} (Fokus: Node.js & React)`);
    }
}

// ------------------------------------------------------------------

// Child Class 2: ProgramDesain (Mewarisi Peserta)
class ProgramDesain extends Peserta {
    constructor(nama, umur, nilai) {
        // Memanggil constructor Parent (Peserta)
        super(nama, umur, nilai);
        this.program = "Desain Grafis";
    }

    // Metode spesifik untuk Child Desain
    infoProgram() {
        console.log(`Program: ${this.program} (Fokus: Photoshop & Illustrator)`);
    }
}

// ------------------------------------------------------------------

// INSTANTIATE DAN OUTPUT

console.log("=== Peserta Program Web (Valid) ===");
// Membuat objek Program Web
const web1 = new ProgramWeb('Saiful', 29, 73);
console.log('Nama:', web1.nama);
console.log('Umur:', web1.umur);
web1.infoProgram(); // Metode spesifik child
console.log('Nilai:', web1.nilai); 
console.log('Grade:', web1.Grade); // Getter Grade diwarisi dari Parent

console.log("\n=== Peserta Program Desain (Tidak Valid) ===");
// Membuat objek Program Desain dengan nilai tidak valid
const desain1 = new ProgramDesain('Budi', 22, 30); 
console.log('Nama:', desain1.nama);
console.log('Umur:', desain1.umur);
desain1.infoProgram(); // Metode spesifik child
console.log('Nilai:', desain1.nilai); // Output: null (karena setter memvalidasi 105)
console.log('Grade:', desain1.Grade); // Output: Nilai tidak valid