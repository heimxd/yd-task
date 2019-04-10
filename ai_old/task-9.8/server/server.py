import socket
import sys
import json
import os
import hashlib

class Server:
    def __init__(self):
        self.socket = socket.socket()
        self.socket.bind(('localhost', 9000))
        self.socket.listen(5)
        while True:
            clientScoket,addr = self.socket.accept()
            data = json.loads(clientScoket.recv(1024).decode())
            result = {}
            print('请求data:',data)
            if data['type']=='upload':
                result = self.clientUpload(data['filename'],data['content'])
            elif data['type']=='download':
                result = self.clientDwonload(data['filename'])
            elif data['type']=='verify':
                result = self.verifyMD5(data['filename'],data['md5'])
            clientScoket.send(json.dumps(result).encode())            
            clientScoket.close()
    
    def clientUpload(self,filename,content):
        try:
            file = open(filename,'w')
            file.write(content)
            file.close()
            return {
                'state':'success',
                'data':''
            }
        except:
            return {
                'state':'falil',
                'data':''
            }

    def clientDwonload(self,filename):
        try:
            if not os.path.isfile(filename):
                return {
                    'state':'fail',
                    'data':'文件不存在'
                }
            file = open(filename,'r')
            content = file.read()
            file.close()
            return {
                'state':'success',
                'data':content
            }
        except:
            return {
                'state':'fail',
                'data':''
            }

    def verifyMD5(self,filename,clientMD5):
        try:
            if os.path.isfile(filename):
                file = open(filename)
                content = file.read()
                file.close()
                md5 = hashlib.md5()
                md5.update(content.encode())
                if md5.hexdigest()==clientMD5:
                    return {
                        'state':'success'
                    }

            return {
                'state':'fail'
            }
        except:
            return {
                'state':'fail'
            }

server = Server()