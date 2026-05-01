const WebSocket = require('ws');

// Membuat server di port 8080
const wss = new WebSocket.Server({ port:5000 });

console.log("Server WebSocket UTS sedang berjalan di port 5000...");

wss.on('connection', (ws) => {
    console.log("Pengguna terhubung.");

    ws.on('message', (message) => {
        // Meneruskan pesan ke semua klien yang terhubung
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => console.log("Pengguna keluar."));
});