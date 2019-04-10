import socket
import sys
import json
import os
import hashlib

class Client:
    def __init__(self):
        # self.socket = socket.socket()
        self.host = 'localhost'
        self.port = 9000
    
    def handler(self):
        print('下载输入d,上传输入u')
        directive = input()
        if directive == 'u':
            self.uploadHandler()
        elif directive == 'd':
            self.downloadHandler()
        else:
            print('错误')

    def uploadHandler(self):
        try:
            print('请输入文件名：')
            filename = input()
            if not os.path.isfile(filename):
                print('请输入正确文件名')
                self.uploadHandler()
                return
            if self.veryfyMD5(filename):
                print('该文件已上传')
                return
            file = open(filename,'r')
            content = file.read()
            file.close()
            print('开始上传...')
            self.upload(filename,content)
        except:
            print('读取文件失败')
    
    def upload(self,filename,content):
        try:
            # s = self.socket
            s = socket.socket()
            data = {
                'type':'upload',
                'content': content,
                'filename':filename
            }
            s.connect((self.host, self.port))
            s.send(json.dumps(data).encode())
            result = s.recv(1024).decode()
            s.close()
            print('上传成功',result)
        except:
            print('请求失败',sys.exc_info())

    def downloadHandler(self):
        try:
            print('请输入下载文件名：')
            filename = input()
            if os.path.isfile(filename):
                if self.veryfyMD5(filename):
                    print('该文件已下载')
                    return
            result = self.download(filename)
            if result['state']=='success':
                file = open(filename,'w')
                file.write(result['data'])
                file.close()
                print('下载成功')
            else:
                print('下载失败',result['data'])           
        except:
            print('写入失败',sys.exc_info())

    def download(self,filename):
        try:
            # s = self.socket
            s = socket.socket()
            data = {
                'type':'download',
                'filename':filename
            }
            s.connect((self.host, self.port))
            s.send(json.dumps(data).encode())
            return json.loads(s.recv(1024).decode())
            s.close()
        except:
            print('请求失败',sys.exc_info())

    def veryfyMD5(self,filename):
        try:
            file = open(filename)
            content = file.read()
            file.close()
            md5 = hashlib.md5()
            md5.update(content.encode())
            data = {
                'type':'verify',
                'filename':filename,
                'md5':md5.hexdigest()
            }
            # s = self.socket
            s = socket.socket()
            s.connect((self.host, self.port))
            s.send(json.dumps(data).encode())
            result = json.loads(s.recv(1024).decode())
            if result['state']=='success':
                return True
            else:
                return False
            s.close()
        except:
            print('校验失败',sys.exc_info())
        

        

client = Client()
# client.uploadHandler()
# client.downloadHandler()
client.handler()