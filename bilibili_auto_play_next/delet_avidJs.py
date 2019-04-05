import os
my_file = 'E:/chrome下载/avid.js' # 文件路径
if os.path.exists(my_file):
    os.remove(my_file)
for i in range(1,11):
    my_file = 'E:/chrome下载/avid ('+ str(i) +').js'
    print(my_file)
    if os.path.exists(my_file):
        os.remove(my_file)