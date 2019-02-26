
res = db.getSiblingDB('admin').createUser({
    user: 'root',
    pwd: 'l4D7EiDYPj',
    roles: [{ role: 'root', db: 'admin' }],
    mechanisms : ['SCRAM-SHA-1'] ,
  })
  printjson(res)
  
  
  use admin;
  db.auth('root', 'l4D7EiDYPj')
  
  
  
res = db.getSiblingDB('testa').createUser({
    user: 'test1',
    pwd: 'testtest',
    roles: ['readWrite', 'userAdmin'],
    mechanisms : ['SCRAM-SHA-1'] 
  })
  printjson(res)
  