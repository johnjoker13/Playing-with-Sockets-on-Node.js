import net from 'net';

const server = net.createServer((connection) => {
    console.log('client connected');

    connection.on('end', () => {
        console.log('client desconnected');
    });

    connection.write('Server Message !\r\n');
    connection.pipe(connection);
});

server.getConnections((err, count) => {
    console.log(count);
});

server.listen(8080, () => {
    console.log('Server listening on door 8000');
});


