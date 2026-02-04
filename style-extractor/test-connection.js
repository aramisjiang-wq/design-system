import http from 'http';

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/health',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);

  res.on('data', (d) => {
    console.log('响应内容:');
    console.log(d.toString());
  });
});

req.on('error', (error) => {
  console.error('请求失败:', error);
});

req.end();
