function asalMi(sayi) {
    if (!Number.isInteger(sayi) || sayi < 2) {
        return false;
    }

    if (sayi === 2) {
        return true;
    }

    if (sayi % 2 === 0) {
        return false;
    }

    const limit = Math.sqrt(sayi);

    for (let i = 3; i <= limit; i += 2) {
        if (sayi % i === 0) {
            return false;
        }
    }

    return true;
}
