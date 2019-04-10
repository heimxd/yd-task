import os
import urllib
class FileManage:
    def getFileCount(self, dir):
        return len(os.listdir(dir))

    def deleteFile(self, dir, fileName):
        __fileName = dir+'/'+fileName
        os.remove(__fileName)
        
    def getModifyTime(self, dir, fileName):
        __fileName = dir+'/'+fileName
        return os.stat(__fileName).st_mtime

fileMagege = FileManage()
dir = '/Users/guoxuedong/Desktop/yideng/yd-ai-task1'
print(fileMagege.getFileCount())
# fileMagege.deleteFile(dir,'test.js')
# print(fileMagege.getFileCount(dir))
print(fileMagege.getModifyTime(dir,'test2.js'))
