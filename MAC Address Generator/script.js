function generateMAC() {
    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";

    for (let i = 0; i < 6; i++) {
        macAddress += hexDigits[Math.floor(Math.random() * 16)];
        macAddress += hexDigits[Math.floor(Math.random() * 16)];
        if (i < 5) macAddress += ":";
    }

    document.getElementById("macAddress").innerText = macAddress;
}
