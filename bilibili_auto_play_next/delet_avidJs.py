import os
for i in range(1,11):
    avid_files = 'E:/chrome下载/avid ('+ str(i) +').js'
    if not os.path.exists(avid_files):
        break

if i != 1:
    avid_file = 'E:/chrome下载/avid.js'
    if os.path.exists(avid_file):
        os.remove(avid_file)
    os.rename('E:/chrome下载/avid ('+ str(i-1) +').js','E:/chrome下载/avid.js')

for i in range(1,11):
    avid_files = 'E:/chrome下载/avid ('+ str(i) +').js'
    if os.path.exists(avid_files):
        os.remove(avid_files)